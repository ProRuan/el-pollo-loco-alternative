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
        updateWorld(world, this);

        this.setStartScreenBg();
        this.setCredits();
        this.setExtraButtons();
        this.setleaderboard();
        this.setCloseButton();
        this.setVolumeButtons();

        updateWorld(this, world);
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


    // to edit
    setleaderboard() {
        this.leaderboard = new DrawableObject(0 + 15 / 2 - 382 / 64 / 2, 540 / 64 / 2 - 441 / 64 / 2, 382, 441);
        this.leaderboard.loadImage('./img/start_screen/leaderboard.png');
    }


    // to edit
    setCloseButton() {
        this.closeButton = new DrawableObject((650.5 - 14) / 64, (99.5 - 14) / 64, 28, 28);
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


    drawHighScore() {
        this.drawBestResult();
        this.drawLastResult();
    }


    // to edit
    drawBestResult() {    // set variables!!!
        world.setFillStyle('gold');
        world.drawCenteredText('24px Arial', 'Best result', 152);
        world.setFont('20px Arial');
        world.drawText('Coins:', 352, 192);
        world.drawText('19 / 20', 960 / 2 + 32, 184 + 8);
        world.drawText('Leaves:', 352, 228);
        world.drawText('15 / 18', 960 / 2 + 32, 220 + 8);
        world.drawText('Time required:', 352, 264);
        world.drawText('7 min 32 s', 960 / 2 + 32, 256 + 8);
        world.setFillStyle('black');
    }


    // to edit
    drawLastResult() {    // set variables!!!
        world.setFillStyle('white');
        world.drawCenteredText('24px Arial', 'Last result', 328);
        world.setFont('20px Arial');
        world.drawText('Coins:', 352, 368);
        world.drawText('17 / 20', 960 / 2 + 32, 368);
        world.drawText('Leaves:', 352, 404);
        world.drawText('14 / 18', 960 / 2 + 32, 404);
        world.drawText('Time required:', 352, 440);
        world.drawText('9 min 16 s', 960 / 2 + 32, 440);
        world.setFillStyle('black');
    }


    // to edit
    drawSettings() {    // set variables!!!
        world.setFillStyle('white');
        world.drawCenteredText('24px Arial', 'Volume', 152);
        world.drawText('Music', 352, 192);
        world.drawText('4', 960 / 2 + 64, 192);
        world.drawText('Music', 352, 228);
        world.drawText('7', 960 / 2 + 64, 228);
        world.setFillStyle('black');
    }
}