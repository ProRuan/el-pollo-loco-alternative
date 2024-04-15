class Lightning extends MagicObject {
    currentImage = 0;
    prolog = 2;
    otherDirection = true;
    inTouch = false;
    colliding = false;

    conjured = false;
    searching = true;
    xTargeted;
    yTargeted;
    magicDelay = true;


    constructor(x, y) {
        super(x, y, 'Lightning');
        this.move();
        this.animate();
    }


    get xCenter() {    // set value!!!
        return this.x + 28;    // please verify!!!
    }


    get yCenter() {    // set value!!!
        return this.y + this.height / 4 * 3;
    }


    move() {
        setInterval(() => {
            if (this.searching) {
                if (!this.conjured) {
                    this.conjured = true;
                    // console.log('start: ', new Date().getTime());
                    setTimeout(() => {
                        this.searching = false;
                        setTimeout(() => {
                            this.magicDelay = false;
                            setTimeout(() => {
                                this.conjured = false;
                                this.searching = true;
                                this.magicDelay = true;
                                // console.log('end: ', new Date().getTime());
                            }, 700);
                        }, 500);
                    }, 2500);
                }
                this.x = world.hero.xCenter + 128;    // please verify!!!
                this.xTargeted = this.x;
                this.y = world.hero.yCenter - 200 - 128;
                this.yTargeted = this.y;
            } else if (!this.magicDelay) {
                this.x = this.xTargeted;    // please verify!!!
                this.y = this.yTargeted + 128;
            }
        }, 1000 / 60);
    }


    animate() {
        setInterval(() => {
            (this.magicDelay) ? this.animateFlight() : this.animateCollision();
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