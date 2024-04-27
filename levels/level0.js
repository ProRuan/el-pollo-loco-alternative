let level1;


initLevel1();


function initLevel1() {
    level1 = new Level(1);    // Please review!!!
    initLevelLandscape();
    initLevelSections();
    initLevelEndboss();
}


function initLevelLandscape() {
    level1.loadLandscape();
}


function initLevelSections() {
    for (let i = 0; i < LEVEL_SIZE; i++) {
        initSection(i);
    }
}


function initSection(id) {
    level1.loadSectionObjects(TREES1, id, 'TREES');
    level1.loadSectionObjects(GRASS_FLYING1, id, 'GRASS_FLYING');
    level1.loadSectionObjects(GRASS1, id, 'GRASS');
    level1.loadSectionObjects(LADDERS1, id, 'LADDERS');
    level1.loadSectionObjects(LEAVES1, id, 'LEAVES');
    level1.loadSectionObjects(COINS1, id, 'COINS');
    level1.loadSectionObjects(CRYSTALS1, id, 'CRYSTALS');
    level1.loadSectionObjects(HIT_POINTS1, id, 'HIT_POINTS');
    level1.loadSectionObjects(ENEMIES1, id, 'ENEMIES');
}


function initLevelEndboss() {
    level1.loadEndboss(ENDBOSS1);
}