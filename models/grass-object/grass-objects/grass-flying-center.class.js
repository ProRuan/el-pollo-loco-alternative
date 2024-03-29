class GrassFlyingCenter extends GrassObject {


    constructor(x, y) {
        super(x, y, 'flying-center');
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
}