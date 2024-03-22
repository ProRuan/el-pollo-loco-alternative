class Section {


    constructor(i) {
        this.translation = (!i) ? 0 : i * CANVAS_WIDTH;
    }


    loadBackground(backgrounds) {
        for (let i = 0; i < backgrounds.length; i++) {
            let background = backgrounds[i];
            this.background.push(background);
        }
    }
}