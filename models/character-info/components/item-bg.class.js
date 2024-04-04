class ItemBg extends DrawableObject {
    path = 'img/inner_interface/item_bg.png';


    constructor(x, y) {
        super(x, y, 34, 35);
        this.loadImage(this.path);
    }
}