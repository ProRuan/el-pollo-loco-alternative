class Cloud extends Layer {


    constructor(background) {
        super(background, 5);
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.move();
            this.reset();
        }, 1000 / 60);
    }


    move() {
        this.x -= 4 / 60;
    }


    reset() {
        if (this.x < -this.width) {
            this.x = LEVEL_SIZE * this.width;
        }
    }
}