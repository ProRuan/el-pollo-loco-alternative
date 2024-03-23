class Knight extends MoveableObject {
    flipBook = FLIP_BOOK_HERO;


    constructor() {
        super(0, 0.625, 'knight');
        this.loadFlipBookImages(this.flipBook);
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


    loadFlipBookImages(flipBook) {
        for (const [key, value] of Object.entries(flipBook)) {
            if (Array.isArray(value)) {
                this.loadImages(flipBook[key]);
            }
        }
    }
}