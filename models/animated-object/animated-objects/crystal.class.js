class Crystal extends AnimatedObject {
    sound = SOUND_CRYSTAL_COLLECTED;
    soundUpgrade = SOUND_CRYSTAL_UPGRADE;


    constructor(x, y) {
        super(x, y, 'Crystal');
        this.animate();
    }
}