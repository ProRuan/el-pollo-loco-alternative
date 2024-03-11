class Character extends MoveableObject {
    width = 128;
    height = this.width;
    x = 32;
    y = 540 - 128 - 32;
    IMAGE_DEFAULT = 'img/characters/knight/knight.png';


    constructor() {
        super().loadImage(this.IMAGE_DEFAULT);
    }
}