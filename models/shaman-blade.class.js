class ShamanBlade {


    constructor(shaman) {
        this.x = shaman.x;
        this.y = shaman.y;
    }


    get xLeft() {
        return this.x - 72;
        // return this.x + 156;
    }


    get xRight() {
        return this.xLeft + 68;
    }


    get yTop() {
        return this.y + 56;
    }


    get yBottom() {
        return this.yTop + 128;
    }


    attack(hero) {    // double code!!!
        let hit = this.isSubtending(hero, this.xLeft, this.xRight, this.yTop, this.yBottom);
        if (hit) {
            // console.log(hit);
        }
        return hit;
    }


    isSubtending(hero, xLeft, xRight, yTop, yBottom) {    // double code!!!
        let hitLeft = hero.xLeft < xLeft && xLeft < hero.xRight;
        let hitRight = hero.xLeft < xRight && xRight < hero.xRight;
        let hitTop = hero.yTop < yTop && yTop < hero.yBottom;
        let hitBottom = hero.yTop < yBottom && yBottom < hero.yBottom;
        return (hitLeft || hitRight) && (hitTop || hitBottom);
    }
}