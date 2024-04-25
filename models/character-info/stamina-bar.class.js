class StateBar extends DrawableObject {
    counter = 100;    // variable!!!
    points = [];

    bg = new StateBarBg(1.4765625, 7.28125);    // variable!!!
    border = new StateBarBorder(1.4375, 7.25);    // variable!!!


    constructor() {    // declare start values!!!
        super(0, 0, 203, 79);
        this.fillStamina();
        this.regenerateStamina();
    }


    get points() {
        return this.points;
    }


    fillStateBar(PointObject, max) {
        for (let i = 0; i < max; i++) {
            let x = (this.bg.transition + i * 1) / 64;
            let point = new PointObject(x);
            this.points.push(point);
        }
    }


    regenerateStamina(PointObject, max) {    // stoppable interval!!!
        setInterval(() => {
            if (this.points.length < max && !world.hero.isKey('keydown', 'keyA')) {
                // this.staminaCounter++;
                let x = (this.bg.transition + this.point.length * 1) / 64;
                let point = new PointObject(x);
                this.points.push(point);
                this.counter = this.point.length;    // neccessary???
            }
        }, 16);
    }


    updatePointX() {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i].x = this.x + this.bg.transition + i;
        }
    }
}