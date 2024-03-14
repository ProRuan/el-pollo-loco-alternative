class Level {
    backgroundLayers;
    groundGrassCenter;
    level_end_x = 1920;    // to edit
    // edit ...


    constructor(backgroundLayers, tiles) {
        this.backgroundLayers = backgroundLayers;
        this.groundGrassCenter = tiles[0];
    }
}