import DATA from "../data/data.js";

export default class PreloadScene extends Phaser.Scene {
    constructor(gameOptions){
        super({key:'PreloadScene'})
    }

    preload(){
        this.load.bitmapFont("bitmapFont", "assets/fonts/thick_8x8.png",
            "assets/fonts/thick_8x8.xml");  

        DATA['IMAGES'].forEach( ({path, key}) => {
            this.load.image(key, path)
        });
        DATA['SOUNDS'].forEach( ({path, key}) => {
            this.load.audio(key, path)
        });

    }
    
    create(){
        console.log('preload')
        this.scene.start('MenuScene');
        //this.scene.start('Play');
        

    }

}


