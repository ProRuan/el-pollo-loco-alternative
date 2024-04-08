class GrassFlyingStart extends GrassObject {


    constructor(x, y) {
        super(x, y, 'flying-start');
    }


    get xLeft() {
        return this.x + 8;
    }


    get xCenter() {
        return this.x + 36;
    }


    get xRight() {
        return this.x + this.width;
    }


    get yTop() {
        return this.y + 8;
    }


    get yCenter() {
        return this.y + 36;
    }


    get yBottom() {
        return this.y + this.height - 8;
    }
}