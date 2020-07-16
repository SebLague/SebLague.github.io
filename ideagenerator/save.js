/* This script is for saving generated ideas to the browser */

if (!Array.prototype.remove) {
    Array.prototype.remove = function (el) {
        console.log('removing', el)
        for (var i = 0; i < this.length; i++) {
            if (this[i] === el) {
                this.splice(i, 1);
            }
        }
    }
}

CUR_SAVE = 0;

function toggleSaved() {
    let saveButton = document.querySelector('.icon-save'); // Get the save button
    saveButton.classList.toggle('saved'); // Toggle the 'saved' class
    if (saveButton.classList.contains('saved')) { // Check whether button was toggled on or toggled off
        let saved = window.localStorage.getItem('savedItems'); // Get the already saved items
        let savedElements;
        if (saved !== null) {
            savedElements = JSON.parse(saved); // Turn them into an array
        } else {
            savedElements = []; // If no items have been saved yet, create a new array
        }
        savedElements.push(document.querySelector('#content').innerHTML); // Add current text to array
        saved = JSON.stringify(savedElements); // Turn array back to string
        window.localStorage.setItem('savedItems', saved); // Save items to local storage
    } else {
        let saved = window.localStorage.getItem('savedItems'); // Get the already saved items
        let savedElements;
        if (saved !== null) {
            savedElements = JSON.parse(saved); // Turn them into an array
        } else { // This, of course, should only be called as a fallback if an error occured during storage.
            savedElements = []; // If no items have been saved yet, create a new array
        }
        savedElements.remove(document.querySelector('#content').innerHTML) // Remove current text from array
        saved = JSON.stringify(savedElements); // Turn array back to string
        window.localStorage.setItem('savedItems', saved); // Save items to local storage
    }
}

document.querySelector('.prompt').addEventListener('DOMSubtreeModified', (e) => { // When the content changes
    let saved = window.localStorage.getItem('savedItems'); // Get the already saved items
    let savedElements;
    if (saved !== null) {
        savedElements = JSON.parse(saved); // Turn them into an array
    } else {
        savedElements = []; // If no items have been saved yet, create a new array
    }
    if (savedElements.includes(document.querySelector('#content').innerHTML)) { // Current text is in array
        document.querySelector('.icon-save').classList.add('saved'); // Set the icon to be filled
    }
});

function nextSaved() {
    let saved = window.localStorage.getItem('savedItems'); // Get the already saved items
    let savedElements;
    if (saved !== null) {
        savedElements = JSON.parse(saved); // Turn them into an array
    } else {
        savedElements = []; // If no items have been saved yet, create a new array
    }

    CUR_SAVE++; // Go forward one
    if (CUR_SAVE >= savedElements.length) {
        CUR_SAVE = 0; // Go to start of array
    }
    document.querySelector('#content').innerHTML = savedElements[CUR_SAVE] || '...';
}

function prevSaved() {
    let saved = window.localStorage.getItem('savedItems'); // Get the already saved items
    let savedElements;
    if (saved !== null) {
        savedElements = JSON.parse(saved); // Turn them into an array
    } else {
        savedElements = []; // If no items have been saved yet, create a new array
    }

    CUR_SAVE--; // Go back one
    if (CUR_SAVE === -1) {
        CUR_SAVE = savedElements.length; // Go to end of array
    }
    document.querySelector('#content').innerHTML = savedElements[CUR_SAVE] || '...';
}