import DATA from "../data/data.js";

import { Soundshandler } from "../utils/soundsHandler.js";
import {createVolumeBtn } from "../utils/buttons.js";
import { getData } from "../utils/utilsfunctions.js";
import { LEVELS } from "../data/levels.js";

export default class EndScene extends Phaser.Scene {
    constructor(){
        super({key:'EndScene'})
        this.gameOptions = gameOptions;
    }

    preload(){
        this.soundPlayer = Soundshandler(this, DATA['SOUNDS'] );
    }

    displayWinner(playername, image, y_start=200) {
        let titleText = this.add.bitmapText(this.gameOptions.width/2, y_start, "bitmapFont", "Winner",50)
        .setOrigin(0.5,0.5);

        let winner_image = this.add.image(this.gameOptions.width/2, y_start+100, 'heads', image).setScale(3);
        let ribbon = this.add.image(this.gameOptions.width/2, y_start+100-20,'generall_assets', 'ribbon.png').setScale(2)
        .setOrigin(0.5, 1);
        let label = this.add.image(this.gameOptions.width/2, y_start+180,'generall_assets','label.png').setScale(1);
        let name = this.add.bitmapText(this.gameOptions.width/2, y_start+195, "bitmapFont", playername,40)
        .setOrigin(0.5,0.5);
        let textWidth = name.width+100;

        label.setDisplaySize(textWidth, 80)

    
    }

    displayTie(player1, key1, player2, key2, y_start=200){
        let titleText = this.add.bitmapText(this.gameOptions.width/2, y_start, "bitmapFont", "Tie!",50)
        .setOrigin(0.5,0.5);
        
         this.add.image(this.gameOptions.width/2 + 100, y_start+100,'heads',key1).setScale(2);
         this.add.image(this.gameOptions.width/2 - 100, y_start+100,'heads',key2).setScale(2);
         let ribbon = this.add.image(this.gameOptions.width/2, y_start+80,'generall_assets','ribbon.png').setScale(2)
        .setOrigin(0.5, 1);
    }

    buttonsFunctionality(args, mode, win){
        const replayButton = document.getElementById('Replay');
        const menuButton = document.getElementById('Menu');

        replayButton.addEventListener('click', () => {
            this.soundPlayer.play('choose_button');
            if (mode=='campaign'){
                let camp = this.registry.get('campaign');
                if (win){
                    if ( camp.LEVEL >= LEVELS.length-1){
                        this.scene.start('CampaignScene');
                        return;
                    }
                    camp.LEVEL =  camp.LEVEL+1;
                } 
                this.registry.set('campaign', camp  );
            }
            this.scene.start('Play',args);
        });

        menuButton.addEventListener('click', () => {
            this.soundPlayer.play('choose_button');
            if (mode=='campaign' && win){
                let camp = this.registry.get('campaign');
                camp.LEVEL =  camp.LEVEL+1;
            }
            this.scene.start('MenuScene')
        });
    }

    create(args){

        let player1score = this.registry.get('player1score');
        let player2score = this.registry.get('player2score');
        let win = true;
        if (player1score < player2score) win = false;
        let {mode, name1, name2, key1, key2} = getData(this, LEVELS);
        let camp = this.registry.get('campaign');
        if (mode=='campaign' && win){
            if ( camp.LEVEL >= LEVELS.length-1){
                this.scene.start('CampaignScene');
                return;
            }
        } 
        
        createVolumeBtn(this, 4,this.gameOptions.height);

        let footerEl = document.createElement('div');
        footerEl.id = 'footer';
        footerEl.classList.add('w-50')
        footerEl.innerHTML = /*html*/ 
        `
        <div class="bottom-buttons">
            <button class="btn btn-success w-50 font-weight-bold fs-3" id="Menu">Menu</button>
            <button class="btn btn-success w-50 font-weight-bold fs-3" id="Replay">
                ${ (mode === 'campaign' && win ) ? 'Next' : 'Replay'}
            </button>
        </div>
        `;
        footerEl.style.width = this.gameOptions.width+'px';
        
        // Optionally, you can also add some text inside the d
        const footer = this.add.dom(0,this.gameOptions.height,footerEl).setOrigin(0,1);

        this.buttonsFunctionality(args, mode, win);

        
        if (player1score> player2score) {this.displayWinner(name1, key1)}
        else if (player2score> player1score) {this.displayWinner(name2, key2)}
        else{
            this.displayTie(name1, key1, name2, key2)
        }

        let scoreContainer = this.add.container(0, 50);

        let x_step = this.gameOptions.width/4;
        let x_step_from_end = this.gameOptions.width - x_step;
        let name1txt = this.add.bitmapText(x_step,0, "bitmapFont",name2, 30)
        .setOrigin(0.5,0.5);
        let score1 = this.add.bitmapText(x_step,50, "bitmapFont",player2score,50)
        .setOrigin(0.5,0.5);
        let name2txt = this.add.bitmapText(x_step_from_end,0, "bitmapFont",name1, 30)
        .setOrigin(0.5,0.5);
        let score2 = this.add.bitmapText(x_step_from_end, 50, "bitmapFont", player1score,50)
        .setOrigin(0.5,0.5);

        scoreContainer.add([name1txt,score1,name2txt,score2])

        if (mode == 'campaign') {
            const LEVEL = this.registry.get('campaign').LEVEL;
            let levelText = this.add.bitmapText(this.gameOptions.width/2,600, "bitmapFont",`LEVEL: ${LEVEL+1} /${LEVELS.length}`, 48)
            .setOrigin(0.5,0.5);
        }

    }



}

// option replay, start play scene with the right arguments
// browser localstore info