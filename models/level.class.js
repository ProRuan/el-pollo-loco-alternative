class Level {


    constructor(i) {
        this.setSize(i);
        this.setSections(this.size);
        this.setXLevelEnd(this.size);
    }


    setSize(i) {
        this.size = (!i) ? 6 : i;
    }


    setSections(amount) {
        for (let i = 0; i < amount; i++) {
            this[`section${i}`] = new Section(i);
        }
    }


    setXLevelEnd(amount) {
        this.X_LEVEL_END = amount * CANVAS_WIDTH;
    }
}