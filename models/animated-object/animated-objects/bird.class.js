class Bird extends AnimatedObject {


    constructor(x, y) {
        super(x, y, 'bird');
        this.setSize(64);
        this.setSpeed(32);
        this.move(() => this.floatPermanently());
    }
}