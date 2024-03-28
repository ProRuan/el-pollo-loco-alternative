class Sword {
    width = 40;
    height = 56;


    constructor(knight) {
        this.x = knight.x;
        this.y = knight.y;
    }


    get xLeft() {
        return this.x + 68;
    }


    get xRight() {
        return this.xLeft + this.width;
    }


    get yTop() {
        return this.y + 54;
    }


    get yBottom() {
        return this.yTop + this.height;
    }


    attack(enemy) {
        let hit = this.isSubtending(enemy);
        return hit;
    }


    isSubtending(enemy) {
        let hitLeft = enemy.xLeft < this.xLeft && this.xLeft < enemy.xRight;
        let hitRight = enemy.xLeft < this.xRight && this.xRight < enemy.xRight;
        let hitTop = enemy.yTop < this.yTop && this.yTop < enemy.yBottom;
        let hitBottom = enemy.yTop < this.yBottom && this.yBottom < enemy.yBottom;
        return (hitLeft || hitRight) && (hitTop || hitBottom);
    }
}