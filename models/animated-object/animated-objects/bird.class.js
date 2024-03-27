class Bird extends AnimatedObject {
    currentImage = 0;


    constructor(x, y) {
        super(x, y, 'Bird');
        this.setSize(64);
        this.animate();
    }


    get xCenter() {
        return this.x + this.width / 2;
    }


    get yCenter() {
        return this.y + this.height / 2;
    }


    animate() {
        setInterval(() => {
            let i = this.currentImage % this.flipBook.length;
            let path = this.flipBook[i];
            this.img = this.imageCache[path];
            this.currentImage++;

            this.x -= 1.6;
            if (this.x < -64) {
                this.x = 6 * CANVAS_WIDTH;
                this.y = Math.random() * (CANVAS_HEIGHT - 4 * 64);
            }
        }, 100);
    }
}