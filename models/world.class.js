class World {
    level = LEVEL_1;
    character = new Character();
    canvas;
    ctx;
    keyboard;
    camera_x = 0;


    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addGroupToMap(this.level.backgroundLayers);
        this.addToMap(this.character);


        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }


    setWorld() {
        this.character.world = this;
    }


    addGroupToMap(objectGroup) {
        objectGroup.forEach(o => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        mo.draw(this.ctx);
    }
}