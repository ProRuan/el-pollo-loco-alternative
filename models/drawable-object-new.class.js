class DrawableObjectNew extends CoordinateSystem {
    width;
    height;
    img;
    imageCache = [];
    patternFile = /[a-z]+\_?[a-z]*\d+.png/;


    constructor() {
        super();
    }


    setSize(width, height) {
        this.setWidth(width);
        (!height) ? this.setHeight(width) : this.setHeight(height);
    }


    setWidth(width) {
        this.width = width;
    }


    setHeight(height) {
        this.height = height;
    }


    setImages(path, flipBook) {
        this.loadImage(path);
        this.loadImages(flipBook);
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
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