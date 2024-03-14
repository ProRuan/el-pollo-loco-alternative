class GroundGrass22 extends Tile {
    img = 'img/Tiles/Ground_grass_0022_tile.png';
    x;
    y;


    constructor(x, y) {
        super().loadImage(this.img);
        this.x = x;
        this.y = y;
    }
}