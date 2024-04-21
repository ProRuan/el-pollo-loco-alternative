class Crystal extends AnimatedObject {
    currentImage = 0;    // double code!!!
    sound = './audio/crafting/Fantasy_Game_Crafting_Select_Gem.wav';
    upgrade = './audio/attacks_and_creatures/Fantasy_Game_Skill_Upgrade.wav';
    

    constructor(x, y) {
        super(x, y, 'Crystal');
        this.animate();
    }


    get xLeft() {
        return this.x + 4;
    }


    get xCenter() {
        return this.x + this.width / 2;
    }


    get xRight() {
        return this.x + 28;
    }


    get yTop() {
        return this.y + 4;
    }


    get yCenter() {
        return this.y + this.height / 2;
    }


    get yBottom() {
        return this.y + 28;
    }


    animate() {
        setInterval(() => {
            let i = this.currentImage % this.flipBook.length;
            let path = this.flipBook[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}