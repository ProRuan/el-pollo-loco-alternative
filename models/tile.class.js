class Tile extends DrawableObject {
    constructor(type, x, y) {
        (!y) ? super(x) : super(x, y);
        this.path = `img/tiles/${type}.png`;
        this.loadImage(this.path);
    }
}