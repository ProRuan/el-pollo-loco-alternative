class Bird extends AnimatedObject {
    currentImage = 0;


    constructor(x, y) {
        super(x, y, 'Bird');
        this.setSize(64);
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.x -= 32 / 60;
            if (this.x < -64) {
                this.x = 6 * CANVAS_WIDTH;
                this.y = Math.random() * (CANVAS_HEIGHT - 4 * 64);
            }
        }, 1000 / 60);

        setInterval(() => {
            let i = this.currentImage % this.flipBook.length;
            let path = this.flipBook[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}