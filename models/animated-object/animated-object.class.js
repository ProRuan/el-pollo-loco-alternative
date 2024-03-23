class AnimatedObject extends DrawableObject {
    directory = 'img/objects_animated/';
    cover;
    flipBook;


    constructor(x, y, name) {
        super(x, y, 32);
        this.setCover(name);
        this.setFlipBook(name);
        this.loadImage(this.cover);
        this.loadImages(this.flipBook);
    }


    setFlipBook(name) {
        name = name.toUpperCase();
        this.flipBook = FLIP_BOOK_OBJECTS[name];
    }
}