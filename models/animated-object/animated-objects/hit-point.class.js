class HitPoint extends AnimatedObject {


    constructor(x, y) {
        super(x, y, 'hit_point');
        this.setSound(SOUND_HIT_POINT_COLLECTED);
    }
}