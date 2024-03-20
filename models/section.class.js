class Section {
    translation = 960;


    constructor(i) {
        this.translation = (i) ? i * 960 : 0;
    }


    pushTile(type, xStart, n) {
        for (let i = xStart; i < xStart + n; i++) {
            ;
            let tile = new Tile(type, i);
            this.applyTranslation(tile);
            GRASS.push(tile);
        }
    }


    applyTranslation(tile) {
        tile.x += this.translation;
    }


    pushGrassBlockStart(xStart, n) {
        this.pushTile('grass-start', xStart, 1);
        this.pushTile('grass-center', xStart + 1, n - 1);
    }


    pushGrassBlockCenter(xStart, n) {
        this.pushTile('grass-start', xStart, 1);
        this.pushTile('grass-center', xStart + 1, n - 2);
        this.pushTile('grass-end', xStart + n - 1, 1);
    }


    pushGrassBlockEnd(xStart, n) {
        this.pushTile('grass-center', xStart, n - 1);
        this.pushTile('grass-end', xStart + n - 1, 1);
    }
}