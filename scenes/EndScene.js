import DATA from "../data/data.js";

import { Soundshandler } from "../utils/soundsHandler.js";
import {createVolumeBtn } from "../utils/buttons.js";


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

        let winner_image = this.add.image(this.gameOptions.width/2, y_start+100, 'headssprites', image).setScale(3);
        let ribbon = this.add.image(this.gameOptions.width/2, y_start+100-20,'ribbon').setScale(0.5)
        .setOrigin(0.5, 1);
        let label = this.add.image(this.gameOptions.width/2, y_start+180,'label').setScale(1);
        let name = this.add.bitmapText(this.gameOptions.width/2, y_start+195, "bitmapFont", playername,40)
        .setOrigin(0.5,0.5);
        let textWidth = name.width+100;

        label.setDisplaySize(textWidth, 80)

    
    }

    displayTie(player1, image1, player2, image2, y_start=200){
        let titleText = this.add.bitmapText(this.gameOptions.width/2, y_start, "bitmapFont", "Tie!",50)
        .setOrigin(0.5,0.5);
        
         this.add.image(this.gameOptions.width/2 + 100, y_start+100,'headssprites',image1).setScale(2);
         this.add.image(this.gameOptions.width/2 - 100, y_start+100,'headssprites',image2).setScale(2);
         let ribbon = this.add.image(this.gameOptions.width/2, y_start+80,'ribbon').setScale(0.5)
        .setOrigin(0.5, 1);
    }

    buttonsFunctionality(args){
        const replayButton = document.getElementById('Replay');
        const menuButton = document.getElementById('Menu');

        replayButton.addEventListener('click', () => {
            this.soundPlayer.play('choose_button');
            this.scene.start('Play',args);
        });

        menuButton.addEventListener('click', () => {
            this.soundPlayer.play('choose_button');
            this.scene.start('MenuScene')
        });
    }

    create(args){
        createVolumeBtn(this, 4,this.gameOptions.height);

        let footerEl = document.createElement('div');
        footerEl.id = 'footer';
        footerEl.classList.add('w-50')
        footerEl.innerHTML = /*html*/ 
        `
        <div class="bottom-buttons">
            <button class="btn btn-success w-50 font-weight-bold fs-3" id="Replay">Replay</button>
            <button class="btn btn-success w-50 font-weight-bold fs-3" id="Menu">Menu</button>
        </div>
        `;
        footerEl.style.width = this.gameOptions.width+'px';
        
        // Optionally, you can also add some text inside the d
        const footer = this.add.dom(0,this.gameOptions.height,footerEl).setOrigin(0,1);

        this.buttonsFunctionality(args);
        console.log(this.registry)
        let player1score = this.registry.get('player1score');
        let player2score = this.registry.get('player2score')
        let player1name = this.registry.get('name1')
        let player2name = this.registry.get('name2')
        let image1 = this.registry.get('key1')
        let image2 = this.registry.get('key2')
        
        if (player1score> player2score) {this.displayWinner(player1name, image1)}
        else if (player2score> player1score) {this.displayWinner(player2name, image2)}
        else{
            this.displayTie(player1name, image1, player2name, image2)
        }

        let scoreContainer = this.add.container(0, 50);

        let x_step = this.gameOptions.width/4;
        let x_step_from_end = this.gameOptions.width - x_step;
        let name1 = this.add.bitmapText(x_step,0, "bitmapFont",player2name, 30)
        .setOrigin(0.5,0.5);
        let score1 = this.add.bitmapText(x_step,50, "bitmapFont",player2score,50)
        .setOrigin(0.5,0.5);
        let name2 = this.add.bitmapText(x_step_from_end,0, "bitmapFont",player1name, 30)
        .setOrigin(0.5,0.5);
        let score2 = this.add.bitmapText(x_step_from_end, 50, "bitmapFont", player1score,50)
        .setOrigin(0.5,0.5);

        scoreContainer.add([name1,score1,name2,score2])

    }






}

// option replay, start play scene with the right arguments
// browser localstore info