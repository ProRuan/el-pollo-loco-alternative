class Crystal extends AnimatedObject {


    constructor(x, y) {
        super(x, y, 'Crystal');
        this.setSound(SOUND_CRYSTAL_COLLECTED);
    }
}