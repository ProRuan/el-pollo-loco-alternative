class Tile extends DrawableObject {
    width = 64;
    height = this.width;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}