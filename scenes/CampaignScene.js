
// campaign :
// level
// player name 
// player image 
// statistics
// goals scored 
// gelas taken 

// menu / next?Rematch / registry / scores of campain in registry
import DATA from "../data/data.js";
import { getData } from "../utils/utilsfunctions.js";
import { LEVELS } from "../data/levels.js";

import { Soundshandler } from "../utils/soundsHandler.js";
import { createVolumeBtn } from "../utils/buttons.js";

export default class CampaignScene extends Phaser.Scene {
    constructor(){
        super({key:'CampaignScene'})
        this.gameOptions = gameOptions;
        
    }

    preload(){
        this.soundPlayer = Soundshandler(this, DATA['SOUNDS']); 
    }
    


    create(){
        console.log('CampaignScene')
        createVolumeBtn(this, 4,this.gameOptions.height);
        this.campaignEnd();
    }

    campaignEnd()
    {

        let {mode, name1, name2, key1, key2} = getData(this, LEVELS);
        let key3 = LEVELS[LEVELS.length - 2]['enemy_key']

        this.add.bitmapText(this.gameOptions.width/2,40, "bitmapFont",'You Won!!', 40)
        .setOrigin(0.5,0);
        this.add.bitmapText(this.gameOptions.width/2,120, "bitmapFont",name1, 74)
        .setTint(0x0000)
        .setOrigin(0.5,0);

        let container = this.add.container(this.gameOptions.width/2, 100);
        let trophy = this.add.image(50,190,"trophy").setOrigin(0.5,0.5).setScale(1);
        let pedestral = this.add.image(0,300,"pedestal").setOrigin(0.5,0).setScale(1);
        let head = this.add.image(0,300, 'heads', key1).setOrigin(0.5,1).setScale(2);
        let head2 = this.add.image(-180,390, 'heads', key3).setOrigin(0,1).setScale(2);
        let head3 = this.add.image(160,350, 'heads', key2).setOrigin(1,1).setScale(2);
        container.add([pedestral, head, head2, head3, trophy]);

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
    

}