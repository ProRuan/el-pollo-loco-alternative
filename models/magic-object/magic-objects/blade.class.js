class Blade extends MagicObject {
    currentImage = 0;
    otherDirection = true;


    constructor(x, y) {
        super(x, y, 'Blade');
        this.move();
        this.animate();
    }


    get xCenter() {    // set value!!!
        return this.x;
    }


    get yCenter() {    // set value!!!
        return this.y + this.height / 2;
    }


    move() {
        setInterval(() => {
            this.x -= 192 / 60;
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