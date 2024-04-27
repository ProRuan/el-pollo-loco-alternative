class Level {
    heroWidth = HERO_WIDTH;
    heroXLeft = HERO_X_LEFT;
    heroXCenter = HERO_X_CENTER;
    cameraXOffset = CAMERA_X_OFFSET;
    worldSize = LEVEL_SIZE;
    keys = OBJECTS_TO_LOAD;
    translation = canvasWidth;

    // Please verify!!!
    levelEndPreviousOtherDirection = false;
    levelEndPrevious = false;


    constructor() {
        this.setObjectsToLoad();
        this.setXLevelStart();
        this.setXLevelEndCrystal();
        this.setXCameraEnd();
    }


    setObjectsToLoad() {
        for (let i = 0; i < this.keys.length; i++) {
            this.setObjectValue(i);
        }
    }


    setObjectValue(i) {
        let key = this.keys[i].toUpperCase();
        this[key] = [];
    }


    setXLevelStart() {
        this.X_LEVEL_START = this.heroXLeft;
    }


    setXLevelStartCrystal() {
        this.X_LEVEL_START = (this.worldSize - 2) * canvasWidth + 144 + this.heroXLeft;
    }


    setXLevelEndCrystal() {
        this.X_LEVEL_END = (this.worldSize - 2) * canvasWidth + canvasWidth / 2 - this.heroXCenter;
    }


    setXLevelEnd() {
        this.X_LEVEL_END = this.worldSize * canvasWidth - (this.heroWidth - this.heroXCenter);
    }


    setXCameraEnd() {
        this.X_CAMERA_END = (this.worldSize - 1) * canvasWidth + this.cameraXOffset;
    }



    // Please edit!!!
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


    // Please edit!!!
    loadClouds() {
        for (let i = 0; i < LEVEL_SIZE + 1; i++) {
            let t = i * this.translation / 64;
            let background = new Background(t);
            let cloud = new Cloud(background);
            this.CLOUDS.push(cloud);
        }
    }


    // Please edit!!!
    loadCloud(n) {
        let background = new Background(n);
        let cloud = new Cloud(background);
        this.CLOUDS.push(cloud);
    }


    // Please edit!!!
    loadBirds(n) {
        let amount = 3 - Math.round(Math.random() * 2);
        for (let i = 0; i < amount; i++) {
            let x = 13.75 - Math.round(Math.random() * 12) + n * this.translation / 64;
            let y = 7.415 - Math.round(Math.random() * 4);
            let bird = new Bird(x, y);
            this.BIRDS.push(bird);
        }
    }


    loadSectionObjects(array, id, key) {
        let objects = array[id];
        if (objects) {
            for (let i = 0; i < objects.length; i++) {
                let object = objects[i];
                object.x += id * this.translation;
                this[key].push(object);
            }
        }
    }


    loadEndboss(endboss) {
        endboss.x += (this.worldSize - 1) * this.translation;
        this.ENDBOSS = endboss;
    }
}