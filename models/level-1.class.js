const TRANSLATION_SECTION_0 = 0;
const TRANSLATION_SECTION_1 = 15;
const TRANSLATION_SECTION_2 = 30;
const TRANSLATION_SECTION_3 = 45;
const TRANSLATION_SECTION_4 = 60;
const TRANSLATION_SECTION_5 = 75;

const GROUND_GRASS = [];
createGroundGrass('center', 0 + TRANSLATION_SECTION_0, 15);

createGroundGrass('center', 0 + TRANSLATION_SECTION_1, 6);
createGroundGrass('end', 6 + TRANSLATION_SECTION_1, 1);
createGroundGrass('start', 8 + TRANSLATION_SECTION_1, 1);
createGroundGrass('center', 9 + TRANSLATION_SECTION_1, 6);

createGroundGrass('center', 0 + TRANSLATION_SECTION_2, 3);
createGroundGrass('end', 3 + TRANSLATION_SECTION_2, 1);
createGroundGrass('start', 5 + TRANSLATION_SECTION_2, 1);
createGroundGrass('center', 6 + TRANSLATION_SECTION_2, 3);
createGroundGrass('end', 9 + TRANSLATION_SECTION_2, 1);
createGroundGrass('start', 11 + TRANSLATION_SECTION_2, 1);
createGroundGrass('center', 12 + TRANSLATION_SECTION_2, 3);

createGroundGrass('center', 0 + TRANSLATION_SECTION_3, 2);
createGroundGrass('end', 2 + TRANSLATION_SECTION_3, 1);
createGroundGrass('start', 4 + TRANSLATION_SECTION_3, 1);
createGroundGrass('center', 5 + TRANSLATION_SECTION_3, 1);
createGroundGrass('end', 6 + TRANSLATION_SECTION_3, 1);
createGroundGrass('start', 8 + TRANSLATION_SECTION_3, 1);
createGroundGrass('center', 9 + TRANSLATION_SECTION_3, 1);
createGroundGrass('end', 10 + TRANSLATION_SECTION_3, 1);
createGroundGrass('start', 12 + TRANSLATION_SECTION_3, 1);
createGroundGrass('center', 13 + TRANSLATION_SECTION_3, 2);

createGroundGrass('center', 0 + TRANSLATION_SECTION_4, 15);

createGroundGrass('center', 0 + TRANSLATION_SECTION_5, 15);



function createGroundGrass(type, xStart, amount) {
    for (let i = 0; i < amount; i++) {
        let x = xStart * 64 + i * 64;
        let tile = new GroundGrass(type, x, 0);
        GROUND_GRASS.push(tile);
    }
}


function translateTile(iStart, iEnd, translation) {
    for (let i = iStart; i < iEnd; i++) {
        GROUND_GRASS[i].x += translation;
    }
}


const BACKGROUND = [];
createBackgroundSection(6, 960);

function createBackgroundSection(amount, translation) {
    for (let i = 0; i < amount; i++) {
        let x = i * translation;
        let background = new Background('img/background/Background.png', x);
        BACKGROUND.push(background);
    }
}


const TILES = [
    GROUND_GRASS
]


const LEVEL_1 = new Level(
    BACKGROUND,
    TILES
);