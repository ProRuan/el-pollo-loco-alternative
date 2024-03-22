class Background extends DrawableObject {
    cover = 'img/background/background.png';


    constructor(x) {
        super();
        this.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
        this.setPosition(x, 0);
        this.loadImage(this.cover);
        this.loadLayers();
    }


    loadLayers() {
        this.layers = [];
        for (let i = 0; i < 6; i++) {
            let path = `img/background/background${i}.png`;
            let layer = new Image();
            layer.src = path;
            this.layers[i] = layer;
        }
        return this.layers;
    }
}