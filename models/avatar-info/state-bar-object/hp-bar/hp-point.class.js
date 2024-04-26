class HpPoint extends DrawableObject {
    path = 'img/inner_interface/hp_point.png';


    constructor(x) {
        super(x, 7.90625, 1, 12);
        this.loadImage(this.path);
    }
}