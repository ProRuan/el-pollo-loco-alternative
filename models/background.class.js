class Background extends DrawableObject {
    directory = 'img/background/';
    layers = [];


    constructor(x) {
        super(x, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.setLayers();
        this.loadImages(this.layers);
    }


    setLayers() {
        let amount = +this.getFileId('background6.png');
        for (let i = 1; i < amount + 1; i++) {
            this.addLayer(i);
        }
    }


    getFileId(file) {
        file = file.match(this.patternFile);
        let fileId = file[2];
        return fileId;
    }


    addLayer(i) {
        let path = `img/background/background${i}.png`;
        this.layers.push(path);
    }
}