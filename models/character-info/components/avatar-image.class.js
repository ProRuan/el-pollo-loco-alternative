class AvatarImage extends DrawableObject {
    path = 'img/inner_interface/avatar.png';


    constructor(x, y) {
        super(x, y, 64);
        this.loadImage(this.path);
    }
}