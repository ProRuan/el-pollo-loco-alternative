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
        let point = this.getPoint(x);
        this.points.push(point);
    }


    getPoint(x) {
        if (this.name == 'hp') {
            return new HpPoint(x);
        } else if (this.name == 'energy') {
            return new EnergyPoint(x);
        } else if (this.name == 'stamina') {
            return new StaminaPoint(x);
        }
    }


    regenerate() {
        let condition = this.getCondition();
        if (this.points.length < this.max && condition) {    // condition!!!
            this.addNewPoint();
        }
    }


    getCondition() {
        if (this.name == 'stamina') {
            return !world.hero.isKey('keydown', 'keyA');
        } else {
            return true;
        }
    }


    updatePointX() {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i].x = this.x + this.bg.translation + i;
        }
    }
}