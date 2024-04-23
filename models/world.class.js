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
    creditsOpened = false;
    leaderboardOpened = false;
    leaderboardContent = 'settings';
    selectedButton = undefined;


    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.setStartScreenBg();
        this.setCredits();
        this.setCupButton();
        this.setHomeButton();
        this.setSettingsButton();
        this.setArrowLeftButton();
        this.setArrowRightButton();
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


            if (this.selectedButton == this.cupButton) {
                this.drawCupButtonWidthBlur();
            } else {
                this.addToMap(this.cupButton);
            }


            if (this.selectedButton == this.settingsButton) {
                this.drawSettingsButtonWidthBlur();
            } else {
                this.addToMap(this.settingsButton);
            }


            this.drawTextNewGame();
            this.drawTextCredits();
            this.addToMap(this.birdArrow);

            if (this.creditsOpened) {
                this.addToMap(this.credits);
                this.ctx.font = "24px Arial";
                let txt = "Thanks";
                let txtWidth = this.ctx.measureText(txt).width;
                this.ctx.fillText(txt, 480 - txtWidth / 2, 160);
                this.ctx.font = "20px Arial";
                this.ctx.fillText('Developer Akademie', 480 - txtWidth / 2 - 56, 160 + 36);
                this.ctx.fillText('CRAFTPIX.NET', 480 - txtWidth / 2 - 56, 196 + 36);
                this.ctx.fillText('gamedevmarket.net', 480 - txtWidth / 2 - 56, 232 + 36);
                this.ctx.fillText('asoundeffect.com', 480 - txtWidth / 2 - 56, 268 + 36);

                this.ctx.font = "24px Arial";
                txt = "Special Thanks";
                let txtWidthSpecial = this.ctx.measureText(txt).width;
                this.ctx.fillText(txt, 480 - txtWidthSpecial / 2, 304 + 56);
                this.ctx.font = "20px Arial";
                txtWidthSpecial = this.ctx.measureText('My Family').width;
                this.ctx.fillText('My Family', 480 - txtWidthSpecial / 2, 360 + 36);
            }

            if (this.leaderboardOpened == true) {
                this.addToMap(this.leaderboard);
                if (this.leaderboardContent == 'high score') {
                    this.drawHighScore();
                }
                if (this.leaderboardContent == 'settings') {
                    this.drawSettings();
                    this.addToMap(this.arrowLeftMusicButton);
                    this.addToMap(this.arrowLeftSoundButton);
                    this.addToMap(this.arrowRightMusicButton);
                    this.addToMap(this.arrowRightSoundButton);
                }
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
            if (this.activeButton == 'new game') {
                this.ctx.shadowColor = 'green';
                this.ctx.shadowBlur = 16;
                this.ctx.fillText(txt, 480 - txtWidth / 2, 400 - 36);
                this.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
                this.ctx.shadowBlur = 0;
            } else {
                this.ctx.fillText(txt, 480 - txtWidth / 2, 400 - 36);
            }
        }
    }


    drawTextCredits() {
        if (this.startedGame) {
            this.ctx.font = "24px Arial";
            let txt = "Credits";
            let txtWidth = this.ctx.measureText(txt).width;
            // console.log(480 - txtWidth / 2, txtWidth, 480 - txtWidth / 2 + txtWidth);
            if (this.activeButton == 'credits') {
                this.ctx.shadowColor = 'green';
                this.ctx.shadowBlur = 16;
                this.ctx.fillText(txt, 480 - txtWidth / 2, 400 + 36);
                this.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
                this.ctx.shadowBlur = 0;
            } else {
                this.ctx.fillText(txt, 480 - txtWidth / 2, 400 + 36);
            }
            // this.ctx.fillText(txt, 480 - txtWidth / 2, 400 + 36);
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


    setCredits() {
        this.credits = new DrawableObject(15 / 2 - 276 / 64 / 2, 540 / 64 / 2 - 333 / 64 / 2, 276, 333);
        this.credits.loadImage('./img/start_screen/credits_bg.png');
    }


    setArrowLeftButton() {
        this.arrowLeftMusicButton = new DrawableObject(960 / 2 / 64 + 0.109375, 540 / 64 - 3, 10, 17);
        this.arrowLeftMusicButton.loadImage('./img/start_screen/arrow_left.png');
        this.arrowLeftSoundButton = new DrawableObject(960 / 2 / 64 + 0.109375, 540 / 64 - 3.5625, 10, 17);
        this.arrowLeftSoundButton.loadImage('./img/start_screen/arrow_left.png');
    }


    setArrowRightButton() {
        this.arrowRightMusicButton = new DrawableObject(960 / 2 / 64 + 2 - 0.109375, 540 / 64 - 3, 10, 17);
        this.arrowRightMusicButton.loadImage('./img/start_screen/arrow_right.png');
        this.arrowRightSoundButton = new DrawableObject(960 / 2 / 64 + 2 - 0.109375, 540 / 64 - 3.5625, 10, 17);
        this.arrowRightSoundButton.loadImage('./img/start_screen/arrow_right.png');
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


        this.ctx.beginPath();
        this.ctx.lineWidth = '1';
        this.ctx.strokeStyle = 'yellow';
        this.ctx.rect(650.5 - 14, 99.5 - 14, 28, 28);
        this.ctx.stroke();


        this.ctx.fillStyle = 'black';    // Please update methods!!!
    }


    drawSettings() {
        this.ctx.font = "24px Arial";
        this.ctx.fillStyle = 'white';
        let textVolume = 'Volume';
        // let textCoins = "Coins: 0 / 20";
        let textMusic = 'Music:';
        let textMusicValue = '4';
        // let textLeaves = "Leaves: 0 / 18";
        let textSound = 'Sound:';
        let textSoundValue = '7';

        let textVolumeWidth = this.ctx.measureText(textVolume).width;
        this.ctx.fillText(textVolume, 480 - textVolumeWidth / 2, 144 + 8);
        console.log(textVolumeWidth);

        this.ctx.font = "20px Arial";
        this.ctx.fillText(textMusic, 352, 184 + 8);
        this.ctx.fillText(textMusicValue, 960 / 2 + 64, 184 + 8);
        this.ctx.fillText(textSound, 352, 220 + 8);
        this.ctx.fillText(textSoundValue, 960 / 2 + 64, 220 + 8);


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
            if (!this.keyboard.escape.keydown && this.keyboard.enter.keydown && this.activeButton == 'new game' && this.startScreenDisplayed == true && this.selectedLevelDisplayed == false) {
                this.startScreenDisplayed = false;
                this.selectedLevelDisplayed = true;

                AUDIO_START_SCREEN.pause();
                AUDIO_START_SCREEN.currentTime = 0;
                console.log('level starts ...');
                this.levelWatch = new Date().getTime();
                console.log(this.levelWatch);
            }
            if (this.keyboard.escape.keydown) {
                this.selectedLevelDisplayed = false;
                this.startScreenDisplayed = true;
                this.startedGame = undefined;
                this.startScreenRevealed = undefined;
                this.hero.AMBIENCE_SOUND.pause();
                this.hero.AMBIENCE_SOUND.currentTime = 0;
            }


            if (this.leaderboardOpened == true && (
                650.5 - 14 < this.keyboard.mouseClick.xOffset && this.keyboard.mouseClick.xOffset < 650.5 + 14 &&
                99.5 - 14 < this.keyboard.mouseClick.yOffset && this.keyboard.mouseClick.yOffset < 99.5 + 14
            )) {
                this.leaderboardOpened = false;
            }


            if (this.keyboard.mouseClick !== undefined) {
                if (this.leaderboardOpened == true &&
                    (this.keyboard.mouseClick.xOffset < this.leaderboard.x || this.leaderboard.x + this.leaderboard.width < this.keyboard.mouseClick.xOffset) ||
                    (this.keyboard.mouseClick.yOffset < this.leaderboard.y || this.leaderboard.y + this.leaderboard.height < this.keyboard.mouseClick.yOffset)
                ) {
                    this.leaderboardOpened = false;
                    this.selectedButton = undefined;
                }
            }


            if (this.keyboard.mouseClick !== undefined) {
                if (
                    this.cupButton.x < keyboard.mouseClick.xOffset &&
                    keyboard.mouseClick.xOffset < this.cupButton.x + this.cupButton.width &&
                    this.cupButton.y < keyboard.mouseClick.yOffset &&
                    keyboard.mouseClick.yOffset < this.cupButton.y + this.cupButton.height
                ) {
                    this.leaderboardContent = 'high score';
                    this.cupButtonClicked = true;
                    this.leaderboardOpened = true;
                    this.selectedButton = this.cupButton;
                    // this.leaderboardOpened = (!this.leaderboardOpened) ? true : false;
                }
            }


            if (this.keyboard.mouseClick !== undefined) {
                if (
                    this.settingsButton.x < keyboard.mouseClick.xOffset &&
                    keyboard.mouseClick.xOffset < this.settingsButton.x + this.settingsButton.width &&
                    this.settingsButton.y < keyboard.mouseClick.yOffset &&
                    keyboard.mouseClick.yOffset < this.settingsButton.y + this.settingsButton.height
                ) {
                    this.leaderboardContent = 'settings';
                    this.settingsButtonClicked = true;
                    this.leaderboardOpened = true;
                    this.selectedButton = this.settingsButton;
                    // this.leaderboardOpened = (!this.leaderboardOpened) ? true : false;
                }
            }


            if (this.leaderboardOpened == true && this.cupButtonClicked == true) {
                this.cupButtonClicked = false;
            }

            if (this.activeButton == 'credits' && this.keyboard.enter.keydown) {
                this.creditsOpened = true;
            }

            if (this.creditsOpened == true && this.keyboard.mouseClick && (this.keyboard.mouseClick.xOffset < this.credits.x || this.credits.x + this.credits.width < this.keyboard.mouseClick.xOffset)) {
                this.creditsOpened = false;
                delete this.keyboard.mouseClick;
            }

            if (this.creditsOpened == true && this.keyboard.keyA.keydown) {
                this.creditsOpened = false;
            }





        }, 1000 / 60);
        this.birdArrow.speed = 0;    // neccessary???
    }


    drawCupButtonWidthBlur() {
        this.ctx.shadowColor = 'yellow';
        this.ctx.shadowBlur = 16;
        this.ctx.lineWidth = '1';
        this.ctx.strokeStyle = 'yellow';
        this.ctx.rect(896 - 44, 476 - 44, 88, 88);
        this.ctx.stroke();
        this.addToMap(this.cupButton);
        this.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
        this.ctx.shadowBlur = 0;
    }


    drawSettingsButtonWidthBlur() {
        this.ctx.shadowColor = 'yellow';
        this.ctx.shadowBlur = 16;
        this.ctx.lineWidth = '1';
        this.ctx.strokeStyle = 'yellow';
        this.ctx.rect(896 - 44, 476 - 44, 88, 88);
        this.ctx.stroke();
        this.addToMap(this.settingsButton);
        this.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
        this.ctx.shadowBlur = 0;
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