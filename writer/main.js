// const TypeWriter = function(txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// //Type method
// TypeWriter.prototype.type = function() {
//     // Get current word index
//     const current = this.wordIndex % this.words.length;

//     // Get full text of current word
//     const fullTxt = this.words[current];
    
//     // Check if deleting
//     if(this.isDeleting) {
//         // Remove char
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         // Add char
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }
    
//     // Insert txt into element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//     // Initial type Speed
//     let typeSpeed = 200;

//     if(this.isDeleting) {
//         typeSpeed /= 2;
//     }

//     // If word complete
//     if(!this.isDeleting && this.txt === fullTxt) {
//         // Make pause at the end
//         typeSpeed = this.wait;
//         // Set delete to true
//         this.isDeleting = true;
//     } else if(this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         this.wordIndex++;
//         typeSpeed = 500;
//     }

//     setTimeout(() => this.type(), typeSpeed);
// }

// ES6 class
class TypeWriter{
    
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Get current word index
        const current = this.wordIndex % this.words.length;

        // Get full text of current word
        const fullTxt = this.words[current];
        
        // Check if deleting
        if(this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        
        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial type Speed
        let typeSpeed = 200;

        if(this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word complete
        if(!this.isDeleting && this.txt === fullTxt) {
            // Make pause at the end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}