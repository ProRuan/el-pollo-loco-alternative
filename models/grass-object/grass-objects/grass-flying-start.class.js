class GrassFlyingStart extends GrassObject {


    constructor(x, y) {
        super(x, y, 'flying-start');
    }


    get xLeft() {
        return this.x + 12;
    }


    get xCenter() {
        return this.x + this.width / 2;
    }


    get xRight() {
        return this.x + this.width;
    }
}