let canvas;
let world;
let keyboard = new Keyboard();

// Constants
const IMG_DINO_ATTACK_PATH = 'img/enemies/dino/Attack/attack';
const IMG_DINO_ATTACK_AMOUNT = 5;
const IMG_DINO_DEATH_PATH = 'img/enemies/dino/Death/death';
const IMG_DINO_DEATH_AMOUNT = 6;
const IMG_DINO_HURT_PATH = 'img/enemies/dino/Hurt/hurt';
const IMG_DINO_HURT_AMOUNT = 4;
const IMG_DINO_IDLE_PATH = 'img/enemies/dino/Idle/idle';
const IMG_DINO_IDLE_AMOUNT = 5;
const IMG_DINO_WALK_PATH = 'img/enemies/dino/Walk/walk';
const IMG_DINO_WALK_AMOUNT = 4;

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