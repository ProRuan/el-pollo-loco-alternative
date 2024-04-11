// Testing
const TREES1_1 = [
    new Tree(5.5, 2)
];

const LEAVES1_1 = [
    new Leaf(6.625, 4, 1), new Leaf(7.25, 4.5, 1), new Leaf(7.75, 4, 1)
];

const GRASS_FLYING1_1 = [
    new GrassFlyingStart(6, 2), new GrassFlyingCenter(7, 2), new GrassFlyingEnd(8, 2)
];

const GRASS1_1 = [
    new GrassCenter(0, 0), new GrassCenter(1, 0), new GrassCenter(2, 0), new GrassCenter(3, 0),
    new GrassCenter(4, 0), new GrassCenter(5, 0), new GrassCenter(6, 0), new GrassCenter(7, 0),
    new GrassCenter(8, 0), new GrassCenter(9, 0), new GrassCenter(10, 0), new GrassCenter(11, 0),
    new GrassCenter(12, 0), new GrassCenter(13, 0), new GrassCenter(14, 0)
];

const COINS1_1 = [
    new Coin(3.25, 1.125), new Coin(4.25, 1.125), new Coin(6.25, 3.125)
];


const ENEMIES1_1 = [
    new Dino(11.8125, 0.25)
];




// Section1
// const GRASS1_1 = [
//     new GrassCenter(0, 0), new GrassCenter(1, 0), new GrassCenter(2, 0), new GrassCenter(3, 0),
//     new GrassCenter(4, 0), new GrassCenter(5, 0), new GrassCenter(6, 0), new GrassCenter(7, 0),
//     new GrassCenter(8, 0), new GrassCenter(9, 0), new GrassCenter(10, 0), new GrassCenter(11, 0),
//     new GrassCenter(12, 0), new GrassCenter(13, 0), new GrassCenter(14, 0)
// ];

// const COINS1_1 = [
//     new Coin(9.25, 1.125), new Coin(10.25, 1.125), new Coin(11.25, 1.125)
// ];


// Section2
const GRASS1_2 = [
    new GrassCenter(0, 0), new GrassCenter(1, 0), new GrassCenter(2, 0), new GrassCenter(3, 0),
    new GrassCenter(4, 0), new GrassCenter(5, 0), new GrassCenter(6, 0), new GrassCenter(7, 0),
    new GrassCenter(8, 0), new GrassCenter(9, 0), new GrassCenter(10, 0), new GrassCenter(11, 0),
    new GrassCenter(12, 0), new GrassCenter(13, 0), new GrassCenter(14, 0)
];

const COINS1_2 = [
    new Coin(3.25, 1.25), new Coin(4.25, 1.25), new Coin(5.25, 1.25)
];


// Section3
const GRASS1_3 = [
    new GrassCenter(0, 0), new GrassCenter(1, 0), new GrassCenter(2, 0), new GrassCenter(3, 0),
    new GrassCenter(4, 0), new GrassCenter(5, 0), new GrassCenter(6, 0), new GrassCenter(7, 0),
    new GrassCenter(8, 0), new GrassEnd(9, 0), new GrassStart(11, 0), new GrassCenter(12, 0),
    new GrassCenter(13, 0), new GrassCenter(14, 0)
];


// Section4
const GRASS_FLYING1_4 = [
    new GrassFlyingStart(6, 1), new GrassFlyingCenter(7, 1), new GrassFlyingEnd(8, 1)
];

const GRASS1_4 = [
    new GrassCenter(0, 0), new GrassCenter(1, 0), new GrassCenter(2, 0), new GrassCenter(3, 0),
    new GrassEnd(4, 0), new GrassStart(10, 0),
    new GrassCenter(11, 0), new GrassCenter(12, 0), new GrassCenter(13, 0), new GrassCenter(14, 0)
];


// Section5
const GRASS1_5 = [
    new GrassCenter(0, 0), new GrassCenter(1, 0), new GrassEnd(2, 0), new GrassStart(4, 0),
    new GrassCenter(5, 0), new GrassCenter(6, 0), new GrassCenter(7, 0), new GrassCenter(8, 0),
    new GrassCenter(9, 0), new GrassEnd(10, 0), new GrassStart(12, 0), new GrassCenter(13, 0),
    new GrassCenter(14, 0)
];


// Section6
const GRASS_FLYING1_6 = [
    new GrassFlyingStart(4, 2), new GrassFlyingCenter(5, 2), new GrassFlyingCenter(6, 2), new GrassFlyingCenter(7, 2),
    new GrassFlyingCenter(8, 2), new GrassFlyingCenter(9, 2), new GrassFlyingEnd(10, 2)
];

const GRASS1_6 = [
    new GrassCenter(0, 0), new GrassCenter(1, 0), new GrassCenter(2, 0), new GrassEnd(3, 0),
    new GrassStart(11, 0), new GrassCenter(12, 0), new GrassCenter(13, 0), new GrassCenter(14, 0)
];


// Section7
const GRASS_FLYING1_7 = [
    new GrassFlyingStart(3, 3.5), new GrassFlyingCenter(4, 3.5), new GrassFlyingCenter(5, 3.5), new GrassFlyingEnd(6, 3.5),
    new GrassFlyingStart(7.5, -2), new GrassFlyingCenter(8, 0)
];
// Please use GrassFlying!!!


const GRASS1_7 = [
    new GrassCenter(0, 0), new GrassCenter(1, 0), new GrassCenter(2, 0), new GrassCenter(3, 0),
    new GrassCenter(4, 0), new GrassEnd(5, 0), new GrassStart(11, 0), new GrassCenter(12, 0),
    new GrassCenter(13, 0), new GrassCenter(14, 0)
];


// Section8
const GRASS1_8 = [
    new GrassCenter(0, 0), new GrassCenter(1, 0), new GrassCenter(2, 0), new GrassCenter(3, 0),
    new GrassCenter(4, 0), new GrassCenter(5, 0), new GrassCenter(6, 0), new GrassCenter(7, 0),
    new GrassCenter(8, 0), new GrassCenter(9, 0), new GrassCenter(10, 0), new GrassCenter(11, 0),
    new GrassCenter(12, 0), new GrassCenter(13, 0), new GrassCenter(14, 0)
];



// Level1
const TREES1 = [
    TREES1_1
];

const LEAVES1 = [
    LEAVES1_1
];

const GRASS_FLYING1 = [
    GRASS_FLYING1_1, null, null, GRASS_FLYING1_4, null, GRASS_FLYING1_6, GRASS_FLYING1_7, null
];

const GRASS1 = [
    GRASS1_1, GRASS1_2, GRASS1_3, GRASS1_4, GRASS1_5, GRASS1_6, GRASS1_7, GRASS1_8
];


const COINS1 = [
    COINS1_1, COINS1_2, null, null, null, null, null, null
];

const ENEMIES1 = [
    ENEMIES1_1, null, null, null, null, null, null, null
];