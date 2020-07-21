const button = document.getElementById('button');

button.addEventListener('click', getFile);

// AJAX XHR method
function getFile(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'sample.txt', true);

// Two methods to make request, second run in ready state only
    // xhr.onload = function() {
    //     if(this.status === 200) {
    //         console.log(this.response);
    //     }
    // }
    
    xhr.onreadystatechange = function() {
        if(this.readyState = 4 && this.status === 200) {
            document.getElementById('text').innerHTML = this.responseText;
        }
    }
    xhr.send();
}