const GROUND_GRASS_CENTER = [];
createGroundGrass('center', 0, 20);
createGroundGrass('end', 20, 1);
createGroundGrass('start', 24, 1);
createGroundGrass('center', 25, 5);


function createGroundGrass(type, startX, amount) {
    for (let i = 0; i < amount; i++) {
        let x = startX * 64 + i * 64;
        let tile = new GroundGrass(type, x, 0);
        GROUND_GRASS_CENTER.push(tile);
    }
}

const TILES = [
    GROUND_GRASS_CENTER
]


const LEVEL_1 = new Level(
    [
        new Background('img/background/Background.png', 0),
        new Background('img/background/Background.png', 960),
        new Background('img/background/Background.png', 1920)
    ],
    TILES
);