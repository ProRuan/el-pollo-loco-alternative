class FlipBook {


    constructor() {
        let testPath = 'img/characters/knight/Walk/walk4.png';
        let result = testPath.match(/([a-z]+\/[a-z]+\/[a-z]+\/)([A-Z][a-z]+\/)([a-z]+)(\d+)(\.[a-z]+)/);
        this.path = result[0];
        this.cover = result[1] + result[3] + result[5];
        this.directory = result[1];
        this.folder = result[2];
        this.amount = +result[4];
        this[result[3]] = result[3];

        this[result[3]] = () => {
            let chapter = [];
            for (let i = 1; i < result[4] + 1; i++) {
                let source = result[1] + result[2] + result[3] + i + result[5];
                chapter.push(source);
            }
            return chapter;
        }
    }
}