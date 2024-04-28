class StartScreen {


    // to edit (until this is complete)!!!
    constructor(world) {
        this.updateWorld(world, this);

        this.setExtraButtons();

        this.updateWorld(this, world);
    }


    updateWorld(provider, recipient) {
        for (const [key] of Object.entries(provider)) {
            recipient[key] = provider[key];
        }
    }


    // to edit
    setExtraButtons() {
        this.setButton('home', 0.5, 540 / 64 - 66 / 64 - 0.5);
        this.setButton('cup', 0.5, 0.5);
        this.setButton('settings', 14 - 66 / 2 / 64, 0.5);
    }


    setButton(name, x, y) {
        let key = name + 'Button';
        this[key] = new DrawableObject(x, y, 66, 66);
        this[key].loadImage(`./img/start_screen/${name}_button.png`);
    }
}