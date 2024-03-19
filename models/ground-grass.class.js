class GroundGrass extends DrawableObject {
    path = 'img/tiles/ground-grass-';


    constructor(type, x, y) {
        (!y) ? super(x) : super(x, y);
        this.loadImage(this.path + type + '.png');
    }
}