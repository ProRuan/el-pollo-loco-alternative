class MoveableObjectNew extends DrawableObject {
    directory = 'img/characters/knight/';
    cover;
    flipBook;
    currentImage = 0;

    // to check
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.64;
    jumpHeightMax = 540;
    energy = 100;
    lastHit = 0;


    constructor(x, y, name) {
        super(x, y, 128);    // anpassen!!!
        this.setCover(name);
        this.loadImage(this.cover);
        this.loadImages(FLIP_BOOK_HERO.WALK);    // nur ein Kapitel von ...
    }


    setFlipBook(name) {    // doppelt???
        name = name.toUpperCase();
        this.flipBook = FLIP_BOOK_OBJECTS[name];
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


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    

    // to check
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