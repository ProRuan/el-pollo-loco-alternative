class Web extends AnimatedObject {
    speed = 192 / 64;


    constructor(x, y, otherDir) {
        super(x, y, 'Web');
        this.setOtherDirection(otherDir);
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