class Knight extends MoveableObject {
    flipBook = FLIP_BOOK_HERO;
    speed = 128 / 60;
    speedExtraAttack = 0;
    speedRun = 256 / 60;

    coins = 0;


    constructor() {
        super(4.4375, 0.625, 'knight');
        this.loadFlipBookImages(this.flipBook);
        this.animate();
        this.applyGravity();
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
            if (this.isKey('keydown', 'arrowUp')) {
                this.climb(true);
            }
            if (this.isKey('keydown', 'arrowDown')) {
                this.climb(false);
            }
            if (this.isKey('keydown', 'arrowLeft') && this.x > this.world.level.X_LEVEL_START) {
                this.move(false);
                this.setOtherDirection(true);
            }
            if (this.isKey('keydown', 'arrowRight') && this.x < this.world.level.X_LEVEL_END) {
                this.move(true);
                this.setOtherDirection(false);
            }
            if (this.isKey('keydown', 'space') && !this.isAboveGround()) {
                this.jump();
            }
            if (this.isKey('keydown', 'keyQ')) {
                this.setOtherDirection(true)
            }
            if (this.isKey('keydown', 'keyE')) {
                this.setOtherDirection(false);
            }

            if (this.x > 284) {
                this.world.camera_x = -this.x + 4 * 64 + 28;    // + 4 * 64 + 28
            }

            this.isOnGrass();
            this.collectCoin();
        }, 1000 / 60);


        setInterval(() => {
            if (this.isKey('keydown', 'arrowUp', 'arrowDown')) {
                this.playAnimation(FLIP_BOOK_HERO.CLIMB);    // still to edit
            } else if (this.isKey('keydown', 'keyD')) {
                this.playAnimation(FLIP_BOOK_HERO.EXTRA_ATTACK);
                this.idleDelay = new Date().getTime();
            } else if (this.isJumpStart && this.speedY > 0) {
                this.playAnimationJumpStart(FLIP_BOOK_HERO.JUMP);
                this.isJumpStart = false;
            } else if (this.isJumping && this.speedY > 0) {
                this.loadImage(FLIP_BOOK_HERO.JUMP[2]);
            } else if (this.isFallStart && this.speedY <= 0) {
                this.playAnimationFallStart(FLIP_BOOK_HERO.JUMP);
                this.isJumping = false;
                this.isFallStart = false;
            } else if (this.isFalling && this.speedY < 0) {
                this.loadImage(FLIP_BOOK_HERO.JUMP[5]);
            } else if (this.isFalling && this.speedY == 0) {
                this.loadImage(FLIP_BOOK_HERO.JUMP[6]);
                this.isFalling = false;
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


    isOnGrass() {
        if (!this.isOnGrassStart() && !this.isOnGrassCenter() && !this.isOnGrassEnd() || this.y > 405) {
            this.grounded = false;
            if (this.otherDirection && !this.world.level.previousLevelEndOtherDirection && this.yBottom > 482) {
                this.world.level.X_LEVEL_START = this.xLeft - 52;
                this.world.level.previousLevelEndOtherDirection = true;
            } else if (!this.world.level.previousLevelEnd && this.yBottom > 482) {
                this.world.level.X_LEVEL_END = this.xLeft + 20;
                this.world.level.previousLevelEnd = true;
            }
        } else {
            this.grounded = true;
        }
    }


    isOnGrassStart() {
        return this.world.GRASS.find(g => this.xCenter < g.xLeft && g.xLeft < this.xRight);
    }


    isOnGrassCenter() {
        return this.world.GRASS.find(g => g.xLeft < this.xCenter && this.xCenter < g.xRight);
    }


    isOnGrassEnd() {
        return this.world.GRASS.find(g => this.xLeft < g.xRight && g.xRight < this.xCenter);
    }


    collectCoin() {
        let coin = this.world.COINS.find(c => this.isIncluding(c.xCenter, c.yCenter));
        if (coin) {
            let coinId = this.world.COINS.findIndex(c => coin.xCenter);
            this.world.COINS.splice(coinId, 1);
            this.coins++;
        }
    }


    isIncluding(x, y) {
        return this.isHorizontalCenter(x) && this.isVerticalCenter(y);
    }


    isHorizontalCenter(x) {
        return this.xLeft < x && x < this.xRight;
    }


    isVerticalCenter(y) {
        return this.yTop < y && y < this.yBottom;
    }
}