class FlipBook {
    pattern = /([a-z]+\/[a-z]+\/([a-z]+)\/)([A-Z][a-z]+\_?[A-z]?[a-z]*\/)(([a-z]+\_?[a-z]*)(\d+)(\.[a-z]+))/;


    constructor() {
        let testPath = 'img/characters/knight/Extra_Attack/extra_attack12.png';
        let result = testPath.match(this.pattern);
        this.path = result[0];
        this.directory = result[1];
        this.figure = result[2];
        this.folder = result[3];
        this.cover = this.directory + this.figure;
        let file = result[4];
        this.fileName = result[5];
        this.fileId = +result[6];
        this.fileExt = result[7];

        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }

        console.log(result);

        // this[result[4]] = () => {
        //     let chapter = [];
        //     for (let i = 1; i < result[5] + 1; i++) {
        //         let source = result[1] + result[3] + result[4] + i + result[6];
        //         chapter.push(source);
        //     }
        //     return chapter;
        // }
    }
}