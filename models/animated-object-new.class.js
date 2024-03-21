class AnimatedObjectNew extends DrawableObjectNew {
    directory = 'img/objects_animated/';
    cover;
    flipBook;


    constructor() {
        super();
        this.width = 32;
        this.height = this.width;
    }


    setCover(folder) {
        let file = folder.toLowerCase() + '.png';
        this.cover = this.directory + file;
    }


    setFlipBook(name) {
        name = name.toUpperCase();
        this.flipBook = FLIP_BOOK_OBJECTS[name];
    }
}