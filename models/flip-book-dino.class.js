class FlipBookDino {
    constructor() {
        this.path = 'img/enemies/dino';
        this.cover = 'img/enemies/dino/Idle/idle1.png';
        this.attack = this.createChapter('Attack', 5);
        this.death = this.createChapter('Death', 6);
        this.hurt = this.createChapter('Hurt', 4);
        this.idle = this.createChapter('Idle', 5)
        this.walk = this.createChapter('Walk', 4);
    }
}