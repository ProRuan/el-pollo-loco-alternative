class EnergyBarBorder extends DrawableObject {
    path = 'img/inner_interface/state_bar_border.png';
    translation = 92;


    constructor() {
        super(1.4375, 7.53125, 102, 18);
        this.loadImage(this.path);
    }
}