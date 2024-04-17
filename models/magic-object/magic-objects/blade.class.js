class Blade extends MagicObject {
    currentImage = 0;
    prolog = 3;
    otherDirection = true;
    inTouch = false;
    colliding = false;
    radDispl = 152;


    constructor(x, y) {
        super(x, y, 'Blade');
        this.xStart = this.x;
        this.xEnd = this.xStart - 12 * 64 - 64;
        this.move();
        this.animate();
    }


    get xCenter() {    // set value!!!
        return this.x + 128;
    }


    get xLeft() {
        return this.xCenter - 12;
    }


    get xRight() {
        return this.xCenter + 36;
    }


    get yCenter() {    // set value!!!
        return this.y + this.height / 2;
    }


    get yTop() {
        return this.yCenter - 8;
    }


    get yBottom() {
        return this.yCenter + 8;
    }


    move() {
        setInterval(() => {
            if (!this.directionSet) {    // at the constructor()???
                this.speedY = (world.hero.yCenter > world.ENDBOSS.yCenter) ? 0.125 : -1.625;
                this.directionSet = true;
            }
            if (!this.inTouch) {
                this.x -= 192 / 60;
                this.y += this.speedY;
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