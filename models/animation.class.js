class Animation {
    path;
    amount;

    // Parameter in class Character???
    IMAGES_WALKING_PATH = 'img/characters/knight/Walk/walk';
    IMAGES_WALKING_AMOUNT = 6;
    walking;


    constructor() {
        this.path = this.IMAGES_WALKING_PATH;
        this.amount = this.IMAGES_WALKING_AMOUNT;
        this.walking = this.getAnimation();
    }


    getAnimation() {
        let images = [];
        for (let i = 0; i < this.amount; i++) {
            let serial = i + 1;
            let img = this.path + serial + '.png';
            images.push(img);
        }
        return images;
    }
}