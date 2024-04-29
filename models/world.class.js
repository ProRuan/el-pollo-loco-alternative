class World {
    canvas;
    ctx;
    keyboard;
    startedGame = false;
    startScreenDisplayed = true;
    selectedLevelDisplayed = false;
    worldTime = new Date().getTime();
    lastWorldTime = 0;


    birdArrow = new Bird(8.50625, 2.925);    // x, y as variables!!!


    // Level
    level = level1;
    hero = new Knight();
    camera_x = 0;
    bomb = undefined;
    webs = [];    // to keep!!!


    // temp + to edit
    blade = new Blade(10.75, -0.5);
    blades = [new Blade(10.57, -0.5)];
    fire = new Fire(13, -0.25);
    fires = [new Fire(8, -0.5)];
    lightning = new Lightning(0, +284 / 64);
    lightnings = [new Lightning(4.75, 0.4)];


    // only for testing
    // endbossMagic = new Blade(this.ENDBOSS.xMagicBlade, this.ENDBOSS.yMagicBlade);
    // endbossMagic = new Fire(this.ENDBOSS.xMagicFire, this.ENDBOSS.yMagicFire);
    // endbossMagic = new Lightning(0, +284 / 64);
    // magic (x, y) = (???, -0.0625)


    constructor(canvas, keyboard) {
        this.init(canvas, keyboard);
        this.setStartScreen();
        this.setLevelScreen();

        this.setBirdArrow();    // to edit (startScreen)this.birdArrow = new Bird(8.50625, 2.925);    // x, y as variables!!!

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


    init(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
    }


    setStartScreen() {
        this.startScreen = new StartScreen(this);
    }


    setLevelScreen() {
        this.levelScreen = new LevelScreen(this);
    }


    draw() {
        this.clearCanvas();
        this.runWorldTime();
        this.drawStartScreen();
        this.drawLevelScreen();
        this.redraw();
    }


    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


    // to edit
    drawStartScreen() {
        if (this.startScreenDisplayed == true) {
            this.drawStartScreenComponents();    // to move!!!
        }
    }


    drawLevelScreen() {
        if (this.selectedLevelDisplayed == true) {
            this.executeMethodByKey('levelScreen', 'drawLevelComponents');
        }
    }


    redraw() {
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


    executeMethodByKey(object, method, parameter) {
        (!parameter) ? this[object][method]() : this[object][method](parameter);
    }


    // to edit
    drawStartScreenComponents() {
        this.setDarkScreen();
        this.revealStartScreen();
        this.addToMap(this.startScreenBg);

        this.drawGameTitle();
        this.drawStartText();

        if (this.startedGame == true) {
            this.addToMap(this.homeButton);


            if (this.selectedButton == this.cupButton) {
                this.executeMethodByKey('startScreen', 'drawExtraButtonWidthBlur', 'cupButton');
            } else {
                this.addToMap(this.cupButton);
            }


            if (this.selectedButton == this.settingsButton) {
                this.executeMethodByKey('startScreen', 'drawExtraButtonWidthBlur', 'settingsButton');
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
                    this.executeMethodByKey('startScreen', 'drawHighScore');
                }
                if (this.leaderboardContent == 'settings') {
                    this.executeMethodByKey('startScreen', 'drawSettings');
                    this.addToMap(this.leftMusicButton);
                    this.addToMap(this.leftSoundButton);
                    this.addToMap(this.rightMusicButton);
                    this.addToMap(this.rightSoundButton);
                }
            }

            AUDIO_START_SCREEN.play();
        }
    }


    setDarkScreen() {
        if (this.startScreenRevealed === undefined) {
            this.ctx.globalAlpha = 0;
            this.startScreenRevealed = false;
        }
    }


    revealStartScreen() {
        if (this.startScreenRevealed == false && this.ctx.globalAlpha < 1) {
            this.ctx.globalAlpha += 0.01;
        } else {
            this.startScreenRevealed = true;
        }
    }


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




    setFillStyle(color) {
        this.ctx.fillStyle = color;
    }


    setFont(font) {
        this.ctx.font = font;
    }


    runWorldTime() {
        setInterval(() => {
            this.worldTime = getCurrentTime();
        }, 1000 / 60);
    }


    drawText(text, x, y) {
        this.ctx.fillText(text, x, y);
    }


    updateButtonPointer(x, y, name) {
        this.updateBirdArrow(x, y);
        this.updateActiveButton(name);
    }


    updateBirdArrow(x, y) {
        this.birdArrow.setPosition(x, y);
        this.birdArrow.speed = 0;
    }


    updateActiveButton(name) {
        this.activeButton = name;
    }


    setBirdArrow() {
        setInterval(() => {
            if (this.keyboard.mouseClick !== undefined) {
                if (this.keyboard.arrowUp.keydown == true || isMouseClick(this.keyboard.mouseClick, this.newGameButton)) {    // Please also chane on mouseclick!!!
                    this.updateButtonPointer(8.50625, 2.925 - 0.5, 'new game');
                    console.log('selected new game');
                } else if (this.keyboard.arrowDown.keydown == true || isMouseClick(this.keyboard.mouseClick, this.creditsButton)) {    // funktioniert nicht ganz!!!
                    this.updateButtonPointer(8.19375, 1.8 - 0.5, 'credits');
                    console.log(isMouseClick(this.keyboard.mouseClick, this.creditsButton));
                }
            }


            if (this.keyboard.mouseClick !== undefined) {
                if (!this.keyboard.escape.keydown && (isMouseClick(this.keyboard.mouseClick, this.newGameButton) || (this.keyboard.enter.keydown && this.activeButton == 'new game')) &&
                    this.startScreenDisplayed == true && this.selectedLevelDisplayed == false) {

                    this.birdArrow.speed = 120 / 60;
                    this.activeButton = 'new game';

                    setTimeout(() => {
                        this.startScreenDisplayed = false;
                        this.selectedLevelDisplayed = true;
                        this.birdArrow.setPosition(8.50625, 2.925 - 0.5);
                        this.birdArrow.speed = 0;
                    }, 1500);

                    AUDIO_NEW_GAME.play();
                    console.log('level starts ...');
                    this.levelWatch = new Date().getTime();
                    delete this.keyboard.mouseClick;
                }
            }


            this.leaveGame();


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


    leaveGame() {
        if (this.verifyGameExit()) {
            this.selectedLevelDisplayed = false;
            this.startScreenDisplayed = true;
            this.startedGame = undefined;
            this.startScreenRevealed = undefined;
            this.hero.AMBIENCE_SOUND.pause();
            this.hero.AMBIENCE_SOUND.currentTime = 0;
            this.keyboard.escape.lastTimeStamp = this.worldTime;
        }
    }


    verifyGameExit() {
        return this.keyboard.escape.keydown && this.worldTime - this.keyboard.escape.lastTimeStamp > 1800
    }


    // drawExtraButtonWidthBlur(name) {
    //     this.drawTextShadow('yellow', 16);
    //     this.addToMap(this[name]);
    //     this.drawTextShadow('rgba(0, 0, 0, 0)', 0);
    // }


    // addToMapOnCondition(object) {
    //     if (object) {
    //         this.addToMap(object);
    //     }
    // }




    // extra button frame (896 - 44, 476 - 44, 88, 88)
}