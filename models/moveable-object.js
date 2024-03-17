class MoveableObject extends DrawableObject {
    speed = 0.15;    // to edit
    otherDirection = false;
    speedY = 0;
    acceleration = 0.5;    // to edit - 1/20 from jump height
    energy = 100;
    lastHit = 0;    // to rename?


    moveLeft() {
        this.x -= this.speed;
        if (keyboard.arrowLeft.doubleClick) {
            this.x -= this.runSpeed;
        }
    }


    climbUp() {
        this.y -= this.speed;
    }


    moveRight() {
        this.x += this.speed;
        if (keyboard.arrowRight.doubleClick) {
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


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }


    isAboveGround() {
        return this.yBottom < 480;
    }


    jump() {
        this.speedY = 10;    // jump height 160
    }
}