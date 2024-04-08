class Knight extends MoveableObject {
    directory = 'img/characters/knight/';
    flipBook = FLIP_BOOK_HERO;
    speed = 128 / 60;
    speedExtraAttack = 0;
    speedRun = 256 / 60;
    energy = 100;

    coins = 0;


    groundLevel = 484;

    dying = false;
    dead = false;
    yStairwayMax = 228 - 108;
    yStairwayMin = 272 + 100;
    climbing = false;


    constructor() {
        super(4.4375, 0.625);
        this.setCover('knight');
        this.loadImage(this.cover);
        this.loadFlipBookImages(this.flipBook);
        this.animate();
        this.applyGravity();
    }


    get xLeft() {
        return this.x + 28;    // before a wrong value - is all working?!?
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
        return this.y + 64;
    }


    get yCenter() {
        return this.y + 88;
    }


    get yPush() {
        return this.y + 96;
    }


    get yBottom() {
        return this.y + 112;
    }


    get hpPoints() {
        return this.world.characterInfo.hpPoints;
    }


    get energyPoints() {
        return this.world.characterInfo.energyPoints;
    }


    get staminaPoints() {
        return this.world.characterInfo.staminaPoints;
    }


    // idle() {
    //     setInterval(() => {
    //         this.playAnimation(FLIP_BOOK_HERO.IDLE);
    //     }, 100);
    // }


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
            if (this.isKey('keydown', 'keyA')) {
                this.hpPoints.splice(this.hpPoints.length - 21, 20);
            }
        }, 1000 / 2);


        setInterval(() => {
            if (this.yBottom > this.groundLevel) {
                console.log('knight: ', this.yBottom, 'ground level: ', this.groundLevel);
            }

            // if (this.hit()) {
            //     this.energy -= 5;
            //     // console.log(this.energy);
            //     setTimeout(() => {
            //         this.world.blade = new Blade(10.75, -0.5);
            //     }, 500);
            // }
            this.climbing = false;
            if (this.isKey('keydown', 'arrowUp') && this.world.stairway.length > 0 && this.isIncluding(this.world.stairway[0].xCenter, this.yCenter)) {
                console.log('climbing up', this.y);
                if (this.y > this.yStairwayMax) {
                    this.climbing = true;
                    this.climb(true);
                }
            }
            if (this.isKey('keydown', 'arrowDown') && this.world.stairway.length > 0 && this.isIncluding(this.world.stairway[0].xCenter, this.yCenter)) {
                console.log('climbing down', this.y);
                if (this.y < this.yStairwayMin) {
                    this.climbing = true;
                    this.climb(false);
                }
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
            if (this.isKey('keydown', 'keyF') && this.world.bomb === undefined) {
                this.world.bomb = new Bomb((world.hero.x - 40) / 64, (540 - world.hero.y + 17) / 64);

                // world.bombs.splice(0, 1);
                // world.bombs.push(new Bomb((world.hero.x - 40) / 64, (540 - world.hero.y + 17) / 64));
            }
            if (this.world.bomb !== undefined && this.world.bomb.y > 540) {
                delete this.world.bomb;
            }

            // if (this.isKey('keydown', 'keyA')) {
            //     this.hpPoints.splice(this.hpPoints.length - 1, 4);
            // }
            if (this.isKey('keydown', 'keyA')) {
                this.world.characterInfo.staminaCounter -= 1;
                this.staminaPoints.splice(this.staminaPoints.length - 1, 1);
            }
            if (this.isKey('keydown', 'keyD')) {
                this.world.characterInfo.energyCounter -= 1;
                this.energyPoints.splice(this.energyPoints.length - 1, 1);
            }

            if (this.x > 284) {
                this.world.camera_x = -this.x + 4 * 64 + 28;    // + 4 * 64 + 28
                this.world.characterInfo.x = this.x - 284;
                this.world.characterInfo.updateAvatarImageX();
                this.world.characterInfo.updateAvatarFrameX();
                this.world.characterInfo.updateHpBarBgX();
                this.world.characterInfo.updateHpBarBorderX();
                this.world.characterInfo.updateEnergyBarBgX();
                this.world.characterInfo.updateEnergyBarBorderX();
                this.world.characterInfo.updateStaminaBarBgX();
                this.world.characterInfo.updateStaminaBarBorderX();
                this.world.characterInfo.updateItemBgX();
                this.world.characterInfo.updateItemBombX();
                this.world.characterInfo.updateItemBorderX();
                this.world.characterInfo.updateHpPointX();
                this.world.characterInfo.updateEnergyPointX();
                this.world.characterInfo.updateStaminaPointX();
            }


            this.isOnTile();
            this.collectCoin();
            this.pushStone();
            this.hit();
        }, 1000 / 60);


        setInterval(() => {
            if (this.dead) {
                this.loadImage(FLIP_BOOK_HERO.DEATH[FLIP_BOOK_HERO.DEATH.length - 1]);
            } else if (this.energy <= 0) {
                if (!this.dying) {
                    this.currentImage = 0;
                    this.dying = true;
                }
                this.playAnimation(FLIP_BOOK_HERO.DEATH);
                console.log(this.img);
                setTimeout(() => {
                    this.dead = true;
                }, 900);
            } else

                // if (world.lightnings.length > 0 && world.lightnings[0] !== undefined && this.isIncluding(world.lightnings[0].xCenter, world.lightnings[0].yCenter)) {
                //     world.lightnings[0].inTouch = true;
                //     if (this.isIncluding(this.world.lightnings[0].xCenter, this.world.lightnings[0].yCenter)) {
                //         console.log('lightning touch');
                //     }
                //     if (!this.isHit) {
                //         this.isHit = true;
                //         this.energy -= 15;
                //         // this.energy -= 30;
                //         console.log(this.energy);
                //         this.playAnimation(FLIP_BOOK_HERO.HURT);
                //         setTimeout(() => {
                //             delete world.lightnings[0];
                //             // world.bombs.splice(0, 1);
                //             this.isHit = false;
                //             setTimeout(() => {
                //                 world.lightnings.splice(0, 1);
                //                 world.lightnings.push(new Lightning(4.75, 0.4));
                //             }, 1000);
                //         }, 700);
                //     }
                // } else 

                // if (world.fires.length > 0 && world.fires[0] !== undefined && this.isIncluding(world.fires[0].xCenter, world.fires[0].yCenter)) {
                //     world.fires[0].inTouch = true;
                //     if (!this.isHit) {
                //         this.isHit = true;
                //         this.energy -= 15;
                //         // this.energy -= 30;
                //         // console.log(this.energy);
                //         this.playAnimationOnce(FLIP_BOOK_HERO.HURT);
                //         setTimeout(() => {
                //             delete world.fires[0];
                //             // world.bombs.splice(0, 1);
                //             this.isHit = false;
                //             setTimeout(() => {
                //                 world.fires.splice(0, 1);
                //                 world.fires.push(new Fire(8, -0.5));
                //             }, 1000);
                //         }, 700);
                //     }
                // } else

                // if (world.blades.length > 0 && world.blades[0] !== undefined && this.isIncluding(world.blades[0].xCenter, world.blades[0].yCenter)) {
                //     world.blades[0].inTouch = true;
                //     if (!this.isHit) {
                //         this.isHit = true;
                //         this.energy -= 15;
                //         // this.energy -= 30;
                //         // console.log(this.energy);
                //         this.playAnimation(FLIP_BOOK_HERO.HURT);
                //         setTimeout(() => {
                //             delete world.blades[0];
                //             // world.bombs.splice(0, 1);
                //             this.isHit = false;
                //             setTimeout(() => {
                //                 world.blades.splice(0, 1);
                //                 world.blades.push(new Blade(10.75, -0.5));
                //             }, 1000);
                //         }, 400);
                //     }
                // } else

                if (this.isKey('keydown', 'arrowUp', 'arrowDown') && this.climbing) {
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
                this.groundLevel = this.isOnGrassFlyingStart().yTop;
            } else if (this.isOnGrassFlyingCenter()) {
                this.groundLevel = this.isOnGrassFlyingCenter().yTop;
            } else if (this.isOnGrassFlyingEnd()) {
                this.groundLevel = this.isOnGrassFlyingEnd().yTop;
            }
            this.grounded = true;
        } else if (this.isOnGrassStart() || this.isOnGrassCenter() || this.isOnGrassEnd()) {
            if (this.isOnGrassStart()) {
                this.groundLevel = this.isOnGrassStart().yTop;
            } else if (this.isOnGrassCenter()) {
                this.groundLevel = this.isOnGrassCenter().yTop;
            } else if (this.isOnGrassEnd()) {
                this.groundLevel = this.isOnGrassEnd().yTop;
            }
            this.grounded = true;
        } else {
            this.grounded = false;
            this.groundLevel = 650;
            if (this.otherDirection && !this.world.level.previousLevelEndOtherDirection && this.yBottom > 484) {
                this.world.level.X_LEVEL_START = this.xLeft - 52;
                this.world.level.previousLevelEndOtherDirection = true;
            } else if (!this.world.level.previousLevelEnd && this.yBottom > 484) {
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
    }


    isOnGrassFlyingStart() {
        return this.world.GRASS_FLYING.find(g => this.xCenter < g.xLeft && g.xLeft < this.xRight);
    }


    isOnGrassFlyingCenter() {
        return this.world.GRASS_FLYING.find(g => g.xLeft < this.xCenter && this.xCenter < g.xRight);
    }


    isOnGrassFlyingEnd() {
        return this.world.GRASS_FLYING.find(g => this.xLeft < g.xRight && g.xRight < this.xCenter);
    }


    isOnGrassFlyingTop() {
        console.log('yes');
        return this.world.GRASS_FLYING.find(g => this.yBottom > g.yTop);
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


    hit() {
        if (this.isIncluding(this.world.blade.xCenter, this.world.blade.yCenter)) {
            // console.log('blade hit');
            // this.playAnimation(FLIP_BOOK_HERO.HURT);
            return true;
        };
    }
}