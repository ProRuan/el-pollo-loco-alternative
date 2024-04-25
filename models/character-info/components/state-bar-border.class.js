class StateBarBorder extends DrawableObject {
    path = 'img/inner_interface/state_bar_border.png';
    translation = 92;


    constructor(x, y) {
        super(x, y, 102, 18);
        this.loadImage(this.path);
    }
}