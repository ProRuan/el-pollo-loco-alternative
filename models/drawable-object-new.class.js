class DrawableObjectNew extends CoordinateSystem {
    width;
    height;
    img;


    constructor() {
        super();
    }


    setSize(width, height) {
        this.setWidth(width);
        (!height) ? this.setHeight(width) : this.setHeight(height);
    }


    setWidth(width) {
        this.width = width;
    }


    setHeight(height) {
        this.height = height;
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    // setImage(folder) {
    //     let file = folder.toLowerCase() + '.png';
    //     this.img = this.directory + file;
    // }
}