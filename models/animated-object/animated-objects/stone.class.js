class Stone extends AnimatedObject {


    constructor(x, y) {
        super(x, y, 'Stone');
        this.setSize(64);
    }


    get xLeft() {
        return this.x + 16;
    }


    get xRight() {
        return this.x + 48;
    }


    get yTop() {
        return this.y + 16;
    }


    get yBottom() {
        return this.y + 48;
    }
}