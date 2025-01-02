import DATA from "../data/data.js";
import { Soundshandler } from "../utils/soundsHandler.js";
import { createVolumeBtn } from "../utils/buttons.js";
import { effectAnimation } from "../animations/initAnimations.js";

export default class ChooseScene extends Phaser.Scene {
    constructor(){
        super({key:'ChooseScene'})
        this.gameOptions = gameOptions;
        
    }

    preload(){
        // could i do that only once and not every scene?
        this.soundPlayer = Soundshandler(this, DATA['SOUNDS']); 
        
    }


    create(){
        console.log('ChooseScene')
        
        for (let i=0;i<5;i++){
            this.add.image(0,0,"main_bg").setOrigin(0,0).setScale(1.5)
        }

        let container_h = this.gameOptions.height;
        let y_start = container_h/4 + 120;

        let x = this.gameOptions.width/2;
        const container = this.add.container(x, y_start);

        let singleplayer = this.getChoices('CONTINUE', 0, 'Play');
        container.add(singleplayer);
        let multiplayer = this.getChoices('NEW CAMPAIGN', 1, 'SelectScene');
        container.add(multiplayer);
        createVolumeBtn(this, 4,this.gameOptions.height);

        let footerEl = document.createElement('div');
        footerEl.id = 'footer';
        footerEl.classList.add('w-50')
        footerEl.innerHTML = /*html*/ 
        `
        <div class="bottom-buttons">
            <button class="btn btn-success w-100 font-weight-bold fs-3" id="Menu">Menu</button>
        </div>
        `;
        footerEl.style.width = this.gameOptions.width+'px';
        const footer = this.add.dom(0,this.gameOptions.height,footerEl).setOrigin(0,1);

        const menuButton = document.getElementById('Menu');
        menuButton.addEventListener('click', () => {
            this.soundPlayer.play('choose_button');
            this.scene.start('MenuScene')
        });

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
            this.scene.soundPlayer.play('choose_button');
            this.scene.scene.start(options);
        });
        return choise;
    }

}