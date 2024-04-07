let level1;


initLevel1();

function initLevel1() {
    level1 = new Level(1);
    level1.loadBackground();    // Please review
    initSection(0);
    initSection(1);

    // load background section by section
    // birds
}


function initSection(id) {
    level1.loadBirds(id);    // Please review
    level1.loadGrassNew(GRASS1[id], id);
    level1.loadCoinsNew(COINS1[id], id);
}