class AvatarFrame extends DrawableObject {
    path = 'img/inner_interface/avatar_frame.png';
    translation = 16;
    

    constructor() {
        super(0.25, 6.953125, 76, 79);
        this.loadImage(this.path);
    }
}