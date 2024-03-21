class AnimatedObject extends MoveableObject {
    width = 64;
    height = this.width;
    x = 256;
    y = 540 - this.height - 32;
    world;


    directory = 'img/objects_animated/';


    constructor(folder) {
        super();
        this.path = this.buildPath(folder);
        this.loadImage(this.path);
        this.loadFlipBook(folder);
    }


    buildPath(folder) {
        let fileName = folder.toLowerCase();
        return this.directory + folder + '/' + fileName + 1 + '.png';
    }


    loadFlipBook(name) {
        name = name.toUpperCase();
        this.flipBook = FLIP_BOOK_OBJECTS[name];
    }
}