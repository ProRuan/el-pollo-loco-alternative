class MoveableObject extends DrawableObject {
    speed = 0.15;    // to edit
    otherDirection = false;
    speedY = 0;
    acceleration = 0.64;    // to edit - 1/20 from jump height
    jumpHeightMax = 540;
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
                if (this.y < this.jumpHeightMax) {
                    this.jumpHeightMax = this.y;
                    console.log(372 - this.jumpHeightMax);
                }
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }


    isAboveGround() {
        return this.yBottom < 480;
    }


    jump() {
        this.speedY = 14;    // jump height 160
    }
}