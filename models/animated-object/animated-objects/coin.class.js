class Coin extends AnimatedObject {


    constructor(x, y) {
        super(x, y, 'Coin');
    }


    get xCenter() {
        return this.x + this.width / 2;
    }


    get yCenter() {
        return this.y + this.height / 2;
    }
}