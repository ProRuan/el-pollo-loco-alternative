class Sword {
    width = 40;
    height = 56;


    constructor(knight) {
        this.x = knight.x;
        this.y = knight.y;
    }


    get xLeftAttack() {
        return this.x + 68;
    }


    get xRightAttack() {
        return this.xLeftAttack + this.width;
    }


    get yTopAttack() {
        return this.y + 54;
    }


    get yBottomAttack() {
        return this.yTopAttack + this.height;
    }


    get xLeftWalkAttack() {
        return this.x + 60;
    }


    get xRightWalkAttack() {
        return this.xLeftWalkAttack + 36;
    }


    get xLeftExtraAttack() {
        return this.x + 64;
    }


    get xRightExtraAttack() {
        return this.xLeftExtraAttack + 40;
    }


    get yTopExtraAttack() {
        return this.y + 32;
    }


    get yBottomExtraAttack() {
        return this.yTopExtraAttack + 78;
    }


    attack(enemy) {
        return this.isSubtending(enemy, this.xLeftAttack, this.xRightAttack, this.yTopAttack, this.yBottomAttack);
    }


    attackWalk(enemy) {
        return this.isSubtending(enemy, this.xLeftWalkAttack, this.xRightWalkAttack, this.yTopAttack, this.yBottomAttack);
    }


    attackExtra(enemy) {
        return this.isSubtending(enemy, this.xLeftExtraAttack, this.xRightExtraAttack, this.yTopExtraAttack, this.yBottomExtraAttack);
    }


    isSubtending(enemy, xLeft, xRight, yTop, yBottom) {
        let hitLeft = enemy.xLeft < xLeft && xLeft < enemy.xRight;
        let hitRight = enemy.xLeft < xRight && xRight < enemy.xRight;
        let hitTop = enemy.yTop < yTop && yTop < enemy.yBottom;
        let hitBottom = enemy.yTop < yBottom && yBottom < enemy.yBottom;
        return (hitLeft || hitRight) && (hitTop || hitBottom);
    }
}