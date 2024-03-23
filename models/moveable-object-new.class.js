class MoveableObjectNew extends DrawableObject {
    directory = 'img/characters/knight/';
    cover;
    flipBook;


    constructor(x, y, name) {
        super(x, y, 128);    // anpassen!!!
        this.setCover(name);
        this.loadImage(this.cover);
        this.loadImages(FLIP_BOOK_HERO.WALK);
    }


    setFlipBook(name) {    // doppelt???
        name = name.toUpperCase();
        this.flipBook = FLIP_BOOK_OBJECTS[name];
    }
}