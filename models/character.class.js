class Character extends MoveableObject {
    width = 128;
    height = this.width;
    x = 32;
    y = 540 - 128 - 32;
    speed = 4;
    FLIP_BOOK = new FlipBook();
    FLIP_BOOK_ATTACK = this.FLIP_BOOK.attack;
    FLIP_BOOK_CLIMB = this.FLIP_BOOK.climb;
    FLIP_BOOK_DEATH = this.FLIP_BOOK.death;
    FLIP_BOOK_EXTRA_ATTACK = this.FLIP_BOOK.extraAttack;
    FLIP_BOOK_HURT = this.FLIP_BOOK.hurt;
    FLIP_BOOK_IDLE = this.FLIP_BOOK.idle;
    FLIP_BOOK_JUMP = this.FLIP_BOOK.jump;
    FLIP_BOOK_HIGH_JUMP = this.FLIP_BOOK.highJump;
    FLIP_BOOK_PUSH = this.FLIP_BOOK.push;
    FLIP_BOOK_RUN = this.FLIP_BOOK.run;
    FLIP_BOOK_RUN_ATTACK = this.FLIP_BOOK.runAttack;
    FLIP_BOOK_WALK = this.FLIP_BOOK.walk;
    FLIP_BOOK_WALK_ATTACK = this.FLIP_BOOK.walkAttack;
    world;

    constructor() {
        super().loadImage('img/characters/knight/knight.png');
        this.loadImages(this.FLIP_BOOK_CLIMB);
        this.loadImages(this.FLIP_BOOK_ATTACK);
        this.loadImages(this.FLIP_BOOK_DEATH);
        this.loadImages(this.FLIP_BOOK_HURT);
        this.loadImages(this.FLIP_BOOK_EXTRA_ATTACK);
        this.loadImages(this.FLIP_BOOK_IDLE);
        this.loadImages(this.FLIP_BOOK_JUMP);
        this.loadImages(this.FLIP_BOOK_HIGH_JUMP);
        this.loadImages(this.FLIP_BOOK_PUSH);
        this.loadImages(this.FLIP_BOOK_RUN);
        this.loadImages(this.FLIP_BOOK_RUN_ATTACK);
        this.loadImages(this.FLIP_BOOK_WALK);
        this.loadImages(this.FLIP_BOOK_WALK_ATTACK);
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.world.keyboard.LEFT.value) {
                this.moveLeft();
                this.otherDirection = true;
            }
            if (this.world.keyboard.UP.value) {
                this.climbUp();
            }
            if (this.world.keyboard.RIGHT.value) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.DOWN.value) {
                this.climbDown();
            }

            this.world.camera_x = -this.x + 32;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.UP.value || this.world.keyboard.DOWN.value) {
                this.playAnimation(this.FLIP_BOOK_CLIMB);
            }
            if (this.world.keyboard.RIGHT.value || this.world.keyboard.LEFT.value) {
                this.playAnimation(this.FLIP_BOOK_WALK);
            }
            if (!keyboard.KEYDOWN) {
                this.loadImage('img/characters/knight/knight.png');
                // this.playAnimation(this.FLIP_BOOK_IDLE);
            }
        }, 1000 / 60 * 6);    // set value!!! + array.length!!!
    }
}