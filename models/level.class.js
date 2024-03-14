class Level {
    backgroundLayers;
    groundGrass;
    level_end_x = 4 * 960 + (960 - 96);    // to edit
    // edit ...


    constructor(backgroundLayers, tiles) {
        this.backgroundLayers = backgroundLayers;
        this.groundGrass = tiles[0];
    }
}