class StateBarObject extends DrawableObject {
    points = [];


    constructor(regTime) {    // declare start values!!!
        super(0, 0, 203, 79);
        this.fillStateBar();
        this.setRegenerationTime(regTime);
        this.regenerateStateBar();
    }


    get points() {
        return this.points;
    }


    fillStateBar() {
        for (let i = 0; i < this.max; i++) {
            let x = (this.bg.translation + i * 1) / 64;
            let point = new StaminaPoint(x);
            this.points.push(point);
        }
    }


    // fillStamina() {
    //     for (let i = 100 - this.staminaCounter; i < this.staminaCounter; i++) {
    //         let x = (93 + i * 1) / 64;
    //         let staminaPoint = new StaminaPoint(x);
    //         this.staminaPoints.push(staminaPoint);
    //     }
    //     console.log(this.staminaPoints.length);
    // }


    setRegenerationTime(regTime) {
        this.regTime = regTime;
    }


    regenerateStateBar() {    // stoppable interval!!!
        setInterval(() => {
            if (this.points.length < this.max && !world.hero.isKey('keydown', 'keyA')) {
                let x = (this.bg.translation + this.points.length * 1) / 64;
                let point = new StaminaPoint(x);
                this.points.push(point);
            }
        }, this.regTime);
    }


    updatePointX() {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i].x = this.x + this.bg.translation + i;
        }
    }
}