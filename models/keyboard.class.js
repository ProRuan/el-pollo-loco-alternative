class Keyboard {
    keydown = false;
    keydownTimeStamp = 0;
    space = new Key('space');
    enter = new Key('Enter');
    escape = new Key('Escape');
    arrowLeft = new Key('arrowLeft');
    arrowUp = new Key('arrowUp');
    arrowRight = new Key('arrowRight');
    arrowDown = new Key('arrowDown');
    keyA = new Key('keyA');
    keyD = new Key('keyD');
    keyE = new Key('keyE');
    keyF = new Key('keyF');
    keyQ = new Key('keyQ');
    keyS = new Key('keyS');


    updateKeydownTimeStamp() {
        this.keydownTimeStamp = new Date().getTime();
        // console.log(this.keydownTimeStamp);
    }
}