import Play from './scenes/Play.js'
import MenuScene from './scenes/MenuScene.js';
import PreloadScene from './scenes/PreloadScene.js';
import EndScene from './scenes/EndScene.js';
import SelectScene from './scenes/SelectScene.js';
// for namepespace clearance
(function(){
    let parentElement = document.querySelector('#gameContainer')

    let gameOptions = {
        ratio: 16/9 ,
        maxwidth: 960,
        maxheight: 960/(16/9),
        width:1200,
        height:1200/(16/9),
        LEFT: 1,
        RIGHT: -1,
        VOLUME: 0.2
    };

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
            // Arcade physics plugin
            /*default: 'arcade',
            arcade: {
                debug: true,
                gravity:{
                    //y:20
                }
            }*/
            default: 'matter',
            matter: {
                gravity: {
                x: 0,
                y: 1.5
                },
                debug: true,
                debugBodyColor: Phaser.Display.Color.GetColor(255, 55, 20)
            }
        },
        scale: {
            //https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scalemanager/
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            //zoom: 1,  // Size of game canvas = game size * zoom
        },
        pixelArt: true,
        scene: [new PreloadScene(gameOptions), new MenuScene(gameOptions),new SelectScene(gameOptions), new Play(gameOptions), new EndScene(gameOptions) ],
        
    };

     window.addEventListener('resize',()=>{
         //resize()
     });

    let game = new Phaser.Game(config)
    window.game = game;
    let canvas = parentElement.querySelector('canvas')
    //resize()
    // so that was a fucking waste, scale option does the job
    function resize(){
        // canvas display as block
        // maybe best to get all the available space and center the maxed game
        let parent = document.querySelector('#gameContainer')
        // see what dimension needs the more modification

        // maxwidth and max height fitt
        // width must fit parent, height body
        if (gameOptions.maxwidth<=parent.offsetWidth && 
            gameOptions.maxheight <= window.innerHeight){
                canvas.style.width =  gameOptions.maxwidth + 'px';
                canvas.style.height = gameOptions.maxheight + 'px'
        }
        else {
            // check wich dimension lacks more
            if (parent.offsetWidth/gameOptions.ratio <= window.innerHeight ){
                canvas.style.width =  parent.offsetWidth + 'px';
                canvas.style.height = parent.offsetWidth/gameOptions.ratio + 'px'
            }else {
                canvas.style.height = window.innerHeight+ 'px';
                canvas.style.width = window.innerHeight*gameOptions.ratio+ 'px'
            }
        }

    }
})();