class MagicObject extends DrawableObject {
    directory = 'img/bosses/magic/';
    flipBook = FLIP_BOOK_MAGIC;
    otherDirection = true;
    inTouch = false;
    colliding = false;


    constructor(x, y, name) {
        super(x, y, 256);
        this.setCover(name);
        this.setFlipBookChapter(name);
        this.loadImage(this.cover);
        this.loadImages(this.flipBook);
    }
}