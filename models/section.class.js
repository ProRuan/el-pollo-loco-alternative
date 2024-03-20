class Section {
    translation = 0;


    pushTile(type, xStart, n) {
        for (let i = xStart; i < xStart + n; i++) {
            let tile = new Tile(type, i + this.translation);
            GRASS.push(tile);
        }
    }


    pushGrassStartCenter(xStart, n) {
        this.pushTile('grass-start', xStart + this.translation, 1);
        this.pushTile('grass-center', xStart + 1 + this.translation, n - 1);
    }


    pushGrassStartCenterEnd(xStart, n) {
        this.pushTile('grass-start', xStart + this.translation, 1);
        this.pushTile('grass-center', xStart + 1 + this.translation, n - 2);
        this.pushTile('grass-end', xStart + n - 1 + this.translation, 1);
    }


    pushGrassCenterEnd(xStart, n) {
        this.pushTile('grass-center', xStart + this.translation, n - 1);
        this.pushTile('grass-end', xStart + n - 1 + this.translation, 1);
    }
}