class Bird extends AnimatedObject {
    speed = 32 / 60;


    constructor(x, y) {
        super(x, y, 'Bird');
        this.setSize(64);    // passt noch nicht!!!
        this.move(() => this.flyPermanently());
        this.animate();
    }


    flyPermanently() {
        this.fly();
        this.keep();
    }


    fly() {
        this.x -= this.speed;
    }


    keep() {
        if (this.x < -this.width) {
            this.x = LEVEL_SIZE * ORIGINAL_CANVAS_WIDTH;
        }
    }
}