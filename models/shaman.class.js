class Shaman extends MoveableObject {
    directory = 'img/bosses/shaman/';
    flipBook = FLIP_BOOK_SHAMAN;
    // magicalBook = FLIP_BOOK_MAGIC;
    speed = 128 / 60;    // to edit
    speedRun = 256 / 60;    // to edit
    otherDirection = true;


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
            if (this.isIncluding(world.bomb.xCenter, world.bomb.yCenter)) {
                this.playAnimation(FLIP_BOOK_SHAMAN.HURT);    // if for faster intervall!!!
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