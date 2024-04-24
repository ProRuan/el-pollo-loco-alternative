class GrassFlyingEnd extends GrassObject {


    constructor(x, y) {
        super(x, y, 'grass_flying3');
    }


    get xLeft() {
        return this.x;
    }


    get xCenter() {
        return this.x + (this.width - 8) / 2;
    }


    get xRight() {
        return this.x + this.width - 8;
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