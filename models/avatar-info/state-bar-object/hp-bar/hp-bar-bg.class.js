class HpBarBg extends DrawableObject {
    path = 'img/inner_interface/hp_bar_bg.png';
    translation = 95.5;


    constructor() {
        super(1.484375, 7.859375, 121, 14);
        this.loadImage(this.path);
    }
}