class FlipBookHero extends Chapter {
    constructor() {
        super();
        this.path += '/characters/knight';
        this.cover += '/characters/knight/knight.png';
        this.attack = this.createChapter('Attack', 4);
        this.climb = this.createChapter('Climb', 4);
        this.death = this.createChapter('Death', 10);
        this.extraAttack = this.createChapter('Extra_Attack', 8);
        this.highJump = this.createChapter('High_Jump', 12);
        this.hurt = this.createChapter('Hurt', 4);
        this.idle = this.createChapter('Idle', 12);
        this.jump = this.createChapter('Jump', 7);
        this.push = this.createChapter('Push', 4);
        this.run = this.createChapter('Run', 8);
        this.runAttack = this.createChapter('Run_Attack', 8);
        this.walk = this.createChapter('Walk', 6);
        this.walkAttack = this.createChapter('Walk_Attack', 6);
    }
}