class Leaf extends DrawableObject {
    indent = 4;
    sound = './audio/collect/leaf.wav';


    constructor(x, y, i) {
        super(x, y, 32);
        this.setId('leaf');
        this.setPath(i);
        this.loadImage(this.path);
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


    setPath(i) {
        this.path = `./img/leaves/leaf${i}.png`;
    }
}