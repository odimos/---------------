import DATA from "../data/data.js";

import { Soundshandler } from "../utils/soundsHandler.js";
import {createVolumeBtn } from "../utils/buttons.js";


export default class EndScene extends Phaser.Scene {
    constructor(gameOptions){
        super({key:'EndScene'})
        this.gameOptions = gameOptions;
    }

    preload(){
        this.soundPlayer = Soundshandler(this, DATA['SOUNDS'] );
    }

    create(args){

        // "player1":scene.score.player1,
        // "player2":scene.score.player2,
        // "player1name": 'player1',
        // "player2name": 'player2',
        // "player1image":'',
        // "player2image":''

        // Display winner or tie
        // Display Score
        // display Buttons


        createVolumeBtn(this, this.gameOptions)

        let title = "Winner: "+ args['win'];
        let choise = this.add.bitmapText(500, 200, "bitmapFont", title,50).setOrigin(0.5,0.5);

        let back = this.add.bitmapText(100, 400, "bitmapFont", 'menu',50).setOrigin(0.5,0.5).setInteractive({ useHandCursor: true  } );

        back.on('pointerdown', function (event){
            this.scene.soundPlayer.play('pop');

            this.scene.scene.start('MenuScene'); // wtf

        });


        let replay_btn = this.add.bitmapText(100, 600, "bitmapFont", 'replay',50).setOrigin(0.5,0.5).setInteractive({ useHandCursor: true  } );

        replay_btn.on('pointerdown', function (event){
            this.scene.soundPlayer.play('pop');
            this.scene.scene.start('Play',{
                'mode':'single'
            }); // wtf
        });
    }


}

// option replay, start play scene with the right arguments
// browser localstore info