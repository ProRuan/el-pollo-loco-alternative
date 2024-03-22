let BACKGROUND_LEVEL1 = [];
let GRASS_LEVEL1 = [];


const GRASS_CENTER_LEVEL1_SECTION0 = [
    new GrassCenter(0, 0), new GrassCenter(1, 0), new GrassCenter(2, 0), new GrassCenter(3, 0),
    new GrassCenter(4, 0), new GrassCenter(5, 0), new GrassCenter(6, 0), new GrassCenter(7, 0),
    new GrassCenter(8, 0), new GrassCenter(9, 0), new GrassCenter(10, 0), new GrassCenter(11, 0),
    new GrassCenter(12, 0), new GrassCenter(13, 0), new GrassCenter(14, 0)
];


initLevel1();


function initLevel1() {
    pushSectionBackground(0);
    pushSectionArray(GRASS_CENTER_LEVEL1_SECTION0);
}


function pushSectionBackground(i) {
    let background = new Background(i)
    BACKGROUND_LEVEL1.push(background);
}


function pushSectionArray(array) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        GRASS_LEVEL1.push(element);
    }
}