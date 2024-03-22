class DrawableObject extends CoordinateSystem {
    width;
    height;
    img;


    constructor() {
        super();
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


    setPath(name) {
        this.path = this.directory + `grass-${name}.png`;
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }




    drawFrame(ctx) {
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

        if (this instanceof AnimatedObject) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'green';
            ctx.rect(this.x + 16, this.y + 16, 32, 32);
            ctx.stroke();
        }
    }
}