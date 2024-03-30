class Fire extends MagicObject {
    currentImage = 0;
    otherDirection = true;


    constructor(x, y) {
        super(x, y, 'Fire');
        this.move();
        this.animate();
    }


    move() {
        setInterval(() => {
            this.x -= 128 / 60;
            // this.keep();
        }, 1000 / 60);
    }


    animate() {
        setInterval(() => {
            let i = this.currentImage % 3;
            let path = this.flipBook[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}