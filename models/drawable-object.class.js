class DrawableObject extends CoordinateSystem {
    width;
    height;
    img;
    imageCache = [];
    patternFile = /([a-z]+\_?[a-z]*)(\d+)(.png)/;    // notwendig?


    constructor(x, y, width, height) {    // anpassen!!!
        super();
        this.setDimension(x, y, width, height);    // anpassen!!!
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


    setCover(folder) {
        let file = folder.toLowerCase() + '.png';
        this.cover = this.directory + file;
    }


    setFlipBookChapter(chapter) {
        chapter = chapter.toUpperCase();
        this.flipBook = this.flipBook[chapter];
    }


    setPath(name) {    // anpassen!!!
        this.path = this.directory + `grass-${name}.png`;
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
            // ctx.rect(this.x + 44, this.y + 54, 0, 56);    // centerLine: x + 44, y + 60, 32, 48
            ctx.rect(this.x + 28, this.y + 54, 32, 56);    // border: x + 28, y + 54, 32, 56
            ctx.stroke();

            // attack range
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            // ctx.rect(this.x + 60, this.y + 60, 48, 48);    // attack: x + 60, y + 60, 48, 48
            // ctx.rect(this.x + 60, this.y + 60, 36, 48);    // walk atttack, run attack: x + 60, y + 60, 36, 48
            // ctx.rect(this.x + 60, this.y + 32, 48, 80);    // attack: x + 60, y + 60, 48, 48
            ctx.stroke();
        }


        if (this instanceof GrassStart || this instanceof GrassCenter || this instanceof GrassEnd) {
            // body + center line
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'yellow';
            // ctx.rect(this.x + 4, this.y + 4, 56, 60);
            ctx.stroke();
        }


        if (this instanceof Coin) {
            // body + center line
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'purple';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }


        if (this instanceof Stone) {
            // body + center line
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'purple';
            ctx.rect(this.x + 16, this.y + 16, 32, 32);
            ctx.stroke();
        }




        if (this instanceof Character) {
            // body + center line
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'blue';
            // ctx.rect(this.x + 44, this.y + 60, 0, 48);    // centerLine: x + 44, y + 60, 32, 48
            ctx.rect(this.x + 28, this.y + 60, 32, 48);    // border: x + 28, y + 60, 32, 48
            ctx.stroke();

            // attack range
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + 60, this.y + 60, 48, 48);    // attack: x + 60, y + 60, 48, 48
            // ctx.rect(this.x + 60, this.y + 60, 36, 48);    // walk atttack, run attack: x + 60, y + 60, 36, 48
            // ctx.rect(this.x + 60, this.y + 32, 48, 80);    // attack: x + 60, y + 60, 48, 48
            ctx.stroke();
        }

        if (this instanceof Enemy) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'purple';
            // ctx.rect(this.x, this.y + 40, 104, 48);    // x, y + 40, 104, 48 --> xCenter = 52
            ctx.rect(this.x + 84, this.y + 40, 40, 40);    // x + 84, y + 40, 40, 40
            ctx.stroke();
        }

        // if (this instanceof AnimatedObject) {
        //     ctx.beginPath();
        //     ctx.lineWidth = '2';
        //     ctx.strokeStyle = 'green';
        //     ctx.rect(this.x + 16, this.y + 16, 32, 32);
        //     ctx.stroke();
        // }
    }
}