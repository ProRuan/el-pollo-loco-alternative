class Bird extends AnimatedObject {


    constructor(x, y) {
        super(x, y, 'bird');
        this.setSize(64);    // passt noch nicht!!!
        this.setSpeed(32);
        this.move(() => this.flyPermanently());
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