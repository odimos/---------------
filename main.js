import Play from './scenes/Play.js'
import MenuScene from './scenes/MenuScene.js';
import PreloadScene from './scenes/PreloadScene.js';
import EndScene from './scenes/EndScene.js';
import SelectScene from './scenes/SelectScene.js';
import CampaignScene from './scenes/CampaignScene.js';
import ChooseScene from './scenes/ChooseScene.js';
import VARIABLES from  './variables.js'

// for namepespace clearance
const WIDTH = 1200 
const RATIO = (14/9)
const HEIGHT = WIDTH/RATIO 
window.gameOptions = {
    ratio: RATIO ,
    width: WIDTH,
    height: HEIGHT,
    VARIABLES
};

console.log(window.gameOptions)

let parentElement = document.querySelector('#gameContainer')

let config = {
    type: Phaser.AUTO,
    parent: parentElement,
    dom: {
        createContainer: true
    },
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: Phaser.Display.Color.GetColor(80, 150, 80),
    physics: {
        default: 'matter',
        matter: {
            gravity: {
            x: 0,
            y: 1
            },
            //debug: true,
            debugBodyColor: Phaser.Display.Color.GetColor(255, 55, 20)
        }
    },
    scale: {
        //https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scalemanager/
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    max: {
        width: WIDTH,
        height: HEIGHT
    },
    pixelArt: true,
    scene: [PreloadScene, MenuScene, ChooseScene, SelectScene, Play, EndScene, CampaignScene ],
        
    };

let game = new Phaser.Game(config)
window.game = game;