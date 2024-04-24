class StairwayBottom extends DrawableObject {
    path = './img/objects/ladder1.png';


    constructor(x, y) {
        super(x, y, 32);
        this.loadImage(this.path);
    }


    get xCenter() {
        return this.x + this.width / 2;
    }


    get yTop() {
        return this.y;
    }


    get yCenter() {
        return this.y + this.height / 2 - 32;
    }


    get yBottom() {
        return this.y + this.height;
    }
}