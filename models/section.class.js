class Section {


    constructor(i) {
        this.setSectionId(i);
        this.setTranslation(i);
    }


    setSectionId(i) {
        this.sectionId = i;
    }


    setTranslation(i) {
        this.translation = (!i) ? 0 : i * CANVAS_WIDTH;
    }
}