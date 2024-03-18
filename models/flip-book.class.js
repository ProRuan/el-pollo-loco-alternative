class FlipBook {
    path;
    amount;

    dinoAttack;
    dinoDeath;
    dinoHurt;
    dinoIdle;
    dinoWalk;

    stone;


    constructor() {
        this.dinoAttack = this.createFlipBook(IMG_DINO_ATTACK_PATH, IMG_DINO_ATTACK_AMOUNT);
        this.dinoDeath = this.createFlipBook(IMG_DINO_DEATH_PATH, IMG_DINO_DEATH_AMOUNT);
        this.dinoHurt = this.createFlipBook(IMG_DINO_HURT_PATH, IMG_DINO_HURT_AMOUNT);
        this.dinoIdle = this.createFlipBook(IMG_DINO_IDLE_PATH, IMG_DINO_IDLE_AMOUNT);
        this.dinoWalk = this.createFlipBook(IMG_DINO_WALK_PATH, IMG_DINO_WALK_AMOUNT);

        this.stone = this.createFlipBook(IMG_STONE_PATH, IMG_STONE_AMOUNT);
    }


    createFlipBook(path, amount) {
        let images = [];
        for (let i = 0; i < amount; i++) {
            let serial = i + 1;
            let img = path + serial + '.png';
            images.push(img);
        }
        return images;
    }
}