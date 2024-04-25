class Bird extends AnimatedObject {
    speed = 32 / 60;


    constructor(x, y) {
        super(x, y, 'Bird');
        this.setSize(64);    // passt noch nicht!!!
        this.move();
        this.animate();
    }


    move() {
        setInterval(() => {
            this.fly();
            this.keep();
        }, 1000 / 60);
    }


    fly() {
        this.x -= this.speed;
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


    playAnimation() {    // double code!!!
        let i = this.currentImage % this.flipBook.length;
        let path = this.flipBook[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}