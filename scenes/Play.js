import { playerInputhandler, player2options, player1options } from "../Compoments/playerInputHandler.js";
import Ball from "../entities/Ball.js";
import Player from "../entities/Player.js";
import Goalpost from "../entities/Goalpost.js";
import {createScoreBoard, clock, goalVisuals} from "../hud/hud.js";
import Pop from "../entities/EffectPop.js";
import EffectsHandler from "../utils/effects.js";
import { Soundshandler } from "../utils/soundsHandler.js";
import DATA from "../data/data.js";
import { buttonsContainer } from "../utils/buttons.js";

export default class Play extends Phaser.Scene {
    constructor(gameOptions){
        super({key:'Play'})
        this.gameOptions = gameOptions;
        console.log(this.gameOptions['VOLUME'])

        
    }

    // only ONCE
    createCategories(){
        console.log('Collision categories')
        this.player_head_category = 2;
        this.ball_category = 4;
        this.player_legs_category = 8;
        this.pop_category = 16;   
        console.log(this.player_head_category, this.ball_category, this.player_legs_category, this.pop_category)

    }


    create(args){


        if (args['gameStatus'] == 'first' ){
            console.log('restart')
        } else {
            // first time
            this.createCategories()
        }

        buttonsContainer(this,20,this.gameOptions.height)


        this.matter.world.setBounds(0, 0, this.gameOptions.width, this.gameOptions.height);
        this.score = {
            'player1':0,
            'player2':0
        }
        this.scoreBoard = createScoreBoard(this,this.score['player1'], this.score['player2']);
        goalVisuals(this)
        this.clockPaused = false;
        this.clockPausedGoal = false;
        this.clockObj = clock(this,0)

        this.timedEvents = [];

        this.effectsHandler = EffectsHandler(this);
        this.effectPopHandler(this.pop_category, this.ball_category)
        this.lastTouched = null;

        this.entities = [];
        this.soundPlayer = Soundshandler(this, DATA['SOUNDS'], this.gameOptions['VOLUME'] ); 
       
        let platformH = 50;
        this.platformY = this.gameOptions.height-platformH ;
        let platform = this.setUpPlatform(this.platformY, platformH);
        platform.setCollidesWith([ this.player_head_category, this.ball_category ]);

        let player = new Player(this,400,0,this.gameOptions.LEFT)
        player.addcompoment(playerInputhandler, player1options )
        this.entities.push(player)
        this.player = player;
        player.head.setCollisionCategory(this.player_head_category);
        player.leg.setCollisionCategory(this.player_legs_category);
        player.leg.setCollidesWith([this.ball_category]);
        
        let player2 = new Player(this,0,0,this.gameOptions.RIGHT);
        player2.addcompoment(playerInputhandler, player2options )
        this.player2 = player2;
        player2.head.setCollisionCategory(this.player_head_category);
        player2.leg.setCollisionCategory(this.player_legs_category);
        player2.leg.setCollidesWith([this.ball_category]);
        this.entities.push(player2)

        
        this.ball = new Ball(this,100,600);
        this.ball.setCollisionCategory(this.ball_category);

        let goalpostLeft = new Goalpost(this,this.gameOptions.LEFT)
        let goalpostRight = new Goalpost(this,this.gameOptions.RIGHT)

        this.matter.world.on('collisionstart', function (event) {
            // this context one level higher than scene
            event.pairs.forEach(pair=>{
                let ball = (pair.bodyA.isBall) ? pair.bodyA : ((pair.bodyB.isBall) ? pair.bodyB : null);
                if (! ball) return;
                let player_part = (pair.bodyA.belongsToentity) ? pair.bodyA : ((pair.bodyB.belongsToentity) ? pair.bodyB : null);
                if (player_part){
                    let player = player_part.belongsToentity;
                    let volume = ball.getKickVolume(player_part)
                    this.scene.soundPlayer.play('kick', {"volume": this.scene.gameOptions['VOLUME'] } )

                    ball.lastTouched = player
                    this.scene.lastTouched = player
                } else {
                    let goalpost = (pair.bodyA.isSensor) ? pair.bodyA : ((pair.bodyB.isSensor) ? pair.bodyB : null);
                    if (goalpost && ball && !this.scene.clockPaused){
                        this.scene.soundPlayer.play('cheers' )
                        this.scene.restartPositions(goalpost.parent)
                    }
                }

            });
        });
        
        this.placeObjects();
        this.countDownStart(1)
        // delay 3 seconds the start
    };

    start(){

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
        let maxIntensity = 0.005
        let p = new Phaser.Geom.Point(ball.body.velocity.x,ball.body.velocity.y)
        // make it better
        let intensity = maxIntensity*(Phaser.Geom.Point.GetMagnitude(p))
        this.cameras.main.shake(500,intensity);
    }

    updateScore(goalpost){
        if (goalpost.dir == this.gameOptions.LEFT) this.score['player1']++ ;
        else this.score['player2']++;
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

        this.matter.pause()
        setTimeout(()=>{
            this.placeObjects();
            
            this.countDown = 1;
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
                    }
                },
                callbackScope: this,
                loop:true
            })
        },500)
    }

    effectPopHandler(cat4, cat2){
        let max = 3000
        let min = 2000
        
        const schedulePop = () => {
            let delay = Math.random() * (max - min) + min;

            let popEvent = this.time.addEvent({
                delay: delay,
                callback: () => {
                    let x  = Math.random() * (this.gameOptions.width - 100) + 100;
                    let pop = Pop(this, 500, 600);
                    pop.setCollisionCategory(cat4);
                    pop.setCollidesWith([cat2]);
                    pop.scene.soundPlayer.play('pop' )

                },
                callbackScope: this,
                loop: false 
            });
            this.timedEvents.push(popEvent);
        };
    
    schedulePop();
    }


    placeObjects(){
        this.ball.setPosition(this.gameOptions.width/2,350)
        this.ball.setVelocity(0,0)
        this.player.setPosition(this.gameOptions.width-200 - 300,this.platformY-this.player.head.height-200)
        this.player.setVelocity(0,0)
        this.player2.setPosition(200,this.platformY-this.player.head.height-200)
        this.player2.setVelocity(0,0)

        // normalise also
        this.player.normalizeSize();
        this.player.normalizeSpeed();

        this.player2.normalizeSize();
        this.player2.normalizeSpeed();

        this.ball.normalise();

    }
    
    update(time, delta){
        this.entities.forEach(entity=>{
           entity.update() // check if has been destroyed
            // doesnt need if use  this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
            // must be
        });
        this.clockObj(time, delta)
    }

    setUpPlatform(platformY,platformH){
        
        this.floorY = platformY - platformH/2;
        let platform = this.matter.add.image(
            this.gameOptions.width/2,platformY,'platform'
        )
        .setBody({
            type:'rectangle',
            width:this.gameOptions.width,
            height:platformH
        })
        .setOrigin(0.5,0.5)
        .setStatic(true);

        return platform;
    }

}