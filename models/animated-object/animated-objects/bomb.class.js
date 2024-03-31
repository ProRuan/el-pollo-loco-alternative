class Bomb extends AnimatedObject {
    currentImage = 0;


    constructor(x, y) {
        super(x, y, 'Bomb');
        this.setSize(256);
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
            let i = this.currentImage % 4;
            let path = this.flipBook[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}