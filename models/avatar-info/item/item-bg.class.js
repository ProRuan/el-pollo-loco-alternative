class ItemBg extends DrawableObject {
    path = 'img/inner_interface/item_bg.png';
    translation = 23;


    constructor() {
        super(0.359375, 6.4295875, 34, 35);
        this.loadImage(this.path);
    }
}