class Key {
    code;
    value;
    timeStamp;


    constructor(code) {
        this.code = code;
        this.value = false;
        this.timeStamp = new Date().getTime();
    }
}