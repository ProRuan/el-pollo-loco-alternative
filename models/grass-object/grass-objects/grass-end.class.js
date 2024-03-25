class GrassEnd extends GrassObject {


    constructor(x, y) {
        super(x, y, 'end');
    }


    get yTop() {
        return this.y + 6;
    }
}