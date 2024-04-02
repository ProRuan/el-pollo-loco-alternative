class StairwayBottom extends DrawableObject {
    path = 'img/objects/stairway_bottom.png';


    constructor(x, y) {
        super(x, y, 32);
        this.loadImage(this.path);
    }


    get xCenter() {
        return this.x + this.width / 2;
    }


    get yCenter() {
        return this.y + this.height / 2;
    }
}