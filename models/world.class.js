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

        this.control();
        // this.setBirdArrow();    // to edit (startScreen)this.birdArrow = new Bird(8.50625, 2.925);    // x, y as variables!!!

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
            this.executeMethod('levelScreen', 'drawLevelComponents');
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


    executeMethod(object, method, parameter) {
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
            this.setLightScreen();
            this.addToMap(this.homeButton);


            if (this.hoveredButton == this.cupButton) {
                this.executeMethod('startScreen', 'drawExtraButtonWidthBlur', 'cupButton');
            } else {
                this.addToMap(this.cupButton);
            }


            if (this.hoveredButton == this.settingsButton) {
                this.executeMethod('startScreen', 'drawExtraButtonWidthBlur', 'settingsButton');
            } else {
                this.addToMap(this.settingsButton);
            }


            if (this.selectedButton == this.cupButton) {
                this.executeMethod('startScreen', 'drawExtraButtonWidthBlur', 'cupButton');
            } else {
                this.addToMap(this.cupButton);
            }


            if (this.selectedButton == this.settingsButton) {
                this.executeMethod('startScreen', 'drawExtraButtonWidthBlur', 'settingsButton');
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
                    this.executeMethod('startScreen', 'drawHighScore');
                }
                if (this.leaderboardContent == 'settings') {
                    this.executeMethod('startScreen', 'drawSettings');
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


    setLightScreen() {
        this.ctx.globalAlpha = 1;
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
            this.setMainMenuButton(text, height, name);
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
    setMainMenuButton(text, height, name) {
        let textWidth = this.getTextWidth('24px Arial', text);
        this[name] = new DrawableObject((canvasWidth / 2 - textWidth / 2 - 4) / 64, (canvasHeight - height) / 64, textWidth + 8, 24 + 8);
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


    control() {
        setInterval(() => {
            // mouse click
            if (isMouseClick(this.keyboard.mouseClick, this.newGameButton) && this.leaderboardOpened == false) {
                this.updateButtonPointer(8.50625, 2.925 - 0.5, 'new game');
                this.resetMouseClick();
            } else if (isMouseClick(this.keyboard.mouseClick, this.creditsButton) && this.leaderboardOpened == false) {
                this.updateButtonPointer(8.19375, 1.8 - 0.5, 'credits');
                this.resetMouseClick();
            } else if (isMouseClick(this.keyboard.mouseClick, this.cupButton)) {
                this.selectedButton = this.cupButton;
                this.activeButton = 'cup';
                this.leaderboardContent = 'high score';
                this.leaderboardOpened = true;
                this.resetMouseClick();
            } else if (isMouseClick(this.keyboard.mouseClick, this.settingsButton)) {
                this.selectedButton = this.settingsButton;
                this.activeButton = 'settings';
                this.leaderboardContent = 'settings';
                this.leaderboardOpened = true;
                this.resetMouseClick();
            } else if (isMouseClick(this.keyboard.mouseClick, this.closeButton) && this.leaderboardOpened) {
                this.leaderboardOpened = false;
                this.resetMouseClick();
            } else if (this.keyboard.mouseClick && !isMouseClick(this.keyboard.mouseClick, this.leaderboard) && this.leaderboardOpened) {
                this.leaderboardOpened = false;
                this.selectedButton = undefined;
                this.resetMouseClick();
            }


            // mouse hover
            if (isMouseClick(this.keyboard.mouseover, this.newGameButton) && this.leaderboardOpened == false) {
                this.canvas.style.cursor = 'pointer';
                this.updateButtonPointer(8.50625, 2.925 - 0.5, 'new game');
            } else if (isMouseClick(this.keyboard.mouseover, this.creditsButton) && this.leaderboardOpened == false) {
                this.canvas.style.cursor = 'pointer';
                this.updateButtonPointer(8.19375, 1.8 - 0.5, 'credits');
            } else if (isMouseClick(this.keyboard.mouseover, this.cupButton) && this.activeButton != 'cup') {
                this.setButtonHover('hoveredButton', this.cupButton);
            } else if (isMouseClick(this.keyboard.mouseover, this.settingsButton) && this.activeButton != 'settings') {
                this.setButtonHover('hoveredButton', this.settingsButton);
            } else {
                // update setButtonHover (third parameter)!!!
                this.hoveredButton = undefined;
                this.canvas.style.cursor = 'initial';
            }


            // mouse functions are still missing ...


            // key press
            // ...
        }, 1000 / 60);
    }


    setButtonHover(key, value) {
        this.setObjectValue(key, value);
        this.setCursorPointer();
    }


    setObjectValue(key, value) {
        this[key] = value;
    }


    setCursorPointer() {
        this.canvas.style.cursor = 'pointer';
    }


    // replace
    resetMouseEvent(key) {
        delete this.keyboard[key];
    }


    resetMouseClick() {
        delete this.keyboard.mouseClick;
    }



    setBirdArrow() {
        setInterval(() => {
            if (this.keyboard.arrowUp.keydown == true && this.activeButton == 'credits' || isMouseClick(this.keyboard.mouseClick, this.newGameButton)) {
                this.updateButtonPointer(8.50625, 2.925 - 0.5, 'new game');
            } else if (this.keyboard.arrowDown.keydown == true && this.activeButton == 'new game' || isMouseClick(this.keyboard.mouseClick, this.creditsButton)) {    // funktioniert nicht ganz!!!
                this.updateButtonPointer(8.19375, 1.8 - 0.5, 'credits');
            }
            // delete mouse click anywhere ...


            if (!this.keyboard.escape.keydown && (isMouseClick(this.keyboard.mouseClick, this.newGameButton) || (this.keyboard.enter.keydown && this.activeButton == 'new game')) &&
                this.startScreenDisplayed == true && this.selectedLevelDisplayed == false) {

                this.birdArrow.speed = 120 / 60;

                setTimeout(() => {
                    this.startScreenDisplayed = false;
                    this.selectedLevelDisplayed = true;
                    this.updateButtonPointer(8.50625, 2.925 - 0.5, 'new game');
                }, 1500);

                AUDIO_NEW_GAME.play();
                console.log('level starts ...');
                this.levelWatch = new Date().getTime();
                delete this.keyboard.mouseClick;
            }


            this.executeMethod('levelScreen', 'leaveGame');


            if (this.leaderboardOpened == true && isMouseClick(this.keyboard.mouseClick, this.closeButton)) {
                this.leaderboardOpened = false;
            }


            if (isMouseClick(this.keyboard.mouseClick, this.cupButton)) {
                this.cupButtonClicked = true;
                this.selectedButton = this.cupButton;
                this.leaderboardContent = 'high score';
                this.leaderboardOpened = true;
            }


            if (isMouseClick(this.keyboard.mouseover, this.cupButton)) {
                this.selectedButton = this.cupButton;
                console.log('hover settings button');
            } else if (isMouseClick(this.keyboard.mouseover, this.settingsButton)) {
                this.selectedButton = this.settingsButton;
                console.log('hover settings button');
            } else if (this.leaderboardOpened != true) {
                this.selectedButton = undefined;
            }
            // delete this.keyboard.mouseover;


            if (isMouseClick(this.keyboard.mouseClick, this.settingsButton)) {
                this.leaderboardContent = 'settings';
                this.settingsButtonClicked = true;
                this.leaderboardOpened = true;
                this.selectedButton = this.settingsButton;
            }

            if (this.leaderboardOpened == true && this.cupButtonClicked == true) {
                this.cupButtonClicked = false;
            }

            if (this.activeButton == 'credits' && this.keyboard.enter.keydown || isMouseClick(this.keyboard.mouseClick, this.creditsButton)) {
                this.creditsOpened = true;
                this.activeButton = 'credits';
                delete this.keyboard.mouseClick;
            }


            if (this.creditsOpened == true && (this.keyboard.mouseClick && !isMouseClick(this.keyboard.mouseClick, this.credits) || this.keyboard.keyX.keydown)) {
                this.creditsOpened = false;
            }
        }, 1000 / 60);
        this.birdArrow.speed = 0;    // neccessary???
    }


    // addToMapOnCondition(object) {
    //     if (object) {
    //         this.addToMap(object);
    //     }
    // }


    // extra button frame (896 - 44, 476 - 44, 88, 88)
}