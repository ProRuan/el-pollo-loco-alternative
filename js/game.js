let canvas;
let keyboard;
let world;

let LEVELS = [];
let intervalIds = [];
let counter = new Counter();


const FLIP_BOOK_HERO = new FlipBook(KNIGHT_DIRECTORY, KNIGHT_FILENAMES);
const FLIP_BOOK_DINO = new FlipBook(DINO_DIRECTORY, DINO_FILENAMES);
const FLIP_BOOK_ENT = new FlipBook(ENT_DIRECTORY, ENT_FILENAMES);
const FLIP_BOOK_SPIDER = new FlipBook(SPIDER_DIRECTORY, SPIDER_FILENAMES);
const FLIP_BOOK_OBJECTS = new FlipBook(OBJECTS_DIRECTORY, OBJECTS_FILENAMES);
const FLIP_BOOK_SHAMAN = new FlipBook(SHAMAN_DIRECTORY, SHAMAN_FILENAMES);
const FLIP_BOOK_MAGIC = new FlipBook(MAGIC_DIRECTORY, MAGIC_FILENAMES);


function init() {
    canvas = new Canvas(canvasWidth, canvasHeight);
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);
}


document.addEventListener('mousemove', (event) => {
    // console.log('mouseover');
    keyboard['mouseover'] = {
        'x': event.clientX,
        'y': event.clientY,
        'xOffset': event.offsetX,
        'yOffset': event.offsetY
    }
    // console.log(keyboard.mouseover);
});


document.addEventListener('mousedown', (event) => {
    // console.log(event);
    if (!world.startedGame) {
        world.startedGame = true;
    }
    keyboard['mouseClick'] = {
        'x': event.clientX,
        'y': event.clientY,
        'xOffset': event.offsetX,
        'yOffset': event.offsetY
    }


    if (
        world.settingsButton.x < keyboard.mouseClick.xOffset &&
        keyboard.mouseClick.xOffset < world.settingsButton.x + world.settingsButton.width &&
        world.settingsButton.y < keyboard.mouseClick.yOffset &&
        keyboard.mouseClick.yOffset < world.settingsButton.y + world.settingsButton.height
    ) {
        console.log('click button');
        console.log(world.settingsButton.x, keyboard.mouseClick.xOffset, world.settingsButton.x + world.settingsButton.width);
        console.log(world.settingsButton.y, keyboard.mouseClick.yOffset, world.settingsButton.y + world.settingsButton.height);
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


function getCurrentTime() {
    return new Date().getTime();
}


function updateWorld(provider, recipient) {
    for (const [key] of Object.entries(provider)) {
        recipient[key] = provider[key];
    }
}


function isMouseClick(m, o) {
    let mouse = getMouseXY(m);
    let object = getObjectXY(o);
    if (isIncluded2D(mouse, object) == true) {
        console.log('button mouse click');
    }
    return isIncluded2D(mouse, object);
}


function getMouseXY(m) {
    return {
        'x': m.xOffset,
        'y': m.yOffset
    }
}


function getObjectXY(o) {
    return {
        'xLeft': o.xLeft,
        'xRight': o.xRight,
        'yTop': o.yTop,
        'yBottom': o.yBottom
    };
}


function isIncluded2D(m, o) {
    return isIncluded(o.xLeft, m.x, o.xRight) && isIncluded(o.yTop, m.y, o.yBottom);
}


function isIncluded(a, b, c) {
    return isLarger(a, b) && isLarger(b, c);
}


function isLarger(a, b, tolerant) {
    return (!tolerant) ? a < b : a <= b;
}