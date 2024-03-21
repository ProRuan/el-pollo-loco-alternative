class AnimatedObject extends DrawableObjectNew {
    directory = 'img/objects_animated/';
    cover;
    flipBook;


    constructor(x, y, name) {
        super();
        this.setSize(32);
        this.setPosition(x, y);
        this.setName(name);
        this.setCover(this.name);
        this.loadImage(this.cover);
        this.setFlipBook(this.name);
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