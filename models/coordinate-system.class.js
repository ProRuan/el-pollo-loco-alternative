class CoordinateSystem {
    x;
    y;

    
    setX(x) {
        this.x = x * 64;
    }


    setY(y) {
        this.y = 540 - this.height - y * 64;
    }
}