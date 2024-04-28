class LevelScreen {


    constructor(world) {
        updateWorld(world, this);

        this.setAvatarInfo();

        updateWorld(this, world);
    }


    setAvatarInfo() {
        this.setAvatar();
        this.setStateBars();
        this.setThrowableItem();
    }


    setAvatar() {
        this.avatarImage = new AvatarImage();
        this.avatarFrame = new AvatarFrame();
    }


    setStateBars() {
        this.hpBar = new HpBar();
        this.energyBar = new EnergyBar();
        this.staminaBar = new StaminaBar();
    }


    setThrowableItem() {
        this.itemBg = new ItemBg();
        this.itemBomb = new ItemBomb();
        this.itemBorder = new ItemBorder();
    }


    addAvatarInfo() {
        this.addAvatarToMap();
        this.addStateBarToMap('hpBar');
        this.addStateBarToMap('energyBar');
        this.addStateBarToMap('staminaBar');
    }


    addAvatarToMap() {
        world.addToMap(world.avatarImage);
        world.addToMap(world.avatarFrame);
    }


    addStateBarToMap(key) {
        world.addToMap(world[key].bg);
        world.addGroupToMap(world[key].points);
        world.addToMap(world[key].border);
    }


    addAvatarItemToMap() {
        world.addToMap(world.itemBg);
        world.addToMap(world.itemBomb);
        world.addToMap(world.itemBorder);
    }
}