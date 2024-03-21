class Coin extends AnimatedObjectNew {
    name = 'Coin';


    constructor(x, y) {
        super();
        this.width = 32;
        this.height = this.width;
        this.setX(x);
        this.setY(y);
        this.setCover(this.name);
        this.loadImage(this.cover);
        this.setFlipBook(this.name);
    }
}