class FlipBook {
    path;
    amount;
    attack;
    climb;
    death;
    extraAttack;
    hurt;
    idle;
    jump;
    walk;


    constructor() {
        this.attack = this.createFlipBook(IMG_ATTACK_PATH, IMG_ATTACK_AMOUNT);
        this.climb = this.createFlipBook(IMG_CLIMB_PATH, IMG_CLIMB_AMOUNT);
        this.death = this.createFlipBook(IMG_DEATH_PATH, IMG_DEATH_AMOUNT);
        this.extraAttack = this.createFlipBook(IMG_EXTRA_ATTACK_PATH, IMG_EXTRA_ATTACK_AMOUNT);
        this.hurt = this.createFlipBook(IMG_HURT_PATH, IMG_HURT_AMOUNT);
        this.idle = this.createFlipBook(IMG_IDLE_PATH, IMG_IDLE_AMOUNT);
        this.jump = this.createFlipBook(IMG_JUMP_PATH, IMG_JUMP_AMOUNT);
        this.walk = this.createFlipBook(IMG_WALK_PATH, IMG_WALK_AMOUNT);
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