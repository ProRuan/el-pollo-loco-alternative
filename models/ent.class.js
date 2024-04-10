class Ent extends MoveableObject {
    directory = 'img/enemies/ent/';
    flipBook = FLIP_BOOK_ENT;
    speed = 64 / 60;
    energy = 100;


    groundLevel = 484;

    otherDirection = true;
    dying = false;
    dead = false;
    yStairwayMax = 228 - 108;
    yStairwayMin = 272 + 100;
    climbing = false;

    startTime = new Date().getTime();
    lastHit = 0;

    radDispl = 104;
    // 10.25, 1.625

    constructor() {
        super(10.25, 1.625);    // Please verfiy!!!
        this.setSize(256);
        this.setCover('ent');
        this.loadImage(this.cover);
        this.loadFlipBookImages(this.flipBook);
        this.animate();
        this.applyGravity();
    }


    get xLeft() {
        return (this.otherDirection) ? this.x + 76 : this.x + 76 + 84;
    }


    get xCenter() {
        return this.x + 116;
    }


    get xRight() {
        return (this.otherDirection) ? this.x + 156 : this.x + 156 + 84;
    }


    get yCenter() {
        return this.y + 132;
    }


    get yTop() {
        return this.y + 88;
    }


    get yBottom() {
        return this.y + 176;
    }


    attack() {
        if (this.isSubtending(world.hero)) {
            // console.log('bite');
            this.walking = false;
            this.x = this.x;
            return true;
        }
    }


    walk() {
        (this.otherDirection) ? this.x -= this.speed : this.x += this.speed;
    }


    patrol() {
        this.currentTime = new Date().getTime();
        if ((this.currentTime - this.startTime) % 40000 > 20000) {
            this.otherDirection = false;
        } else {
            this.otherDirection = true;
        }

        if ((this.currentTime - this.startTime) % 4000 > 2000) {
            this.walking = true;
            this.walk();
            // console.log('walking', (this.currentTime - this.startTime) % 4000);
        } else {
            this.walking = false;
            // console.log('idling', (this.currentTime - this.startTime) % 4000);
        }
    }


    loadFlipBookImages(flipBook) {
        for (const [key, value] of Object.entries(flipBook)) {
            if (Array.isArray(value)) {
                this.loadImages(flipBook[key]);
            }
        }
    }


    animate() {
        setInterval(() => {
            // console.log('ent: ', this.yBottom);

            // this.attack();
            // if (!this.attack()) {
            //     this.patrol();
            // }


            if (world.keyboard.keyA.keydown && world.hero.attack(this)) {
                let currentTime = new Date().getTime();
                if (currentTime - this.lastHit > 500) {
                    this.energy -= 10;
                    console.log(this.energy);
                    this.lastHit = currentTime;
                }
            }


            this.isOnTile();
        }, 1000 / 60);


        setInterval(() => {
            if (this.dying) {
                if (!this.dead) {
                    this.currentImage = 0;
                    this.playAnimationOnce(FLIP_BOOK_ENT.DEATH);
                    this.dead = true;
                    // splice!!!
                }
            } else if (world.keyboard.keyA.keydown && world.hero.attack(this)) {
                if (!this.paralysed) {
                    this.currentImage = 0;
                    this.paralysed = true;
                    setTimeout(() => {
                        this.paralysed = false;
                    }, 400);
                }
                this.playAnimation(FLIP_BOOK_ENT.HURT);
                if (this.energy <= 0) {
                    this.dying = true;
                }
            } else if (this.attack()) {
                this.playAnimation(FLIP_BOOK_ENT.ATTACK);
            } else if (this.walking) {
                this.playAnimation(FLIP_BOOK_ENT.WALK);
            } else {
                this.playAnimation(FLIP_BOOK_ENT.IDLE);
            }
        }, 100);
    }


    isOnTile() {
        if (this.isOnGrassFlying()) {
            if (this.isOnGrassFlyingStart()) {
                this.groundLevel = this.isOnGrassFlyingStart().y + 8;
            } else if (this.isOnGrassFlyingCenter()) {
                this.groundLevel = this.isOnGrassFlyingCenter().y + 8;
            } else if (this.isOnGrassFlyingEnd()) {
                this.groundLevel = this.isOnGrassFlyingEnd().y + 8;
            }
            this.grounded = true;
        } else if (this.isOnGrassStart() || this.isOnGrassCenter() || this.isOnGrassEnd()) {
            if (this.isOnGrassStart()) {
                this.groundLevel = this.isOnGrassStart().y + 8;
            } else if (this.isOnGrassCenter()) {
                this.groundLevel = this.isOnGrassCenter().y + 8;
            } else if (this.isOnGrassEnd()) {
                this.groundLevel = this.isOnGrassEnd().y + 8;
            }
            this.grounded = true;
        } else {
            this.grounded = false;
            this.groundLevel = 650;
            // if (this.otherDirection && !world.level.previousLevelEndOtherDirection && this.yBottom > 482) {
            //     world.level.X_LEVEL_START = this.xLeft - 52;
            //     world.level.previousLevelEndOtherDirection = true;
            // } else if (!world.level.previousLevelEnd && this.yBottom > 482) {
            //     world.level.X_LEVEL_END = this.xLeft + 20;
            //     world.level.previousLevelEnd = true;
            // }
        }
    }


    isOnGrassFlying() {
        let tempGrass = [];
        world.GRASS_FLYING.forEach((grass) => {
            if (grass.y + 16 > this.yBottom && (
                this.xCenter < grass.xLeft && grass.xLeft < this.xRight ||
                grass.xLeft < this.xCenter && this.xCenter < grass.xRight ||
                this.xLeft < grass.xRight && grass.xRight < this.xCenter)) {
                tempGrass.push(grass);
            }
        });
        return (tempGrass.length > 0) ? true : false;

        // return this.world.GRASS_FLYING.find(g =>
        //     this.yBottom > g.y &&
        //     (this.xCenter < g.xLeft && g.xLeft < this.xRight ||
        //     g.xLeft < this.xCenter && this.xCenter < g.xRight ||
        //     this.xLeft < g.xRight && g.xRight < this.xCenter)
        // );
    }


    isOnGrassStart() {
        return world.GRASS.find(g => this.xCenter < g.xLeft && g.xLeft < this.xRight);
    }


    isOnGrassCenter() {
        return world.GRASS.find(g => g.xLeft < this.xCenter && this.xCenter < g.xRight);
    }


    isOnGrassEnd() {
        return world.GRASS.find(g => this.xLeft < g.xRight && g.xRight < this.xCenter);
    }


    isSubtending(enemy) {
        let hitLeft = enemy.xLeft < this.xLeftAttack && this.xLeftAttack < enemy.xRight;
        let hitRight = enemy.xLeft < this.xRightAttack && this.xRightAttack < enemy.xRight;
        let hitTop = enemy.yTop < this.yTopAttack && this.yTopAttack < enemy.yBottom;
        let hitBottom = enemy.yTop < this.yBottomAttack && this.yBottomAttack < enemy.yBottom;
        return (hitLeft || hitRight) && (hitTop || hitBottom);
    }

}