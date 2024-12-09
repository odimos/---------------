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
        DATA['HEADS'].forEach( ({id, description, path, key}) => {
            this.load.image(key, path)
        });

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
        // this.scene.start('Play', {
        //     "player1name":"bob",
        //     "player2name":"ron"
        // });
        if (this.loadingText) {
            this.loadingText.destroy();
            this.loadingText = null;
        }

        this.scene.start('SelectScene')
        

    }

}


