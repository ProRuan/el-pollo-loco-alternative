class StartScreen {


    // to edit
    birdArrow = new Bird(8.50625, 2.925);    // x, y as variables!!!
    activeButton = 'new game';
    creditsOpened = false;
    leaderboardOpened = false;
    leaderboardContent = 'settings';    // check!!!
    selectedButton = undefined;    // neccessary???


    // to edit (until this is complete)!!!
    constructor(world) {
        this.updateWorld(world, this);

        this.setStartScreenBg();
        this.setCredits();
        this.setExtraButtons();
        this.setVolumeButtons();

        this.updateWorld(this, world);
    }


    updateWorld(provider, recipient) {
        for (const [key] of Object.entries(provider)) {
            recipient[key] = provider[key];
        }
    }


    // to edit
    setStartScreenBg() {
        this.startScreenBg = new DrawableObject(0, 0, canvasWidth, canvasHeight);
        this.startScreenBg.loadImage('./img/start_screen/background.png');
    }


    // to edit
    setCredits() {
        this.credits = new DrawableObject(15 / 2 - 276 / 64 / 2, 540 / 64 / 2 - 333 / 64 / 2, 276, 333);
        this.credits.loadImage('./img/start_screen/credits_bg.png');
    }


    // to edit
    setExtraButtons() {
        this.setButton('home', 0.5, 540 / 64 - 66 / 64 - 0.5);    // y is a variable!!!
        this.setButton('cup', 0.5, 0.5);
        this.setButton('settings', 14 - 66 / 2 / 64, 0.5);    // x is a variable
    }


    setButton(name, x, y) {
        let key = this.getButtonName(name);
        this[key] = new DrawableObject(x, y, 66, 66);
        this[key].loadImage(`./img/start_screen/${name}_button.png`);
    }


    getButtonName(name, subname) {
        return (!subname) ? name + 'Button' : name + subname + 'Button';
    }


    setVolumeButtons() {
        this.setArrowLeftButton();
        this.setArrowRightButton();
    }


    // to edit
    setArrowLeftButton() {
        this.setArrowButton('left', 'Music', 960 / 2 / 64 + 0.109375, 540 / 64 - 3);    // variable!!!
        this.setArrowButton('left', 'Sound', 960 / 2 / 64 + 0.109375, 540 / 64 - 3.5625);    // variable!!!
    }


    setArrowButton(name, subname, x, y) {
        let key = this.getButtonName(name, subname);
        this[key] = new DrawableObject(x, y, 10, 17);
        this[key].loadImage(`./img/start_screen/arrow_${name}.png`);
    }


    // to edit
    setArrowRightButton() {
        this.setArrowButton('right', 'Music', 960 / 2 / 64 + 2 - 0.109375, 540 / 64 - 3);    // variable!!!
        this.setArrowButton('right', 'Sound', 960 / 2 / 64 + 2 - 0.109375, 540 / 64 - 3.5625);    // variable!!!
    }
}