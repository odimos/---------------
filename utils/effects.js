import Pop from "../entities/EffectPop.js";
import { gaussianRandom } from "./utilsfunctions.js";

function getOtherPlayer(player, scene){
    if (player==scene.player){
        return scene.player2
    } else {
        return scene.player
    }
}
function randomBetweenFloat(min, max) {
    return Math.random() * (max - min) + min;
}
export class EffectsHandler{
    constructor(scene){
        this.scene = scene;
        this.effects = [];
        this.minSpawn = 1000;
        this.maxSpawn = 4000;
        //scene.events.on(Phaser.Scenes.Events.UPDATE, this.update , this)
        // with this it needs despatching before changing scene 
        this.pops = [];
    }

    start(){
        let min = this.minSpawn;
        let max = this.maxSpawn;
        const schedulePop = () => {
            let delay = Math.random() * (max - min) + min;

            this.scene.time.addEvent({
                delay: delay,
                callback: () => {
                    let x = randomBetweenFloat( this.scene.gameOptions.width-200,200 );
                    let y  = gaussianRandom(400,this.scene.gameOptions.height-150 );
                    let pop = Pop(this.scene, x, y);
                    pop.handler = this;
                    this.pops.push(pop);
                    
                    pop.scene.soundPlayer.play('pop',{"volumeFactor":0.5} )
                },
                callbackScope: this,
                loop: true 
            });
        };
    
    schedulePop();
    }

    addEffect(effect){
        // get target
        effect.handler = this;
        this.solveConficts(effect);
        this.effects.push(effect);
        effect.apply();
    }

    solveConficts(effect){
        this.effects.forEach(e => {
            if (e.target == effect.target){
                e.undo();
                e.destroy();
                this.removeEffect(e);
            }
        })
    }

    removeEffect(effect){
        // assumed already undone
        this.effects = this.effects.filter(e => e !== effect);
    }

    // handle timedEvents
    removeAll(){
        this.effects.forEach(effect => {
            effect.undo();
            effect.destroy();
        });
        this.effects = [];

        this.pops.forEach(pop=>{
            pop.destroy2();
        });
        this.pops = [];
    }

    update(){
        this.effects.forEach(effect => effect.update());
        this.pops.forEach(pop => pop.update());
    }

    pause(){
        this.effects.forEach(effect => effect.pause());
    }

    resume(){
        this.effects.forEach(effect => effect.resume());
    }
}

class Effect {
    constructor(scene, target, type){
        // pointer to handler to remove from list
        // .constructor.name / type
        this.scene = scene;
        this.timedEvent = null;
        this.conficts = [];
        this.target = target; // last touched or other player, or this ball, or goalpost/player
        this.type = type;
    
    }

    update(){
        //console.log('update')
    }

    apply(duration=4000){
        this.timedEvent = this.scene.time.addEvent({
            delay: duration,
            callback: () => {
                this.undo();
                this.destroy();
            },
            callbackScope: this.scene,
            loop: false 
        })
    }

    undo(){
        console.log('undo O')
        // destroy also ?
        
    }

    pause(){
        console.log('pause');
        if (this.timedEvent)this.timedEvent.paused = true;

    }

    resume(){
        console.log('resume');
        if (this.timedEvent)this.timedEvent.paused = false;
    }

    destroy(){
        //console.log('remove')
        if (this.timedEvent)this.timedEvent.destroy();
        this.handler.removeEffect(this)
        // remove from handler
        // graphics
        // timed event
        // object
        // sprites

    }
}

export class BallSize extends Effect{
    constructor(scene, mode){
        super(scene, scene.ball, 'ballSize');
        this.mode = mode
    }

    apply(){
        super.apply();
        if(this.target){
            if (this.mode=='small')this.target.setScale(0.5);  
            else this.target.setScale(1.5);
        }
    }

    undo(){
        if(this.target)this.target.setScale(1);
    }
}

export class HeadSize extends Effect{
    constructor(scene, mode, isOther){
        let target = scene.lastTouched;
        if (isOther) target = getOtherPlayer(target, scene);
        super(scene, target, 'headSize');
        this.mode = mode;
    }

    apply(){
        super.apply();
        if(this.target){
            if (this.mode=='big'){
                this.target.head.setScale(1.5*(-this.target.dir), 1.5);
            } else {
                this.target.head.setScale(0.75*(-this.target.dir), 0.75);
            }
        }
    }

    undo(){
        if(this.target)this.target.head.setScale(1*(-this.target.dir), 1);
    }
}

export class PlayerSpeed extends Effect{
    constructor(scene, mode, isOther){
        let target = scene.lastTouched;
        if (isOther) target = getOtherPlayer(target, scene);
        super(scene, target, 'PlayerSpeed');
        this.mode = mode;
    }

    apply(){
        super.apply();
        if(this.target){
            if (this.mode=='increase'){
                this.target.runspeed = 10;
            } else {
                this.target.runspeed = 2;
            }
        }
    }

    undo(){
        if(this.target)this.target.runspeed = 5;
    }
}


export class PlayerJump extends Effect{
    constructor(scene, mode, isOther){
        let target = scene.lastTouched;
        if (isOther) target = getOtherPlayer(target, scene);
        super(scene, target, 'PlayerJump');
        this.mode = mode;
    }

    apply(){
        super.apply();
        if(this.target){
            if (this.mode=='increase'){
                this.target.jumpspeed = 10;
            } else {
                this.target.jumpspeed = 6
            }
        }
    }

    undo(){
        this.target.jumpspeed = 8;
    }
}

export class BallType extends Effect{
    constructor(scene, mode){
        super(scene, scene.ball, 'BallType');
        this.mode = mode;
        // Bouncy, Heavy, 
        if (this.mode=='heavy'){
            this.target.setTexture("effects2" , 'heavy_ball.png');
        }
        //this.newSprite =  this.scene.add.sprite(400, 400, "effects2" , 'heavy_ball.png')
        //.setScale(1.5);
        else if (this.mode=='bouncy')
        {
            this.target.setTexture("effects2" , 'beach_ball.png');
        }
        // this.newSprite =  this.scene.add.sprite(400, 400, "effects2" , 'beach_ball.png')
        // .setScale(1.5);
    }

    apply(){
        super.apply();
        if(this.target){

            if (this.mode=='heavy'){
                this.target.setMass(4);
                this.target.setBounce(0.5);
            } else if (this.mode=='bouncy'){
                this.target.setBounce(1.5);
            }
        }
    }

    update(){
        //console.log('update', this.handler);
        // if (! this.newSprite) return;
        // if (this.newSprite && this.target){
        //     this.newSprite.x = this.target.x;
        //     this.newSprite.y = this.target.y;
        // }

    }

    undo(){
        if(this.target){
            if (this.mode=='heavy'){
                this.target.setMass(1);
                this.target.setBounce(0.9);
                
            } else if (this.mode=='bouncy'){
                this.target.setBounce(0.9);
            }

        }
        this.target.setTexture('ball');
        //if (this.newSprite)this.newSprite.destroy();
    }
}

export class GoalpostSize extends Effect{
    constructor(scene, mode, isOther){
        let target = scene.lastTouched;
        if (isOther) target = getOtherPlayer(target, scene);
        if (target.dir==-1){
            target = scene.goalpostRight;
        }else{
            target = scene.goalpostLeft;
        }

        super(scene, target, 'GoalpostSize');
        this.mode = mode
        
    }

    apply(){
        super.apply();
        if(this.target){
            if(this.mode=='small'){
                this.target.sprite.setScale(1,0.5);
            } else {
                this.target.sprite.setScale(1,1.5);
            }

            this.target.sprite.y = 2+this.target.scene.floorY - (this.target.sprite.height * this.target.sprite.scaleY) / 2;
            this.target.dokari.y = this.scene.floorY - (this.target.sprite.height * this.target.sprite.scaleY) + this.target.dokariH;
            if (this.target.dir==1){
                this.target.sprite.x = this.target.dir*2+0+ this.target.dir*(this.target.sprite.width * this.target.sprite.scaleX) / 2;
            }
            else {
                this.target.sprite.x = this.target.dir*2+this.target.scene.gameOptions.width+ this.target.dir*(this.target.sprite.width * this.target.sprite.scaleX) / 2;
            }

        } 
        
    }

    undo(){
        if(this.target){
            this.target.sprite.setScale(1,1);

            this.target.sprite.y = 2+this.target.scene.floorY - (this.target.sprite.height * this.target.sprite.scaleY) / 2;
            this.target.dokari.y = this.scene.floorY - (this.target.sprite.height * this.target.sprite.scaleY) + this.target.dokariH;

            if (this.target.dir==1){
                this.target.sprite.x = this.target.dir*2+0+ this.target.dir*(this.target.sprite.width * this.target.sprite.scaleX) / 2;
            } else {
                this.target.sprite.x = this.target.dir*2+this.target.scene.gameOptions.width+ this.target.dir*(this.target.sprite.width * this.target.sprite.scaleX) / 2;
            }
        }
    }
}

export class Freeze extends Effect{
    constructor(scene){
        let target = getOtherPlayer(scene.lastTouched, scene);
        super(scene, target, 'ice');
        this.sprite = null;
    }

    apply(){
        super.apply();
        if(this.target){
            this.target.head.setVelocity(0);
            this.target.runspeed = 0;
            this.target.jumpspeed = 4;

            this.sprite = this.scene.add.sprite( this.target.head.x,  this.target.head.y+15, 
                'effects2', 'ice2.png')
            .setOrigin(0.5,0.5)
            .setDepth(10)
            .setScale(1.5); 
            
        }
    }

    update(time, delta){
        this.sprite.setPosition( this.target.head.x,  this.target.head.y+15)
    }

    undo(){
        this.target.runspeed = 5;
        this.target.jumpspeed = 8;
        if (this.sprite ){
            this.sprite.destroy();
        }
    }
}


export class ManyBalls extends Effect{
    constructor(scene){
        super(scene, scene.ball, 'ManyBalls');
        this.new_balls = []
    }

    apply(){
        super.apply(6000);
        if(this.target){
            let N  = Math.floor(Math.random() * 10 + 2);

            for (let i=0;i<N;i++){
                let x  = Math.random() * (this.scene.gameOptions.width - 100) + 100;
                const new_ball = this.scene.matter.add.sprite(x, 100,'ball')
                .setCircle()
                .setScale(1)
                .setBounce(1)
                .setCollisionCategory(this.scene.ball_category);
                this.new_balls.push(new_ball)
            }

        }
    }

    undo(){
        if (this.new_balls){
            this.new_balls.forEach(ball=>{
                ball.setCollisionCategory();
            });
            this.scene.time.addEvent({
                delay: 2000,
                callback: () => {
                    this.new_balls.forEach(ball=>{
                        ball.destroy()
                    })
                },
                callbackScope: this.scene,
                loop: false 
            });
        }

    }
}

export class Astronaut extends Effect{
    constructor(scene){
        super(scene, null, Astronaut);

    }

    apply(){
        super.apply();
        this.scene.ball.setFrictionAir(0);
        this.scene.ball.setBounce(1);

        this.scene.matter.world.setGravity(0, 0.5);
    }

    undo(){
        this.scene.ball.setFrictionAir(0.01);
        this.scene.ball.setBounce(0.9);

        this.scene.matter.world.setGravity(0, 1);
    }
}