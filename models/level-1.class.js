const TRANSLATION_SECTION_0 = 0;
const TRANSLATION_SECTION_1 = 15;
const TRANSLATION_SECTION_2 = 30;
const TRANSLATION_SECTION_3 = 45;
const TRANSLATION_SECTION_4 = 60;
const TRANSLATION_SECTION_5 = 75;


const BACKGROUND = [];
createBackgroundSection(6, 960);

function createBackgroundSection(amount, translation) {
    for (let i = 0; i < amount; i++) {
        let x = i * translation;
        let background = new Background('img/background/Background.png', x);
        BACKGROUND.push(background);
    }
}


const LEVEL_1 = new Level(
    BACKGROUND
);