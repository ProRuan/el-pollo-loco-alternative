class Stone extends AnimatedObject {


    constructor(x, y) {
        super(x, y, 'Stone');
        this.setSize(64);
    }


    get yBottom() {
        return this.y + 48;
    }
}