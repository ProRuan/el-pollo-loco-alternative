class StairwayTop extends DrawableObject {
    path = 'img/objects/stairway_top.png';


    constructor(x, y) {
        super(x, y, 32);
        this.loadImage(this.path);
    }
}