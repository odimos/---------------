import DATA from "../data/data.js";
import { Soundshandler } from "../utils/soundsHandler.js";

export default class MenuScene extends Phaser.Scene {
    constructor(gameOptions){
        super({key:'MenuScene'})
        this.gameOptions = gameOptions;
    }

    preload(){}

    create(){
        this.soundPlayer = Soundshandler(this, DATA['SOUNDS'] );

        let container_h = this.gameOptions.height;
        let y_start = container_h/4 + 120;

        let x = this.gameOptions.width/2;
        const container = this.add.container(x, y_start);

        let singleplayer = this.getChoices('SINGLE PLAYER', 0, {'mode':'single'});
        container.add(singleplayer);
        let multiplayer = this.getChoices('MULTI PLAYER', 1, {'mode':'multiplayer'});
        container.add(multiplayer);
        let online = this.getChoices('ONLINE', 2, {'mode':'online'});
        container.add(online);

        console.log(container) 

        
    }

    getChoices = function(name, index, options){
        let y_distance = 50;
        let y = index * y_distance;
        let choise = this.add.bitmapText(0, y, "bitmapFont", name,50).setOrigin(0.5,0.5).setScale(1).setInteractive({ useHandCursor: true  } );
        choise.on('pointerover', function (event){
            this.setTint(0xff0000); //0x44ff44
        });
        choise.on('pointerout', function (event){
            this.clearTint();
        });
        choise.on('pointerdown', function (event){
            this.scene.soundPlayer('pop');
            this.scene.scene.start('Play', options); // wtf
        });
        return choise;
    }


}