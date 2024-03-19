class Chapter {
    path = 'img';
    cover = 'img';


    createChapter(folder, amount) {
        let images = [];
        for (let i = 0; i < amount; i++) {
            let serial = i + 1;
            let file = folder.toLowerCase();
            let img = this.path + '/' + folder + '/' + file + serial + '.png';
            images.push(img);
        }
        return images;
    }
}