class AnimatedObject extends DrawableObject {
    directory = 'img/objects_animated/';
    cover;
    flipBook;


    constructor(x, y, name) {
        super(x, y, 32);    // anpassen!!!
        this.setSource(name);
        this.loadImage(this.cover);
        this.loadImages(this.flipBook);
    }


    setSource(name) {
        this.setName(name);
        this.setCover(name);
        this.setFlipBook(name);
    }


    setName(name) {
        this.name = name;
    }


    setFlipBook(name) {
        name = name.toUpperCase();
        this.flipBook = FLIP_BOOK_OBJECTS[name];
    }
}