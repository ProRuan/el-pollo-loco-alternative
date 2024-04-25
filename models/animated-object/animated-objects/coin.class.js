class Coin extends AnimatedObject {


    constructor(x, y) {
        super(x, y, 'Coin');
        this.setSound(SOUND_COIN_COLLECTED);
    }
}