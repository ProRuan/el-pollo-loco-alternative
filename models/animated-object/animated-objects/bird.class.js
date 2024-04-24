class Bird extends AnimatedObject {
    currentImage = 0;
    speed = 32 / 60;


    constructor(x, y) {
        super(x, y, 'Bird');
        this.setSize(64);
        this.move();
        this.animate();
    }


    move() {
        setInterval(() => {
            this.x -= this.speed;
            this.keep();
        }, 1000 / 60);
    }


    keep() {
        if (this.x < -this.width) {
            this.x = LEVEL_SIZE * ORIGINAL_CANVAS_WIDTH;
        }
    }


    animate() {
        setInterval(() => {
            this.playAnimation();
        }, 100);
    }


    playAnimation() {
        let i = this.currentImage % this.flipBook.length;
        let path = this.flipBook[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}