level1 = new Level(1);


level1.loadBackground();

level1.loadBirds(0);
level1.loadBirds(1);
level1.loadBirds(2);
level1.loadBirds(3);
level1.loadBirds(4);
level1.loadBirds(5);


level1.cache = [
    new GrassCenter(0, 0), new GrassCenter(1, 0), new GrassCenter(2, 0), new GrassCenter(3, 0),
    new GrassCenter(4, 0), new GrassCenter(5, 0), new GrassCenter(6, 0), new GrassCenter(7, 0),
    new GrassCenter(8, 0), new GrassCenter(9, 0), new GrassCenter(10, 0), new GrassCenter(11, 0),
    new GrassCenter(12, 0), new GrassCenter(13, 0), new GrassCenter(14, 0)
];
level1.loadGrass(0);

level1.cache = [
    new GrassCenter(0, 0), new GrassCenter(1, 0), new GrassCenter(2, 0), new GrassCenter(3, 0),
    new GrassCenter(4, 0), new GrassCenter(5, 0), new GrassEnd(6, 0), new GrassStart(8, 0),
    new GrassCenter(9, 0), new GrassCenter(10, 0), new GrassCenter(11, 0), new GrassCenter(12, 0),
    new GrassCenter(13, 0), new GrassCenter(14, 0)
];
level1.loadGrass(1);

level1.cache = [
    new GrassCenter(0, 0), new GrassCenter(1, 0), new GrassCenter(2, 0), new GrassCenter(3, 0),
    new GrassEnd(4, 0), new GrassStart(6, 0), new GrassCenter(7, 0), new GrassEnd(8, 0),
    new GrassStart(10, 0), new GrassCenter(11, 0), new GrassCenter(12, 0), new GrassCenter(13, 0),
    new GrassCenter(14, 0)
];
level1.loadGrass(2);

level1.cache = [
    new GrassCenter(0, 0), new GrassCenter(1, 0), new GrassCenter(2, 0), new GrassCenter(3, 0),
    new GrassCenter(4, 0), new GrassEnd(5, 0), new GrassFlyingStart(6, 2), new GrassFlyingCenter(7, 2),
    new GrassFlyingEnd(8, 2), new GrassStart(9, 0), new GrassCenter(10, 0), new GrassCenter(11, 0),
    new GrassCenter(12, 0), new GrassCenter(13, 0), new GrassCenter(14, 0)
];
level1.loadGrass(3);

// continue with grass ...


level1.cache = [
    new Coin(9.25, 1.25), new Coin(10.25, 1.25), new Coin(11.25, 1.25)
];
level1.loadCoins(0);

level1.cache = [
    new Coin(6.25, 1.25), new Coin(7.25, 2.25), new Coin(8.25, 1.25)
];
level1.loadCoins(1);

level1.cache = [
    new Coin(5.25, 2.25), new Coin(7.25, 1.25), new Coin(9.25, 2.25)
];
level1.loadCoins(2);

// continue with coins ...


level1.cache = [
    new Stone(8, 1.15625)
];
level1.loadStones(0);