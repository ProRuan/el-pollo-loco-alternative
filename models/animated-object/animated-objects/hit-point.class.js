class HitPoint extends AnimatedObject {
    sound = SOUND_HIT_POINT_COLLECTED;


    constructor(x, y) {
        super(x, y, 'Hit_Point');
        this.animate();
    }


    animate() {
        setInterval(() => {    // double code!!!
            let i = this.currentImage % this.flipBook.length;
            let path = this.flipBook[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}