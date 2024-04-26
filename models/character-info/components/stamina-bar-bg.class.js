class StaminaBarBg extends DrawableObject {
    path = 'img/inner_interface/state_bar_bg.png';
    translation = 94.5;


    constructor() {
        super(1.4765625, 7.28125, 97, 13);
        this.loadImage(this.path);
    }
}