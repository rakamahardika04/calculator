let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

const clear = 'C';
const backspace = '←';
const equal = '=';
const emptyText = '';
const errorText = 'error!';

// Fungsi Berjalan Otomatis
(function () {
    readAllButton();
})();
// // // // // // // // // 

function readAllButton() {
    buttons.map(button => {
        addEventListenerToEveryButton(button);
    });
}

function addEventListenerToEveryButton(button) {
    button.addEventListener('click', getButtonThatClicked)
}

function getButtonThatClicked(button) {
    let sign = getInnerTextFromButton(button);
    determineWhatButtonThatClicked(sign, button);
}

function getInnerTextFromButton(button) {
    return button.target.innerText;
}

function determineWhatButtonThatClicked(sign, button) {
    if (isClearButtonClicked(sign)) {
        clearDisplayText();
    } else if (isBackspaceButtonClicked(sign) && isTextNotEmpty()) {
        removeTheLastText();
    } else if (isEqualButtonClicked(sign)) {
        calculateTheNumber();
    } else {
        concatTheText(button);
    }
}

function concatTheText(button) {
    display.innerText += getInnerTextFromButton(button);
}

function isClearButtonClicked(clearSign) {
    return clearSign == clear;
}

function clearDisplayText() {
    display.innerText = emptyText;
}

function isBackspaceButtonClicked(backspaceSign) {
    return backspaceSign == backspace;
}

function isTextNotEmpty() {
    return display.innerText.length != 0;
}

function removeTheLastText() {
    display.innerText = display.innerText.slice(0, -1);
}

function isEqualButtonClicked(equalSign) {
    return equalSign == equal;
}

function calculateTheNumber() {
    try {
        thereIsNoErrorWhenCalculating();
    } catch {
        thereIsAnErrorWhenCalculating();
    }
}

function thereIsNoErrorWhenCalculating() {
    display.innerText = eval(display.innerText);
}

function thereIsAnErrorWhenCalculating() {
    display.innerText = errorText;
}