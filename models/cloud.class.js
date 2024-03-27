class Cloud extends Layer {


    constructor(background) {
        super(background, 5);
        this.move();
    }


    move() {
        setInterval(() => {
            this.x -= 4 / 60;
            this.keep();
        }, 1000 / 60);
    }


    keep() {
        if (this.x < -this.width) {
            this.x = LEVEL_SIZE * this.width;
        }
    }
}