// Import and use libraries
require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// Make app using JSON from body
app.use(express.json())

// Posts variable
const posts = [
    {
        username: 'Lukasz',
        title: 'Post 1'
    },
    {
        username: 'Marta',
        title: 'Post 2'
    }
]

// Route returning posts
app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})

// Middleware to authenticate token
function authenticateToken(req, res, next) {
    // Get and check token
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);

    // Verify token 
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>  {
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}

//Listen on 3000 port
app.listen(3000);
