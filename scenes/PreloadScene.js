import DATA from "../data/data.js";

export default class PreloadScene extends Phaser.Scene {
    constructor(gameOptions){
        super({key:'PreloadScene'})
    }

    loadEffect(){
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

        let dotCount = 0;

        this.ev = this.time.addEvent({
            delay: 500, // update every half second
            callback: () => {
                dotCount = (dotCount + 1) % 4; // Reset after 3 dots
                let dots = '.'.repeat(dotCount); // Create a string with the right number of dots
                this.loadingText.setText('Loading' + dots); // Update the loading text
            },
            loop: true
        });
    }

    preload(){
        this.loadEffect();

        this.load.bitmapFont("bitmapFont", "assets/fonts/thick_8x8.png",
            "assets/fonts/thick_8x8.xml");  

        DATA['IMAGES'].forEach( ({path, key}) => {
            this.load.image(key, path)
        });
        DATA['SOUNDS'].forEach( ({path, key}) => {
            this.load.audio(key, path)
        });

        this.load.atlas('heads', 'assets/sheets/heads.png', 'assets/sheets/heads.json');
        this.load.spritesheet('popBackgrounds', 'assets/sheets/effectsheet.png', { frameWidth: 69, frameHeight: 69 });
        this.load.atlas('effects', 'assets/sheets/effects_atlas.png', 'assets/sheets/effects_atlas.json');
        this.load.atlas('generall_assets', 'assets/generall_assets/generall_assets.png', 'assets/generall_assets/generall_assets.json');

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
        //this.scene.start('MenuScene')

        if (this.loadingText) {
            this.loadingText.destroy();
            this.loadingText = null;
        }
        if (this.ev) {
            this.ev.destroy();
            this.ev = null;
        }
        // this.scene.start('Play',{
        //     'key1':'1.png', 'key2':'1.png', 'name1':'', 'name2':'', 'mode':'multiplayer'
        // })
        this.scene.start('MenuScene')

    }

}


