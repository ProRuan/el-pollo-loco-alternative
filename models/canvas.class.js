class Canvas {


    constructor(width, height) {
        this.setCanvas(width, height);
        return this.canvas;
    }


    get width() {
        return this.canvas.width;
    }


    get height() {
        return this.canvas.height;
    }


    set width(value) {
        this.canvas.width = value;
    }


    set height(value) {
        this.canvas.height = value;
    }


    setCanvas(width, height) {
        this.canvas = getElement('canvas');
        this.width = width;
        this.height = height;
    }
}