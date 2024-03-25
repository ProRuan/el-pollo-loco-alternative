class GrassStart extends GrassObject {


    constructor(x, y) {
        super(x, y, 'start');
    }


    get yTop() {
        return this.y + 6;
    }
}