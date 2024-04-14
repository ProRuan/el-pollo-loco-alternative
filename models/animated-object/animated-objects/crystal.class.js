class Crystal extends AnimatedObject {
    currentImage = 0;    // double code!!!


    constructor(x, y) {
        super(x, y, 'Crystal');
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


    animate() {
        setInterval(() => {
            let i = this.currentImage % this.flipBook.length;
            let path = this.flipBook[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}