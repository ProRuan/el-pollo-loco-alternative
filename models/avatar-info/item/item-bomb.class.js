class ItemBomb extends DrawableObject {
    path = 'img/inner_interface/bomb.png';
    translation = 22.5;


    constructor() {
        super(0.3515625, 6.4296875, 35, 35);
        this.loadImage(this.path);
    }
}