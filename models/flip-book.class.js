class FlipBook {
    pattern = /([a-z]+\_?[a-z]*)(\d+)/;


    constructor(directory, sources) {
        this.directory = 'img/' + directory;
        this.createFlipBook(sources);
    }


    get cover() {
        let directory = this.directory.match(/[a-z]+\/[a-z]+\/([a-z]+)\//);
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
        source = source.match(this.pattern);
        let folder = source[1].replace(source[1][0], source[1][0].toUpperCase()) + '/';
        let file = source[1];
        let amount = +source[2];
        this[file] = [];
        for (let i = 1; i < amount + 1; i++) {
            let path = this.directory + folder + file + i + '.png';
            this[file].push(path);
        }
    }
}