class AnimatedObject extends DrawableObject {
    directory = 'img/objects_animated/';
    cover;
    flipBook;
    imageCache = [];
    patternFile = /[a-z]+\_?[a-z]*\d+.png/;


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


    setImages(path, flipBook) {
        this.loadImage(path);
        this.loadImages(flipBook);
    }


    loadImages(flipBook) {
        flipBook.forEach(chapter => {
            let img = new Image();
            img.src = chapter;
            let file = chapter.match(this.patternFile);
            this.imageCache[file] = img;
        });
    }
}