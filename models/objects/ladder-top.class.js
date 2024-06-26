class LadderTop extends DrawableObject {
    path = './img/objects/ladder3.png';


    constructor(x, y) {
        super(x, y, 32);
        this.loadImage(this.path);
    }


    get yCenter() {
        return this.y + this.height / 2 - 16;
    }
}