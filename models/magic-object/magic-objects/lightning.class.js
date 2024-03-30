class Lightning extends MagicObject {
    currentImage = 0;


    constructor(x, y) {
        super(x, y, 'Lightning');
        this.animate();
    }


    animate() {
        setInterval(() => {
            let i = this.currentImage % this.flipBook.length;
            let path = this.flipBook[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}