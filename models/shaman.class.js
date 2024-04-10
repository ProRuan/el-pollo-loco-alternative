class Shaman extends MoveableObject {
    directory = 'img/bosses/shaman/';
    flipBook = FLIP_BOOK_SHAMAN;
    // magicalBook = FLIP_BOOK_MAGIC;
    speed = 128 / 60;    // to edit
    speedRun = 256 / 60;    // to edit
    otherDirection = true;
    energy = 300;
    hit = false;
    dying = false;
    dead = false;

    radDispl = 16;

    constructor() {
        super(11, 2.09375);    // to edit
        this.setSize(256);
        this.setCover('shaman')
        this.loadImage(this.cover);
        this.loadFlipBookImages(this.flipBook);
        // this.loadFlipBookImages(this.magicalBook);
        this.animate();


        // this.idle();
    }


    get xLeft() {
        return this.x + 50;
    }


    get xCenter() {
        return this.x + 72;
    }


    get xRight() {
        return this.x + 110;
    }


    get yTop() {
        return this.y + 100;
    }


    get yCenter() {
        return this.y + 152;
    }


    get yBottom() {
        return this.y + 204;
    }


    castBlade() {    // blade as of 500
        setInterval(() => {
            this.playAnimation(FLIP_BOOK_SHAMAN.MAGIC_BLADE);
        }, 100);
    }


    castFire() {    // fire as of 500 (or 600)
        setInterval(() => {
            this.playAnimation(FLIP_BOOK_SHAMAN.MAGIC_FIRE);
        }, 100);
    }


    castLightning() {    // lightning as of 500 (600)
        setInterval(() => {
            this.playAnimation(FLIP_BOOK_SHAMAN.MAGIC_LIGHTNING);
        }, 100);
    }


    attack() {
        return new ShamanBlade(this).attack(world.hero);
    }


    idle() {
        // this.playAnimationIdle(FLIP_BOOK_SHAMAN.IDLE);
        // setTimeout(() => {
        //     this.idle();
        // }, 4 * (1000 / 6));

        setInterval(() => {
            this.playAnimation(FLIP_BOOK_SHAMAN.IDLE);
        }, 1000 / 6);
    }


    loadFlipBookImages(flipBook) {    // double code !!!
        for (const [key, value] of Object.entries(flipBook)) {
            if (Array.isArray(value)) {
                this.loadImages(flipBook[key]);
            }
        }
    }


    animate() {
        setInterval(() => {
            // this.attack();
        }, 1000 / 60);

        setInterval(() => {
            if (this.dead) {
                this.loadImage(FLIP_BOOK_SHAMAN.DEATH[FLIP_BOOK_SHAMAN.DEATH.length - 1]);
            } else if (this.energy <= 0) {
                if (!this.dying) {
                    this.currentImage = 0;
                    this.dying = true;
                }
                this.playAnimation(FLIP_BOOK_SHAMAN.DEATH);
                console.log(this.img);
                setTimeout(() => {
                    this.dead = true;
                }, 500);
            } else
                if (world.bomb !== undefined && this.isIncluding(world.bomb.xCenter, world.bomb.yCenter)) {
                    world.bomb.inTouch = true;
                    if (!this.isHit) {
                        this.isHit = true;
                        // this.energy -= 100;
                        this.energy -= 30;
                        // console.log(this.energy);
                        this.playAnimation(FLIP_BOOK_SHAMAN.HURT);
                        setTimeout(() => {
                            delete world.bomb;
                            // world.bombs.splice(0, 1);
                            this.isHit = false;
                            // setTimeout(() => {
                            //     world.bombs.splice(0, 1);
                            //     world.bombs.push(new Bomb((world.hero.x - 40) / 64, (540 - world.hero.y + 17) / 64));
                            // }, 1000);
                        }, 700);
                    }
                }
                else {
                    this.loadImage(FLIP_BOOK_SHAMAN.cover);
                }
            // this.playAnimation(FLIP_BOOK_SHAMAN.ATTACK);

            // if (world.hero.xCenter > this.x) {
            //     this.playAnimation(FLIP_BOOK_SHAMAN.ATTACK);
            // }
        }, 100);
    }


    isIncluding(x, y) {    // double code!!!
        return this.isHorizontalCenter(x) && this.isVerticalCenter(y);
    }


    isHorizontalCenter(x) {
        return this.xLeft < x && x < this.xRight;
    }


    isVerticalCenter(y) {
        return this.yTop < y && y < this.yBottom;
    }
}