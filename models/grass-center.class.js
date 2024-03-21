class GrassCenter extends DrawableObjectNew {
    path = 'img/tiles/grass-center.png';


    constructor(x, y) {
        super();
        this.width = 64;
        this.height = this.width;
        this.setX(x);
        this.setY(y);
    }
}