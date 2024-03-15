class AnimatedObject extends MoveableObject {
    width = 64;
    height = this.width;
    x = 256;
    y = 540 - this.height - 32;
    world;


    constructor() {
        super().loadImage('img/objects_animated/Stone/stone1.png');
    }
}