class Character extends MoveableObject {
    width = 128;
    height = this.width;
    x = 32;
    // y = 0;
    y = 540 - this.height - 32;
    speed = 1.5;
    runSpeed = 2;
    idleDelay = 0;
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
    }


    animate() {
        setInterval(() => {
            if (this.world.keyboard.arrowLeft.value && this.x > 32) {
                this.moveLeft();
                this.otherDirection = true;
            }
            if (this.world.keyboard.arrowUp.value) {
                this.climbUp();
            }
            if (this.world.keyboard.arrowRight.value && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.arrowDown.value) {
                this.climbDown();
            }
            if (this.world.keyboard.space.keydown && !this.isAboveGround()) {
                this.jump();
            }

            this.world.camera_x = -this.x + 32;
        }, 1000 / 60);

        setInterval(() => {
            if (this.getKeydownOption('arrowUp', 'arrowDown')) {
                this.playAnimation(this.FLIP_BOOK_CLIMB);    // still to edit
            } else if (this.getKeydown('keyD')) {
                this.playAnimation(this.FLIP_BOOK_EXTRA_ATTACK);
                this.idleDelay = new Date().getTime();
            } else if (this.getKeydown('space') || this.isAboveGround()) {
                this.playAnimation(this.FLIP_BOOK_JUMP);
                this.idleDelay = new Date().getTime();
            } else if (this.getDoubleClickOption('arrowLeft', 'arrowRight') && this.getKeydown('keyA')) {
                this.playAnimation(this.FLIP_BOOK_RUN_ATTACK);
                this.idleDelay = new Date().getTime();
            } else if (this.getDoubleClickOption('arrowLeft', 'arrowRight')) {
                this.playAnimation(this.FLIP_BOOK_RUN);
                this.idleDelay = new Date().getTime();
            } else if (this.getKeydownOption('arrowLeft', 'arrowRight') && this.getKeydown('keyA')) {
                this.playAnimation(this.FLIP_BOOK_WALK_ATTACK);
                this.idleDelay = new Date().getTime();
            } else if (this.getKeydownOption('arrowLeft', 'arrowRight')) {
                this.playAnimation(this.FLIP_BOOK_WALK);
                this.idleDelay = new Date().getTime();
            } else if (this.getKeydown('keyA')) {
                this.playAnimation(this.FLIP_BOOK_ATTACK);
                this.idleDelay = new Date().getTime();
            } else if (!keyboard.keydown) {
                this.loadImage('img/characters/knight/knight.png');
                let timeStamp = new Date().getTime();
                if (timeStamp - this.idleDelay > 100) {
                    this.playAnimation(this.FLIP_BOOK_IDLE);
                }
            }
        }, 100);
    }


    getKeydownOption(keyCodeA, keyCodeB) {
        return this.getKeydown(keyCodeA) || this.getKeydown(keyCodeB);
    }


    getKeydown(keyCode) {
        return this.world.keyboard[keyCode].keydown;
    }


    getDoubleClickOption(keyCodeA, keyCodeB) {
        return this.getDoubleClick(keyCodeA) || this.getDoubleClick(keyCodeB);
    }


    getDoubleClick(keyCode) {
        return this.world.keyboard[keyCode].doubleClick;
    }


    // Funktionen in game.js definieren und zusammenfassen!!!
}