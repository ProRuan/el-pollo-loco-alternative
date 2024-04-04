class ItemBorder extends DrawableObject {
    path = 'img/inner_interface/item_border.png';


    constructor(x, y) {
        super(x, y, 40);
        this.loadImage(this.path);
    }
}