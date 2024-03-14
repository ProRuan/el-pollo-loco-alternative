class Key {
    code;
    keydown;
    timeStamp;
    doubleClick;


    constructor(code) {
        this.code = code;
        this.keydown = false;
        this.timeStamp = new Date().getTime();
        this.doubleClick = false;
    }
}