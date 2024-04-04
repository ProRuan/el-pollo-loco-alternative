class AvatarImage extends DrawableObject {
    path = 'img/inner_interface/hero.png';


    constructor(x, y) {
        super(x, y, 64);
        this.loadImage(this.path);
    }
}