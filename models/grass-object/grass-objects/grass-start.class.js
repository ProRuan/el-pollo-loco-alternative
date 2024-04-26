class GrassStart extends GrassObject {


    constructor(x, y) {
        super(x, y, 'grass1');
    }


    get xLeft() {
        return this.x + this.indent;
    }


    get xCenter() {
        return this.x + (this.width - this.indent) / 2 + this.indent;
    }
}