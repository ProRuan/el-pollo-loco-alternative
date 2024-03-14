const TRANSLATION_SECTION_0 = 0;
const TRANSLATION_SECTION_1 = 15;
const TRANSLATION_SECTION_2 = 0;
const GROUND_GRASS = [];
// createGroundGrass('center', 0, 15);

createGroundGrass('center', 0 + TRANSLATION_SECTION_1, 3);
createGroundGrass('end', 3 + TRANSLATION_SECTION_1, 1);
createGroundGrass('start', 5 + TRANSLATION_SECTION_1, 1);
createGroundGrass('center', 6 + TRANSLATION_SECTION_1, 3);
createGroundGrass('end', 9 + TRANSLATION_SECTION_1, 1);
createGroundGrass('start', 11 + TRANSLATION_SECTION_1, 1);
createGroundGrass('center', 12 + TRANSLATION_SECTION_1, 3);



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


const TILES = [
    GROUND_GRASS
]


const LEVEL_1 = new Level(
    [
        new Background('img/background/Background.png', 0),
        new Background('img/background/Background.png', 960),
        new Background('img/background/Background.png', 1920)
    ],
    TILES
);