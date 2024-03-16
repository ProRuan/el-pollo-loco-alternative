class Enemy extends MoveableObject {
    width = 128;
    height = this.width;
    x = 640;
    y = 540 - this.height - 16;
    startTime = new Date().getTime();
    // speed = 0;    // for testing
    speed = 64 / 60;
    // otherDirection = false;    // for testing
    otherDirection = true;
    isBeated = false;
    FLIP_BOOK = new FlipBook();
    FLIP_BOOK_ATTACK = this.FLIP_BOOK.dinoAttack;
    FLIP_BOOK_DEATH = this.FLIP_BOOK.dinoDeath;
    FLIP_BOOK_HURT = this.FLIP_BOOK.dinoHurt;
    FLIP_BOOK_IDLE = this.FLIP_BOOK.dinoIdle;
    FLIP_BOOK_WALK = this.FLIP_BOOK.dinoWalk;
    hitPoints = 100;
    world;


    constructor() {
        super().loadImage('img/enemies/dino/Idle/idle1.png');
        this.loadImages(this.FLIP_BOOK_ATTACK);
        this.loadImages(this.FLIP_BOOK_DEATH);
        this.loadImages(this.FLIP_BOOK_HURT);
        this.loadImages(this.FLIP_BOOK_IDLE);
        this.loadImages(this.FLIP_BOOK_WALK);
        this.animate();

        // this.animate();
        // this.applyGravity();
        // this.isOnTile();
    }


    get xLeftAttack() {
        return this.x + 84;
    }


    get xRightAttack() {
        return this.xLeftAttack + 40;
    }


    get yTopAttack() {
        return this.y + 40;
    }


    get yBottomAttack() {
        return this.y + 40 + 40;
    }


    // replace attack border !!! + this.xCenter richtig spiegeln!!!
    get isHit() {
        if (world.character.xLeftAttack > this.xLeftAttack - 84 && world.character.xLeftAttack < this.xRightAttack - 84 ||
            world.character.xRightAttack > this.xLeftAttack - 84 && world.character.xRightAttack < this.xRightAttack - 84 ||
            world.character.yTopAttack > this.yBottomAttack && world.character.yTopAttack < this.yTopAttack ||
            world.character.yBottomAttack > this.yBottomAttack && world.character.yBottomAttack < this.yTopAttack) {
            console.log('hit');
            return true;
        }
    }


    animate() {
        setInterval(() => {
            if (this.hitPoints < 1 && !this.isBeated) {
                this.speed = 0;
                this.isBeated = true;
            } else {
                let timeStamp = new Date().getTime();
                if (keyboard['keyA'].keydown && this.isHit) {
                    this.x = this.x;
                    this.hitPoints--;
                } else if ((timeStamp - this.startTime) % 4000 > 2000) {
                    this.x -= this.speed;
                } else {
                    this.x = this.x;
                }
            }
        }, 1000 / 60);

        setInterval(() => {
            // this.playAnimation(this.FLIP_BOOK_ATTACK);
            if (this.isBeated) {
                this.loadImage('img/enemies/dino/Death/death6.png');
            } else if (this.hitPoints < 1 && !this.isBeated) {
                this.playAnimation(this.FLIP_BOOK_DEATH);
            } else if (keyboard['keyA'].keydown && this.isHit) {
                this.playAnimation(this.FLIP_BOOK_HURT);
            } else {
                let timeStamp = new Date().getTime();
                if ((timeStamp - this.startTime) % 4000 > 2000) {
                    this.playAnimation(this.FLIP_BOOK_WALK)
                } else {
                    this.playAnimation(this.FLIP_BOOK_IDLE);
                }
            }
        }, 100);
    }
}