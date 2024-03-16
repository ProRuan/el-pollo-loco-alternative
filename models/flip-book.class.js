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
    highJump;
    push;
    run;
    runAttack;
    walk;
    walkAttack;

    dinoAttack;
    dinoDeath;
    dinoHurt;
    dinoIdle;
    dinoWalk;

    stone;


    constructor() {
        this.attack = this.createFlipBook(IMG_ATTACK_PATH, IMG_ATTACK_AMOUNT);
        this.climb = this.createFlipBook(IMG_CLIMB_PATH, IMG_CLIMB_AMOUNT);
        this.death = this.createFlipBook(IMG_DEATH_PATH, IMG_DEATH_AMOUNT);
        this.extraAttack = this.createFlipBook(IMG_EXTRA_ATTACK_PATH, IMG_EXTRA_ATTACK_AMOUNT);
        this.hurt = this.createFlipBook(IMG_HURT_PATH, IMG_HURT_AMOUNT);
        this.idle = this.createFlipBook(IMG_IDLE_PATH, IMG_IDLE_AMOUNT);
        this.jump = this.createFlipBook(IMG_JUMP_PATH, IMG_JUMP_AMOUNT);
        this.highJump = this.createFlipBook(IMG_HIGH_JUMP_PATH, IMG_HIGH_JUMP_AMOUNT);
        this.push = this.createFlipBook(IMG_PUSH_PATH, IMG_PUSH_AMOUNT);
        this.run = this.createFlipBook(IMG_RUN_PATH, IMG_RUN_AMOUNT);
        this.runAttack = this.createFlipBook(IMG_RUN_ATTACK_PATH, IMG_RUN_ATTACK_AMOUNT);
        this.walk = this.createFlipBook(IMG_WALK_PATH, IMG_WALK_AMOUNT);
        this.walkAttack = this.createFlipBook(IMG_WALK_ATTACK_PATH, IMG_WALK_ATTACK_AMOUNT);

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