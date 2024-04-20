class Bomb extends AnimatedObject {
    currentImage = 0;
    speedY = 12.5;
    acceleration = 0.5;
    prolog = 4;
    inTouch = false;
    exploding = false;
    sound = './audio/elemental_magic/Fantasy_Game_Magic_Fire_Instant_Cast_Spell_D.wav';


    constructor(x, y) {
        super(x, y, 'Bomb');
        this.setSize(256);
        this.setOtherDirection();
        this.move();
        this.animate();
    }


    get xCenter() {
        return this.x + this.width / 2;
    }


    get yCenter() {
        return this.y + this.height / 2;
    }


    setOtherDirection() {
        if (world.hero.otherDirection) {
            this.otherDirection = true;
            this.x += 16;    // set value!!!
        } else {
            this.otherDirection = false;
        }
    }


    move() {
        setInterval(() => {
            // if (this.y > 540) {
            //     this.x = 3.75 * 64;
            //     this.y = 540 - 3.5 * 64;
            //     this.speedY = 12.5;
            // }

            if (!this.inTouch && this.y < 540) {    // set final y value!!!
                let heightFactor = Math.round((480 - world.hero.yCenter) / 120);
                (this.otherDirection) ? this.x -= 8.5 : this.x += 8.5 - heightFactor;
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
            new Audio(this.sound).play();
            setTimeout(() => {
                world.bomb = undefined;
            }, 700);
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