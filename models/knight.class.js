class Knight extends MoveableObject {
    directory = 'img/characters/knight/';
    flipBook = FLIP_BOOK_HERO;
    speed = 128 / 60;
    speedExtraAttack = 0;
    speedRun = 256 / 60;
    energy = 100;

    coins = 0;


    groundLevel = 482;


    constructor() {
        super(4.4375, 0.625);
        this.setCover('knight');
        this.loadImage(this.cover);
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


    get xPush() {
        return this.x + 66;
    }


    get yTop() {
        return this.y + 54;
    }


    get yPush() {
        return this.y + 96;
    }


    get yBottom() {
        return this.y + 110;
    }


    attack() {    // add parameter enemy!!!
        return new Sword(this).attack(world.endboss);
    }


    attackWalk() {
        return new Sword(this).attackWalk(world.endboss);
    }


    attackExtra() {
        return new Sword(this).attackExtra(world.endboss);
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
                this.setOtherDirection(true);
            }
            if (this.isKey('keydown', 'keyE')) {
                this.setOtherDirection(false);
            }

            if (this.x > 284) {
                this.world.camera_x = -this.x + 4 * 64 + 28;    // + 4 * 64 + 28
            }

            this.isOnTile();
            this.collectCoin();
            this.pushStone();
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
            } else if (this.isKey('keydown', 'arrowLeft', 'arrowRight') && this.isPushing()) {
                this.playAnimation(FLIP_BOOK_HERO.PUSH);
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


    amBoden() {
        let tempGrass = [];
        world.GRASS_FLYING.forEach((grass) => {
            if (grass.y + 16 > this.yBottom && (grass.xLeft < this.xCenter && this.xCenter < grass.xRight)) {
                tempGrass.push(grass);
            }
        });
        console.log(tempGrass);
        return tempGrass;
    }


    isOnTile() {
        if (this.isOnGrassFlying()) {
            if (this.isOnGrassFlyingStart()) {
                this.groundLevel = this.isOnGrassFlyingStart().y + 6;
            } else if (this.isOnGrassFlyingCenter()) {
                this.groundLevel = this.isOnGrassFlyingCenter().y + 6;
            } else if (this.isOnGrassFlyingEnd()) {
                this.groundLevel = this.isOnGrassFlyingEnd().y + 6;
            }
            this.grounded = true;
        } else if (this.isOnGrassStart() || this.isOnGrassCenter() || this.isOnGrassEnd()) {
            if (this.isOnGrassStart()) {
                this.groundLevel = this.isOnGrassStart().y + 6;
            } else if (this.isOnGrassCenter()) {
                this.groundLevel = this.isOnGrassCenter().y + 6;
            } else if (this.isOnGrassEnd()) {
                this.groundLevel = this.isOnGrassEnd().y + 6;
            }
            this.grounded = true;
        } else {
            this.grounded = false;
            this.groundLevel = 650;
            if (this.otherDirection && !this.world.level.previousLevelEndOtherDirection && this.yBottom > 482) {
                this.world.level.X_LEVEL_START = this.xLeft - 52;
                this.world.level.previousLevelEndOtherDirection = true;
            } else if (!this.world.level.previousLevelEnd && this.yBottom > 482) {
                this.world.level.X_LEVEL_END = this.xLeft + 20;
                this.world.level.previousLevelEnd = true;
            }
        }
    }


    isOnGrassFlying() {
        let tempGrass = [];
        world.GRASS_FLYING.forEach((grass) => {
            if (grass.y + 16 > this.yBottom && (
                this.xCenter < grass.xLeft && grass.xLeft < this.xRight ||
                grass.xLeft < this.xCenter && this.xCenter < grass.xRight ||
                this.xLeft < grass.xRight && grass.xRight < this.xCenter)) {
                tempGrass.push(grass);
            }
        });
        return (tempGrass.length > 0) ? true : false;

        // return this.world.GRASS_FLYING.find(g =>
        //     this.yBottom > g.y &&
        //     (this.xCenter < g.xLeft && g.xLeft < this.xRight ||
        //     g.xLeft < this.xCenter && this.xCenter < g.xRight ||
        //     this.xLeft < g.xRight && g.xRight < this.xCenter)
        // );
    }


    isOnGrassFlyingStart() {
        return this.world.GRASS_FLYING.find(g => (this.xCenter < g.xLeft && g.xLeft < this.xRight) && this.yBottom > g.y);
    }


    isOnGrassFlyingCenter() {
        return this.world.GRASS_FLYING.find(g => (g.xLeft < this.xCenter && this.xCenter < g.xRight) && this.yBottom > g.y);
    }


    isOnGrassFlyingEnd() {
        return this.world.GRASS_FLYING.find(g => (this.xLeft < g.xRight && g.xRight < this.xCenter) && this.yBottom > g.y);
    }


    isOnGrassFlyingTop() {
        console.log('yes');
        return this.world.GRASS_FLYING.find(g => this.yBottom > g.y + 6);
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
            let coinId = this.world.COINS.findIndex(c => c.xCenter == coin.xCenter && c.yCenter == coin.yCenter);
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


    pushStone() {    // isPushing() is missing!!!
        let inTouch = this.world.STONES.find(s => s.xLeft < this.xPush && this.xPush < s.xRight && s.yTop < this.yPush && this.yPush < s.yBottom);
        if (inTouch) {    // only x --> y is missing!!!
            this.pushing = true;
            this.lastStone = inTouch;
            inTouch.x += this.speed;
            inTouch.rolling = true;
            // inTouch.playAnimation(inTouch.flipBook);
        } else {
            this.pushing = false;
            if (this.lastStone !== undefined) {
                this.lastStone.rolling = false;
            }
        }
    }


    isPushing() {
        return this.pushing !== undefined && this.pushing;
    }
}