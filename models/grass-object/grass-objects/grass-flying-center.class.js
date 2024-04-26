class GrassFlyingCenter extends GrassObject {


    constructor(x, y) {
        super(x, y, 'grass_flying2');
    }


    get yCenter() {
        return this.y + 30;
    }


    get yBottom() {
        return this.y + 52;
    }
}