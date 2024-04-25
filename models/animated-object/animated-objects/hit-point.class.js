class HitPoint extends AnimatedObject {


    constructor(x, y) {
        super(x, y, 'Hit_Point');
        this.setSound(SOUND_HIT_POINT_COLLECTED);
    }
}