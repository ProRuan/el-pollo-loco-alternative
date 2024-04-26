class StaminaBarBorder extends DrawableObject {
    path = 'img/inner_interface/state_bar_border.png';
    translation = 92;


    constructor() {
        super(1.4375, 7.25, 102, 18);
        this.loadImage(this.path);
    }
}