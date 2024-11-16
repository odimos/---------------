import Play from './scenes/Play.js'
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
        RIGHT: -1
    };

    let config = {
        type: Phaser.AUTO,
        parent: parentElement,
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
        scene: [new Play(gameOptions)],
        pixelArt: true
    };

    window.addEventListener('resize',()=>{
        resize()
    });

    let game = new Phaser.Game(config)
    let canvas = parentElement.querySelector('canvas')
    resize()
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