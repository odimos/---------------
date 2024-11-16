import { playerInputhandler, player2options, player1options } from "../Compoments/playerInputHandler.js";
import Ball from "../entities/Ball.js";
import Player from "../entities/Player.js";
import Goalpost from "../items/Goalpost.js";
import {createScoreBoard} from "../hud/hud.js";


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
        const goalText = this.add.text(this.gameOptions.width/2,100,
        'GOAL').setOrigin(0.5,1)
            .setVisible(false);

        //  Let's show the goalText when the camera shakes, and hide it when it completes
        this.cameras.main.on('camerashakestart', function () {
            goalText.setVisible(true);
        });

        this.cameras.main.on('camerashakecomplete', function () {
            goalText.setVisible(false);
        });

        this.entities = [];

        this.scoreBoard = createScoreBoard(this,this.hudFont);

        this.matter.world.setBounds();
        var cat1 = this.matter.world.nextCategory();
        var cat2 = this.matter.world.nextCategory();
        var cat3 = this.matter.world.nextCategory();
        
        let platformH = 20;
        let platformY = this.gameOptions.height-platformH ;
        this.platformY = platformY
        let platform = this.setUpPlatform(platformY, platformH);
        platform.setCollisionCategory(cat1);
        platform.setCollidesWith([ cat1, cat2 ]);

        
        let ball = new Ball(this,0,0);
        ball.setCollisionCategory(cat2);
        ball.body.isBall = true
        ball.body.goalDetection = true;
        this.entities.push(ball)
        this.ball = ball

        let player = new Player(this,0,0,this.gameOptions.LEFT)
        player.addcompoment(playerInputhandler, player1options )
        this.entities.push(player)
        this.player = player;
        


        let player2 = new Player(this,0,0,this.gameOptions.RIGHT);
        player2.addcompoment(playerInputhandler, player2options )
        this.player2 = player2;
         
        this.entities.push(player2)


        let goalpostLeft = new Goalpost(this,this.gameOptions.LEFT)
        let goalpostRight = new Goalpost(this,this.gameOptions.RIGHT)
        this.goalpostLeft = goalpostLeft;
        this.goalpostRight = goalpostRight;
        
        this.setUpCollisions(
            {cat1,cat2,cat3},
            [player,player2]
        );

        this.matter.world.on('collisionstart', function (event) {
            // this context one level higher than scene
            event.pairs.forEach(pair=>{
                let goalpost = (pair.bodyA.isSensor) ? pair.bodyA : ((pair.bodyB.isSensor) ? pair.bodyB : null);
                if (!goalpost)return;
                let ball = (pair.bodyA.isBall) ? pair.bodyA : ((pair.bodyB.isBall) ? pair.bodyB : null);
                if (!ball || !ball.goalDetection)return;
                ball.goalDetection = false;
                this.scene.restart(goalpost.parent)
            });
        });

        this.restart = this.restart.bind(this,ball,player,player2)
        this.placeObjects(ball,player,player2);

    };

    isOnTop(thisplayer) {
        //console.log('player2: ',this.player2)
        //console.log('player: ',this.player)

        //console.log('dir: ',)
        let otherPlayer = this.player2;
        // who is bottom who is top
        if (thisplayer.dir==-1) otherPlayer = this.player;
        //console.log('other: ',otherPlayer)
        
        if (!(thisplayer.head.y < otherPlayer.head.y-15)){
            return false;
        }


        //
        let distance = Phaser.Math.Distance.BetweenPoints(this.player.head, this.player2.head);
        let mindistancetotouch = (this.player.playerRadius + this.player2.playerRadius);
        return distance < mindistancetotouch+2;
    }

    shake(ball){
        let maxIntensity = 0.02
        
        let p = new Phaser.Geom.Point(ball.body.velocity.x,ball.body.velocity.y)
        let intensity = maxIntensity*(Phaser.Geom.Point.GetMagnitude(p) / ball.maxVelDirection)
        this.cameras.main.shake(500,intensity);
    }

    restart(ball,player,player2, goalpost){
        //shake
        this.shake(ball)

        if (goalpost.dir == this.gameOptions.LEFT)this.scoreBoard.update(0,1) ;
       else this.scoreBoard.update(1,0);
       /*let goalText = this.add.text(this.gameOptions.width/2,0,
      'GOAL').setOrigin(0.5,1)
        this.tweens.add({
            targets: [goalText],
            y: 200,
            duration: 10,
            repeat:0
        });*/
        setTimeout(()=>{
            //goalText.destroy();
            this.placeObjects(ball,player,player2);
            this.matter.pause()
            this.countDown = 3;
            this.countDownText = this.add.text(this.gameOptions.width/2,this.gameOptions.height/3,
      '3').setOrigin(0.5,0)
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


    placeObjects(ball,player,player2){
        ball.setPosition(this.gameOptions.width/2,50)
        ball.setVelocity(0,0)
        player.setPosition(this.gameOptions.width-200,this.platformY-player.head.height-50)
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
            entity.update()
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