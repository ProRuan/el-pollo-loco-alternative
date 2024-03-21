class Coin extends AnimatedObjectNew {
    name = 'Coin';


    constructor(x, y) {
        super(x, y);
        this.setCover(this.name);
        this.loadImage(this.cover);
        this.setFlipBook(this.name);
    }
}