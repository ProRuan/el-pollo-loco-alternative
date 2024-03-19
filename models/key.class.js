class Key {
    code;
    keydown = false;
    timeStamp = new Date().getTime();
    doubleClick = false;


    constructor(code) {
        this.code = code;
    }
}