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


    // to edit
    drawLevelComponents() {
        this.translateCamera(world.camera_x, 0);

        this.addLevelObjectsToMap();
        world.addToMap(world.ENDBOSS);
        world.addToMap(world.hero);
        this.addAvatarInfo();

        this.addEndbossMagicToMap();
        world.addGroupToMap(world.webs);

        // Please enable!!!
        // ----------------
        if (world.hero.bombSkillUnlocked) {
            world.addToMap(world.itemBg);
            if (world.energyBar.points.length == 100) {
                world.addToMap(world.itemBomb);
            }
            world.addToMap(world.itemBorder);
        }

        this.addItemBombToMap();

        this.translateCamera(-world.camera_x, 0);
    }


    translateCamera(x, y) {
        world.ctx.translate(x, y);
    }


    // to edit
    addLevelObjectsToMap() {
        for (let i = 0; i < world.level.keys.length; i++) {
            let key = world.level.keys[i].toUpperCase();
            world.addGroupToMap(world[key]);
        }
    }


    // to edit
    addEndbossMagicToMap() {
        if (world.endbossMagic) {
            world.addToMap(world.endbossMagic);
        }
    }


    // to edit
    addItemBombToMap() {
        if (world.bomb !== undefined) {
            world.addToMap(world.bomb);
        }
    }


}