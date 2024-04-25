class Avatar {


    constructor() {
        this.createAvatar('avatarImage', AvatarImage);
        this.createAvatar('avatarFrame', AvatarFrame);
    }


    createAvatar(comp, Comp) {
        this[comp] = new Comp()
    }
}