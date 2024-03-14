class Level {
    backgroundLayers;
    groundGrass;
    level_end_x = 1920;    // to edit
    // edit ...


    constructor(backgroundLayers, tiles) {
        this.backgroundLayers = backgroundLayers;
        this.groundGrass = tiles[0];
    }
}