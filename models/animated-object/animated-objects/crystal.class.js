class Crystal extends AnimatedObject {
    sound = SOUND_CRYSTAL_COLLECTED;
    soundUpgrade = SOUND_CRYSTAL_UPGRADE;
    

    constructor(x, y) {
        super(x, y, 'Crystal');
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