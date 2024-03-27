class FlipBook {
    patternDirectory = /[a-z]+\/[a-z]+\/([a-z]+)\//;
    patternSource = /([A-Z]?[a-z]+\_?[A-z]?[a-z]*)(\d+)/;


    constructor(directory, sources) {
        this.directory = 'img/' + directory;
        this.createFlipBook(sources);
    }


    get cover() {
        let directory = this.directory.match(this.patternDirectory);
        let fileName = directory[1];
        return this.directory + fileName + '.png';
    }


    createFlipBook(sources) {
        for (let i = 0; i < sources.length; i++) {
            let source = sources[i];
            this.createChapter(source);
        }
    }


    createChapter(source) {
        source = source.match(this.patternSource);
        let [folder, file, amount] = this.getPathDetails(source);
        let chapter = file.toUpperCase();
        this[chapter] = [];
        for (let i = 1; i < amount + 1; i++) {
            let path = this.directory + folder + file + i + '.png';
            this[chapter].push(path);
        }
    }


    getPathDetails(source) {
        let folder = this.getFolder(source);
        let file = source[1];
        let amount = +source[2];
        return [folder, file, amount];
    }


    getFolder(source) {
        let folder = source[1];
        if (folder.includes('_')) {
            folder = this.getFolderNameSplit(folder);
        } else {
            folder = this.getFolderName(folder);
        }
        return folder + '/';
    }


    getFolderNameSplit(folder) {
        let folderSplit = folder.split('_');
        for (let i = 0; i < folderSplit.length; i++) {
            let folder = folderSplit[i];
            folderSplit[i] = this.getFolderName(folder);
        }
        return folderSplit[0] + '_' + folderSplit[1];
    }


    getFolderName(folder) {
        let initial = folder[0];
        return folder.replace(initial, initial.toUpperCase());
    }
}