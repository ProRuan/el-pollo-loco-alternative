let canvas;
let world;
let keyboard = new Keyboard();

// Constants
const IMG_STONE_PATH = 'img/objects_animated/Stone/stone';
const IMG_STONE_AMOUNT = 8;


function init() {
    canvas = getElement('canvas');
    world = new World(canvas, keyboard);
}


document.addEventListener('keydown', (event) => {
    let keyCode = event.code.replace(event.code[0], event.code[0].toLowerCase());
    let isDefinedKey = keyboard[keyCode] !== undefined;
    if (isDefinedKey && !keyboard[keyCode].keydown) {
        keyboard.keydown = true;
        keyboard.updateKeydownTimeStamp();
        keyboard[keyCode].keydown = true;
        // to edit
        if (keyCode == keyboard[keyCode].code) {
            verifyDoubleClick(keyCode, true);
        }

        setKeydown(keyCode, true);    // upper() ?
        // console.log(event.code);
    }
});


function verifyDoubleClick(key, logical) {
    if (logical) {
        let timeStamp = new Date().getTime();
        if (timeStamp - keyboard[key].timeStamp < 500) {
            keyboard[key].doubleClick = true;
        } else {
            keyboard[key].doubleClick = false;
        }
        keyboard[key].timeStamp = timeStamp;
    }
}


function setKeydown(keyCode, logical) {
    if (keyCode == keyboard[keyCode].code) {
        keyboard[keyCode].keydown = logical;
    }
}


document.addEventListener('keyup', (event) => {
    let keyCode = event.code.replace(event.code[0], event.code[0].toLowerCase());
    let isDefinedKey = keyboard[keyCode] !== undefined;
    if (isDefinedKey) {
        keyboard.keydown = false;
        keyboard[keyCode].keydown = false;
        keyboard[keyCode].doubleClick = false;


        setKeydown(keyCode, false);
    }
});




// Please move to another script
function getElement(id) {
    return document.getElementById(id);
}