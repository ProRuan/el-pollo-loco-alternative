class GrassFlyingCenter extends GrassObject {


    constructor(x, y) {
        super(x, y, 'grass_flying2');
    }


    get xLeft() {
        return this.x;
    }


    get xCenter() {
        return this.x + this.width / 2;
    }


    get xRight() {
        return this.x + this.width;
    }


    get yTop() {
        return this.y + 8;
    }


    get yCenter() {
        return this.y + 30;
    }


    get yBottom() {
        return this.y + 52;
    }
}