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


    constructor() {
        super(11, 2.09375);    // to edit
        this.setSize(256);
        this.setCover('shaman')
        this.loadImage(this.cover);
        this.loadFlipBookImages(this.flipBook);
        // this.loadFlipBookImages(this.magicalBook);
        this.animate();
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


    get yBottom() {
        return this.y + 204;
    }


    attack() {
        return new ShamanBlade(this).attack(world.hero);
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
            } else if (world.bombs.length > 0 && world.bombs[0] !== undefined && this.isIncluding(world.bombs[0].xCenter, world.bombs[0].yCenter)) {
                world.bombs[0].inTouch = true;
                if (!this.isHit) {
                    this.isHit = true;
                    // this.energy -= 100;
                    this.energy -= 30;
                    // console.log(this.energy);
                    this.playAnimation(FLIP_BOOK_SHAMAN.HURT);
                    setTimeout(() => {
                        delete world.bombs[0];
                        // world.bombs.splice(0, 1);
                        this.isHit = false;
                        setTimeout(() => {
                            world.bombs.splice(0, 1);
                            world.bombs.push(new Bomb(3.75, 3));
                        }, 1000);
                    }, 700);
                }
            } else {
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