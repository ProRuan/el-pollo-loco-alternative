class GrassEnd extends GrassObject {


    constructor(x, y) {
        super(x, y, 'grass3');
    }


    get xCenter() {
        return this.x + (this.width - this.indent) / 2;
    }


    get xRight() {
        return this.x + this.width - this.indent;
    }
}