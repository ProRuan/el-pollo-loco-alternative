class Counter {
    keys = OBJECTS_TO_COUNT;


    constructor() {
        this.setObjectsToCount();
    }


    setObjectsToCount() {
        for (let i = 0; i < this.keys.length; i++) {
            this.setObjectValue(i);
        }
    }


    setObjectValue(i) {
        let key = this.keys[i];
        this[key] = 0;
    }
}