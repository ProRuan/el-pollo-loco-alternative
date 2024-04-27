class Layer extends DrawableObject {


    constructor(bg, i) {
        super(bg.x / 64, bg.y / 64, bg.width, bg.height);
        this.loadImage(bg.layers[i]);
        this.deleteLayerProperties();
    }


    deleteLayerProperties() {
        delete this.imageCache;
        delete this.patternFile;
    }
}