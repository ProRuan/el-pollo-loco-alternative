class ItemBorder extends DrawableObject {
    path = 'img/inner_interface/item_border.png';
    translation = 20;


    constructor() {
        super(0.3125, 6.390625, 40);
        this.loadImage(this.path);
    }
}