class Coin extends AnimatedObjectNew {
    name = 'Coin';


    constructor(x, y) {
        super();
        this.width = 32;
        this.height = this.width;
        this.setX(x);
        this.setY(y);
        this.setImage(this.name);
        this.setFlipBook(this.name);
    }
}