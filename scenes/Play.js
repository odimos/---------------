import { playerInputhandler, player2options, player1options } from "../Compoments/playerInputHandler.js";
import Ball from "../entities/Ball.js";
import Player from "../entities/Player.js";
import Goalpost from "../entities/Goalpost.js";
import {createScoreBoard} from "../hud/hud.js";
import Pop from "../entities/EffectPop.js";
import EffectsHandler from "../utils/effects.js";

export default class Play extends Phaser.Scene {
    constructor(gameOptions){
        super('Play')
        this.gameOptions = gameOptions;
    }

    preload(){
        this.load.bitmapFont("bitmapFont", "assets/fonts/thick_8x8.png",
            "assets/fonts/thick_8x8.xml");  
    }

    create(){

        this.add.image(400, 300, 'pic');
        const goalText = this.add.bitmapText(this.gameOptions.width/2,this.gameOptions.height/3,"bitmapFont",
        'GOAL').setScale(5).setOrigin(0.5,1)
            .setVisible(false);

        //  Let's show the goalText when the camera shakes, and hide it when it completes
        this.cameras.main.on('camerashakestart', ()=>goalText.setVisible(true));
        this.cameras.main.on('camerashakecomplete',  ()=>goalText.setVisible(false));

        this.effectsHandler = EffectsHandler();
        this.lastTouched = null;

        this.entities = [];

        this.scoreBoard = createScoreBoard(this,this.hudFont);

        this.matter.world.setBounds();
        var cat1 = this.matter.world.nextCategory();
        var cat2 = this.matter.world.nextCategory();
        var cat3 = this.matter.world.nextCategory();
        var cat4 = this.matter.world.nextCategory();


        let platformH = 20;
        let platformY = this.gameOptions.height-platformH ;
        this.platformY = platformY
        let platform = this.setUpPlatform(platformY, platformH);
        platform.setCollisionCategory(cat1);
        platform.setCollidesWith([ cat1, cat2 ]);


        this.effectPopHandler(cat4, cat2)


        let player = new Player(this,0,0,this.gameOptions.LEFT)
        player.addcompoment(playerInputhandler, player1options )
        this.entities.push(player)
        this.player = player;
        
        let player2 = new Player(this,0,0,this.gameOptions.RIGHT);
        player2.addcompoment(playerInputhandler, player2options )
        this.player2 = player2;
         
        this.entities.push(player2)

        
        let ball = Ball(this,0,0);
        ball.setCollisionCategory(cat2);
        // would work if player done right.. ball.setOnCollideWith(platform,()=>{
        this.ball = ball


        let goalpostLeft = new Goalpost(this,this.gameOptions.LEFT)
        let goalpostRight = new Goalpost(this,this.gameOptions.RIGHT)

        this.setUpCollisions(
            {cat1,cat2,cat3},
            [player,player2]
        );

        this.matter.world.on('collisionstart', function (event) {
            
            // this context one level higher than scene
            event.pairs.forEach(pair=>{
                let ball = (pair.bodyA.isBall) ? pair.bodyA : ((pair.bodyB.isBall) ? pair.bodyB : null);
                if (! ball) return;
                let player = (pair.bodyA.belongsToentity) ? pair.bodyA.belongsToentity : ((pair.bodyB.belongsToentity) ? pair.bodyB.belongsToentity : null);
                if (player){
                    ball.lastTouched = player
                    this.scene.lastTouched = player
                }
                let goalpost = (pair.bodyA.isSensor) ? pair.bodyA : ((pair.bodyB.isSensor) ? pair.bodyB : null);
                if (goalpost && ball){
                    if (!ball || !ball.goalDetection)return;
                    ball.goalDetection = false;
                    this.scene.restart(goalpost.parent)
                }

            });
        });

        this.restart = this.restart.bind(this,ball,player,player2)
        this.placeObjects(ball,player,player2);

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

    restart(ball,player,player2, goalpost){
        //shake
        this.shake(ball)

        if (goalpost.dir == this.gameOptions.LEFT)this.scoreBoard.update(0,1) ;
       else this.scoreBoard.update(1,0);
       
        setTimeout(()=>{
            this.placeObjects(ball,player,player2);
            this.matter.pause()
            this.countDown = 3;
            this.countDownText = this.add.bitmapText(this.gameOptions.width/2,this.gameOptions.height/3, "bitmapFont",
      '3').setScale(5).setOrigin(0.5,0);
            this.timedEvent = this.time.addEvent({
                delay:500,
                callback: ()=>{
                     
                    this.countDownText.text = this.countDown--;
                    if (this.countDown<0){
                        this.countDownText.destroy()
                        this.timedEvent.remove();
                        ball.body.goalDetection = true;
                        this.matter.resume()
                    }
                },
                callbackScope: this,
                loop:true
            })

        },500)
        

    }

    effectPopHandler(cat4, cat2){
        let max = 1000
        let min = 500
        
        const schedulePop = () => {
            let delay = Math.random() * (max - min) + min;

            this.time.addEvent({
                delay: delay,
                callback: () => {
                    let x  = Math.random() * (this.gameOptions.width - 100) + 100;
                    let pop = Pop(this, 500, 600);
                    pop.setCollisionCategory(cat4);
                    pop.setCollidesWith([cat2]);
                    
                    //schedulePop();
                },
                callbackScope: this,
                loop: false 
            });
        };

    schedulePop();
    }


    placeObjects(ball,player,player2){
        ball.setPosition(this.gameOptions.width/2,550)
        ball.setVelocity(0,0)
        player.setPosition(this.gameOptions.width-200 - 300,this.platformY-player.head.height-50)
        player.setVelocity(0,0)
        player2.setPosition(200,this.platformY-player.head.height-50)
        //player2.setVelocity(0,0)
    }
    
    // cats -> object
    setUpCollisions(cats,players,balls,platforms){
        players.forEach(player=>{
            player.head.setCollisionCategory(cats.cat1);
            player.leg.setCollisionCategory(cats.cat3);
            player.leg.setCollidesWith([cats.cat2]);
        })
    }

    update(){
        this.entities.forEach(entity=>{
           entity.update() // check if has been destroyed
            // doesnt need if use  this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
            // must be
        })
  
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