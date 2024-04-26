class StaminaBar extends StateBarObject {
    max = 100;
    bg = new StaminaBarBg();
    border = new StaminaBarBorder();

    
    constructor() {
        super(16);
    }
}