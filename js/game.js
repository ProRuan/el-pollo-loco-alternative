let canvas;
let keyboard;
let world;


function init() {
    canvas = getElement('canvas');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);
}


document.addEventListener('keydown', (event) => {
    let keyCode = setInitialToLowerCase(event.code);
    if (isDefinedKey(keyCode, true)) {
        setKey(keyCode, 'keydown', true);
        verifyDoubleClick(keyCode);
    }
});


function setInitialToLowerCase(keyCode) {
    let initial = keyCode.charAt(0);
    return keyCode.replace(initial, initial.toLowerCase());
}


function isDefinedKey(keyCode, onkeydown) {
    let defined = getKey(keyCode) !== undefined;
    let keydown = getKey(keyCode, 'keydown');
    return (onkeydown) ? defined && !keydown : defined;
}


function getKey(keyCode, key) {
    return (!key) ? keyboard[keyCode] : keyboard[keyCode][key];
}


function setKey(keyCode, key, value) {
    keyboard[keyCode][key] = value;
}


function verifyDoubleClick(keyCode) {
    let timeStamp = new Date().getTime();
    setKeyDoubleClick(keyCode);
    setKey(keyCode, 'timeStamp', timeStamp);
}


function setKeyDoubleClick(keyCode) {
    if (isDoubleclick(keyCode)) {
        setKey(keyCode, 'doubleClick', true);
    } else {
        setKey(keyCode, 'doubleClick', false);
    }
}


function isDoubleclick(keyCode) {
    let timeStamp = new Date().getTime();
    return timeStamp - keyboard[keyCode].timeStamp < 500;
}


document.addEventListener('keyup', (event) => {
    let keyCode = setInitialToLowerCase(event.code);
    if (isDefinedKey(keyCode)) {
        setKey(keyCode, 'keydown', false);
        setKey(keyCode, 'doubleClick', false);
    }
});




// Please move to another script
function getElement(id) {
    return document.getElementById(id);
}


// showPathComponents();
// function showPathComponents() {
//     let testPath = 'img/characters/knight/Walk/walk4.png';
//     let result = testPath.match(/([a-z]+\/[a-z]+\/[a-z]+\/)([A-Z][a-z]+\/)([a-z]+)(\d+)(\.[a-z]+)/);
//     console.log(result, result[0], result[1], result[2], result[3], result[4], result[5]);
// }