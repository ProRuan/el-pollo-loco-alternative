class Background extends DrawableObject {
    width = 960;    // edit for other resolution?
    height = 540;    // edit for other resolution?


    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 0;    // edit for other resolution?
    }
}