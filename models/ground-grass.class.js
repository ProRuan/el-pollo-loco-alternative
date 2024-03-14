class GroundGrass extends DrawableObject {
    img = 'img/tiles/ground-grass-';
    width = 64;
    height = this.width;
    

    constructor(type, x, y) {
        super().loadImage(this.img + type + '.png');
        this.x = x;
        this.y = 540 - this.height - y;
    }
}