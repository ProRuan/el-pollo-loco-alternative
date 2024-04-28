class World {
    canvas;
    ctx;
    keyboard;
    startedGame = false;
    startScreenDisplayed = true;
    selectedLevelDisplayed = false;
    worldTime = new Date().getTime();
    lastWorldTime = 0;




    // Level
    level = level1;
    hero = new Knight();
    camera_x = 0;
    bomb = undefined;
    webs = [];    // to keep!!!

    avatarImage = new AvatarImage();
    avatarFrame = new AvatarFrame();
    hpBar = new HpBar();
    energyBar = new EnergyBar();
    staminaBar = new StaminaBar();
    itemBg = new ItemBg();
    itemBomb = new ItemBomb();
    itemBorder = new ItemBorder();


    // temp + to edit
    blade = new Blade(10.75, -0.5);
    blades = [new Blade(10.57, -0.5)];
    fire = new Fire(13, -0.25);
    fires = [new Fire(8, -0.5)];
    lightning = new Lightning(0, +284 / 64);
    lightnings = [new Lightning(4.75, 0.4)];


    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.setStartScreen();




        // to edit
        this.setBirdArrow();
        this.setleaderboard();



        this.draw();
        this.setWorld();
    }


    // Please delete getter!!!
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


    get LADDERS() {
        return this.level.LADDERS;
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


    setStartScreen() {
        this.startScreen = new StartScreen(this);
    }


    // World Methods
    draw() {    // to edit
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.startScreenDisplayed == true) {
            this.drawStartScreen();
        }

        // Please activate!!!
        if (this.selectedLevelDisplayed == true) {    // neccessary???
            this.drawLevelComponents();
        }

        requestAnimationFrame(() => {
            this.draw();
        });
    }


    setWorld() {
        this.hero.world = this;
    }


    getLevelObject(key) {
        return this.level[key];
    }


    addGroupToMap(moGroup) {
        moGroup.forEach(o => {
            this.addToMap(o);
        });
    }


    // to edit
    addToMap(mo) {
        this.flipImageMaster(mo, () => this.flipImage(mo));
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);    // only for testing!!!
        this.flipImageMaster(mo, () => this.flipImageBack(mo));
    }


    flipImageMaster(mo, subfunction) {
        if (mo.otherDirection) {
            subfunction(mo);
        }
    }




    // Level Methods

    // only for testing
    // endbossMagic = new Blade(this.ENDBOSS.xMagicBlade, this.ENDBOSS.yMagicBlade);
    // endbossMagic = new Fire(this.ENDBOSS.xMagicFire, this.ENDBOSS.yMagicFire);
    // endbossMagic = new Lightning(0, +284 / 64);
    // magic (x, y) = (???, -0.0625)




    // to edit
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


    // to edit
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


            this.drawMainMenuButton('New game', 364, 'newGameButton');
            this.drawMainMenuButton('Credits', 436, 'creditsButton');

            this.addToMap(this.birdArrow);

            if (this.creditsOpened == true) {
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
                    this.addToMap(this.leftMusicButton);
                    this.addToMap(this.leftSoundButton);
                    this.addToMap(this.rightMusicButton);
                    this.addToMap(this.rightSoundButton);
                }
            }

            AUDIO_START_SCREEN.play();
        }
    }


    // to edit (optional)
    drawGameTitle() {
        this.drawCenteredText('80px Arial', 'Raising Fantasy', canvasHeight / 2);
    }


    drawCenteredText(font, text, height) {
        let textWidth = this.getTextWidth(font, text);
        this.ctx.fillText(text, canvasWidth / 2 - textWidth / 2, height);
    }


    getTextWidth(font, text) {
        this.ctx.font = font;
        return this.ctx.measureText(text).width;
    }


    // to edit
    drawStartText() {
        if (!this.startedGame) {    // to edit
            let currentTime = getCurrentTime();
            if (this.isOnTime(currentTime, 1000)) {
                this.lastWorldTime = currentTime;
            } else if (this.isOnTime(currentTime, 0) && this.isOnTime(currentTime, 500)) {
                this.drawCenteredText('24px Arial', 'Press any button', 400);
            }
        }
    }


    isOnTime(currentTime, ms) {
        return ms <= currentTime - this.lastWorldTime;
    }


    drawMainMenuButton(text, height, name) {
        if (this.startedGame) {
            this.drawTextNewGame(text, height);
            this.drawTextFrame('24px Arial', text, height);
            this.setMainMenuButton(text, name);
        }
    }


    drawTextNewGame(text, height) {
        this.drawTextShadowOnCondition(text, 'green', 16);
        this.drawCenteredText('24px Arial', text, height);
        this.drawTextShadowOnCondition(text, 'rgba(0, 0, 0, 0)', 0);
    }


    drawTextShadowOnCondition(name, color, value) {
        name = name.toLowerCase();
        if (this.activeButton == name) {
            this.drawTextShadow(color, value);
        }
    }


    drawTextShadow(color, value) {
        this.ctx.shadowColor = color;
        this.ctx.shadowBlur = value;
    }


    // to edit + to delete finally!!!
    drawTextFrame(font, text, height) {
        let textWidth = this.getTextWidth(font, text);
        this.ctx.beginPath();
        this.ctx.lineWidth = '1';
        this.ctx.strokeStyle = 'yellow';
        this.ctx.rect(canvasWidth / 2 - textWidth / 2 - 4, height - 36 / 2 - 4, textWidth + 8, 24 + 8);
        this.ctx.stroke();
    }


    // to edit
    setMainMenuButton(text, name) {    // height as parameter!?!
        let textWidth = this.getTextWidth('24px Arial', text);
        this[name] = new DrawableObject((canvasWidth / 2 - textWidth / 2 - 4) / 64, (400 - 36 - 36 / 2 - 4) / 64, textWidth + 8, 24 + 8);    // Please move!!!
    }





    // to edit
    setleaderboard() {
        this.leaderboard = new DrawableObject(0 + 15 / 2 - 382 / 64 / 2, 540 / 64 / 2 - 441 / 64 / 2, 382, 441);
        this.leaderboard.loadImage('./img/start_screen/leaderboard.png');
    }








    // to edit
    drawHighScore() {
        this.drawBestResult();
        this.drawLastResult();


        // create a button!!!
        this.ctx.beginPath();
        this.ctx.lineWidth = '1';
        this.ctx.strokeStyle = 'yellow';
        this.ctx.rect(650.5 - 14, 99.5 - 14, 28, 28);
        this.ctx.stroke();

    }


    // to edit
    drawBestResult() {    // set variables!!!
        this.setFillStyle('gold');
        this.drawCenteredText('24px Arial', 'Best result', 152);
        this.setFont('20px Arial');
        this.drawText('Coins:', 352, 192);
        this.drawText('19 / 20', 960 / 2 + 32, 184 + 8);
        this.drawText('Leaves:', 352, 228);
        this.drawText('15 / 18', 960 / 2 + 32, 220 + 8);
        this.drawText('Time required:', 352, 264);
        this.drawText('7 min 32 s', 960 / 2 + 32, 256 + 8);
        this.setFillStyle('black');
    }


    setFillStyle(color) {
        this.ctx.fillStyle = color;
    }


    setFont(font) {
        this.ctx.font = font;
    }


    // to edit
    drawLastResult() {    // set variables!!!
        this.setFillStyle('white');
        this.drawCenteredText('24px Arial', 'Last result', 328);
        this.setFont('20px Arial');
        this.drawText('Coins:', 352, 368);
        this.drawText('17 / 20', 960 / 2 + 32, 368);
        this.drawText('Leaves:', 352, 404);
        this.drawText('14 / 18', 960 / 2 + 32, 404);
        this.drawText('Time required:', 352, 440);
        this.drawText('9 min 16 s', 960 / 2 + 32, 440);
        this.setFillStyle('black');
    }


    drawText(text, x, y) {
        this.ctx.fillText(text, x, y);
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
        // console.log(textVolumeWidth);

        this.ctx.font = "20px Arial";
        this.ctx.fillText(textMusic, 352, 184 + 8);
        this.ctx.fillText(textMusicValue, 960 / 2 + 64, 184 + 8);
        this.ctx.fillText(textSound, 352, 220 + 8);
        this.ctx.fillText(textSoundValue, 960 / 2 + 64, 220 + 8);


        this.ctx.fillStyle = 'black';    // Please update methods!!!
    }


    setBirdArrow() {
        setInterval(() => {
            if (this.keyboard.mouseClick !== undefined) {
                if (this.keyboard.arrowUp.keydown || this.newGameButton.x < this.keyboard.mouseClick.xOffset && this.keyboard.mouseClick.xOffset < this.newGameButton.x + this.newGameButton.width &&
                    this.newGameButton.y < 540 - this.keyboard.mouseClick.yOffset && 540 - this.keyboard.mouseClick.yOffset < this.newGameButton.y + this.newGameButton.height) {    // Please also chane on mouseclick!!!
                    // this.birdArrow = new Bird(8.50625, 2.925);
                    this.birdArrow.setPosition(8.50625, 2.925 - 0.5);
                    this.birdArrow.speed = 0;
                    this.activeButton = 'new game';
                } else if (this.keyboard.arrowDown.keydown || this.creditsButton.x < this.keyboard.mouseClick.xOffset && this.keyboard.mouseClick.xOffset < this.creditsButton.x + this.creditsButton.width &&
                    this.creditsButton.y < 540 - this.keyboard.mouseClick.yOffset + 72 && 540 - this.keyboard.mouseClick.yOffset + 72 < this.creditsButton.y + this.creditsButton.height) {
                    // this.birdArrow = new Bird(8.19375, 1.8);
                    this.birdArrow.setPosition(8.19375, 1.8 - 0.5);
                    this.birdArrow.speed = 0;
                    this.activeButton = 'credits';
                }
            }
            if (this.keyboard.arrowUp.keydown && this.activeButton == 'credits') {    // Only if leaderboard or credits not open!!!
                // this.birdArrow = new Bird(8.50625, 2.925);
                this.birdArrow.setPosition(8.50625, 2.925 - 0.5);
                this.birdArrow.speed = 0;
                this.activeButton = 'new game';
            } else if (this.keyboard.arrowDown.keydown && this.activeButton == 'new game') {
                // this.birdArrow = new Bird(8.19375, 1.8);
                this.birdArrow.setPosition(8.19375, 1.8 - 0.5);
                this.birdArrow.speed = 0;
                this.activeButton = 'credits';
            }
            if (this.keyboard.mouseClick !== undefined) {
                if (!this.keyboard.escape.keydown &&
                    this.newGameButton.x < this.keyboard.mouseClick.xOffset && this.keyboard.mouseClick.xOffset < this.newGameButton.x + this.newGameButton.width &&
                    this.newGameButton.y < 540 - this.keyboard.mouseClick.yOffset && 540 - this.keyboard.mouseClick.yOffset < this.newGameButton.y + this.newGameButton.height &&
                    this.startScreenDisplayed == true && this.selectedLevelDisplayed == false) {
                    // this.startScreenDisplayed = false;
                    // this.selectedLevelDisplayed = true;
                    this.birdArrow.speed = 120 / 60;
                    this.activeButton = 'new game';
                    console.log(this.newGameButton.y, 540 - this.keyboard.mouseClick.yOffset, this.newGameButton.y + this.newGameButton.height);

                    setTimeout(() => {
                        this.startScreenDisplayed = false;
                        this.selectedLevelDisplayed = true;
                        this.birdArrow.setPosition(8.50625, 2.925 - 0.5);
                        this.birdArrow.speed = 0;
                    }, 1500);

                    // AUDIO_START_SCREEN.pause();
                    // AUDIO_START_SCREEN.currentTime = 0;
                    AUDIO_NEW_GAME.play();
                    console.log('level starts ...');
                    this.levelWatch = new Date().getTime();
                    console.log(this.levelWatch);
                    delete this.keyboard.mouseClick;
                }
            }
            if (!this.keyboard.escape.keydown && this.keyboard.enter.keydown && this.activeButton == 'new game' && this.startScreenDisplayed == true && this.selectedLevelDisplayed == false) {
                // this.startScreenDisplayed = false;
                // this.selectedLevelDisplayed = true;
                this.birdArrow.speed = 120 / 60;

                setTimeout(() => {
                    this.startScreenDisplayed = false;
                    this.selectedLevelDisplayed = true;
                    this.birdArrow.setPosition(8.50625, 2.925 - 0.5);
                    this.birdArrow.speed = 0;
                }, 1500);

                // AUDIO_START_SCREEN.pause();
                // AUDIO_START_SCREEN.currentTime = 0;
                AUDIO_NEW_GAME.play();
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


            if (this.keyboard.mouseover !== undefined) {    // Rename to mousemove!!!
                if (
                    this.settingsButton.x < keyboard.mouseover.xOffset &&
                    keyboard.mouseover.xOffset < this.settingsButton.x + this.settingsButton.width &&
                    this.settingsButton.y < keyboard.mouseover.yOffset &&
                    keyboard.mouseover.yOffset < this.settingsButton.y + this.settingsButton.height
                ) {
                    // this.leaderboardContent = 'settings';
                    // this.settingsButtonClicked = true;
                    // this.leaderboardOpened = true;
                    this.selectedButton = this.settingsButton;
                    console.log('hover settings button');

                    // this.leaderboardOpened = (!this.leaderboardOpened) ? true : false;
                } else if (this.leaderboardOpened != true) {
                    this.selectedButton = undefined;
                }
                delete this.keyboard.mouseover;
            }

            // if (this.keyboard.mouseover !== undefined) {
            //     console.log(this.keyboard.mouseover);
            //     delete this.keyboard.mouseover;
            // }

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

            if (this.keyboard.mouseClick !== undefined) {
                if (
                    this.creditsButton.x < this.keyboard.mouseClick.xOffset && this.keyboard.mouseClick.xOffset < this.creditsButton.x + this.creditsButton.width &&
                    this.creditsButton.y < 540 - this.keyboard.mouseClick.yOffset + 72 && 540 - this.keyboard.mouseClick.yOffset + 72 < this.creditsButton.y + this.creditsButton.height
                ) {
                    this.creditsOpened = true;
                    this.activeButton = 'credits';
                    delete this.keyboard.mouseClick;
                }
            }

            if (this.activeButton == 'credits' && this.keyboard.enter.keydown) {
                this.creditsOpened = true;
            }

            if (this.creditsOpened == true && this.keyboard.mouseClick &&
                (this.keyboard.mouseClick.xOffset < this.credits.x || this.credits.x + this.credits.width < this.keyboard.mouseClick.xOffset ||
                    540 - this.keyboard.mouseClick.yOffset + 72 < this.creditsButton.y || this.creditsButton.y + this.creditsButton.width < 540 - this.keyboard.mouseClick.yOffset + 72)) {
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

        // this.addGroupToMap(this.ladder);

        this.addGroupToMap(this.LADDERS);
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


        this.addAvatarInfo();

        // Please enable!!!
        // ----------------
        if (this.hero.bombSkillUnlocked) {
            this.addToMap(this.itemBg);
            if (this.energyBar.points.length == 100) {
                this.addToMap(this.itemBomb);
            }
            this.addToMap(this.itemBorder);
        }
        // ----------------

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
        // this.addToMap(this.fire);
        // this.addToMap(this.lightning);




        this.ctx.translate(-this.camera_x, 0);
    }


    addAvatarInfo() {
        this.addAvatarToMap();
        this.addStateBarToMap('hpBar');
        this.addStateBarToMap('energyBar');
        this.addStateBarToMap('staminaBar');
    }


    addAvatarToMap() {
        this.addToMap(this.avatarImage);
        this.addToMap(this.avatarFrame);
    }


    addStateBarToMap(key) {
        this.addToMap(this[key].bg);
        this.addGroupToMap(this[key].points);
        this.addToMap(this[key].border);
    }


    addAvatarItemToMap() {
        this.addToMap(this.itemBg);
        this.addToMap(this.itemBomb);
        this.addToMap(this.itemBorder);
    }
}