class EnergyPoint extends DrawableObject {
    path = 'img/inner_interface/energy_point.png';


    constructor(x) {
        super(x, 7.59375, 1, 10);
        this.loadImage(this.path);
    }
}