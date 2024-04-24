class ItemBomb extends DrawableObject {
    path = 'img/inner_interface/bomb.png';


    constructor(x, y) {
        super(x, y, 35, 35);
        this.loadImage(this.path);
    }
}