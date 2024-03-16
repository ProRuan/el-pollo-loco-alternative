class Character extends MoveableObject {
    width = 128;
    height = this.width;
    x = 32;
    y = 540 - this.height - 32;

    // Body + Center Line
    xLeft = this.x + 28;
    xCenter = this.x + 16;
    xRight = this.xCenter + 16;
    xPush = this.xRight - 8;
    yTop = this.y + 60;
    yBottom = this.yTop + 48;

    // Attack
    xLeftAttack = this.xRight;
    xRightAttack = this.xLeftAttack + 48;
    yTopAttack = this.yTop;
    yBottomAttack = this.yBottom;

    // Walk Attack + Run Attack
    xRightWalkAttack = this.xLeftAttack + 36;

    // Extra Attack
    yTopExtraAttack = this.y + 32;



    speed = 1.5;
    speedXWalk = 5;    // not in use yet
    speedXRun = 5;    // not in use yet
    speedXPush = 5;    // not in use yet
    speedXYClimb = 5;    // not in use yet
    speedXJump = 5;    // not in use yet
    speedYJump = 5;    // not in use yet
    runSpeed = 2;

    idleDelay = 0;
    isRunnning = true;
    isPushing = false;
    FLIP_BOOK = new FlipBook();
    FLIP_BOOK_ATTACK = this.FLIP_BOOK.attack;
    FLIP_BOOK_CLIMB = this.FLIP_BOOK.climb;
    FLIP_BOOK_DEATH = this.FLIP_BOOK.death;
    FLIP_BOOK_EXTRA_ATTACK = this.FLIP_BOOK.extraAttack;
    FLIP_BOOK_HIGH_JUMP = this.FLIP_BOOK.highJump;
    FLIP_BOOK_HURT = this.FLIP_BOOK.hurt;
    FLIP_BOOK_IDLE = this.FLIP_BOOK.idle;
    FLIP_BOOK_JUMP = this.FLIP_BOOK.jump;
    FLIP_BOOK_PUSH = this.FLIP_BOOK.push;
    FLIP_BOOK_RUN = this.FLIP_BOOK.run;
    FLIP_BOOK_RUN_ATTACK = this.FLIP_BOOK.runAttack;
    FLIP_BOOK_WALK = this.FLIP_BOOK.walk;
    FLIP_BOOK_WALK_ATTACK = this.FLIP_BOOK.walkAttack;

    FLIPBOOK_STONE = this.FLIP_BOOK.stone;
    world;

    constructor() {
        super().loadImage('img/characters/knight/knight.png');
        this.loadImages(this.FLIP_BOOK_ATTACK);
        this.loadImages(this.FLIP_BOOK_CLIMB);
        this.loadImages(this.FLIP_BOOK_DEATH);
        this.loadImages(this.FLIP_BOOK_EXTRA_ATTACK);
        this.loadImages(this.FLIP_BOOK_IDLE);
        this.loadImages(this.FLIP_BOOK_HIGH_JUMP);
        this.loadImages(this.FLIP_BOOK_HURT);
        this.loadImages(this.FLIP_BOOK_JUMP);
        this.loadImages(this.FLIP_BOOK_PUSH);
        this.loadImages(this.FLIP_BOOK_RUN);
        this.loadImages(this.FLIP_BOOK_RUN_ATTACK);
        this.loadImages(this.FLIP_BOOK_WALK);
        this.loadImages(this.FLIP_BOOK_WALK_ATTACK);
        this.animate();
        this.applyGravity();
        this.isOnTile();
        this.isOnPushableObject();
        this.loadImages(this.FLIPBOOK_STONE);
    }


    animate() {
        setInterval(() => {
            if (this.isKey('keydown', 'keyQ')) {
                this.otherDirection = true;
            }
            if (this.isKey('keydown', 'keyE')) {
                this.otherDirection = false;
            }
            if (this.isKey('keydown', 'arrowLeft') && this.x > 32) {
                this.moveLeft();
                this.otherDirection = true;
            }
            if (this.isKey('keydown', 'arrowUp')) {
                this.climbUp();
            }
            if (this.isKey('keydown', 'arrowRight') && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.isKey('keydown', 'arrowDown')) {
                this.climbDown();
            }
            if (this.isKey('keydown', 'space') && !this.isAboveGround()) {
                this.jump();
            }

            this.world.camera_x = -this.x + 32;
            this.updateCharacterValues();
        }, 1000 / 60);

        setInterval(() => {
            if (this.isKey('keydown', 'arrowUp', 'arrowDown')) {
                this.playAnimation(this.FLIP_BOOK_CLIMB);    // still to edit
            } else if (this.isKey('keydown', 'keyD')) {
                this.playAnimation(this.FLIP_BOOK_EXTRA_ATTACK);
                this.idleDelay = new Date().getTime();
            } else if (this.isKey('keydown', 'space') || this.isAboveGround()) {
                this.playAnimation(this.FLIP_BOOK_JUMP);
                this.idleDelay = new Date().getTime();
            } else if (this.isKey('keydown', 'arrowLeft', 'arrowRight') && this.isPushing) {
                this.playAnimation(this.FLIP_BOOK_PUSH);
                this.idleDelay = new Date().getTime();
            } else if (this.isKey('doubleClick', 'arrowLeft', 'arrowRight') && this.isKey('keydown', 'keyA')) {
                this.playAnimation(this.FLIP_BOOK_RUN_ATTACK);
                this.idleDelay = new Date().getTime();
            } else if (this.isKey('doubleClick', 'arrowLeft', 'arrowRight')) {
                this.playAnimation(this.FLIP_BOOK_RUN);
                this.idleDelay = new Date().getTime();
            } else if (this.isKey('keydown', 'arrowLeft', 'arrowRight') && this.isKey('keydown', 'keyA')) {
                this.playAnimation(this.FLIP_BOOK_WALK_ATTACK);
                this.idleDelay = new Date().getTime();
            } else if (this.isKey('keydown', 'arrowLeft', 'arrowRight')) {
                this.playAnimation(this.FLIP_BOOK_WALK);
                this.idleDelay = new Date().getTime();
            } else if (this.isKey('keydown', 'keyA')) {
                this.playAnimation(this.FLIP_BOOK_ATTACK);
                this.idleDelay = new Date().getTime();
            } else if (!keyboard.keydown) {
                this.loadImage('img/characters/knight/knight.png');
                // let timeStamp = new Date().getTime();
                // if (timeStamp - this.idleDelay > 100) {
                //     this.playAnimation(this.FLIP_BOOK_IDLE);
                // }
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


    isOnTile() {
        setInterval(() => {
            let thisTile = GROUND_GRASS.find(g => this.x + 28 < g.x + g.width && this.x + 60 > g.x) !== undefined;

            // getNextTile.x
            console.log(thisTile);
            if (!thisTile) {
                // console.log(thisTile);
                if (!this.isAboveGround()) {
                    this.speed = 0;
                    this.runSpeed = 0;
                }
                this.x += 1.5;
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }


    isOnPushableObject() {
        setInterval(() => {
            if (this.isKey('keydown', 'arrowLeft', 'arrowRight')) {
                let pushableObject = this.world.animatedObject;
                if (this.x + 60 - 8 > pushableObject.x && this.y == pushableObject.y - 64 && !(this.x + 28 > pushableObject.x + pushableObject.width)) {
                    this.isRunnning = false;
                    this.isPushing = true;
                    console.log('isPushing');
                    this.speed = 1;
                    this.runSpeed = this.speed;
                    if (this.otherDirection) {
                        this.world.animatedObject.x -= this.speed;
                    } else {
                        this.world.animatedObject.x += this.speed;
                    }
                    this.playAnimation(this.FLIPBOOK_STONE);
                } else {
                    this.isRunnning = true;
                    this.isPushing = false;
                    this.speed = 1.5;
                    this.runSpeed = 2;
                }
            }
        }, 1000 / 60);
    }


    updateCharacterValues() {
        this.xLeft = this.x + 28;
        this.xCenter = this.x + 16;
        this.xRight = this.xCenter + 16;
        this.xPush = this.xRight - 8;
        this.yTop = this.y + 60;
        this.yBottom = this.yTop + 48;

        // Attack
        this.xLeftAttack = this.xRight;
        this.xRightAttack = this.xLeftAttack + 48;
        this.yTopAttack = this.yTop;
        this.yBottomAttack = this.yBottom;

        // Walk Attack + Run Attack
        this.xRightWalkAttack = this.xLeftAttack + 36;

        // Extra Attack
        this.yTopExtraAttack = this.y + 32;
        this.yBottomExtraAttack = this.yTopExtraAttack + 80;
    }


    // Funktionen in game.js definieren und zusammenfassen!!!
}