class World {
    level = level1;

    // character = new Character();
    // enemy = [new Enemy()];
    // stone = new Stone(1, 1);
    
    hero = new Knight();
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


    get COINS() {
        return this.level.COINS;
    }


    get GRASS() {
        return this.level.GRASS;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        // if (this.enemy[0] !== undefined) {
        //     this.addToMap(this.enemy[0]);
        // }
        this.addGroupToMap(this.level.BACKGROUND);
        this.addGroupToMap(this.level.GRASS);
        this.addGroupToMap(this.level.COINS);
        // this.addToMap(this.character);
        this.addToMap(this.hero);
        // this.addToMap(this.stone);


        this.ctx.translate(-this.camera_x, 0);


        requestAnimationFrame(() => {
            this.draw();
        });
    }


    setWorld() {
        this.hero.world = this;
    }


    addGroupToMap(moGroup) {
        moGroup.forEach(o => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width / 2 + 24, 0);
        this.ctx.scale(-1, 1);
        mo.x *= -1;
    }


    flipImageBack(mo) {
        mo.x *= -1;
        this.ctx.restore();
    }
}