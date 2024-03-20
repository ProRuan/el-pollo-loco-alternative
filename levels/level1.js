const t = 0;
const GRASS = [];


// pushTile('grass-center', 0, 15);
pushGrassStartCenterEnd(0, 15, t);




function pushTile(type, xStart, n) {
    for (let i = xStart; i < xStart + n; i++) {
        let tile = new Tile(type, i);
        GRASS.push(tile);
    }
}


function pushGrassStart(xStart, n, t) {
    pushTile('grass-start', xStart + t, 1);
    pushTile('grass-center', xStart + 1 + t, n - 1);
}


function pushGrassStartCenterEnd(xStart, n, t) {
    pushTile('grass-start', xStart + t, 1);
    pushTile('grass-center', xStart + 1 + t, n - 2);
    pushTile('grass-end', xStart + n - 1 + t, 1);
}


function pushGrassCenterEnd(xStart, n, t) {
    pushTile('grass-center', xStart + t, 1);
    pushTile('grass-end', xStart + 1 + t, n - 1);
}