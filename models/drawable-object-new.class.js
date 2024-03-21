class DrawableObjectNew extends CoordinateSystem {
    width;
    height;
    img;


    constructor() {
        super();
    }


    // setSize()


    // setWidth()


    // setHeight()


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    // setImage(folder) {
    //     let file = folder.toLowerCase() + '.png';
    //     this.img = this.directory + file;
    // }
}