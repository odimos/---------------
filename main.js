import Play from './scenes/Play.js'
import MenuScene from './scenes/MenuScene.js';
import PreloadScene from './scenes/PreloadScene.js';
import EndScene from './scenes/EndScene.js';
import SelectScene from './scenes/SelectScene.js';

// for namepespace clearance
window.gameOptions = {
    ratio: 14/9 ,
    width:1200,
    height:1200/(14/9),
};

let parentElement = document.querySelector('#gameContainer')

let config = {
    type: Phaser.AUTO,
    parent: parentElement,
    dom: {
        createContainer: true
    },
    width: gameOptions.width,
    height: gameOptions.height,
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
        pixelArt: true,
        scene: [PreloadScene, MenuScene, SelectScene, Play, EndScene ],
        
    };

let game = new Phaser.Game(config)
window.game = game;