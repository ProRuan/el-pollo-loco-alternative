class StaminaPoint extends DrawableObject {
    path = 'img/inner_interface/stamina_point.png';


    constructor(x, y) {
        super(x, y, 1, 10);
        this.loadImage(this.path);
    }
}