class Level {
    translation = CANVAS_WIDTH;
    cache = [];
    BACKGROUND = [];
    CLOUDS = [];
    BIRDS = [];
    GRASS = [];
    COINS = [];
    STONES = [];
    levelEndPreviousOtherDirection = false;
    levelEndPrevious = false;


    constructor() {
        this.setXLevelStart();
        this.setXLevelEnd(LEVEL_SIZE);
    }


    setXLevelStart() {
        this.X_LEVEL_START = 28;
    }


    setXLevelEnd(amount) {
        this.X_LEVEL_END = (amount - 1) * CANVAS_WIDTH - 4;
    }


    loadBackground() {
        for (let i = 0; i < LEVEL_SIZE; i++) {
            let t = i * this.translation / 64;
            let background = new Background(t);
            for (let j = 0; j < background.layers.length - 1; j++) {
                let layer = new Layer(background, j);
                this.BACKGROUND.push(layer);
            }
            let cloud = new Cloud(background);
            this.CLOUDS.push(cloud);
            this.loadLastCloud(i);
        }
    }


    loadLastCloud(i) {
        if (i == LEVEL_SIZE - 1) {
            let t = ++i * this.translation / 64;
            let background = new Background(t);
            let cloud = new Cloud(background);
            this.CLOUDS.push(cloud);
        }
    }


    loadBirds(n) {
        let amount = 3 - Math.round(Math.random() * 2);
        for (let i = 0; i < amount; i++) {
            let x = 13.75 - Math.round(Math.random() * 12) + n * this.translation / 64;
            let y = 7.415 - Math.round(Math.random() * 4);
            let bird = new Bird(x, y);
            this.BIRDS.push(bird);
        }
    }


    loadGrass(n) {
        for (let i = 0; i < this.cache.length; i++) {
            let grass = this.cache[i];
            grass.x += n * this.translation;
            this.GRASS.push(grass);
        }
        this.cache = [];
    }


    loadCoins(n) {
        for (let i = 0; i < this.cache.length; i++) {
            let coin = this.cache[i];
            coin.x += n * this.translation;
            this.COINS.push(coin);
        }
        this.cache = [];
    }


    loadStones(n) {
        for (let i = 0; i < this.cache.length; i++) {
            let stone = this.cache[i];
            stone.x += n * this.translation;
            this.STONES.push(stone);
        }
        this.cache = [];
    }
}