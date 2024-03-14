class GroundGrassCenter extends DrawableObject {
    IMAGE = 'img/tiles/ground-grass-center.png';
    width = 64;
    height = this.width;
    

    constructor(x, y) {
        super().loadImage(this.IMAGE);
        this.x = x;
        this.y = 540 - this.height - y;
    }
}