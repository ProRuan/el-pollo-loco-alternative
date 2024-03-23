class Knight extends MoveableObject {


    constructor() {
        super(0, 0.625, 'knight');
    }


    get xLeft() {
        return this.x + 16;
    }


    get xCenter() {
        return this.x + 44;
    }


    get xRight() {
        return this.x + 60;
    }


    get yTop() {
        return this.y + 54;
    }


    get yBottom() {
        return this.y + 110;
    }
}