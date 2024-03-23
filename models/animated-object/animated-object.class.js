class AnimatedObject extends DrawableObject {
    directory = 'img/objects_animated/';
    cover;
    flipBook = FLIP_BOOK_OBJECTS;


    constructor(x, y, name) {
        super(x, y, 32);
        this.setCover(name);
        this.setFlipBookChapter(name);
        this.loadImage(this.cover);
        this.loadImages(this.flipBook);
    }
}