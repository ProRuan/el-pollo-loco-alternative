class StairwayCenter extends DrawableObject {
    path = 'img/objects/stairway_center.png';


    constructor(x, y) {
        super(x, y, 32);
        this.loadImage(this.path);
    }
}