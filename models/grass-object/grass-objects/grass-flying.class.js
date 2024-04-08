class GrassFlying extends GrassObject {


    constructor(x, y) {
        super(x, y, 'flying');
    }


    get xLeft() {
        return this.x + 8;
    }


    get xCenter() {
        return this.x + this.width / 2;
    }


    get xRight() {
        return this.x + this.width - 8;
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