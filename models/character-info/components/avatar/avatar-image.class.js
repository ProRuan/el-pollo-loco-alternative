class AvatarImage extends DrawableObject {
    path = 'img/inner_interface/avatar.png';
    translation = 24;
    

    constructor() {
        super(0.375, 7.073125, 64);
        this.loadImage(this.path);
    }
}