let canvas;
let world;
let keyboard = new Keyboard();

// Constants
const IMG_ATTACK_PATH = 'img/characters/knight/Attack/attack';
const IMG_ATTACK_AMOUNT = 4;
const IMG_CLIMB_PATH = 'img/characters/knight/Climb/climb';
const IMG_CLIMB_AMOUNT = 4;
const IMG_DEATH_PATH = 'img/characters/knight/Death/death';
const IMG_DEATH_AMOUNT = 10;
const IMG_EXTRA_ATTACK_PATH = 'img/characters/knight/Extra_Attack/attack_extra';
const IMG_EXTRA_ATTACK_AMOUNT = 8;
const IMG_HURT_PATH = 'img/characters/knight/Hurt/hurt';
const IMG_HURT_AMOUNT = 4;
const IMG_IDLE_PATH = 'img/characters/knight/Idle/idle';
const IMG_IDLE_AMOUNT = 12;
const IMG_JUMP_PATH = 'img/characters/knight/Jump/jump';
const IMG_JUMP_AMOUNT = 7;
const IMG_HIGH_JUMP_PATH = 'img/characters/knight/Jump_high/high_jump';
const IMG_HIGH_JUMP_AMOUNT = 12;
const IMG_PUSH_PATH = 'img/characters/knight/Push/push';
const IMG_PUSH_AMOUNT = 4;
const IMG_RUN_PATH = 'img/characters/knight/Run/run';
const IMG_RUN_AMOUNT = 8;
const IMG_RUN_ATTACK_PATH = 'img/characters/knight/Run_attack/run_attack';
const IMG_RUN_ATTACK_AMOUNT = 8;
const IMG_WALK_PATH = 'img/characters/knight/Walk/walk';
const IMG_WALK_AMOUNT = 6;
const IMG_WALK_ATTACK_PATH = 'img/characters/knight/Walk_attack/walk_attack';
const IMG_WALK_ATTACK_AMOUNT = 6;


function init() {
    canvas = getElement('canvas');
    world = new World(canvas, keyboard);
}


document.addEventListener('keydown', (event) => {
    if (!keyboard.KEYDOWN) {
        keyboard.KEYDOWN = true;
        let keyCode = event.code;

        // to edit
        if (keyCode == 'ArrowRight' || keyCode == 'ArrowLeft') {
            verifyDoubleClick('RIGHT', true);
        }
        
        setKeyValue(keyCode, 'SPACE', true);    // upper() ?
        setArrowKeyValue(keyCode, true);
        setKeyValue(keyCode, 'A', true);
        setKeyValue(keyCode, 'D', true);    // upper() ?
        // console.log(event.code);
    }
});


function verifyDoubleClick(key, logical) {
    if (logical) {
        let timeStamp = new Date().getTime();
        if (timeStamp - keyboard[key].timeStamp < 500) {
            keyboard.DOUBLE_CLICKED = true;
        } else {
            keyboard.DOUBLE_CLICKED = false;
        }
        keyboard[key].timeStamp = timeStamp;
    }
}


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
    keyboard.KEYDOWN = false;
    keyboard.DOUBLE_CLICKED = false;
    let keyCode = event.code;
    setKeyValue(keyCode, 'SPACE', false);
    setArrowKeyValue(keyCode, false);
    setKeyValue(keyCode, 'A', false);
    setKeyValue(keyCode, 'D', false);
});




// Please move to another script
function getElement(id) {
    return document.getElementById(id);
}