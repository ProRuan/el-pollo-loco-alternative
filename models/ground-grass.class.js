class GroundGrass extends DrawableObject {
    path = 'img/tiles/ground-grass-';


    constructor(type, x, y) {
        super();
        this.setSize(64);
        this.setPosition(x, y);
        this.loadImage(path + type + '.png');
    }
}