let level1;


initLevel1();

function initLevel1() {
    level1 = new Level(1);
    level1.loadBackground();    // Please review
    initSection(0);
   
    // use GRASS1_1, GRASS1_2 and so on
    // load background section by section
}


function initSection(id) {
    level1.loadBirds(id);    // Please review
    level1.loadGrassNew(GRASS_LEVEL1[id], id);
    level1.loadCoinsNew(COINS_LEVEL1[id], id);
}


function initSection2() {
    let id = 1;
    level1.loadBirds(id);    // Please review
    cacheGrass1().then(level1.loadGrass(id));
    cacheCoins2().then(level1.loadCoins(id));
}


async function cacheCoins2() {
    level1.cache = [
        new Coin(3.25, 1.25), new Coin(4.25, 1.25), new Coin(5.25, 1.25)
    ];
}




function loadBirds() {
    // moved
    level1.loadBirds(1);
    level1.loadBirds(2);
    level1.loadBirds(3);
    level1.loadBirds(4);
    level1.loadBirds(5);
}