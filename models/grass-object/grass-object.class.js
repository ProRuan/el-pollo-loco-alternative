class GrassObject extends DrawableObject {
    directory = 'img/tiles/';
    indent = 8;

    constructor(x, y, name) {
        super();
        this.setSize(64);
        this.setPosition(x, y);
        this.setPath(name);
        this.loadImage(this.path);
    }


    get xLeft() {
        return this.x;
    }


    get xCenter() {
        return this.x + this.width / 2;
    }


    get xRight() {
        return this.x + this.width;
    }


    get yTop() {
        return this.y + this.indent;
    }


    get yCenter() {
        return this.y + (this.height - this.indent) / 2 + this.indent;
    }


    get yBottom() {
        return this.y + this.height;
    }
}