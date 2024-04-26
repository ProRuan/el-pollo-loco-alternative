class AnimatedObject extends DrawableObject {
    directory = 'img/objects_animated/';
    flipBook = FLIP_BOOK_OBJECTS;
    indent = 4;


    constructor(x, y, name) {
        super(x, y, 32);
        this.setId(name);
        this.setCover(name);
        this.setFlipBookChapter(name);
        this.loadImage(this.cover);
        this.loadImages(this.flipBook);
        this.animate();
    }


    get xLeft() {
        return this.x + this.indent;
    }


    get xCenter() {
        return this.x + this.width / 2;
    }


    get xRight() {
        return this.x + (this.width - this.indent);
    }


    get yTop() {
        return this.y + this.indent;
    }


    get yCenter() {
        return this.y + this.height / 2;
    }


    get yBottom() {
        return this.y + (this.height - this.indent);
    }


    setSpeed(s) {
        this.speed = s / 60;
    }


    move(subfunction) {
        this.setStoppableInterval(subfunction, 1000 / 60);
    }


    animate() {
        this.setStoppableInterval(() => this.playAnimation(), 100);
        // console.log(this);
    }


    playAnimation() {
        let i = this.currentImage % this.flipBook.length;
        let path = this.flipBook[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    setSound(path) {
        this.sound = path;
    }


    playSound() {
        new Audio(this.sound).play();
    }
}