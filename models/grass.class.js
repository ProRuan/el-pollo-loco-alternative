class Grass extends DrawableObject {
    directory = 'img/tiles/';


    constructor(x, y, name) {
        super();
        this.setSize(64);
        this.setPosition(x, y);
        this.setPath(name);
        this.loadImage(this.path);
    }

    
    
}