class HpBarBg extends DrawableObject {
    path = 'img/inner_interface/hp_bar_bg.png';


    constructor(x, y) {
        super(x, y, 121, 14);
        this.loadImage(this.path);
    }
}