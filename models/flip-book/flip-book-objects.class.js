class FlipBookObjects extends Chapter {
    constructor() {
        super();
        this.path += '/objects_animated';
        this.cover += '/objects_animated';
        this.coin = this.createChapter('Coin', 10);
        this.crystal = this.createChapter('Crystal', 10);
        this.heart = this.createChapter('Heart', 10);
        this.hitPoint = this.createChapter('Hit_Point', 10);
        this.star = this.createChapter('star', 10);
        this.stone = this.createChapter('Stone', 8);
    }
}