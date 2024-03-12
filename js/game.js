let canvas;
let world;
let keyboard = new Keyboard();

// Constants
IMG_ATTACK_PATH = 'img/characters/knight/Attack/attack';
IMG_ATTACK_AMOUNT = 4;
IMG_CLIMB_PATH = 'img/characters/knight/Climb/climb';
IMG_CLIMB_AMOUNT = 4;
IMG_DEATH_PATH = 'img/characters/knight/Death/death';
IMG_DEATH_AMOUNT = 10;
IMG_WALK_PATH = 'img/characters/knight/Walk/walk';
IMG_WALK_AMOUNT = 6;


function init() {
    canvas = getElement('canvas');
    world = new World(canvas, keyboard);
}


document.addEventListener('keydown', (event) => {
    let keyCode = event.code;
    setKeyValue(keyCode, 'SPACE', true);    // upper() ?
    setArrowKeyValue(keyCode, true);
    setKeyValue(keyCode, 'D', true);    // upper() ?

    // console.log(event.code);
});


function setArrowKeyValue(keyCode, logical) {
    setKeyValue(keyCode, 'LEFT', logical);
    setKeyValue(keyCode, 'UP', logical);
    setKeyValue(keyCode, 'RIGHT', logical);
    setKeyValue(keyCode, 'DOWN', logical);
}


function setKeyValue(keyCode, key, logical) {
    if (keyCode == keyboard[key].code) {
        keyboard[key].value = logical;
    }
}


document.addEventListener('keyup', (event) => {
    let keyCode = event.code;
    setKeyValue(keyCode, 'SPACE', false);
    setArrowKeyValue(keyCode, false);
    setKeyValue(keyCode, 'D', false);
});




// Please move to another script
function getElement(id) {
    return document.getElementById(id);
}