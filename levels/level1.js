const GRASS = [];

let section0 = new Section(0);
let section1 = new Section(1);
let section2 = new Section(2);
let section3 = new Section(3);
let section4 = new Section(4);


initLevel();


function initLevel() {
   loadSection0();
   loadSection1();
   loadSection2();
   loadSection3();
   loadSection4();
}


function loadSection0() {
    section0.pushTile('grass-center', 0, 15);
}


function loadSection1() {
    section1.pushGrassBlockEnd(0, 7);
    section1.pushGrassBlockStart(8, 7);
}


function loadSection2() {
    section2.pushGrassBlockEnd(0, 4);
    section2.pushGrassBlockCenter(5, 5);
    section2.pushGrassBlockStart(11, 4);
}


function loadSection3() {
    section3.pushGrassBlockEnd(0, 8);
    section3.pushGrassBlockStart(10, 5);
}


function loadSection4() {
    section4.pushGrassBlockEnd(0, 5);
    section4.pushGrassBlockStart(10, 5);
}


// let section4 = new Section(0);