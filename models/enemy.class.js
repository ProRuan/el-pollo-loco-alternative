class Enemy extends MoveableObject {
    width = 128;
    height = this.width;
    x = 960;
    y = 540 - this.height - 16;
    speed = 64 / 60;
    otherDirection = true;
    FLIP_BOOK = new FlipBook();
    FLIP_BOOK_IDLE = this.FLIP_BOOK.dinoIdle;
    FLIP_BOOK_WALK = this.FLIP_BOOK.dinoWalk;


    constructor() {
        super().loadImage('img/enemies/dino/Idle/idle1.png');
        this.loadImages(this.FLIP_BOOK_IDLE);
        this.loadImages(this.FLIP_BOOK_WALK);
        this.animate();
        // this.animate();
        // this.applyGravity();
        // this.isOnTile();
    }


    animate() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.FLIP_BOOK_WALK);
        }, 100);
    }
}