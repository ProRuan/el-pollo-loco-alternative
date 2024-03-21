class DrawableObjectNew extends CoordinateSystem {
    width;
    height;
    img;


    constructor() {
        super();
    }


    setImage(folder) {
        let file = folder.toLowerCase() + '1.png';
        this.img = this.directory + folder + '/' + file;
    }
}