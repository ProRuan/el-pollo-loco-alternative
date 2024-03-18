class FlipBookObjects {
    path = 'img/objects_animated';


    constructor() {
        this.coin = this.createChapter('Coin', 10);
        this.crystal = this.createChapter('Crystal', 10);
        this.heart = this.createChapter('Heart', 10);
        this.hitPoint = this.createChapter('Hit_Point', 10);
        this.star = this.createChapter('star', 10);
        this.stone = this.createChapter('Stone', 8);
    }


    createChapter(folder, files) {
        let images = [];
        for (let i = 0; i < files; i++) {
            let serial = i + 1;
            let subfolder = folder.toLowerCase();
            let img = this.path + '/' + folder + '/' + subfolder + serial + '.png';
            images.push(img);
        }
        return images;
    }
}