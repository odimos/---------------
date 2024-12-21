import DATA from "../data/data.js";
import { Soundshandler } from "../utils/soundsHandler.js";
import { createVolumeBtn } from "../utils/buttons.js";
import { effectAnimation } from "../animations/initAnimations.js";

export default class MenuScene extends Phaser.Scene {
    constructor(gameOptions){
        super({key:'MenuScene'})
        this.gameOptions = gameOptions;
    }

    preload(){
        this.soundPlayer = Soundshandler(this, DATA['SOUNDS'] );
    }

    flipperCheck(){
        // Create the head (pivot point)
        let head = this.matter.add.circle(400, 100, 20, {
            isStatic: true, // Allow movement if needed
            label: 'head'
        });

        // Create the leg (rotating body)
        let leg = this.matter.add.rectangle(400, 120, 10, 50, {
            isStatic: false, // Allow rotation
            label: 'leg'
        });
        // Add a constraint to connect the leg to the head
        this.matter.add.constraint(head, leg, {
            pointA: { x: 0, y: 0 }, // Attach to the center of the head
            pointB: { x: 0, y: 25 }, // Attach to the top of the leg
            length: 0,               // No distance between the bodies
            stiffness: 1             // Rigid connection
        });

        // Apply rotation to the leg
        this.matter.body.setAngularVelocity(leg, 0.1); // Adjust rotation speed

        this.input.keyboard.on('keydown-SPACE', () => {
            // Apply angular velocity to the leg
            this.matter.body.setAngularVelocity(leg, -0.1);
        });

    }

    create(){

        

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
        createVolumeBtn(this, this.gameOptions, 4,this.gameOptions.height);

    
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
            this.scene.soundPlayer.play('pop', {"volume": this.scene.gameOptions['VOLUME'] });
            this.scene.scene.start('SelectScene', options)
        });
        return choise;
    }


}