// Import and use libraries
require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// Make app using JSON from body
app.use(express.json())

let refreshTokens = []

app.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ name: user.name })
        res.json({ accessToken: accessToken })
    })
})

// Logging route
app.post('/login', (req, res) => {
    // Authenticate user
    const username = req.body.username;
    const user = {name: username};

    // Serialize into JWT from payload - user obj + secret from .env
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    refreshTokens.push(refreshToken);
    // Return access token
    res.json({accessToken: accessToken, refreshToken: refreshToken});
})

// Generating short-time access token
function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '50s'});
}

//Listen on 4000 port
app.listen(4000);
