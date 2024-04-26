class StairwayCenter extends DrawableObject {
    path = './img/objects/ladder2.png';


    constructor(x, y) {
        super(x, y, 32);
        this.loadImage(this.path);
    }
}