class EnergyPoint extends DrawableObject {
    path = 'img/inner_interface/energy_point.png';


    constructor(x, y) {
        super(x, y, 1, 10);
        this.loadImage(this.path);
    }
}