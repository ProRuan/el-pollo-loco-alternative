const GROUND_GRASS_CENTER = [];
createGroundGrass(0, 15);
createGroundGrass(15, 6);
createGroundGrass(24, 3);


function createGroundGrass(startX, amount) {
    for (let i = 0; i < amount; i++) {
        let x = startX * 64 + i * 64;
        let tile = new GroundGrassCenter(x, 0);
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