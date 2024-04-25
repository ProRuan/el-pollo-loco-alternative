class Coin extends AnimatedObject {
    sound = SOUND_COIN_COLLECTED;


    constructor(x, y) {
        super(x, y, 'Coin');
        this.animate();
    }


    animate() {    // double code!!!
        setInterval(() => {
            let i = this.currentImage % this.flipBook.length;
            let path = this.flipBook[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}