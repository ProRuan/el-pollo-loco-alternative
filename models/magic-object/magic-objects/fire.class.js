class Fire extends MagicObject {
    currentImage = 0;
    prolog = 3;
    otherDirection = true;
    inTouch = false;
    colliding = false;


    constructor(x, y) {
        super(x, y, 'Fire');
        this.xStart = this.x;
        this.xEnd = this.xStart - 12 * 64;
        this.move();
        this.animate();
    }


    get xCenter() {    // set value!!!
        return this.x;
    }


    get yCenter() {    // set value!!!
        return this.y + this.height / 2 - 17;
    }


    move() {
        setInterval(() => {
            if (!this.inTouch) {
                this.x -= 128 / 60;
            }
            if (this.xCenter > world.hero.xCenter + 160 && this.yCenter + 24 < world.hero.yCenter) {
                this.y += 0.25;
            } else if (this.xCenter > world.hero.xCenter + 160 && this.yCenter + 24 > world.hero.yCenter) {
                this.y -= 1.5;
            }
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