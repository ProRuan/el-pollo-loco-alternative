class AnimatedObjectNew extends DrawableObjectNew {
    directory = 'img/objects_animated/';
    flipBook;

    
    constructor() {
        super();
    }


    setFlipBook(name) {
        this.flipBook = FLIP_BOOK_OBJECTS[name];
    }
}