class DrawableObjectNew extends CoordinateSystem {
    width;
    height;
    img;


    constructor() {
        super();
    }


    setImage(folder) {
        let file = folder.toLowerCase() + '.png';
        this.img = this.directory + file;
    }
}