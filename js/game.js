let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = getElement('canvas');
    world = new World(canvas, keyboard);
}


// add event listener



// Please move to another script
function getElement(id) {
    return document.getElementById(id);
}