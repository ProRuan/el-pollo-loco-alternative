class World {
    canvas;
    ctx;
    keyboard;


    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
    }
}