class Dino extends MoveableObject {
    directory = 'img/enemies/dino/';
    flipBook = FLIP_BOOK_DINO;
    speed = 128 / 60;
    speedExtraAttack = 0;
    speedRun = 256 / 60;
    energy = 100;

    coins = 0;


    groundLevel = 484;

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
        this.animate();
        this.applyGravity();
    }


    get xLeft() {
        return this.x + 4;
    }


    get xCenter() {
        return this.x + 52;
    }


    get xRight() {
        return this.x + 100;
    }


    get yTop() {
        return this.y + 44;
    }


    get yCenter() {
        return this.y + 66;
    }


    get yBottom() {
        return this.y + 88;
    }


    animate() {
        setInterval(() => {
            // console.log('dino: ', this.yBottom);
            this.isOnTile();
        }, 1000 / 60);
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
            if (this.otherDirection && !world.level.previousLevelEndOtherDirection && this.yBottom > 482) {
                world.level.X_LEVEL_START = this.xLeft - 52;
                world.level.previousLevelEndOtherDirection = true;
            } else if (!world.level.previousLevelEnd && this.yBottom > 482) {
                world.level.X_LEVEL_END = this.xLeft + 20;
                world.level.previousLevelEnd = true;
            }
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


}