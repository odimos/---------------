import { playerInputhandler, player2options, player1options } from "../Compoments/playerInputHandler.js";
import Ball from "../entities/Ball.js";
import Player from "../entities/Player.js";
import Goalpost from "../entities/Goalpost.js";
import {createScoreBoard, clock, goalVisuals} from "../hud/hud.js";
import Pop from "../entities/EffectPop.js";
//import EffectsHandler from "../utils/effects.js";
import { Soundshandler } from "../utils/soundsHandler.js";
import DATA from "../data/data.js";
import { buttonsContainer } from "../utils/buttons.js";
import { AI_handler } from "../Compoments/AI_handler.js";
import { effectAnimation } from "../animations/initAnimations.js";
//import EffectsGraphicsHandler from "../utils/effectsGraphicsHandler.js";
import {EffectsHandler} from "../utils/Effects.js";

export default class Play extends Phaser.Scene {
    constructor(){
        super({key:'Play'})
        this.gameOptions = gameOptions;
        console.log('Constructor Play');
        this.createCategories();
                
    }
    // only ONCE
    createCategories(){
        this.player_head_category = 2;   // 2^1 = 2
        this.player_legs_category = 4;   // 2^2 = 4
        this.ball_category = 8;          // 2^3 = 8
        this.pop_category = 16;          // 2^4 = 16
        this.platform_category = 32;     // 2^5 = 32
    }

    debug(){
        this.input.on('pointerup', function (pointer) {
            this.scene.ball.setPosition(pointer.x, pointer.y);
            this.scene.ball.setVelocity(0)
        });

    }


    create(args){
        

        console.log("Create Play")

        effectAnimation(this);

        //this.effects_graphics_handler = new EffectsGraphicsHandler(this); // for players
        this.effectsHandler = new EffectsHandler(this);

        buttonsContainer(this,4,this.gameOptions.height)
        const BOUNDS_CATEGORY = 64;
        this.matter.world.setBounds();

        const ball2 = this.matter.add.sprite(400, 300, 'kk', { isStatic: false, restitution: 0.9 });
        ball2.setBounce(0.9);
        this.score = {
            'player1':0,
            'player2':0
        }
        //this.cameras.main.setBackgroundColor(0xFFFFFF);
        var graphics = this.add.graphics();

        // Set the fill style to white
        graphics.fillStyle(0xffffff, 1); // 0xffffff is the hex color code for white

        // Draw the rectangle
        graphics.fillRect(0, 0, this.gameOptions.width, this.gameOptions.height-150);
        let bg = this.add.image(-50,-100,"bg").setOrigin(0,0).setScale(1.5).setAlpha(0.5);

        this.scoreBoard = createScoreBoard(this,this.score['player1'], this.score['player2'], args['name2'], args['name1']);
        goalVisuals(this)
        this.clockPaused = false;
        this.clockPausedGoal = false;
        this.clockObj = clock(this,0, args['key2'], args['key1'], args['name2'], args['name1'], args['mode'])

        

        //this.effectsHandler = EffectsHandler(this);
        this.effectPopHandler();
        this.lastTouched = null;

        this.entities = [];
        this.soundPlayer = Soundshandler(this, DATA['SOUNDS'], this.gameOptions['VOLUME'] ); 

        this.floorY = this.gameOptions.height - 150;

        const platform = this.matter.add.sprite(this.gameOptions.width/2, 
            this.floorY + 50/2, 
            null);
        platform.setBody({
            type: 'rectangle',
            width: this.gameOptions.width,
            height: 50,
        })
        .setStatic(true);
        platform.setCollisionCategory(this.platform_category);
        platform.setCollidesWith([this.player_head_category, this.ball_category]);

        for (let i=0;i<20;i++){
            this.add.image( i*61,this.floorY,"grass_tile" ).setOrigin(0,0).setScale(1.5)
            .setDepth(1);
        }

        this.ball = new Ball(this,100,600);
        this.entities.push(this.ball);

        let player = new Player(this,400,0,this.gameOptions.LEFT, args['key1'])
        player.addcompoment(playerInputhandler, player1options )
        this.entities.push(player)
        this.player = player;
        this.lastTouched = player;
        
        let player2 = new Player(this,0,0,this.gameOptions.RIGHT, args['key2']);
        if (args['mode'] == 'single'){
            player2.addcompoment(AI_handler, null )
            //player.addcompoment(playerInputhandler, player2options )

        } else if (args['mode'] == 'multiplayer'){
            player2.addcompoment(playerInputhandler, player2options )

        }
        
        this.player2 = player2;
        this.entities.push(player2);

        this. goalpostLeft = new Goalpost(this,this.gameOptions.LEFT)
        this. goalpostRight = new Goalpost(this,this.gameOptions.RIGHT)

        this.matter.world.on('collisionstart', function (event) {
            // this context one level higher than scene
            event.pairs.forEach(pair=>{
                let ball = (pair.bodyA.isBall) ? pair.bodyA : ((pair.bodyB.isBall) ? pair.bodyB : null);
                if (! ball) return;
                let player_part = (pair.bodyA.belongsToentity) ? pair.bodyA : ((pair.bodyB.belongsToentity) ? pair.bodyB : null);
                if (player_part){
                    let player = player_part.belongsToentity;
                    //let volume = ball.getKickVolume(player_part)
                    this.scene.soundPlayer.play('kick', {"volume": this.scene.gameOptions['VOLUME'] } )

                    ball.lastTouched = player
                    this.scene.lastTouched = player
                } else {
                    let body = (pair.bodyA.isSensor) ? pair.bodyA : ((pair.bodyB.isSensor) ? pair.bodyB : null);
                    if (body && body.isGoalpost && ball && !this.scene.clockPaused){
                        this.scene.soundPlayer.play('cheers' )
                        this.scene.restartPositions(goalpost.parent)
                    }
                }

            });
        });
        
        this.placeObjects();
        //this.countDownStart(1)
        // delay 3 seconds the start

        this.debug();

        console.log(Phaser.VERSION);


    };


    isOnTop(thisplayer) {
        let otherPlayer = this.player2;
        // who is bottom who is top
        if (thisplayer.dir==-1) otherPlayer = this.player;        
        if (!(thisplayer.head.y < otherPlayer.head.y-15)) return false;
        
        let distance = Phaser.Math.Distance.BetweenPoints(this.player.head, this.player2.head);
        let mindistancetotouch = (this.player.playerRadius + this.player2.playerRadius);
        return distance < mindistancetotouch+2;
    }

    shake(ball){
        let maxIntensity = 0.005
        let p = new Phaser.Geom.Point(ball.body.velocity.x,ball.body.velocity.y)
        // make it better
        let intensity = maxIntensity*(Phaser.Geom.Point.GetMagnitude(p))
        this.cameras.main.shake(500,intensity);
    }

    updateScore(goalpost){
        if (goalpost.dir == this.gameOptions.LEFT) this.score['player2']++ ;
        else this.score['player1']++;
        this.scoreBoard.update(this.score['player1'], this.score['player2'])
    }

    countDownStart(N){
        this.clockPausedGoal = true;
        this.matter.pause();
        this.time.removeAllEvents(); // for pop effects
        this.countDown = N;
        this.countDownText = this.add.bitmapText(this.gameOptions.width/2,this.gameOptions.height/3, "bitmapFont",
    N).setScale(5).setOrigin(0.5,0).setTint(0xff0000);;
        this.timedEvent = this.time.addEvent({
            delay:500,
            callback: ()=>{
                this.countDownText.text = this.countDown--;
                if (this.countDown<0){
                    this.countDownText.destroy()
                    this.timedEvent.remove();
                    this.matter.resume()
                    this.clockPausedGoal = false;     
                    
                    this.soundPlayer.play('whistle1' );


                }
            },
            callbackScope: this,
            loop:true
        })
    


    }

    restartPositions(goalpost){
        let N = 1
        this.clockPausedGoal = true;
        this.updateScore(goalpost);
        this.shake(this.ball);
        this.time.removeAllEvents(); // for pop effects

        this.matter.pause();

        this.time.addEvent({
            delay: 500,
            callback: ()=>{
                
                this.placeObjects();
                this.ball.init(); 
                this.effectsHandler.removeAll();
                this.countDown = N;
                this.countDownText = this.add.bitmapText(this.gameOptions.width/2,this.gameOptions.height/3, "bitmapFont",
          N).setScale(5).setOrigin(0.5,0).setTint(0xff0000);;
                this.timedEvent = this.time.addEvent({
                    delay:500,
                    callback: ()=>{
                        this.countDownText.text = this.countDown--;
                        if (this.countDown<0){
                            this.countDownText.destroy()
                            this.timedEvent.remove();
                            this.matter.resume()
                            this.clockPausedGoal = false;     
                            this.effectPopHandler(); 
                            
                        }
                    },
                    callbackScope: this,
                    loop:true
                })

            },
            loop: false
        })
        
    }

    effectPopHandler(cat4, cat2){
        let max = 1000
        let min = 500
        
        const schedulePop = () => {
            let delay = Math.random() * (max - min) + min;

            let popEvent = this.time.addEvent({
                delay: delay,
                callback: () => {
                    let x  = Math.random() * (this.gameOptions.width - 100) + 100;
                    let pop = Pop(this, 900, 600);
                    
                    pop.scene.soundPlayer.play('pop' )
                    //schedulePop();
                },
                callbackScope: this,
                loop: false 
            });
        };
    
    schedulePop();
    


    }


    placeObjects(){
        this.ball.setPosition(this.gameOptions.width/2,350)
        this.ball.setVelocity(0,0)
        this.player.setPosition(this.gameOptions.width-200 - 300,this.floorY-200)
        this.player.setVelocity(0,0)
        this.player2.setPosition(200,this.floorY-200)
        this.player2.setVelocity(0,0)

        // normalise also
        this.player.normalizeSize();
        this.player.normalizeSpeed();

        this.player2.normalizeSize();
        this.player2.normalizeSpeed();

        //this.ball.init(this.gameOptions.width/2,350);

    }
    
    update(time, delta){
        this.entities.forEach(entity=>{
           entity.update(time, delta) // check if has been destroyed
            // doesnt need if use  this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
            // must be
        });
        this.clockObj(time, delta);
        this.effectsHandler.update();
    }

    setUpPlatform(platformY, platformH){
                let platform = this.matter.add.image(
            0+200,platformY,'platform'
        )
        .setBody({
            type:'rectangle',
            width:this.gameOptions.width,
            height:platformH
        })
        .setOrigin(0,0)
        .setStatic(true);

        return platform;
    }

}