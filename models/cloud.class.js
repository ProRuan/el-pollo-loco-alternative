class Cloud extends Layer {


    constructor(background) {
        super(background, 5);
        this.setSpeed(4);
        this.move(() => this.floatPermanently());
    }
}