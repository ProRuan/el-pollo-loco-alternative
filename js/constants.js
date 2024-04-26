const ORIGINAL_CANVAS_WIDTH = 960;
const ORIGINAL_CANVAS_HEIGHT = 540;
const LEVEL_SIZE = 8;


// ANIMATED OBJECTS
const OBJECTS_DIRECTORY = 'objects_animated/';
const OBJECTS_FILENAMES = [
    'bird8', 'bomb11', 'coin10', 'crystal10',
    'heart10', 'hit_point10', 'star10', 'web5'
];


// HERO
const KNIGHT_DIRECTORY = 'characters/knight/';
const KNIGHT_FILENAMES = [
    'attack4', 'climb4', 'death10', 'hurt4', 'idle12',
    'jump7', 'run8', 'run_attack8', 'walk6', 'walk_attack6'
];


// ENEMIES
const DINO_DIRECTORY = 'enemies/dino/';
const DINO_FILENAMES = [
    'attack5', 'death6', 'hurt4', 'idle5', 'walk4'
];

const ENT_DIRECTORY = 'enemies/ent/';
const ENT_FILENAMES = [
    'attack5', 'death7', 'hurt3', 'idle4', 'walk6'
];

const SPIDER_DIRECTORY = 'enemies/spider/';
const SPIDER_FILENAMES = [
    'attack3', 'death4', 'hurt3', 'idle4', 'walk6'
];


// BOSS
const SHAMAN_DIRECTORY = 'bosses/shaman/';
const SHAMAN_FILENAMES = [
    'anger5', 'cast_blade4', 'cast_fire5', 'cast_lightning5',
    'death6', 'hurt2', 'idle4'
];

const MAGIC_DIRECTORY = 'bosses/magic/';
const MAGIC_FILENAMES = [
    'blade7', 'fire10', 'lightning9'
];


// SOUND PATHS
const SOUND_BOMB_THROW = './audio/elemental_magic/bomb_throw.wav';
const SOUND_BOMB_BURST = './audio/elemental_magic/bomb_burst.wav';
const SOUND_COIN_COLLECTED = './audio/collect/coin.wav';
const SOUND_CRYSTAL_COLLECTED = './audio/collect/crystal.wav';
const SOUND_HIT_POINT_COLLECTED = './audio/collect/hit_point.wav';
const SOUND_MAGIC_BLADE_HIT = './audio/elemental_magic/magic_blade_hit.wav';
const SOUND_MAGIC_FIRE_HIT = './audio/elemental_magic/magic_fire_hit.wav';
const SOUND_MAGIC_LIGHTNING_HIT = './audio/elemental_magic/magic_lightning_hit.wav';
const SOUND_UPGRADE = './audio/attacks_and_creatures/skill_upgrade.wav';
const SOUND_WEB_THROWN = './audio/attacks_and_creatures/web_throw.wav';


// ---  PLEASE ADD --- PLEASE ADD --- PLEASE ADD ---


const MUSIC_START_SCREEN = './audio/epic_fantasy/a_whole_new_world_luvus.wav';
const AUDIO_START_SCREEN = new Audio(MUSIC_START_SCREEN);


const SOUND_NEW_GAME = './audio/start_screen/new_game.wav';
const AUDIO_NEW_GAME = new Audio(SOUND_NEW_GAME);




// testing
const IMG_KNIGHT = './img/characters/knight/knight.png';