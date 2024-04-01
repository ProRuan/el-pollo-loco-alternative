class Blade extends MagicObject {
    currentImage = 0;
    prolog = 3;
    otherDirection = true;
    inTouch = false;
    colliding = false;


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
            if (!this.inTouch) {
                this.x -= 192 / 60;
            }
            // this.x -= 192 / 60;
            // this.keep();
        }, 1000 / 60);
    }


    animate() {
        setInterval(() => {
            (!this.inTouch) ? this.animateFlight() : this.animateCollision();
        }, 100);
    }


    animateFlight() {
        let i = this.currentImage % this.prolog;
        let path = this.flipBook[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    animateCollision() {
        if (!this.colliding) {
            this.currentImage = 0;
            this.colliding = true;
        }
        let i = (this.currentImage % (this.flipBook.length - this.prolog) + this.prolog) % this.flipBook.length;
        let path = this.flipBook[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}