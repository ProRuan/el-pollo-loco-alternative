class Character extends MoveableObject {
    width = 128;
    height = this.width;
    x = 32;
    y = 540 - 128 - 32;
    speed = 10;
    world;


    constructor() {
        super().loadImage('img/characters/knight/knight.png');
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT.value) {
                this.moveRight();
            }
        }, 1000 / 60);
    }
}