class MoveableObject extends DrawableObject {
    speed = 0.15;    // to edit
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;    // to edit
    energy = 100;
    lastHit = 0;    // to rename?


    moveLeft() {
        this.x -= this.speed;
        if (keyboard.DOUBLE_CLICKED) {
            this.x -= this.runSpeed;
        }
    }


    climbUp() {
        this.y -= this.speed;
    }


    moveRight() {
        this.x += this.speed;
        if (keyboard.DOUBLE_CLICKED) {
            this.x += this.runSpeed;
        }
    }


    climbDown() {
        this.y += this.speed;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}