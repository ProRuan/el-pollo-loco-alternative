class MagicObject extends DrawableObject {
    directory = 'img/bosses/magic/';
    cover;
    flipBook = FLIP_BOOK_MAGIC;


    constructor(x, y, name) {
        super(x, y, 256);
        this.setCover(name);
        this.setFlipBookChapter(name);
        this.loadImage(this.cover);
        this.loadImages(this.flipBook);
    }
}