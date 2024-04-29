class Key {
    code;
    keydown = false;
    timeStamp = new Date().getTime();
    lastTimeStamp = 0;
    doubleClick = false;


    constructor(code) {
        this.code = code;
    }
}