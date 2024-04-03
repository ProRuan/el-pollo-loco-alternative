class HpBar extends DrawableObject {
    path = 'img/inner_interface/hp_bar.png';


    constructor(x, y) {
        super(x, y, 127, 20);
        this.loadImage(this.path);
    }
}