class Coin extends AnimatedObject {
    sound = SOUND_COIN_COLLECTED;


    constructor(x, y) {
        super(x, y, 'Coin');
        this.animate();
    }
}