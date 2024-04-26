class StateBarBg extends DrawableObject {
    path = 'img/inner_interface/state_bar_bg.png';
    translation = 93;


    constructor(x, y) {
        super(x, y, 97, 13);
        this.loadImage(this.path);
    }
}