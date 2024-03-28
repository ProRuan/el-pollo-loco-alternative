class Tree extends DrawableObject {
    path = 'img/objects/tree.png';


    constructor(x, y) {
        super(x, y, 256);
        this.loadImage(this.path);
    }
}