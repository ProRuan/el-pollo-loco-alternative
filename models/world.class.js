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

    startScreenDisplayed = true;
    selectedLevelDisplayed = false;

    worldTime = new Date().getTime();
    lastWorldTime = 0;
    startedGame = false;
    birdArrow = new Bird(8.50625, 2.925);
    activeButton = 'new game';
    leaderboardOpened = true;


    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.setStartScreenBg();
        this.setCupButton();
        this.setHomeButton();
        this.setSettingsButton();
        this.setBirdArrow();
        this.setleaderboard();
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

    setStartScreenBg() {
        this.startScreenBg = new DrawableObject(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.startScreenBg.loadImage('./img/start_screen/background.png');
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.startScreenDisplayed == true) {
            this.drawStartScreen();
        }

        // Please activate!!!
        if (this.selectedLevelDisplayed == true) {
            this.drawLevelComponents();
        }

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


    drawStartScreen() {
        if (this.startScreenRevealed === undefined) {
            this.ctx.globalAlpha = 0;
            this.startScreenRevealed = false;
        }
        if (this.startScreenRevealed == false && this.ctx.globalAlpha < 1) {
            this.ctx.globalAlpha += 0.01;
        } else {
            this.startScreenRevealed = true;
        }
        this.addToMap(this.startScreenBg);

        this.drawGameTitle();
        this.drawStartText();
        if (this.startedGame == true) {
            this.addToMap(this.homeButton);
            this.addToMap(this.cupButton);

            // this.ctx.globalAlpha = 0.3;
            // this.addToMap(this.settingsButton);
            // this.ctx.globalAlpha = 1.0;

            this.addToMap(this.settingsButton);
            this.drawTextNewGame();
            this.drawTextCredits();
            this.addToMap(this.birdArrow);

            if (this.leaderboardOpened) {
                this.addToMap(this.leaderboard);
                this.drawHighScore();
            }

            AUDIO_START_SCREEN.play();
        }
    }


    drawGameTitle() {
        this.ctx.font = "80px Arial";
        let txt = "Raising Fantasy";
        let txtWidth = this.ctx.measureText(txt).width;
        // console.log(txtWidth);
        this.ctx.fillText(txt, 480 - txtWidth / 2, 270);
    }


    drawStartText() {
        if (!this.startedGame) {
            let currentTime = new Date().getTime();
            if (currentTime - this.lastWorldTime > 1000) {
                this.lastWorldTime = currentTime;
            } else if (currentTime - this.lastWorldTime > 500) {

            } else if (currentTime - this.lastWorldTime > 0) {
                this.ctx.font = "24px Arial";
                let txt = "Press any button";
                let txtWidth = this.ctx.measureText(txt).width;
                // console.log(txtWidth);
                this.ctx.fillText(txt, 480 - txtWidth / 2, 400);
            }
        }
    }


    drawTextNewGame() {
        if (this.startedGame) {
            this.ctx.font = "24px Arial";
            let txt = "New game";
            let txtWidth = this.ctx.measureText(txt).width;
            // console.log(480 - txtWidth / 2, txtWidth, 480 - txtWidth / 2 + txtWidth);
            this.ctx.fillText(txt, 480 - txtWidth / 2, 400 - 36);
        }
    }


    drawTextCredits() {
        if (this.startedGame) {
            this.ctx.font = "24px Arial";
            let txt = "Credits";
            let txtWidth = this.ctx.measureText(txt).width;
            // console.log(480 - txtWidth / 2, txtWidth, 480 - txtWidth / 2 + txtWidth);
            this.ctx.fillText(txt, 480 - txtWidth / 2, 400 + 36);
        }
    }


    setCupButton() {
        this.cupButton = new DrawableObject(0.5, 0.5, 66, 66);
        this.cupButton.loadImage('./img/start_screen/cup_button.png');
    }


    setleaderboard() {
        this.leaderboard = new DrawableObject(0 + 15 / 2 - 382 / 64 / 2, 540 / 64 / 2 - 441 / 64 / 2, 382, 441);
        this.leaderboard.loadImage('./img/start_screen/leaderboard.png');
    }


    setHomeButton() {
        this.homeButton = new DrawableObject(0.5, 540 / 64 - 66 / 64 - 0.5, 66, 66);
        this.homeButton.loadImage('./img/start_screen/home_button.png');
    }


    setSettingsButton() {
        this.settingsButton = new DrawableObject(14 - 66 / 2 / 64, 0.5, 66, 66);
        this.settingsButton.loadImage('./img/start_screen/settings_button.png');
    }


    drawHighScore() {
        this.ctx.font = "24px Arial";
        this.ctx.fillStyle = 'gold';
        let textBestResult = 'Best result';
        // let textCoins = "Coins: 0 / 20";
        let textCoins = 'Coins:';
        let textCoinsValue = '19 / 20';
        // let textLeaves = "Leaves: 0 / 18";
        let textLeaves = 'Leaves:';
        let textLeavesValue = '15 / 18';
        // let textLevelTime = 'Time required: ??:??:??';
        let textTimeRequired = 'Time required:';
        let textTimeRequiredValue = '7 min 32 s';

        let textBestResultWidth = this.ctx.measureText(textBestResult).width;
        this.ctx.fillText(textBestResult, 480 - textBestResultWidth / 2, 144 + 8);

        this.ctx.font = "20px Arial";
        this.ctx.fillText(textCoins, 352, 184 + 8);
        this.ctx.fillText(textCoinsValue, 960 / 2 + 32, 184 + 8);
        this.ctx.fillText(textLeaves, 352, 220 + 8);
        this.ctx.fillText(textLeavesValue, 960 / 2 + 32, 220 + 8);
        this.ctx.fillText(textTimeRequired, 352, 256 + 8);
        this.ctx.fillText(textTimeRequiredValue, 960 / 2 + 32, 256 + 8);


        this.ctx.font = "24px Arial";
        this.ctx.fillStyle = 'white';
        textBestResult = 'Last result';
        this.ctx.fillText(textBestResult, 480 - textBestResultWidth / 2, 320 + 8);

        this.ctx.font = '20px Arial';
        textCoinsValue = '17 / 20';
        textLeavesValue = '14 / 18';
        textTimeRequiredValue = '9 min 16 s';

        this.ctx.fillText(textCoins, 352, 360 + 8);
        this.ctx.fillText(textCoinsValue, 960 / 2 + 32, 360 + 8);
        this.ctx.fillText(textLeaves, 352, 396 + 8);
        this.ctx.fillText(textLeavesValue, 960 / 2 + 32, 396 + 8);
        this.ctx.fillText(textTimeRequired, 352, 432 + 8);
        this.ctx.fillText(textTimeRequiredValue, 960 / 2 + 32, 432 + 8);



        this.ctx.fillStyle = 'black';    // Please update methods!!!
    }


    setBirdArrow() {
        setInterval(() => {
            if (this.keyboard.arrowUp.keydown) {
                // this.birdArrow = new Bird(8.50625, 2.925);
                this.birdArrow.setPosition(8.50625, 2.925 - 0.5);
                this.birdArrow.speed = 0;
                this.activeButton = 'new game';
            } else if (this.keyboard.arrowDown.keydown) {
                // this.birdArrow = new Bird(8.19375, 1.8);
                this.birdArrow.setPosition(8.19375, 1.8 - 0.5);
                this.birdArrow.speed = 0;
                this.activeButton = 'credits';
            }
            if (!this.keyboard.escape.keydown && this.keyboard.enter.keydown && this.activeButton == 'new game') {
                this.startScreenDisplayed = false;
                this.selectedLevelDisplayed = true;

                AUDIO_START_SCREEN.pause();
                AUDIO_START_SCREEN.currentTime = 0;
                console.log('level starts ...');
            }
            if (this.keyboard.escape.keydown) {
                this.selectedLevelDisplayed = false;
                this.startScreenDisplayed = true;
                this.startedGame = undefined;
                this.startScreenRevealed = undefined;
                this.hero.AMBIENCE_SOUND.pause();
                this.hero.AMBIENCE_SOUND.currentTime = 0;
            }


            // Please check the values!!!
            if (this.leaderboardOpened == true && (this.keyboard.mouseClick.x - 16 < this.leaderboard.x || this.leaderboard.x + this.leaderboard.width < this.keyboard.mouseClick.x - 8)) {
                this.leaderboardOpened = false;
            }
        }, 1000 / 60);
        this.otherDirection = false;    // neccessary???
        this.birdArrow.speed = 0;    // neccessary???
    }


    drawLevelComponents() {
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
            if (this.characterInfo.energyPoints.length == 100) {
                this.addToMap(this.characterInfo.itemBomb);
            }
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
    }
}