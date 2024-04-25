class Web extends AnimatedObject {


    constructor(x, y, otherDir) {
        super(x, y, 'Web');
        this.setOtherDirection(otherDir);
        this.move();
        this.animate();
    }


    setOtherDirection(otherDir) {
        this.otherDirection = otherDir;
    }


    move() {
        setInterval(() => {
            (this.otherDirection) ? this.x -= 192 / 64 : this.x += 192 / 64;
        }, 1000 / 60);
    }
}