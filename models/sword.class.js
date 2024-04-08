class Sword {


    constructor(knight) {
        this.x = knight.x;
        this.y = knight.y;
    }


    get xLeftAttack() {
        return this.x + 68;
    }


    get xRightAttack() {
        return this.xLeftAttack + 36;
    }


    get yTopAttack() {
        return this.y + 56;
    }


    get yBottomAttack() {
        return this.yTopAttack + 48;
    }


    get xLeftWalkAttack() {
        return this.x + 60;
    }


    get xRightWalkAttack() {
        return this.xLeftWalkAttack + 36;
    }


    get yTopExtraAttack() {
        return this.y + 40;
    }


    get yBottomExtraAttack() {
        return this.yTopExtraAttack + 72;
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