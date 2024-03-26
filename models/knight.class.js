class Knight extends MoveableObject {
    flipBook = FLIP_BOOK_HERO;
    speed = 128 / 60;
    speedExtraAttack = 0;
    speedRun = 256 / 60;

    levelEndPrevious = false;


    constructor() {
        super(0, 0.625, 'knight');
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


            this.world.camera_x = -this.x;
            this.isOnGrass();
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
        let onGrass = this.world.level.GRASS.find(g => g.xLeft < this.xCenter && this.xCenter < g.xRight);
        if (onGrass === undefined) {
            onGrass = this.world.level.GRASS.find(g => this.xLeft < g.xRight && this.xCenter > g.xRight || this.xCenter < g.xLeft && this.xRight > g.xLeft);
        }
        if (onGrass === undefined || this.y > 405) {
            this.grounded = false;
            if (!this.levelEndPrevious && this.yBottom > 482) {
                this.world.level.X_LEVEL_END = this.xLeft + 16;
                this.levelEndPrevious = true;
            }
        } else {
            this.grounded = true;
        }
    }
}