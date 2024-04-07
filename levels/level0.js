let level1;


initLevel1();

function initLevel1() {
    level1 = new Level(1);
    level1.loadBackground();    // Please review
    initSection(0);
    initSection(1);
    initSection(2);
    initSection(3);
    initSection(4);
    initSection(5);
    initSection(6);
    initSection(7);

    // load background section by section
}


function initSection(id) {
    level1.loadBirds(id);    // Please review
    level1.loadGrassFlyingNew(GRASS_FLYING1[id], id);
    level1.loadGrassNew(GRASS1[id], id);
    level1.loadCoinsNew(COINS1[id], id);
}