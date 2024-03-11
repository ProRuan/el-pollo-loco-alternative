class Character extends MoveableObject {
    width = 128;
    height = this.width;
    x = 32;
    y = 540 - 128 - 32;
    speed = 4;
    IMAGES_WALKING_PATH = 'img/characters/knight/Walk/walk';
    IMAGES_WALKING_AMOUNT = 6;
    IMAGES_WALKING = this.loadImagesWalking(this.IMAGES_WALKING_PATH, this.IMAGES_WALKING_AMOUNT);
    world;


    constructor() {
        super().loadImage('img/characters/knight/knight.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.world.keyboard.LEFT.value) {
                this.moveLeft();
            }
            if (this.world.keyboard.RIGHT.value) {
                this.moveRight();
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT.value || this.world.keyboard.LEFT.value) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 1000 / 60 * 6);    // set value!!! + array.length!!!
    }


    loadImagesWalking(path, amount) {
        let images = [];
        for (let i = 0; i < amount; i++) {
            let serial = i + 1;
            let img = path + serial + '.png';
            images.push(img);
        }
        return images;
    }
}