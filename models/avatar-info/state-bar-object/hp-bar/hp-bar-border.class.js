class HpBarBorder extends DrawableObject {
    path = 'img/inner_interface/hp_bar_border.png';
    translation = 92;


    constructor() {
        super(1.4375, 7.8125, 127, 20);
        this.loadImage(this.path);
    }
}