class Key {
    code;
    keydown = false;
    timeStamp = new Date().getTime();
    doubleClick = false;


    constructor(code) {
        this.code = code;
    }


    get doubleClick() {
        let currentTimeStamp = new Date().getTime();
        this.doubleClick = (currentTimeStamp - this.timeStamp < 500) ? true : false;
        return this.doubleClick;
    }


    set keydown(logical) {
        this.keydown = (logical) ? true : false;
    }


    set timeStamp(logical) {
        this.timeStamp = (logical) ? new Date().getTime() : this.timeStamp;
    }


    set doubleClick(logical) {
        this.doubleClick = (logical) ? true : false;
    }
}