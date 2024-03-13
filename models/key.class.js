class Key {
    code;
    value;
    keydown;
    timeStamp;


    constructor(code) {
        this.code = code;
        this.value = false;
        this.keydown = false;
        this.timeStamp = new Date().getTime();
    }
}