class GrassStart extends GrassObject {


    constructor(x, y) {
        super(x, y, 'start');
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