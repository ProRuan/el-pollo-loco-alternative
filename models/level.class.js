class Level {
    translation = ORIGINAL_CANVAS_WIDTH;
    cache = [];
    BACKGROUND = [];
    CLOUDS = [];
    BIRDS = [];
    TREES = [];
    LEAVES = [];
    GRASS_FLYING = [];
    GRASS = [];
    LADDERS = [];
    COINS = [];
    CRYSTALS = [];
    HIT_POINTS = [];
    STONES = [];
    ENEMIES = [];
    levelEndPreviousOtherDirection = false;
    levelEndPrevious = false;


    constructor() {
        this.setXLevelStart();
        this.setXLevelEndCrystal(LEVEL_SIZE);
        // this.setXLevelEnd(LEVEL_SIZE);
        this.setXCameraEnd(LEVEL_SIZE);
    }


    setXLevelStart() {
        this.X_LEVEL_START = 28;
    }


    setXLevelStartCrystal(amount) {
        this.X_LEVEL_START = (amount - 2) * ORIGINAL_CANVAS_WIDTH + 2.25 * 64 + 28;
    }


    setXLevelEndCrystal(amount) {
        this.X_LEVEL_END = (amount - 2) * ORIGINAL_CANVAS_WIDTH + ORIGINAL_CANVAS_WIDTH / 2 - 44;
        // console.log(this.X_LEVEL_END);
    }


    setXLevelEnd(amount) {
        this.X_LEVEL_END = (amount) * ORIGINAL_CANVAS_WIDTH - 84;
        // this.X_LEVEL_END = (amount - 1) * ORIGINAL_CANVAS_WIDTH - 4 + 28;
    }


    setXCameraEnd(amount) {
        this.X_CAMERA_END = (amount - 1) * ORIGINAL_CANVAS_WIDTH + 284;
    }


    loadBackground() {
        for (let i = 0; i < LEVEL_SIZE; i++) {
            let t = i * this.translation / 64;
            let background = new Background(t);
            for (let j = 0; j < background.layers.length - 1; j++) {
                let layer = new Layer(background, j);
                this.BACKGROUND.push(layer);
            }
            // let cloud = new Cloud(background);
            // this.CLOUDS.push(cloud);
            // this.loadLastCloud(i);
        }
    }


    // loadLastCloud(i) {
    //     if (i == LEVEL_SIZE - 1) {
    //         let t = ++i * this.translation / 64;
    //         let background = new Background(t);
    //         let cloud = new Cloud(background);
    //         this.CLOUDS.push(cloud);
    //     }
    // }


    loadClouds() {
        for (let i = 0; i < LEVEL_SIZE + 1; i++) {
            let t = i * this.translation / 64;
            let background = new Background(t);
            let cloud = new Cloud(background);
            this.CLOUDS.push(cloud);
        }
    }


    loadCloud(n) {
        let background = new Background(n);
        let cloud = new Cloud(background);
        this.CLOUDS.push(cloud);
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


    loadTreesNew(trees, n) {
        if (trees) {
            for (let i = 0; i < trees.length; i++) {
                let tree = trees[i];
                tree.x += n * this.translation;
                this.TREES.push(tree);
            }
        }
    }


    loadLeavesNew(leaves, n) {
        if (leaves) {
            for (let i = 0; i < leaves.length; i++) {
                let leaf = leaves[i];
                leaf.x += n * this.translation;
                this.LEAVES.push(leaf);
            }
        }
    }


    loadTrees(n) {
        for (let i = 0; i < this.cache.length; i++) {
            let tree = this.cache[i];
            tree.x += n * this.translation;
            this.TREES.push(tree);
        }
        this.cache = [];
    }


    loadLeaves(n) {
        for (let i = 0; i < this.cache.length; i++) {
            let leaf = this.cache[i];
            leaf.x += n * this.translation;
            this.LEAVES.push(leaf);
        }
        this.cache = [];
    }


    loadGrassNew(grassGroup, n) {
        for (let i = 0; i < grassGroup.length; i++) {
            let grass = grassGroup[i];
            grass.x += n * this.translation;
            this.GRASS.push(grass);
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


    loadGrassFlyingNew(grassFlyingGroup, n) {
        if (grassFlyingGroup) {
            for (let i = 0; i < grassFlyingGroup.length; i++) {
                let grassFlying = grassFlyingGroup[i];
                grassFlying.x += n * this.translation;
                this.GRASS_FLYING.push(grassFlying);
            }
        }
    }


    loadGrassFlying(n) {
        for (let i = 0; i < this.cache.length; i++) {
            let grass = this.cache[i];
            grass.x += n * this.translation;
            this.GRASS_FLYING.push(grass);
        }
        this.cache = [];
    }


    loadLadders(ladders, n) {
        if (ladders) {
            for (let i = 0; i < ladders.length; i++) {
                let stairway = ladders[i];
                stairway.x += n * this.translation;
                this.LADDERS.push(stairway);
            }
        }
    }


    loadCoinsNew(coinGroup, n) {
        if (coinGroup) {
            for (let i = 0; i < coinGroup.length; i++) {
                let coin = coinGroup[i];
                coin.x += n * this.translation;
                this.COINS.push(coin);
            }
        }
    }


    loadCrystalsNew(crystals, n) {    // double code!!!
        if (crystals) {
            for (let i = 0; i < crystals.length; i++) {
                let crystal = crystals[i];
                crystal.x += n * this.translation;
                this.CRYSTALS.push(crystal);
            }
        }
    }


    loadHitPointsNew(hitpoints, n) {    // double code!!!
        if (hitpoints) {
            for (let i = 0; i < hitpoints.length; i++) {
                let hitPoint = hitpoints[i];
                hitPoint.x += n * this.translation;
                this.HIT_POINTS.push(hitPoint);
            }
        }
    }


    loadCoins(n) {
        for (let i = 0; i < this.cache.length; i++) {
            let coin = this.cache[i];
            coin.x += n * this.translation;
            this.COINS.push(coin);
        }
        this.cache = [];
    }


    loadCrystals(n) {    // double code!!!
        for (let i = 0; i < this.cache.length; i++) {
            let crystal = this.cache[i];
            crystal.x += n * this.translation;
            this.CRYSTALS.push(crystal);
        }
        this.cache = [];
    }


    loadHitPoints(n) {    // double code!!!
        for (let i = 0; i < this.cache.length; i++) {
            let hitPoint = this.cache[i];
            hitPoint.x += n * this.translation;
            this.HIT_POINTS.push(hitPoint);
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


    loadEnemies(enemies, n) {
        if (enemies) {
            for (let i = 0; i < enemies.length; i++) {
                let enemy = enemies[i];
                enemy.x += n * this.translation;
                this.ENEMIES.push(enemy);
            }
        }
    }


    loadEndboss(endboss, n) {
        endboss.x += n * this.translation;
        this.ENDBOSS = endboss;
    }
}