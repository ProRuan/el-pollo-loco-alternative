class FlipBookObjects {
    path = 'img/objects_animated';
    cover = 'img/objects_animated/Stone/stone1.png';


    constructor() {
        this.coin = this.createChapter('Coin', 10);
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