class CharacterInfo extends DrawableObject {
    hpCounter = 120;
    energyCounter = 100;
    staminaCounter = 100;
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
    itemBg = new ItemBg(0.359375, 6.4295875);
    itemBomb = new ItemBomb(0.3515625, 6.4296875);
    itemBorder = new ItemBorder(0.3125, 6.390625);


    constructor() {
        super(0, 0, 203, 79);
        this.updateAvatarImageX();
        this.fillHp();
        this.fillEnergy();
        this.fillStamina();
        this.regenerateEnergy();
        this.regenerateStamina();
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
            this.avatarImage, this.hpBarBg, this.energyBarBg, this.staminaBarBg
        ];
    }


    get borders() {
        return [
            this.avatarFrame, this.hpBarBorder, this.energyBarBorder, this.staminaBarBorder
        ];
    }


    updateAvatarImageX() {
        this.avatarImage.x = this.x + 24;
    }


    updateAvatarFrameX() {
        this.avatarFrame.x = this.x + 16;
    }


    updateHpBarBgX() {
        this.hpBarBg.x = this.x + 95;
    }


    updateHpBarBorderX() {
        this.hpBarBorder.x = this.x + 92;
    }


    updateEnergyBarBgX() {
        this.energyBarBg.x = this.x + 94.5;
    }


    updateEnergyBarBorderX() {
        this.energyBarBorder.x = this.x + 92;
    }


    updateStaminaBarBgX() {
        this.staminaBarBg.x = this.x + 94.5;
    }


    updateStaminaBarBorderX() {
        this.staminaBarBorder.x = this.x + 92;
    }


    updateItemBgX() {
        this.itemBg.x = this.x + 23;
    }


    updateItemBombX() {
        this.itemBomb.x = this.x + 22.5;
    }


    updateItemBorderX() {
        this.itemBorder.x = this.x + 20;
    }


    fillHp() {
        for (let i = 0; i < this.hpCounter; i++) {
            let x = (95.5 + i * 1) / 64;
            let hpPoint = new HpPoint(x, 7.90625);
            this.hpPoints.push(hpPoint);
        }
    }


    fillEnergy() {
        for (let i = 0; i < this.energyCounter; i++) {
            let x = (93 + i * 1) / 64;
            let energyPoint = new EnergyPoint(x, 7.59375);
            this.energyPoints.push(energyPoint);
        }
    }


    fillStamina() {
        for (let i = 100 - this.staminaCounter; i < this.staminaCounter; i++) {
            let x = (93 + i * 1) / 64;
            let staminaPoint = new StaminaPoint(x, 7.3125);
            this.staminaPoints.push(staminaPoint);
        }
    }


    regenerateEnergy() {
        setInterval(() => {
            if (this.energyPoints.length < 100 && !world.hero.isKey('keydown', 'keyD')) {
                // this.energyCounter++;
                let x = (93 + this.energyPoints.length * 1) / 64;
                let energyPoint = new EnergyPoint(x, 7.59375);
                this.energyPoints.push(energyPoint);
                // this.energyCounter = this.energyPoints.length;
            }
        }, 50);
    }


    regenerateStamina() {
        setInterval(() => {
            if (this.staminaPoints.length < 100 && !world.hero.isKey('keydown', 'keyA')) {
                // this.staminaCounter++;
                let x = (93 + this.staminaPoints.length * 1) / 64;
                let staminaPoint = new StaminaPoint(x, 7.3125);
                this.staminaPoints.push(staminaPoint);
                this.staminaCounter = this.staminaPoints.length;
            }
        }, 16);
    }


    updateHpPointX() {
        for (let i = 0; i < this.hpPoints.length; i++) {
            this.hpPoints[i].x = this.x + 95.5 + i;
        }
    }


    updateEnergyPointX() {
        for (let i = 0; i < this.energyPoints.length; i++) {
            this.energyPoints[i].x = this.x + 93 + i;
        }
    }


    updateStaminaPointX() {
        for (let i = 0; i < this.staminaPoints.length; i++) {
            this.staminaPoints[i].x = this.x + 93 + i;
        }
    }
}