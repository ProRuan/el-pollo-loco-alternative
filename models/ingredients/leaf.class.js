class Leaf extends DrawableObject {


    constructor(x, y, i) {
        super(x, y, 32);
        this.setPath(i);
        this.loadImage(this.path);
    }


    setPath(i) {
        this.path = `img/ingredients/leaf${i}.png`;
    }
}