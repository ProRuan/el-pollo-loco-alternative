class Layer extends DrawableObject {


    constructor(background, i) {
        super(background.x / 64, background.y / 64, background.width, background.height);
        this.loadImage(background.layers[i]);
        this.deleteLayerProperties();
    }


    deleteLayerProperties() {
        delete this.imageCache;
        delete this.patternFile;
    }
}