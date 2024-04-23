const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 540;


const HERO_DIRECTORY = 'characters/knight/';
const HERO_SOURCES = [
    'attack4', 'climb4', 'death10', 'extra_attack8', 'high_jump12', 'hurt4',
    'idle12', 'jump7', 'push4', 'run8', 'run_attack8', 'walk6', 'walk_attack6'
];


const OBJECTS_DIRECTORY = 'objects_animated/';
const OBJECTS_SOURCES = [
    'bird8', 'bomb11', 'coin10', 'crystal10', 'heart10', 'hit_point10', 'star10', 'stone8', 'web5'
];


const DINO_DIRECTORY = 'enemies/dino/';
const DINO_SOURCES = [
    'attack5', 'death6', 'hurt4', 'idle5', 'walk4'
];


const ENT_DIRECTORY = 'enemies/ent/';
const ENT_SOURCES = [
    'attack5', 'death7', 'hurt3', 'idle4', 'walk6'
];


const SPIDER_DIRECTORY = 'enemies/spider/';
const SPIDER_SOURCES = [
    'attack3', 'death4', 'hurt3', 'idle4', 'walk6'
];


const SHAMAN_DIRECTORY = 'bosses/shaman/';
const SHAMAN_SOURCES = [
    'Anger5', 'Attack7', 'Death6', 'Hurt2', 'Idle4',
    'Magic_Blade4', 'Magic_Fire5', 'Magic_Lightning5', 'Run6', 'Walk6'
];


const MAGIC_DIRECTORY = 'bosses/magic/';
const MAGIC_SOURCES = [
    'blade7', 'fire10', 'lightning9'
];


const LEVEL_SIZE = 8;


const MUSIC_START_SCREEN = './audio/epic_fantasy/02 - A Whole New World - Full Version - Epic Fantasy - Lufus.wav';
const AUDIO_START_SCREEN = new Audio(MUSIC_START_SCREEN);


const SOUND_NEW_GAME = './audio/ui/Fantasy_Game_Organic_Magic_Accept_Quest_Drum_Impact_1.wav';
const AUDIO_NEW_GAME = new Audio(SOUND_NEW_GAME);