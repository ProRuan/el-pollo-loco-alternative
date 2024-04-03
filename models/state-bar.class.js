class StateBar extends DrawableObject {
    path = 'img/inner_interface/state_bar.png';


    constructor(x, y) {
        super(x, y, 102, 18);
        this.loadImage(this.path);
    }
}