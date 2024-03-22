class AnimatedObject extends DrawableObject {
    directory = 'img/objects_animated/';
    cover;
    flipBook;


    constructor(x, y, name) {
        super();
        this.setSize(32);
        this.setPosition(x, y);
        this.setSource(name);
        this.setImages(this.cover, this.flipBook);
    }


    setSource(name) {
        this.setName(name);
        this.setCover(name);
        this.setFlipBook(name);
    }


    setName(name) {
        this.name = name;
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