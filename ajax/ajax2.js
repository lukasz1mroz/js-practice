document.getElementById('button1').addEventListener('click', loadUser)
document.getElementById('button2').addEventListener('click', loadUsers)

function loadUser() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);
    xhr.onload = function() {
        if(this.status === 200) {
            var user = JSON.parse(this.responseText);
            
            var output  = `<ul>
            <li>${user.id}</li>
            <li>${user.name}</li>
            <li>${user.email}</li>
            </ul>`;

            document.getElementById('user').innerHTML = output;
        }
    }
    xhr.send();
}

function loadUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function() {
        if(this.status === 200) {
            var users = JSON.parse(this.responseText);
            var output = "";

            for(var i in users) {
                output  += `<ul>
                <li>${users[i].id}</li>
                <li>${users[i].name}</li>
                <li>${users[i].email}</li>
                </ul>`
            }
            document.getElementById('users').innerHTML = output;
        }
    }
    xhr.send();
}