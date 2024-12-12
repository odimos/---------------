import DATA from "../data/data.js";

export default class PreloadScene extends Phaser.Scene {
    constructor(gameOptions){
        super({key:'PreloadScene'})
    }

    preload(){
            
            var width = this.cameras.main.width;
            var height = this.cameras.main.height;
            this.loadingText = this.make.text({
                x: width / 2,
                y: height / 2 - 50,
                text: 'Loading...',
                style: {
                    font: '40px monospace',
                    fill: '#ffffff'
                }
            });
            this.loadingText.setOrigin(0.5, 0.5);


        this.load.bitmapFont("bitmapFont", "assets/fonts/thick_8x8.png",
            "assets/fonts/thick_8x8.xml");  

        DATA['IMAGES'].forEach( ({path, key}) => {
            this.load.image(key, path)
        });
        DATA['SOUNDS'].forEach( ({path, key}) => {
            this.load.audio(key, path)
        });
        // DATA['HEADS'].forEach( ({id, description, path, key}) => {
        //     this.load.image(key, path)
        // });

        this.load.atlas('headssprites', 'assets/heads/heads.png', 'assets/heads/heads.json');
        this.load.spritesheet('effects', 'assets/effects/effect_bg_spritesheet/effectsheet.png', { frameWidth: 69, frameHeight: 69 });
        this.load.image('ice', 'assets/effects/effect_bg_spritesheet/ice.png')


    }
    
    create(){
        console.log('preload')
        // this.scene.start('EndScene',{
        //     "player1":3,
        //     "player2":4,
        //     "player1name": 'bob1',
        //     "player2name": 'dimosthenis',
        //     "player1image":'player1',
        //     "player2image":'player1'
        // });

        if (this.loadingText) {
            this.loadingText.destroy();
            this.loadingText = null;
        }
            this.scene.start('Play',{
                'key1':'1.png', 'key2':'1.png', 'name1':'', 'name2':'', 'mode':'multiplayer'
            })
        
        //this.scene.start('MenuScene')
        

    }

}


