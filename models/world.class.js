class World {
    canvas;
    ctx;
    keyboard;

    background = new Background('img/background/Background.png', 0);


    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.draw();
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // camera

        this.addToMap(this.background);

        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }


    addToMap(background) {
        background.draw(this.ctx);
    }
}