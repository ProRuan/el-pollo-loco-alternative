class Section extends DrawableObject {
    grass = [];

    constructor() {
        super();
        this.grass = this.loadGrass();
    }

    loadGrass() {
        return [
            new Tile('grass-center', 0),
            new Tile('grass-center', 64)
        ];
    }
}