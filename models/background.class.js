class Background extends DrawableObject {
    directory = 'img/background/';
    layers = [];


    constructor(x) {
        super(x, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.setCover('background');
        this.setLayers();
        this.loadImage(this.cover);
        this.loadImages(this.layers);
    }


    setLayers() {
        let amount = this.getFileId('background5.png');
        for (let i = 0; i < amount; i++) {
            let path = `img/background/background${i}.png`;
            this.layers.push(path);
        }
    }


    getFileId(file) {
        file = file.match(this.patternFile);
        let fileId = file[2];
        return fileId;
    }
}