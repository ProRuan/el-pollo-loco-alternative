class Coin extends AnimatedObjectNew {
    constructor(x, y) {
        super();
        this.width = 32;
        this.height = this.width;
        this.setX(x);
        this.setY(y);
        this.setImage('Coin');
        this.setFlipBook('COIN');
    }
}