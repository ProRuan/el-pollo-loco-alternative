class Level {
    translation = CANVAS_WIDTH;
    cache = [];
    BACKGROUND = [];
    GRASS = [];
    COINS = [];


    constructor() {
        this.setXLevelEnd(LEVEL_SIZE);
    }


    setXLevelEnd(amount) {
        this.X_LEVEL_END = amount * CANVAS_WIDTH;
    }


    loadBackground() {
        for (let i = 0; i < LEVEL_SIZE; i++) {
            let t = i * this.translation / 64;
            let background = new Background(t);
            this.BACKGROUND.push(background);
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
}