export default class EndScene extends Phaser.Scene {
    constructor(gameOptions){
        super({key:'EndScene'})
        this.gameOptions = gameOptions;
    }

    preload(){}

    create(args){

        let title = "Winner: "+ args['win'];
        let choise = this.add.bitmapText(500, 200, "bitmapFont", title,50).setOrigin(0.5,0.5);

        let back = this.add.bitmapText(100, 400, "bitmapFont", 'back',50).setOrigin(0.5,0.5).setInteractive({ useHandCursor: true  } );

        back.on('pointerdown', function (event){
            this.scene.scene.start('MenuScene'); // wtf
        });


        let replay_btn = this.add.bitmapText(100, 600, "bitmapFont", 'replay',50).setOrigin(0.5,0.5).setInteractive({ useHandCursor: true  } );

        replay_btn.on('pointerdown', function (event){
            this.scene.scene.start('Play',{
                'mode':'single'
            }); // wtf
        });
    }


}

// option replay, start play scene with the right arguments
// browser localstore info