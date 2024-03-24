class Knight extends MoveableObject {
    flipBook = FLIP_BOOK_HERO;
    speed = 1.6;
    // speedRun = 2;

    constructor() {
        super(0, 0.625, 'knight');
        this.loadFlipBookImages(this.flipBook);
        this.animate();
    }


    get xLeft() {
        return this.x + 16;
    }


    get xCenter() {
        return this.x + 44;
    }


    get xRight() {
        return this.x + 60;
    }


    get yTop() {
        return this.y + 54;
    }


    get yBottom() {
        return this.y + 110;
    }


    loadFlipBookImages(flipBook) {
        for (const [key, value] of Object.entries(flipBook)) {
            if (Array.isArray(value)) {
                this.loadImages(flipBook[key]);
            }
        }
    }


    animate() {
        setInterval(() => {
            if (this.isKey('keydown', 'keyQ')) {
                this.setOtherDirection(true)
            }
            if (this.isKey('keydown', 'keyE')) {
                this.setOtherDirection(false);
            }
            if (this.isKey('keydown', 'arrowRight') && this.x < this.world.level.X_LEVEL_END) {
                this.moveRight();
                this.setOtherDirection(false);
            }


            this.world.camera_x = -this.x;
        }, 1000 / 60);


        setInterval(() => {
            if (this.isKey('keydown', 'keyD')) {
                this.playAnimation(FLIP_BOOK_HERO.EXTRA_ATTACK);
                this.idleDelay = new Date().getTime();
            } else if (this.isKey('doubleClick', 'arrowLeft', 'arrowRight') && this.isKey('keydown', 'keyA')) {
                this.playAnimation(FLIP_BOOK_HERO.RUN_ATTACK);
                this.idleDelay = new Date().getTime();
            } else if (this.isKey('doubleClick', 'arrowLeft', 'arrowRight')) {
                this.playAnimation(FLIP_BOOK_HERO.RUN);
                this.idleDelay = new Date().getTime();
            } else if (this.isKey('keydown', 'arrowLeft', 'arrowRight') && this.isKey('keydown', 'keyA')) {
                this.playAnimation(FLIP_BOOK_HERO.WALK_ATTACK);
                this.idleDelay = new Date().getTime();
            } else if (this.isKey('keydown', 'arrowLeft', 'arrowRight')) {
                this.playAnimation(FLIP_BOOK_HERO.WALK);
                this.idleDelay = new Date().getTime();
            } else if (this.isKey('keydown', 'keyA')) {
                this.playAnimation(FLIP_BOOK_HERO.ATTACK);
            } else if (!keyboard.keydown) {
                this.loadImage(FLIP_BOOK_HERO.cover);
            }
        }, 100);
    }


    isKey(keyValue, keyCodeA, keyCodeB) {
        if (!keyCodeB) {
            return this.getKeyValue(keyCodeA, keyValue);
        } else {
            return this.getKeyValue(keyCodeA, keyValue) || this.getKeyValue(keyCodeB, keyValue);
        }
    }


    getKeyValue(keyCode, keyValue) {
        return this.world.keyboard[keyCode][keyValue];
    }


    setOtherDirection(locigal) {
        this.otherDirection = (locigal) ? true : false;
    }
}