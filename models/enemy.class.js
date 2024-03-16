class Enemy extends MoveableObject {
    width = 128;
    height = this.width;
    x = 960;
    y = 540 - this.height - 16;
    startTime = new Date().getTime();
    speed = 64 / 60;
    otherDirection = true;
    FLIP_BOOK = new FlipBook();
    FLIP_BOOK_HURT = this.FLIP_BOOK.dinoHurt;
    FLIP_BOOK_IDLE = this.FLIP_BOOK.dinoIdle;
    FLIP_BOOK_WALK = this.FLIP_BOOK.dinoWalk;
    world;


    constructor() {
        super().loadImage('img/enemies/dino/Idle/idle1.png');
        this.loadImages(this.FLIP_BOOK_HURT);
        this.loadImages(this.FLIP_BOOK_IDLE);
        this.loadImages(this.FLIP_BOOK_WALK);
        this.animate();
        // this.animate();
        // this.applyGravity();
        // this.isOnTile();
    }


    animate() {
        setInterval(() => {
            let timeStamp = new Date().getTime();
            if (keyboard['keyA'].keydown && this.x - 32 < world.character.xRightAttack) {
                this.x = this.x;
            } else if ((timeStamp - this.startTime) % 4000 > 2000) {
                this.x -= this.speed;
            } else {
                this.x = this.x;
            }
        }, 1000 / 60);

        setInterval(() => {
            if (keyboard['keyA'].keydown && this.x - 32 < world.character.xRightAttack) {
                this.playAnimation(this.FLIP_BOOK_HURT);
            } else {
                let timeStamp = new Date().getTime();
                if ((timeStamp - this.startTime) % 4000 > 2000) {
                    this.playAnimation(this.FLIP_BOOK_WALK)
                } else {
                    this.playAnimation(this.FLIP_BOOK_IDLE);
                }
            }
        }, 100);
    }
}