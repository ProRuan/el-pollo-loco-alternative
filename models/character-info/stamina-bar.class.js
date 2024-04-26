class StaminaBar extends StateBarObject {
    max = 100;
    regenerationTime = 16;
    bg = new StaminaBarBg();
    border = new StaminaBarBorder();


    constructor() {
        super();
        this.fill();
        this.setStoppableInterval(() => this.regenerate(), this.regenerationTime);
    }
}