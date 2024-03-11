let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = getElement('canvas');
    world = new World(canvas, keyboard);
}


// Avoid using keyCode!!!
document.addEventListener('keydown', (event) => {
    let keyCode = event.keyCode;
    setKeyValue(keyCode, 'SPACE');
    setArrowKeyValue(keyCode);
    setKeyValue(keyCode, 'D');
});


function setArrowKeyValue(keyCode) {
    setKeyValue(keyCode, 'LEFT');
    setKeyValue(keyCode, 'UP');
    setKeyValue(keyCode, 'RIGHT');
    setKeyValue(keyCode, 'DOWN');
}


function setKeyValue(keyCode, keyName) {
    if (keyCode == keyboard[keyName].code) {
        keyboard[keyName].value = true;
    }
}




// Please move to another script
function getElement(id) {
    return document.getElementById(id);
}