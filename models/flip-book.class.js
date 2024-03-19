class FlipBook {
    path = 'img';
    cover = 'img';


    // constructor(source) {
    //     async (source) => {
    //         let response = await fetch('./json/img-source-hero.json');
    //         let imageSource = await response.json();
    //         this.createFlipBook(imageSource);
    //     }
    // }


    // async loadImageSource() {
    //     let response = await fetch('./json/img-source-hero.json');
    //     let source = await response.json();
    //     this.createFlipBook(source);
    // }


    // createFlipBook(source) {
    //     for (let i = 0; i < source.length; i++) {
    //         let folder = source[i].folder;
    //         let files = source[i].files;
    //         let chapter = folder.toLowerCase();
    //         this[chapter] = this.createChapter(folder, files);
    //     }
    // }


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