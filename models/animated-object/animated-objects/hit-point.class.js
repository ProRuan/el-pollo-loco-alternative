class HitPoint extends AnimatedObject {
    sound = SOUND_HIT_POINT_COLLECTED;


    constructor(x, y) {
        super(x, y, 'Hit_Point');
        this.animate();
    }
}