class DrawableObject extends CoordinateSystem {
    width;
    height;
    img;
    currentImage = 0;
    imageCache = [];
    patternFile = /([a-z]+\_?[a-z]*)(\d+)(.png)/;    // notwendig?


    constructor(x, y, width, height) {    // anpassen!!!
        super();
        this.setDimension(x, y, width, height);    // anpassen!!!
    }


    get xLeft() {
        return this.x;
    }


    get xCenter() {
        return this.x + this.width / 2;
    }


    get xRight() {
        return this.x + this.width;
    }


    get yTop() {
        return this.y;
    }


    get yCenter() {
        return this.y + this.height / 2;
    }


    get yBottom() {
        return this.y + this.height;
    }


    setDimension(x, y, width, height) {
        this.setSize(width, height);
        this.setPosition(x, y);
    }


    setSize(width, height) {
        this.setWidth(width);
        (!height) ? this.setHeight(width) : this.setHeight(height);
    }


    setWidth(width) {
        this.width = width;
    }


    setHeight(height) {
        this.height = height;
    }


    setId(name) {
        name = name.toLowerCase();
        this.id = counter[name];
        counter[name]++;
    }


    setCover(folder) {
        let file = folder.toLowerCase() + '.png';
        this.cover = this.directory + file;
    }


    setFlipBookChapter(chapter) {
        chapter = chapter.toUpperCase();
        this.flipBook = this.flipBook[chapter];
    }


    setPath(name) {    // anpassen!!!
        this.path = this.directory + name + `.png`;
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(flipBook) {
        flipBook.forEach(chapter => {
            let img = new Image();
            img.src = chapter;
            this.imageCache[chapter] = img;
        });
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }



    // Please delete!!!
    drawFrame(ctx) {
        if (this instanceof Knight) {
            // body + center line
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'blue';
            // ctx.rect(this.x, this.y, this.width, this.height);
            // ctx.rect(this.x + 44, this.y + 60, 0, 48);    // centerLine: x + 44, y + 60, 32, 48
            // ctx.rect(this.x + 28, this.y + 64, 32, 48);    // border: x + 28, y + 54, 32, 56
            ctx.stroke();
        }


        if (this instanceof Knight) {
            // body + center line
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'red';
            // ctx.rect(this.x + 44, this.y + 60, 0, 48);    // centerLine: x + 44, y + 60, 32, 48
            // ctx.rect(this.x + 68, this.y + 56, 36, 48);    // border: x + 28, y + 54, 32, 56
            ctx.stroke();
        }


        if (this instanceof Dino) {
            // body + center line
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'blue';
            // ctx.rect(this.x, this.y, this.width, this.height);
            // ctx.rect(this.x + 52, this.y + 44, 0, 44);
            // ctx.rect(this.x + 16, this.y + 44, 84, 44);    // border: x + 28, y + 54, 32, 56
            ctx.stroke();
        }


        if (this instanceof Dino) {
            // body + center line
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'red';
            // ctx.rect(this.x + 96, this.y + 52, 28, 28);    // border: x + 28, y + 54, 32, 56
            ctx.stroke();
        }
    }


    setSpeed(s) {
        this.speed = s / 60;
    }


    floatPermanently() {
        this.float();
        this.keep();
    }


    float() {
        this.x -= this.speed;
    }


    keep() {
        if (this.x < -this.width) {
            this.x = LEVEL_SIZE * world.canvas.width;
        }
    }


    move(subfunction) {
        this.setStoppableInterval(subfunction, 1000 / 60);
    }


    animate() {
        this.setStoppableInterval(() => this.playAnimation(), 100);
        // console.log(this);
    }


    setStoppableInterval(subfunction, interval) {
        let id = setInterval(subfunction, interval);
        intervalIds.push(id);
    }


    updateAvatarInfoX(key, subkey) {
        this.world[key][subkey].x = this.x - 284 + this.world[key][subkey].translation;
    }
}