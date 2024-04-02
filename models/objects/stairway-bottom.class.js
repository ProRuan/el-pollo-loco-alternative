class StairwayBottom extends DrawableObject {
    path = 'img/objects/stairway_bottom.png';


    constructor(x, y) {
        super(x, y, 32);
        this.loadImage(this.path);
    }
}