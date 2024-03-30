class MoveableObject extends DrawableObject {
    // directory = 'img/characters/knight/';
    cover;
    flipBook;
    currentImage = 0;


    // to check

    // speed = 0.15;
    // otherDirection = false;
    // speedY = 0;
    speedJump = 10;
    speedHighJump = 13;
    acceleration = 0.5;
    jumpHeightMax = 540;
    grounded = true;
    // energy = 100;
    // lastHit = 0;


    constructor(x, y) {
        super(x, y, 128);    // anpassen!!!
        // this.setCover(name);
        // this.loadImage(this.cover);
    }


    setFlipBook(name) {    // doppelt???
        name = name.toUpperCase();
        this.flipBook = FLIP_BOOK_OBJECTS[name];
    }


    move(locigal) {
        (locigal) ? this.moveRight() : this.moveLeft();
    }


    moveLeft() {
        if (keyboard.arrowLeft.doubleClick && keyboard.arrowLeft.keydown) {
            this.x -= this.speedRun;
        } else if (keyboard.arrowLeft.keydown) {
            this.x -= this.speed;
        }
    }


    moveRight() {
        if (keyboard.arrowRight.doubleClick && keyboard.arrowRight.keydown) {
            this.x += this.speedRun;
        } else if (keyboard.arrowRight.keydown) {
            this.x += this.speed;
        }
    }


    climb(locigal) {
        (locigal) ? this.y -= this.speed : this.y += this.speed;
    }


    playAnimation(flipBook) {
        let i = this.currentImage % flipBook.length;
        let path = flipBook[i];
        this.img = this.imageCache[path];
        this.currentImage++;


        // let i = this.currentImage % images.length;
        // let path = images[i];
        // this.img = this.imageCache[path];
        // this.currentImage++;
    }




    // to check

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            } else {
                this.y = this.groundLevel - 110;
                this.speedY = 0;
            }
        }, 1000 / 60);
    }


    isAboveGround() {
        return this.y + 110 < this.groundLevel || !this.grounded;
    }


    jump() {
        this.speedY = 12.5;    // jump height 160
        this.isJumpStart = true;
        this.isJumping = true;
        this.isFallStart = true;
        this.isFalling = true;
    }


    playAnimationJumpStart(flipBook) {
        let path = flipBook[0];
        this.img = this.imageCache[path];
        setTimeout(() => {
            path = flipBook[1];
            this.img = this.imageCache[path];
        }, 100);
    }


    playAnimationFallStart(flipBook) {
        let path = flipBook[3];
        this.img = this.imageCache[path];
        setTimeout(() => {
            path = flipBook[4];
            this.img = this.imageCache[path];
        }, 100);
    }
}