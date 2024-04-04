class CharacterInfo extends DrawableObject {
    hpPoints = [];
    energyPoints = [];
    staminaPoints = [];
    avatarImage = new AvatarImage(0.375, 7.073125);
    avatarFrame = new AvatarFrame(0.25, 6.953125);
    hpBarBg = new HpBarBg(1.484375, 7.859375);
    hpBarBorder = new HpBarBorder(1.4375, 7.8125);
    energyBarBg = new StateBarBg(1.4765625, 7.5625);
    energyBarBorder = new StateBarBorder(1.4375, 7.53125);
    staminaBarBg = new StateBarBg(1.4765625, 7.28125);
    staminaBarBorder = new StateBarBorder(1.4375, 7.25);


    constructor() {
        super(0, 0, 203, 79);
        this.fillHp();
        this.fillEnergy();
        this.fillStamina();
    }


    get hpPoints() {
        return this.hpPoints;
    }


    get energyPoints() {
        return this.energyPoints;
    }


    get staminaPoints() {
        return this.staminaPoints;
    }


    get images() {
        return [
            this.avatarImage, this.hpBarBg, this.energyBarBg, this.staminaBarBg,
        ];
    }


    get borders() {
        return [
            this.avatarFrame, this.hpBarBorder, this.energyBarBorder, this.staminaBarBorder
        ];
    }


    fillHp() {
        for (let i = 0; i < 120; i++) {
            let x = (95.5 + i * 1) / 64;
            let hpPoint = new HpPoint(x, 7.90625);
            this.hpPoints.push(hpPoint);
        }
    }


    fillEnergy() {
        for (let i = 0; i < 100; i++) {
            let x = (93 + i * 1) / 64;
            let energyPoint = new EnergyPoint(x, 7.59375);
            this.energyPoints.push(energyPoint);
        }
    }


    fillStamina() {
        for (let i = 0; i < 100; i++) {
            let x = (93 + i * 1) / 64;
            let staminaPoint = new StaminaPoint(x, 7.3125);
            this.staminaPoints.push(staminaPoint);
        }
    }
}