class AnimatedObject extends DrawableObject {
    directory = 'img/objects_animated/';
    flipBook = FLIP_BOOK_OBJECTS;
    currentImage = 0;
    indent = 4;


    constructor(x, y, name) {
        super(x, y, 32);
        this.setCover(name);
        this.setFlipBookChapter(name);
        this.loadImage(this.cover);
        this.loadImages(this.flipBook);
    }


    get xLeft() {
        return this.x + this.indent;
    }


    get xCenter() {
        return this.x + this.width / 2;
    }


    get xRight() {
        return this.x + (this.width - this.indent);
    }


    get yTop() {
        return this.y + this.indent;
    }


    get yCenter() {
        return this.y + this.height / 2;
    }


    get yBottom() {
        return this.y + (this.height - this.indent);
    }
}