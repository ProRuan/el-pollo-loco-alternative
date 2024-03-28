class Shaman extends MoveableObject {
    directory = 'img/bosses/shaman/';
    flipBook = FLIP_BOOK_SHAMAN;
    // magicalBook = FLIP_BOOK_MAGIC;
    speed = 128 / 60;    // to edit
    speedRun = 256 / 60;    // to edit
    otherDirection = true;


    constructor() {
        super(8, 2.09375);    // to edit
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
            this.attack();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(FLIP_BOOK_SHAMAN.ATTACK);

            // if (world.hero.xCenter > this.x) {
            //     this.playAnimation(FLIP_BOOK_SHAMAN.ATTACK);
            // }
        }, 100);
    }
}