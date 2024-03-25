class GrassCenter extends GrassObject {


    constructor(x, y) {
        super(x, y, 'center');
    }

    
    get yTop() {
        return this.y + 6;
    }
}