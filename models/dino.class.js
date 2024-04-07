class Dino extends MoveableObject {
    directory = 'img/enemies/dino/';
    flipBook = FLIP_BOOK_DINO;
    speed = 128 / 60;
    speedExtraAttack = 0;
    speedRun = 256 / 60;
    energy = 100;

    coins = 0;


    groundLevel = 482;

    otherDirection = true;
    dying = false;
    dead = false;
    yStairwayMax = 228 - 108;
    yStairwayMin = 272 + 100;
    climbing = false;


    constructor() {
        super(7.4375, 0.25);    // Please verfiy!!!
        this.setCover('dino');
        this.loadImage(this.cover);
        // this.loadFlipBookImages(this.flipBook);
        // this.animate();
        // this.applyGravity();
    }


}