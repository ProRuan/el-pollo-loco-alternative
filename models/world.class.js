class World {
    level = level1;

    // character = new Character();
    // enemy = [new Enemy()];
    // stone = new Stone(1, 1);

    hero = new Knight();
    // dino = new Dino();
    // ent = new Ent();
    // spider = new Spider();
    // endboss = new Shaman();
    // bird = new Bird(3.75, 7.415);
    // bomb = new Bomb(3.75, 3);
    bomb = undefined;
    bombs = [];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;


    // temp
    webs = [];
    blade = new Blade(10.75, -0.5);
    blades = [new Blade(10.57, -0.5)];
    fire = new Fire(13, -0.25);
    fires = [new Fire(8, -0.5)];
    lightning = new Lightning(0, +284 / 64);
    lightnings = [new Lightning(4.75, 0.4)];

    stairwayBottom = new StairwayBottom(4.25, 0.875);
    stairwayCenter = new StairwayCenter(4.25, 3.875);
    stairwayTop = new StairwayTop(4.25, 4.375);
    stairway = [
        new StairwayBottom(4.25, 0.875),
        new StairwayCenter(4.25, 1.375), new StairwayCenter(4.25, 1.875), new StairwayCenter(4.25, 2.375), new StairwayCenter(4.25, 2.875),
        new StairwayCenter(4.25, 3.375), new StairwayCenter(4.25, 3.875),
        new StairwayTop(4.25, 4.375)
    ];

    characterInfo = new CharacterInfo();


    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }


    get BACKGROUND() {
        return this.level.BACKGROUND;
    }


    get CLOUDS() {
        return this.level.CLOUDS;
    }


    get BIRDS() {
        return this.level.BIRDS;
    }


    get TREES() {
        return this.level.TREES;
    }


    get LEAVES() {
        return this.level.LEAVES;
    }


    get GRASS_FLYING() {
        return this.level.GRASS_FLYING;
    }


    get GRASS() {
        return this.level.GRASS;
    }


    get STAIRWAYS() {
        return this.level.STAIRWAYS;
    }


    get COINS() {
        return this.level.COINS;
    }


    get CRYSTALS() {
        return this.level.CRYSTALS;
    }


    get HIT_POINTS() {
        return this.level.HIT_POINTS;
    }


    get STONES() {
        return this.level.STONES;
    }


    get ENEMIES() {
        return this.level.ENEMIES;
    }


    get ENDBOSS() {
        return this.level.ENDBOSS;
    }


    // only for testing
    // endbossMagic = new Blade(this.ENDBOSS.xMagicBlade, this.ENDBOSS.yMagicBlade);
    // endbossMagic = new Fire(this.ENDBOSS.xMagicFire, this.ENDBOSS.yMagicFire);
    // endbossMagic = new Lightning(0, +284 / 64);
    // magic (x, y) = (???, -0.0625)

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        // if (this.enemy[0] !== undefined) {
        //     this.addToMap(this.enemy[0]);
        // }
        this.addGroupToMap(this.BACKGROUND);
        this.addGroupToMap(this.CLOUDS);
        this.addGroupToMap(this.BIRDS);
        this.addGroupToMap(this.TREES);
        this.addGroupToMap(this.LEAVES);
        this.addGroupToMap(this.GRASS_FLYING);
        this.addGroupToMap(this.GRASS);

        // this.addGroupToMap(this.stairway);

        this.addGroupToMap(this.STAIRWAYS);
        this.addGroupToMap(this.COINS);
        this.addGroupToMap(this.CRYSTALS);
        this.addGroupToMap(this.HIT_POINTS);
        // this.addGroupToMap(this.STONES);
        // this.addToMap(this.character);

        // this.addToMap(this.dino);
        // this.addToMap(this.ent);
        // this.addToMap(this.spider);
        this.addGroupToMap(this.webs);
        // this.addToMap(this.endboss);
        this.addToMap(this.ENDBOSS);
        this.addGroupToMap(this.ENEMIES);
        this.addToMap(this.hero);

        if (this.endbossMagic) {
            this.addToMap(this.endbossMagic);
        }

        this.addGroupToMap(this.characterInfo.images);
        this.addGroupToMap(this.characterInfo.hpPoints);
        this.addGroupToMap(this.characterInfo.energyPoints);
        this.addGroupToMap(this.characterInfo.staminaPoints);
        this.addGroupToMap(this.characterInfo.borders);
        // this.addToMap(this.characterInfo.itemBg);
        // this.addToMap(this.characterInfo.itemBomb);
        // this.addToMap(this.characterInfo.itemBorder);
        if (this.hero.bombSkillUnlocked) {
            this.addToMap(this.characterInfo.itemBg);
            this.addToMap(this.characterInfo.itemBomb);
            this.addToMap(this.characterInfo.itemBorder);
        }

        // this.addToMap(this.stone);

        // this.addToMap(this.blade);
        // if (this.blades.length > 0 && this.blades[0] !== undefined) {
        //     this.addToMap(this.blades[0]);
        // }
        // if (this.fires.length > 0 && this.fires[0] !== undefined) {
        //     this.addToMap(this.fires[0]);
        // }
        // if (this.lightnings.length > 0 && this.lightnings[0] !== undefined) {
        //     this.addToMap(this.lightnings[0]);
        // }

        if (this.bomb !== undefined) {
            this.addToMap(this.bomb);
        }
        if (this.bombs.length > 0 && this.bombs[0] !== undefined) {
            this.addToMap(this.bombs[0]);
        }
        // this.addToMap(this.fire);
        // this.addToMap(this.lightning);




        this.ctx.translate(-this.camera_x, 0);


        requestAnimationFrame(() => {
            this.draw();
        });
    }


    setWorld() {
        this.hero.world = this;
    }


    addGroupToMap(moGroup) {
        moGroup.forEach(o => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    flipImage(mo) {    // set mo.object!!!
        this.ctx.save();
        this.ctx.translate(mo.width / 2 + mo.radDispl, 0);    // k + 24, d + 40
        this.ctx.scale(-1, 1);
        mo.x *= -1;
    }


    flipImageBack(mo) {
        mo.x *= -1;
        this.ctx.restore();
    }
}