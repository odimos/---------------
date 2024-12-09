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

    displayWinner(playername, image) {
        let titleText = this.add.bitmapText(this.gameOptions.width/2, 100, "bitmapFont", "Winner",50)
        .setOrigin(0.5,0.5);

        let winner_image = this.add.image(this.gameOptions.width/2, 200,image).setScale(3);
        let ribbon = this.add.image(this.gameOptions.width/2, 180,'ribbon').setScale(0.5)
        .setOrigin(0.5, 1);
        let label = this.add.image(this.gameOptions.width/2, 300,'label').setScale(1);
        let name = this.add.bitmapText(this.gameOptions.width/2, 310, "bitmapFont", playername,40)
        .setOrigin(0.5,0.5);
        let textWidth = name.width+100;

        label.setDisplaySize(textWidth, 80)

    
    }

    displayTie(player1, image1, player2, image2){
        let titleText = this.add.bitmapText(this.gameOptions.width/2, 100, "bitmapFont", "Tie!",50)
        .setOrigin(0.5,0.5);
        
         this.add.image(this.gameOptions.width/2 - 100, 200,image1).setScale(2);
         this.add.image(this.gameOptions.width/2 + 100, 200,image2).setScale(2);
         let ribbon = this.add.image(this.gameOptions.width/2, 180,'ribbon').setScale(0.5)
        .setOrigin(0.5, 1);
    }

    create(args){
        let player1score = args.player1
        let player2score = args.player2
        let player1name = args.player1name
        let player2name = args.player2name
        let image1 = args.player1image
        let image2 = args.player2image




        // "player1":scene.score.player1,
        // "player2":scene.score.player2,
        // "player1name": 'player1',
        // "player2name": 'player2',
        // "player1image":'',
        // "player2image":''

        // Display winner or tie
        // Display Score
        // display Buttons
        
        if (player1score> player2score) {this.displayWinner(player1name, image1)}
        else if (player2score> player1score) {this.displayWinner(player2name, image2)}
        else{
            this.displayTie(player1name, image1, player2name, image2)
        }

        let scoreContainer = this.add.container(0, 400);

        let x_step = this.gameOptions.width/3;
        let name1 = this.add.bitmapText(x_step,0, "bitmapFont",player1name, 30)
        .setOrigin(0.5,0.5);
        let score1 = this.add.bitmapText(x_step,50, "bitmapFont",player1score,50)
        .setOrigin(0.5,0.5);
        let name2 = this.add.bitmapText(x_step*(2),0, "bitmapFont",player2name, 30)
        .setOrigin(0.5,0.5);
        let score2 = this.add.bitmapText(x_step*(2), 50, "bitmapFont", player2score,50)
        .setOrigin(0.5,0.5);

        scoreContainer.add([name1,score1,name2,score2])


        createVolumeBtn(this, this.gameOptions)

        let back = this.add.bitmapText(this.gameOptions.width-20, this.gameOptions.height, 'bitmapFont' ,  "menu", 50)
        .setOrigin(1,1).setInteractive({ useHandCursor: true  } );
        back.on('pointerdown', function (event){
            this.scene.soundPlayer.play('pop');
            this.scene.scene.start('MenuScene'); // wtf
        });

        let replay_btn = this.add.bitmapText(0+20, this.gameOptions.height, "bitmapFont", 'replay',50)
        .setOrigin(0,1).setInteractive({ useHandCursor: true  } );
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