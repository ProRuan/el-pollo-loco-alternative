let canvas;
let keyboard;
let world;

let LEVELS = [];


const FLIP_BOOK_HERO = new FlipBook(HERO_DIRECTORY, HERO_SOURCES);
const FLIP_BOOK_OBJECTS = new FlipBook(OBJECTS_DIRECTORY, OBJECTS_SOURCES);
const FLIP_BOOK_DINO = new FlipBook(DINO_DIRECTORY, DINO_SOURCES);
const FLIP_BOOK_ENT = new FlipBook(ENT_DIRECTORY, ENT_SOURCES);
const FLIP_BOOK_SPIDER = new FlipBook(SPIDER_DIRECTORY, SPIDER_SOURCES);
const FLIP_BOOK_SHAMAN = new FlipBook(SHAMAN_DIRECTORY, SHAMAN_SOURCES);
const FLIP_BOOK_MAGIC = new FlipBook(MAGIC_DIRECTORY, MAGIC_SOURCES);


let settingsButton = new Image();
settingsButton.src = './img/start_screen/settings_button.png';
settingsButton.style.opacity = 0.1;


function init() {
    canvas = new Canvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);
}


document.addEventListener('mousedown', (event) => {
    console.log(event);
    if (!world.startedGame) {
        world.startedGame = true;
    }
    keyboard['mouseClick'] = {
        'x': event.clientX,
        'y': event.clientY
    }

    
    if (
        world.cupButton.x < keyboard.mouseClick.x - 8 &&
        keyboard.mouseClick.x - 8 < world.cupButton.x + world.cupButton.width &&
        world.cupButton.y < keyboard.mouseClick.y - 12 - world.cupButton.height &&
        keyboard.mouseClick.y - 12 - world.cupButton.height < world.cupButton.y + world.cupButton.height
    ) {
        console.log('click button');
        console.log(world.cupButton.x, keyboard.mouseClick.x - 8, world.cupButton.x + world.cupButton.width);
        console.log(world.cupButton.y, keyboard.mouseClick.y - 12 - world.cupButton.height, world.cupButton.y + world.cupButton.height);
    }


    if (
        world.settingsButton.x < keyboard.mouseClick.x - 8 &&
        keyboard.mouseClick.x - 8 < world.settingsButton.x + world.settingsButton.width &&
        world.settingsButton.y < keyboard.mouseClick.y - 12 - world.settingsButton.height &&
        keyboard.mouseClick.y - 12 - world.settingsButton.height < world.settingsButton.y + world.settingsButton.height
    ) {
        console.log('click button');
        console.log(world.settingsButton.x, keyboard.mouseClick.x - 8, world.settingsButton.x + world.settingsButton.width);
        console.log(world.settingsButton.y, keyboard.mouseClick.y - 12 - world.settingsButton.height, world.settingsButton.y + world.settingsButton.height);
    }
});


document.addEventListener('keydown', (event) => {
    // console.log(event);
    if (!world.startedGame) {
        world.startedGame = true;
    }
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