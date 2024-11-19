
export default class PreloadScene extends Phaser.Scene {
    constructor(gameOptions){
        super({key:'PreloadScene'})
    }

    preload(){
        this.load.bitmapFont("bitmapFont", "assets/fonts/thick_8x8.png",
            "assets/fonts/thick_8x8.xml");  

        this.load.image('non_paused','assets/non_paused.png');
        this.load.image('paused','assets/paused.png');

        

    }
    
    create(){
        console.log('preload')
        //this.scene.start('MenuScene');
        this.scene.start('MenuScene');
    }

}


