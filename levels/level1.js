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
level1.loadGrass(-1);

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
    new GrassCenter(4, 0), new GrassEnd(5, 0), new GrassStart(9, 0), new GrassCenter(10, 0),
    new GrassCenter(11, 0), new GrassCenter(12, 0), new GrassCenter(13, 0), new GrassCenter(14, 0)
];
level1.loadGrass(3);

// continue with grass ...


level1.cache = [
    new GrassFlyingStart(1, 4), new GrassFlyingCenter(2, 4), new GrassFlyingEnd(3, 4),
    new GrassFlyingStart(6, 2), new GrassFlyingCenter(7, 2), new GrassFlyingEnd(8, 2),
    new GrassFlyingStart(11, 4), new GrassFlyingCenter(12, 4), new GrassFlyingEnd(13, 4)
];
level1.loadGrassFlying(3);


level1.cache = [
    new GrassCenter(0, 0), new GrassCenter(1, 0), new GrassCenter(2, 0), new GrassCenter(3, 0),
    new GrassCenter(4, 0), new GrassEnd(5, 0),
    new GrassStart(11, 0),
    new GrassCenter(12, 0), new GrassCenter(13, 0), new GrassCenter(14, 0)
];
level1.loadGrass(0);


level1.cache = [
    new GrassFlyingStart(2, 4), new GrassFlyingCenter(3, 4), new GrassFlyingCenter(4, 4), new GrassFlyingCenter(5, 4),
    new GrassFlyingEnd(6, 4)
];
level1.loadGrassFlying(0);


level1.cache = [
    new Tree(0.5, 4), new Tree(5.5, 2), new Tree(10.5, 4)
];
level1.loadTrees(3);

// leaves ...
level1.cache = [
    new Leaf(1.75, 5.9, 6), new Leaf(2.25, 6.45, 6), new Leaf(2.75, 5.9, 6),
    new Leaf(6.75, 3.9, 1), new Leaf(7.25, 4.45, 1), new Leaf(7.75, 3.9, 1),
    new Leaf(11.75, 5.9, 7), new Leaf(12.25, 6.45, 7), new Leaf(12.75, 5.9, 7)
];
level1.loadLeaves(3);


level1.cache = [
    new Coin(9.25, 1.25), new Coin(10.25, 1.25), new Coin(11.25, 1.25)
];
level1.loadCoins(-1);

level1.cache = [
    new Coin(6.25, 1.25), new Coin(7.25, 2.25), new Coin(8.25, 1.25)
];
level1.loadCoins(1);

level1.cache = [
    new Coin(5.25, 2.25), new Coin(7.25, 1.25), new Coin(9.25, 2.25)
];
level1.loadCoins(2);

level1.cache = [
    new Coin(3.25, 5.25), new Coin(11.25, 5.25),
    new Coin(6.25, 3.25), new Coin(8.25, 3.25),
    new Coin(4.25, 1.25), new Coin(10.25, 1.25)
];
level1.loadCoins(3);

// continue with coins ...


level1.cache = [
    new Crystal(13.25, 5.25)
];
level1.loadCrystals(3);


level1.cache = [
    new HitPoint(1.25, 5.25)
];
level1.loadHitPoints(3);



level1.cache = [
    new Stone(8, 1.15625)
];
level1.loadStones(0);