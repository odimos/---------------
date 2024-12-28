import Play from './scenes/Play.js'
import MenuScene from './scenes/MenuScene.js';
import PreloadScene from './scenes/PreloadScene.js';
import EndScene from './scenes/EndScene.js';
import SelectScene from './scenes/SelectScene.js';

// for namepespace clearance
const WIDTH = 1200 
const RATIO = (14/9)
const HEIGHT = WIDTH/RATIO 
window.gameOptions = {
    ratio: RATIO ,
    width: WIDTH,
    height: HEIGHT,
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
    max: {
        width: WIDTH,
        height: HEIGHT
    },
    pixelArt: true,
    scene: [PreloadScene, MenuScene, SelectScene, Play, EndScene ],
        
    };

let game = new Phaser.Game(config)
window.game = game;

// let viewportWidth = window.innerWidth;
// let viewportHeight = window.innerHeight;

// window.addEventListener('resize',()=>{
//     let viewportWidth = window.innerWidth;
//     let viewportHeight = window.innerHeight;

//     if (viewportWidth >= WIDTH && viewportHeight >= HEIGHT - 100 ){

//     }else{
//         console.log('resize')
//         game.resize(600, 400);
//         //game.scale.refresh();  
//     }
// })

// if (viewportWidth >= WIDTH && viewportHeight >= HEIGHT - 100 ){
//     let game = new Phaser.Game(config)
//     window.game = game;
// }else{
//     config.scale.mode = Phaser.Scale.FIT
//     let game = new Phaser.Game(config)
//     window.game = game;
// }