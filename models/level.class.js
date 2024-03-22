class Level {


    constructor(i) {
        this.setLevelId(i);
        this.setSections(LEVEL_SIZE);
        this.setXLevelEnd(LEVEL_SIZE);
    }


    setLevelId(i) {
        this.levelId = i;
    }


    setSections(amount) {
        for (let i = 0; i < amount; i++) {
            this[`section${i}`] = new Section(i);
            this[`section${i}`][`levelId`] = this.levelId;
        }
    }


    setXLevelEnd(amount) {
        this.X_LEVEL_END = amount * CANVAS_WIDTH;
    }
}