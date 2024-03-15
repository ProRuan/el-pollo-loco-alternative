class DrawableObject {
    x = 100;
    y = 100;
    width = 32;
    height = 32;
    img;
    imageCache = {};
    currentImage = 0;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    // drawFrame(ctx)


    loadImages(array) {
        array.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    drawFrame(ctx) {
        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + 44, this.y + 60, 0, 48);    // centerLine: x + 44, y + 60, 32, 48
            // ctx.rect(this.x + 28, this.y + 60, 32, 48);    // border: x + 28, y + 60, 32, 48
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + 60, this.y + 60, 48, 48);    // border: x + 28, y + 60, 32, 48
            ctx.stroke();
        }
    }
}