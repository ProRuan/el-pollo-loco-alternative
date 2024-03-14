class Level {
    backgroundLayers;
    groundGrass01;
    groundGrass22;
    level_end_x = 1920;    // to edit
    // edit ...


    constructor(backgroundLayers, tiles) {
        this.backgroundLayers = backgroundLayers;
        this.groundGrass01 = tiles[0];
        this.groundGrass22 = tiles[1];
    }
}