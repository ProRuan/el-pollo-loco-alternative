class Shaman extends MoveableObject {
    directory = 'img/bosses/shaman/';
    flipBook = FLIP_BOOK_SHAMAN;
    // flipBookMagic is missing ...
    speed = 128 / 60;    // to edit
    speedRun = 256 / 60;    // to edit
    otherDirection = true;


    constructor() {
        super(8, 2.09375);    // to edit
        this.setSize(256);
        this.setCover('shaman')
        this.loadImage(this.cover);
        this.loadFlipBookImages(this.flipBook);
        // this.animate();
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
            this.playAnimation(FLIP_BOOK_SHAMAN.WALK);
        }, 100);
    }
}