import DATA from "../data/data.js";
import { Soundshandler } from "../utils/soundsHandler.js";
import { createVolumeBtn } from "../utils/buttons.js";
import { effectAnimation } from "../animations/initAnimations.js";

export default class MenuScene extends Phaser.Scene {
    constructor(){
        super({key:'MenuScene'})
        this.gameOptions = gameOptions;
        
    }

    preload(){
        // could i do that only once and not every scene?
        this.soundPlayer = Soundshandler(this, DATA['SOUNDS']); 
        
    }


    create(){
        console.log('MenuScene')
        
        for (let i=0;i<5;i++){
            this.add.image(0,0,"main_bg").setOrigin(0,0).setScale(1.5)
        }

        effectAnimation(this);
        this.add.sprite(50, 250).play('rotateGreen');
        this.add.sprite(50, 350).play('rotateYellow');
        this.add.sprite(50, 450).play('rotateRed');
        
        this.add.sprite(this.gameOptions.width - 50, 250).play('rotateGreen');
        this.add.sprite(this.gameOptions.width - 50, 350).play('rotateYellow');
        this.add.sprite(this.gameOptions.width - 50, 450).play('rotateRed');

        this.add.image(580, 740,"generall_assets" ,"controllers.png")
        .setScale(1.5);

        let container_h = this.gameOptions.height;
        let y_start = container_h/4 + 120;

        let x = this.gameOptions.width/2;
        const container = this.add.container(x, y_start);

        let singleplayer = this.getChoices('SINGLE PLAYER', 0, {'mode':'single'});
        container.add(singleplayer);
        let multiplayer = this.getChoices('MULTI PLAYER', 1, {'mode':'multiplayer'});
        container.add(multiplayer);
        // let online = this.getChoices('ONLINE', 2, {'mode':'online'});
        // container.add(online);
        createVolumeBtn(this, 4,this.gameOptions.height);


    
    }

    update(){}
    getChoices = function(name, index, options){
        let y_distance = 100;
        let y = index * y_distance;
        let choise = this.add.bitmapText(0, y, "bitmapFont", name,50).setOrigin(0.5,0.5).setScale(1).setInteractive({ useHandCursor: true  } );
        choise.on('pointerover', function (event){
            this.setTint(0xff0000); //0x44ff44
        });
        choise.on('pointerout', function (event){
            this.clearTint();
        });
        choise.on('pointerdown', function (event){
            let volume = this.scene.registry.get('volume')
            this.scene.soundPlayer.play('choose_button');

            this.scene.registry.set(options);
            this.scene.scene.start('SelectScene')
        });
        return choise;
    }

    voiceCommands(){
        // requires https
        let toggleContainerElement = document.createElement('div');
        toggleContainerElement.id = 'toggle';
        toggleContainerElement.innerHTML = /*html*/ 
        `<div class="toggleContainer">
        <div>
            <h4>Voice Commands</h4>
        </div>
        <div> 
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>
        </div>

        </div>

        
        `;
        const toggleContainer = this.add.dom(this.gameOptions.width-200,this.gameOptions.height-5,toggleContainerElement).setOrigin(0,1);
        const toggleElement = document.querySelector('#toggle input');
        this.registry.set('voiceCommands', false); 
        toggleElement.addEventListener('change', () => {
            this.registry.toggle('voiceCommands');
        });
    }


}