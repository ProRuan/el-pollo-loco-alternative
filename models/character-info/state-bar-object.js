class StateBarObject extends DrawableObject {
    points = [];


    constructor() {
        super(0, 0, 203, 79);
    }


    get points() {
        return this.points;
    }


    fill() {
        for (let i = 0; i < this.max; i++) {
            this.addNewPoint();
        }
    }


    addNewPoint() {
        let x = (this.bg.translation + this.points.length * 1) / 64;
        let point = new StaminaPoint(x);    // variable!!!
        this.points.push(point);
    }


    regenerate() {
        if (this.points.length < this.max && !world.hero.isKey('keydown', 'keyA')) {    // condition!!!
            this.addNewPoint();
        }
    }


    updatePointX() {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i].x = this.x + this.bg.translation + i;
        }
    }
}