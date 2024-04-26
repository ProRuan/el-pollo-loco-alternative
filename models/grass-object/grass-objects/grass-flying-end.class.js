class GrassFlyingEnd extends GrassObject {


    constructor(x, y) {
        super(x, y, 'grass_flying3');
    }


    get xCenter() {
        return this.x + (this.width - this.indent) / 2;
    }


    get xRight() {
        return this.x + this.width - this.indent;
    }


    get yBottom() {
        return this.y + this.height - 8;
    }
}