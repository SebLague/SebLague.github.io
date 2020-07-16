if (!Array.prototype.removeIdx) {
    Array.prototype.removeIdx = function (el) {
        console.log('removing', el)
        for (var i = 0; i < this.length; i++) {
            if (i === el) {
                this.splice(i, 1);
            }
        }
    }
}

function createList() {
    let saved = window.localStorage.getItem('savedItems'); // Get the already saved items
    let savedElements;
    if (saved !== null) {
        savedElements = JSON.parse(saved); // Turn them into an array
    } else {
        return;
    }
    // Generate list items
    var items = savedElements.reduce((acc, val, idx) => (idx === 1 ? listItem(acc, 0) : acc) + listItem(val, idx));
    // Display list items
    document.querySelector('.list').innerHTML = items;
}

function remove(idx) {
    let saved = window.localStorage.getItem('savedItems'); // Get the already saved items
    let savedElements;
    if (saved !== null) {
        savedElements = JSON.parse(saved); // Turn them into an array
    } else { // This, of course, should only be called as a fallback if an error occured during storage.
        savedElements = []; // If no items have been saved yet, create a new array
    }
    savedElements.removeIdx(idx); // Remove current text from array
    saved = JSON.stringify(savedElements); // Turn array back to string
    window.localStorage.setItem('savedItems', saved); // Save items to local storage
    createList();
}

const listItem = (text, idx) => `<li>${text} <a class="ib trash" onclick="remove(${idx})"><img src="../Resources/icon-trash.svg" alt="delete" title="delete"/></a></li>`