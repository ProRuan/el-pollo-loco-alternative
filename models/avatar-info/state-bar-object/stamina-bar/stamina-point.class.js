class StaminaPoint extends DrawableObject {
    path = 'img/inner_interface/stamina_point.png';


    constructor(x) {
        super(x, 7.3125, 1, 10);
        this.loadImage(this.path);
    }
}