class Shaman extends MoveableObject {
    directory = 'img/bosses/shaman/';
    flipBook = FLIP_BOOK_SHAMAN;
    // magicalBook = FLIP_BOOK_MAGIC;
    speed = 128 / 60;    // to edit
    speedRun = 256 / 60;    // to edit
    otherDirection = true;
    energy = 300;
    hit = false;
    dying = false;
    dead = false;

    radDispl = 16;

    lastMagic = 0;
    magicFrequencies = [0, 4, 7];

    // (11, 2.09375)

    constructor(x, y) {
        super(x, y);    // to edit
        this.setSize(256);
        this.setCover('shaman')
        this.loadImage(this.cover);
        this.loadFlipBookImages(this.flipBook);
        // this.loadFlipBookImages(this.magicalBook);
        this.animate();


        // this.idle();
    }


    get xLeft() {
        return (this.otherDirection) ? this.x + 40 : this.x + 40 + 84;
        // return this.x + 40;
    }


    get xCenter() {
        return this.x + 72;
    }


    get xRight() {
        return (this.otherDirection) ? this.x + 100 : this.x + 100 + 84;
        // return this.x + 100;
    }


    get yTop() {
        return this.y + 100;
    }


    get yCenter() {
        return this.y + 152;
    }


    get yBottom() {
        return this.y + 204;
    }


    get xMagicBlade() {
        return this.x / 64 + 2;
    }


    get yMagicBlade() {
        return this.y / 64 - 4.39375;
    }


    get xMagicFire() {
        return this.x / 64 + 1;
    }


    get yMagicFire() {
        return this.y / 64 - 4.59375;
    }


    get xMagicLightning() {
        return (world.hero.xCenter + 128) / 64;
    }


    get yMagicLightning() {
        return (world.hero.yCenter - 200 - 128) / 64;
    }


    castBlade() {    // blade as of 500
        setInterval(() => {
            this.playAnimation(FLIP_BOOK_SHAMAN.MAGIC_BLADE);
        }, 100);
    }


    castFire() {    // fire as of 500 (or 600)
        setInterval(() => {
            this.playAnimation(FLIP_BOOK_SHAMAN.MAGIC_FIRE);
        }, 100);
    }


    castLightning() {    // lightning as of 500 (600)
        setInterval(() => {
            this.playAnimation(FLIP_BOOK_SHAMAN.MAGIC_LIGHTNING);
        }, 100);
    }


    attack() {
        return new ShamanBlade(this).attack(world.hero);
    }


    idle() {
        // this.playAnimationIdle(FLIP_BOOK_SHAMAN.IDLE);
        // setTimeout(() => {
        //     this.idle();
        // }, 4 * (1000 / 6));

        setInterval(() => {
            this.playAnimation(FLIP_BOOK_SHAMAN.IDLE);
        }, 1000 / 6);
    }


    loadFlipBookImages(flipBook) {    // double code !!!
        for (const [key, value] of Object.entries(flipBook)) {
            if (Array.isArray(value)) {
                this.loadImages(flipBook[key]);
            }
        }
    }


    animate() {
        setInterval(() => {
            if (world) {
                // this.attack();

                if (world.endbossMagic) {
                    if (world.endbossMagic !== undefined && (world.endbossMagic instanceof Blade || world.endbossMagic instanceof Fire)) {
                        if (world.endbossMagic.x < world.endbossMagic.xEnd) {
                            delete world.endbossMagic;
                            this.animating = false;
                            this.lastMagic = new Date().getTime();

                            console.log('magic deleted');
                        }
                    }


                    if (world.endbossMagic !== undefined && world.endbossMagic instanceof Lightning) {
                        if (!this.noticed) {
                            this.noticed = true;
                            setTimeout(() => {
                                delete world.endbossMagic;
                                this.animating = false;
                                this.lastMagic = new Date().getTime();
                                this.noticed = false;

                                console.log('magic deleted');
                            }, 3700);
                        }
                    }
                }


                if (this.energy > 70) {
                    this.magicFrequencies = [0, 4, 7];
                } else if (this.energy > 30) {
                    this.magicFrequencies = [0, 3, 6];
                } else {
                    this.magicFrequencies = [0, 2, 5];
                }
            }
        }, 1000 / 60);

        setInterval(() => {
            // this.loadImage(FLIP_BOOK_SHAMAN.MAGIC_FIRE[4]);

            let currentTime = new Date().getTime();
            if (currentTime - this.lastMagic > 3000) {
                let magic = Math.round(Math.random() * 10);
                console.log(magic);
                if (magic > this.magicFrequencies[2] && !this.animating) {
                    this.currentImage = 0;
                    this.animating = true;
                    this.currentFlipBook = FLIP_BOOK_SHAMAN.MAGIC_LIGHTNING;
                    // this.playAnimation(FLIP_BOOK_SHAMAN.MAGIC_LIGHTNING);
                    console.log('LIGHTNING');
                    setTimeout(() => {
                        world.endbossMagic = new Lightning(this.xMagicLightning, this.yMagicLightning);
                    }, (this.currentFlipBook.length - 1) * 100);
                    setTimeout(() => {
                        // this.animating = false;
                        // this.lastMagic = new Date().getTime() + 1000;
                        this.currentFlipBook = FLIP_BOOK_SHAMAN.IDLE;
                    }, (this.currentFlipBook.length - 1) * 100);
                } else if (magic > this.magicFrequencies[1] && !this.animating) {
                    this.currentImage = 0;
                    this.animating = true;
                    this.currentFlipBook = FLIP_BOOK_SHAMAN.MAGIC_FIRE;
                    // this.playAnimation(FLIP_BOOK_SHAMAN.MAGIC_FIRE);
                    console.log('FIRE');
                    setTimeout(() => {
                        world.endbossMagic = new Fire(this.xMagicFire, this.yMagicFire);
                    }, (this.currentFlipBook.length - 1) * 100);
                    setTimeout(() => {
                        // this.animating = false;
                        // this.lastMagic = new Date().getTime() + 1000;
                        this.currentFlipBook = FLIP_BOOK_SHAMAN.IDLE;
                    }, (this.currentFlipBook.length - 1) * 100);
                } else if (magic > this.magicFrequencies[0] && !this.animating) {
                    this.currentImage = 0;
                    this.animating = true;
                    this.currentFlipBook = FLIP_BOOK_SHAMAN.MAGIC_BLADE;
                    // this.playAnimation(FLIP_BOOK_SHAMAN.MAGIC_BLADE);
                    console.log('BLADE');
                    setTimeout(() => {
                        world.endbossMagic = new Blade(this.xMagicBlade, this.yMagicBlade);
                    }, (this.currentFlipBook.length - 1) * 100);
                    setTimeout(() => {
                        // this.animating = false;
                        // this.lastMagic = new Date().getTime() + 1000;
                        this.currentFlipBook = FLIP_BOOK_SHAMAN.IDLE;
                    }, (this.currentFlipBook.length - 1) * 100);
                }
            }
            this.playAnimation(this.currentFlipBook);
            // this.loadImage(FLIP_BOOK_SHAMAN.MAGIC_FIRE[3]);
            // console.log(this.img);




            //     if (world) {
            //         if (this.dead) {
            //             this.loadImage(FLIP_BOOK_SHAMAN.DEATH[FLIP_BOOK_SHAMAN.DEATH.length - 1]);
            //         } else if (this.energy <= 0) {
            //             if (!this.dying) {
            //                 this.currentImage = 0;
            //                 this.dying = true;
            //             }
            //             this.playAnimation(FLIP_BOOK_SHAMAN.DEATH);
            //             console.log(this.img);
            //             setTimeout(() => {
            //                 this.dead = true;
            //             }, 500);
            //         } else
            //             // if (world.bomb !== undefined && this.isIncluding(world.bomb.xCenter, world.bomb.yCenter)) {
            //             //     world.bomb.inTouch = true;
            //             //     if (!this.isHit) {
            //             //         this.isHit = true;
            //             //         // this.energy -= 100;
            //             //         this.energy -= 30;
            //             //         // console.log(this.energy);
            //             //         this.playAnimation(FLIP_BOOK_SHAMAN.HURT);
            //             //         setTimeout(() => {
            //             //             delete world.bomb;
            //             //             // world.bombs.splice(0, 1);
            //             //             this.isHit = false;
            //             //             // setTimeout(() => {
            //             //             //     world.bombs.splice(0, 1);
            //             //             //     world.bombs.push(new Bomb((world.hero.x - 40) / 64, (540 - world.hero.y + 17) / 64));
            //             //             // }, 1000);
            //             //         }, 700);
            //             //     }
            //             // }
            //             if (world.keyboard.keyA.keydown && world.hero.attack(this)) {
            //                 if (!this.paralysed) {
            //                     this.currentImage = 0;
            //                     this.paralysed = true;
            //                     setTimeout(() => {
            //                         this.paralysed = false;
            //                     }, 200);
            //                 }
            //                 this.playAnimation(FLIP_BOOK_SHAMAN.HURT);
            //                 if (this.energy <= 0) {
            //                     this.dying = true;
            //                 }
            //             } else {
            //                 this.loadImage(FLIP_BOOK_SHAMAN.cover);
            //             }
            //         // this.playAnimation(FLIP_BOOK_SHAMAN.ATTACK);

            //         // if (world.hero.xCenter > this.x) {
            //         //     this.playAnimation(FLIP_BOOK_SHAMAN.ATTACK);
            //         // }
            //     }
        }, 100);
    }


    isIncluding(x, y) {    // double code!!!
        return this.isHorizontalCenter(x) && this.isVerticalCenter(y);
    }


    isHorizontalCenter(x) {
        return this.xLeft < x && x < this.xRight;
    }


    isVerticalCenter(y) {
        return this.yTop < y && y < this.yBottom;
    }
}