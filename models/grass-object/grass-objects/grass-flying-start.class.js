class GrassFlyingStart extends GrassObject {


    constructor(x, y) {
        super(x, y, 'grass_flying1');
    }


    get xLeft() {
        return this.x + this.indent;
    }


    get xCenter() {
        return this.x + (this.width - this.indent) / 2 + this.indent;
    }


    get yBottom() {
        return this.y + this.height - 8;
    }
}