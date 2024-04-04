class HpPoint extends DrawableObject {
    path = 'img/inner_interface/hp_point.png';


    constructor(x, y) {
        super(x, y, 1, 12);
        this.loadImage(this.path);
    }
}