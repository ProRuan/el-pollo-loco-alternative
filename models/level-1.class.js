const GROUND_GRASS_01_PATH = 'img/Tiles/Ground_grass_0001_tile.png';
const GROUND_GRASS_22_PATH = 'img/Tiles/Ground_grass_0022_tile.png';
const GROUND_GRASS_01 = [];
const GROUND_GRASS_22 = [
    new GroundGrass22(960 - 64, 0)
];
createObjectArray(GROUND_GRASS_01, GROUND_GRASS_01_PATH, 15);
const TILES = [
    GROUND_GRASS_01,
    GROUND_GRASS_22
]

function createObjectArray(array, path, amount) {
    for (let i = 0; i < amount; i++) {
        let x = 64 * i;
        let tile = new Tile(path, x, 540 - 64);
        array.push(tile);
    }
}


const LEVEL_1 = new Level(
    [
        new Background('img/background/Background.png', 0),
        new Background('img/background/Background.png', 960),
        new Background('img/background/Background.png', 1920)
    ],
    TILES
);