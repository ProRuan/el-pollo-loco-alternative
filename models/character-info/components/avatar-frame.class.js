class AvatarFrame extends DrawableObject {
    path = 'img/inner_interface/avatar_frame.png';


    constructor(x, y) {
        super(x, y, 76, 79);
        this.loadImage(this.path);
    }
}