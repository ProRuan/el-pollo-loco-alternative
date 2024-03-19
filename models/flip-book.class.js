class FlipBook {
    path = 'img';
    cover = 'img';


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