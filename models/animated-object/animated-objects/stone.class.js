class Stone extends AnimatedObject {
    currentImage = 0;
    rolling = false;


    constructor(x, y) {
        super(x, y, 'Stone');
        this.setSize(64);
        this.animate();
    }


    get xLeft() {
        return this.x + 16;
    }


    get xRight() {
        return this.x + 48;
    }


    get yTop() {
        return this.y + 16;
    }


    get yBottom() {
        return this.y + 48;
    }


    animate() {    // provide an optional parameter and use it for upper class!!!
        setInterval(() => {
            if (this.rolling) {
                let i = this.currentImage % this.flipBook.length;
                let path = this.flipBook[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 100);
    }
}