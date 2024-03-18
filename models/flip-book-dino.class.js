class FlipBookDino {
    path = 'img/enemies/dino';
    cover = 'img/enemies/dino/Idle/idle1.png';


    constructor() {
        this.attack = this.createChapter('Attack', 5);
        this.death = this.createChapter('Death', 6);
        this.hurt = this.createChapter('Hurt', 4);
        this.idle = this.createChapter('Idle', 5)
        this.walk = this.createChapter('Walk', 4);
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