class MoveableObject extends DrawableObject {
    speed = 0.15;    // to edit
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;    // to edit
    energy = 100;
    lastHit = 0;    // to rename?

    
    moveRight() {
        this.x += this.speed;
    }
}