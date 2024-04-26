class StateBarObject extends DrawableObject {
    points = [];


    constructor(bg, border, max) {    // declare start values!!!
        super(0, 0, 203, 79);
        this.setMaxPoints(max);
        this.setRegenerationTime(16);
        this.createBg(bg);
        this.createBorder(border);
        this.fillStateBar();
        this.regenerateStateBar();
    }


    get points() {
        return this.points;
    }


    setMaxPoints(max) {
        this.max = max;
    }


    setRegenerationTime(regTime) {
        this.regTime = regTime;
    }


    createBg(BgObject) {
        this.bg = new BgObject();
        this.imageCache.push(this.bg.img);
    }


    createBorder(BorderObject) {
        this.border = new BorderObject();
        this.imageCache.push(this.border.img);
    }


    fillStateBar() {
        for (let i = 0; i < this.max; i++) {
            let x = (this.bg.translation + i * 1) / 64;
            let point = new StaminaPoint(x);
            this.points.push(point);
        }
    }


    regenerateStateBar() {    // stoppable interval!!!
        setInterval(() => {
            if (this.points.length < this.max && !world.hero.isKey('keydown', 'keyA')) {
                // this.staminaCounter++;
                console.log(this.bg.translation);
                let x = (this.bg.translation + this.points.length * 1) / 64;
                let point = new StaminaPoint(x);
                this.points.push(point);
                this.counter = this.points.length;    // neccessary???
            }
        }, this.regTime);
    }


    updatePointX() {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i].x = this.x + this.bg.translation + i;
        }
    }
}