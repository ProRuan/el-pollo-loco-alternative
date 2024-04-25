class Web extends AnimatedObject {


    constructor(x, y, otherDir) {
        super(x, y, 'web');
        this.setOtherDirection(otherDir);
        this.setSpeed(192);
        this.move(() => this.throw());
        this.setSound(SOUND_WEB_THROWN);
        this.playSound();
    }


    setOtherDirection(otherDir) {
        this.otherDirection = otherDir;
    }


    throw() {
        (this.otherDirection) ? this.x -= this.speed : this.x += this.speed;
    }
}