class Leaf extends DrawableObject {
    sound = './audio/crafting/Fantasy_Game_Item_Collect_Herbs.wav';
    

    constructor(x, y, i) {
        super(x, y, 32);
        this.setPath(i);
        this.loadImage(this.path);
    }


    get xLeft() {
        return this.x + 4;
    }


    get xCenter() {
        return this.x + this.width / 2;
    }


    get xRight() {
        return this.x + 28;
    }


    get yTop() {
        return this.y + 4;
    }


    get yCenter() {
        return this.y + this.height / 2;
    }


    get yBottom() {
        return this.y + 28;
    }


    setPath(i) {
        this.path = `img/ingredients/leaf${i}.png`;
    }
}