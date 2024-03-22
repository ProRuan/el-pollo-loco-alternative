class CoordinateSystem {
    x;
    y;


    setPosition(x, y) {
        this.setX(x);
        this.setY(y);
    }


    setX(x) {
        this.x = x * 64;
    }


    setY(y) {
        this.y = canvas.height - this.height - y * 64;
    }
}