class Crystal extends AnimatedObject {


    constructor(x, y) {
        super(x, y, 'crystal');
        this.setSound(SOUND_CRYSTAL_COLLECTED);
    }
}