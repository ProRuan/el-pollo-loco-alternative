class HpBarBorder extends DrawableObject {
    path = 'img/inner_interface/hp_bar_border.png';


    constructor(x, y) {
        super(x, y, 127, 20);
        this.loadImage(this.path);
    }
}