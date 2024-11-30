// Function to toggle and expand boxes
function toggleExpansion(boxId) {
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => {
        if (box.id !== boxId) {
            box.classList.remove('expanded');
            box.style.height = '8vh';
        }
    });


    const box = document.getElementById(boxId);
    box.classList.toggle('expanded');

    if (box.classList.contains('expanded')) {
        box.style.height = '20vh';
    } else {
        box.style.height = '8vh';
    }
}

// function to toggle radio button
function toggleRadioButton(radioId) {
    const radioButton = document.getElementById(radioId);
    if (radioButton) {
        radioButton.checked = !radioButton.checked;
    }
}

// Event Listeners for the boxes
document.getElementById('box1').addEventListener('click', function (event) {
    if (event.target.tagName !== 'SELECT') {
        toggleExpansion('box1');
        toggleRadioButton('radio1');
    }

});

document.getElementById('box2').addEventListener('click', function (event) {
    if (event.target.tagName !== 'SELECT') {
        toggleExpansion('box2');
        toggleRadioButton('radio2');
    }
});

document.getElementById('box3').addEventListener('click', function (event) {
    if (event.target.tagName !== 'SELECT') {
        toggleExpansion('box3');
        toggleRadioButton('radio3');
    }
});

// Expand the first box by default
window.addEventListener('load', function () {
    toggleExpansion('box1');
    toggleRadioButton('radio1');
});
