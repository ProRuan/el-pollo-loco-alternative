class Coin extends AnimatedObject {


    constructor(x, y) {
        super(x, y, 'coin');
        this.setSound(SOUND_COIN_COLLECTED);
    }
}