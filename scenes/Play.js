import { playerInputhandler, player2options, player1options } from "../Compoments/playerInputHandler.js";
import getVoiceCommandsHandler from "../Compoments/voice_commands.js";
import Ball from "../entities/Ball.js";
import Player from "../entities/Player.js";
import Goalpost from "../entities/Goalpost.js";
import {createScoreBoard, clock, goalVisuals} from "../hud/hud.js";
import { Soundshandler } from "../utils/soundsHandler.js";
import DATA from "../data/data.js";
import { buttonsContainer, displayControllers } from "../utils/buttons.js";
import { AI_handler } from "../Compoments/AI_handler.js";
import { effectAnimation } from "../animations/initAnimations.js";
import {EffectsHandler} from "../utils/effects2.js";
import {AI_handler2} from "../AI/A.js";

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
        let r = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.input.on('pointerup', function (pointer) {
            if (! r.isDown)  return;
            this.scene.ball.setPosition(pointer.x, pointer.y);
            this.scene.ball.setVelocity(0)
        });

    }
    
    preload(){
        // could i do that only once and not every scene?
        this.soundPlayer = Soundshandler(this, DATA['SOUNDS']); 
    }

    create(args){
        console.log("Create Play")
        this.matter.world.setBounds(0, -50, this.gameOptions.width, 700)

        effectAnimation(this);
        this.effectsHandler = new EffectsHandler(this);
        this.effectsHandler.start();

        displayControllers(this, 500, this.gameOptions.height)
        buttonsContainer(this,4,this.gameOptions.height)

        this.score = {'player1':0, 'player2':0};

        //this.cameras.main.setBackgroundColor(0xFFFFFF);
        var graphics = this.add.graphics();        
        graphics.fillStyle(0xffffff, 1); // 0xffffff is the hex color code for white
        graphics.fillRect(0, 0, this.gameOptions.width, this.gameOptions.height-150);
        let bg = this.add.image(-50,-100 ,"bg").setOrigin(0,0).setScale(1.5).setAlpha(0.5);
        

        this.scoreBoard = createScoreBoard(this,
            this.score['player1'], this.score['player2'], 
            this.registry.get('name2'), this.registry.get('name1')
        );

        goalVisuals(this)
        this.clockPaused = false;
        this.clockPausedGoal = false;
        this.clockObj = clock(this,0)

        this.lastTouched = null;

        this.entities = [];

        this.floorY = this.gameOptions.height - 150;

        this.createPlatform(this.gameOptions.width/2,this.floorY+ 50/2 -5, this.gameOptions.width, 40);

        for (let i=0;i<20;i++){
            this.add.image( i*61,this.floorY, "generall_assets","grass_tile.png" ).setOrigin(0,0).setScale(1.5)
            .setDepth(1);
        }

        this.ball = new Ball(this,100,600);
        this.entities.push(this.ball);

        //if (this.registry.set('voiceCommands'))getVoiceCommandsHandler();

        this.player  = new Player(this,400,0,1, this.registry.get('key1'))
        this.player .addcompoment(playerInputhandler, player1options )
        this.entities.push(this.player)
        this.lastTouched = this.player ;
        
        this.player2 = new Player(this,0,0,-1,  this.registry.get('key2'));
        if (this.registry.get('mode') == 'single'){
            this.player2.addcompoment(AI_handler2, null )
        } else if (this.registry.get('mode') == 'multiplayer'){
            this.player2.addcompoment(playerInputhandler, player2options )
        }
        
        this.entities.push(this.player2);

        this. goalpostLeft = new Goalpost(this,1)
        this. goalpostRight = new Goalpost(this,-1)

        this.matter.world.on('collisionstart', function (event) {
            // this context one level higher than scene
            event.pairs.forEach(pair=>{
                let ball = (pair.bodyA.isBall) ? pair.bodyA : ((pair.bodyB.isBall) ? pair.bodyB : null);
                if (! ball) return;
                let player_part = (pair.bodyA.belongsToentity) ? pair.bodyA : ((pair.bodyB.belongsToentity) ? pair.bodyB : null);
                if (player_part){
                    let player = player_part.belongsToentity;
                    this.scene.soundPlayer.play('kick', {'volumeFactor':0.7} )

                    ball.lastTouched = player
                    this.scene.lastTouched = player
                } else {
                    let body = (pair.bodyA.isSensor) ? pair.bodyA : ((pair.bodyB.isSensor) ? pair.bodyB : null);
                    if (body && body.isGoalpost && ball && !this.scene.clockPaused){
                        this.scene.soundPlayer.play('cheers' )
                        this.scene.restartPositions(body.parent)
                    }
                }

            });
        });
        
        this.placeObjects();
        this.countDownStart(3)

        this.debug();

    };

    createPlatform(x,y,w,h){
        this.matter.add.rectangle(x,y, w,h, 
            {
                isStatic: true, 
                collisionFilter: {
                                category: this.platform_category,
                                mask: this.player_head_category | this.ball_category
                            },
                restitution: 1,
                friction: 0.1, 
                frictionAir: 0.1, 
                frictionStatic:1
            }
        );
    }


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
        // this.maxVelDirection = 200
        let max_p = 200;
        let maxIntensity = 0.5;
        let point = new Phaser.Geom.Point(ball.body.velocity.x,ball.body.velocity.y)
        let magnitude = Phaser.Geom.Point.GetMagnitude(point);
        let intensity = maxIntensity*(magnitude/max_p)
        this.cameras.main.shake(500,intensity);
    }

    updateScore(goalpost){
        if (goalpost.dir == 1) this.score['player1']++ ;
        else this.score['player2']++;
        this.scoreBoard.update(this.score['player2'], this.score['player1'])
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
        let N = 3
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
                            this.effectsHandler.start();                            
                        }
                    },
                    callbackScope: this,
                    loop:true
                })
            },
            loop: false
        })
        
    }

    placeObjects(){
        this.ball.setPosition(this.gameOptions.width/2,350)
        this.ball.setVelocity( Math.floor(Math.random() * (10 - 0)) -5 ,0)
        this.player.setPosition(this.gameOptions.width-200,this.floorY-60)
        this.player.setVelocity(0,0)
        this.player2.setPosition(200,this.floorY-60)
        this.player2.setVelocity(0,0)
    }
    
    update(time, delta){
        this.entities.forEach(entity=>entity.update(time, delta)); // check if has been destroyed);
        this.clockObj(time, delta);
        this.effectsHandler.update();
    }


}