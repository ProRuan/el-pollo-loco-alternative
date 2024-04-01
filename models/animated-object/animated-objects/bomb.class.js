class Bomb extends AnimatedObject {
    currentImage = 0;
    speedY = 12.5;
    acceleration = 0.5;
    prolog = 4;
    inTouch = false;
    exploding = false;


    constructor(x, y) {
        super(x, y, 'Bomb');
        this.setSize(256);
        this.move();
        this.animate();
    }


    get xCenter() {
        return this.x + this.width / 2;
    }


    get yCenter() {
        return this.y + this.height / 2;
    }


    move() {
        setInterval(() => {
            if (this.y > 540) {
                this.x = 3.75 * 64;
                this.y = 540 - 3.5 * 64;
                this.speedY = 12.5;
            }
            if (!this.inTouch) {
                this.x += 8.5;
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }


    animate() {
        setInterval(() => {
            (!this.inTouch) ? this.animateThrow() : this.animateExplosion();
        }, 100);
    }


    animateThrow() {
        let i = this.currentImage % this.prolog;
        let path = this.flipBook[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    animateExplosion() {
        if (!this.exploding) {
            this.currentImage = 0;
            this.exploding = true;
        }
        let i = (this.currentImage % (this.flipBook.length - this.prolog) + this.prolog) % this.flipBook.length;
        let path = this.flipBook[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        // setTimeout(() => {
        //     world.bombs.splice[0, 1];
        // }, 700);
    }
}