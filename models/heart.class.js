class Heart extends AnimatedObjectNew {
    name = 'Heart';


    constructor(x, y) {
        super();
        this.setX(x);
        this.setY(y);
        this.setCover(this.name);
        this.loadImage(this.cover);
        this.setFlipBook(this.name);
    }
}