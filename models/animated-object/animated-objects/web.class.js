class Web extends AnimatedObject {
    currentImage = 0;


    constructor(x, y, otherDirection) {
        super(x, y, 'Web');
        this.otherDirection = otherDirection;
        this.move();
        this.animate();
    }


    get xLeft() {
        return this.x + 4;
    }


    get xCenter() {
        return this.x + this.width / 2;
    }


    get xRight() {
        return this.x + 28;
    }


    get yTop() {
        return this.y + 4;
    }


    get yCenter() {
        return this.y + this.height / 2;
    }


    get yBottom() {
        return this.y + 28;
    }


    move() {
        setInterval(() => {
            (this.otherDirection) ? this.x -= 192 / 64 : this.x += 192 / 64;
        }, 1000 / 60);
    }


    animate() {
        setInterval(() => {
            let i = this.currentImage % this.flipBook.length;
            let path = this.flipBook[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}