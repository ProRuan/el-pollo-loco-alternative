class MoveableObjectNew extends DrawableObject {
    directory = 'img/characters/knight/';
    cover;
    flipBook;


    constructor(x, y, name) {
        super(x, y, 128);    // anpassen!!!
        this.setSource(name);
        this.loadImage(this.cover);
        this.loadImages(FLIP_BOOK_HERO.WALK);
    }


    setSource(name) {
        this.setName(name);
        this.setCover(name);
        // this.setFlipBook(FLIP_BOOK_HERO.WALK);
    }


    setName(name) {
        this.name = name;
    }


    setFlipBook(name) {
        name = name.toUpperCase();
        this.flipBook = FLIP_BOOK_OBJECTS[name];
    }
}