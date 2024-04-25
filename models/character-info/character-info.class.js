class CharacterInfo extends DrawableObject {
    hpCounter = 120;    // Please check!!!
    energyCounter = 100;
    staminaCounter = 100;
    hpPoints = [];
    energyPoints = [];
    staminaPoints = [];

    // Already checked!!!
    avatarImage = new AvatarImage();
    avatarFrame = new AvatarFrame();
    hpBarBg = new HpBarBg();
    hpBarBorder = new HpBarBorder();

    energyBarBg = new StateBarBg(1.4765625, 7.5625);
    energyBarBorder = new StateBarBorder(1.4375, 7.53125);
    staminaBarBg = new StateBarBg(1.4765625, 7.28125);
    staminaBarBorder = new StateBarBorder(1.4375, 7.25);

    itemBg = new ItemBg();
    itemBomb = new ItemBomb();
    itemBorder = new ItemBorder();


    constructor() {
        super(0, 0, 203, 79);
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
            let staminaPoint = new StaminaPoint(x);
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
                let staminaPoint = new StaminaPoint(x);
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