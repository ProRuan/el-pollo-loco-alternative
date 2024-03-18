class FlipBookHero {
    // flip book title image
    path = 'img/characters/knight';
    attack;


    constructor() {
        this.attack = this.createFlipBookChapter('attack', 4);
    }


    // rename path, folder, file ...
    // try to make a getter with img counter in the folder itself!!!


    createFlipBookChapter(subpath, amount) {
        let images = [];
        for (let i = 0; i < amount; i++) {
            let serial = i + 1;
            let folder = subpath[0].toUpperCase() + subpath.replace(subpath[0], '');
            let img = this.path + '/' + folder + '/' + subpath + serial + '.png';
            images.push(img);
        }
        return images;
    }
}