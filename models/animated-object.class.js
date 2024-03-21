class AnimatedObject extends MoveableObject {
    width = 32;
    height = this.width;
    x = 256;
    y = 540 - this.height - 32;
    world;


    directory = 'img/objects_animated/';


    constructor(folder) {
        super();
        this.path = this.buildPath(folder);
        this.loadImage(this.path);
        this.flipBook = (FLIP_BOOK_OBJECTS.COIN);
        // this.loadImage('img/objects_animated/Stone/stone1.png');
    }


    buildPath(folder) {
        let fileName = folder.toLowerCase();
        return this.directory + folder + '/' + fileName + 1 + '.png';
    }
}