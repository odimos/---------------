import { initUpdateEvent } from "../utils/utils.js";

export default function Player(scene,x,y,direction){
        this.scene = scene
        this.dir = direction

        let playerRadius = 35;
        this.playerRadius = playerRadius;
        let playerMass = 4;
        this.runspeed = 5;
        this.jumpspeed = 10;
        this.floorY = scene.floorY;

        let legMass = 10;
        let legW = 80;
        let legH=20;
        this.rotarionspeed =  (2/3)*this.dir*Math.PI/12;

        this.normalizeSpeed = function(){
            this.runspeed = 5;
            this.jumpspeed = 10;
        }

        this.normalizeSize = function(){
            this.head.setScale(1)
            this.leg.setScale(1)
            this.head.setMass(1);
            this.leg.setMass(1);
        }

        this.big_head = function(){
            this.head.setScale(2)
            this.leg.setScale(1.5)
            this.head.setMass(0.5);
            this.leg.setMass(0.5);
        }

        this.small_head = function(){
            this.head.setScale(0.5)
            this.leg.setScale(0.5)
            this.head.setMass(4);
            this.leg.setMass(4);
        }



        this.head=scene.matter.add.image( x, y, 'head')
        .setCircle(playerRadius)
        .setFriction(0.000)
        .setBounce(0.1)
        .setAngularVelocity(0)
        .setMass(playerMass)

        this.leg = scene.matter.add.image(x, y, 'leg')
        .setRectangle( legW,legH)
        .setFriction(0)
        .setFrictionAir(0)
        .setMass(legMass)
        .setIgnoreGravity(true);
        this.leg.offset = {x:this.dir*5,y:5}
        this.leg.angle = 90;

        this.leg.body.belongsToentity = this ;
        this.head.body.belongsToentity = this;

        // rotation offset
        // https://github.com/liabru/matter-js/issues/461
        this.leg.body.position.x += 0;
        this.leg.body.position.y += -legW/2;
        this.leg.body.positionPrev.x += 0;
        this.leg.body.positionPrev.y += -legW/2;

        this.kickPressed=false;
        let legStateKeys = {IDLE:'IDLE',UPING:'UPING',DOWING:'DOWING',HOLD:'HOLD'};
        this.legStateKeys = legStateKeys;
        this.currentState = legStateKeys.IDLE;
        this.LegStates = {};
        this.LegStates[legStateKeys.IDLE] = ()=>{
            // What the Leg does
            this.leg.angle= 90;
            this.scene.matter.body.setAngularVelocity( this.leg.body, 0);
            // change state?
            if (this.kickPressed){
                this.currentState = legStateKeys.UPING;
            }
        };
        this.LegStates[legStateKeys.UPING] = ()=>{
            // What the Leg does
            this.scene.matter.body.setAngularVelocity( this.leg.body, this.rotarionspeed);
            // change state?
            let forPlayer = (this.leg.angle < 0 && this.leg.angle > -150);
            let forPlayer2 = (this.leg.angle < 0 && this.leg.angle < -30);
            let finalIf = (this.dir == 1) ? forPlayer : forPlayer2;
            if(!this.kickPressed){
                this.currentState= legStateKeys.DOWING
            } else if (finalIf){
                this.currentState = legStateKeys.HOLD;
            }
            
        };
        this.LegStates[legStateKeys.DOWING] = ()=>{
            // What the Leg does
            this.scene.matter.body.setAngularVelocity( this.leg.body,-this.rotarionspeed)
            // change state?
            let forPlayer = (this.leg.angle > 0 && this.leg.angle < 100);
            let forPlayer2 = (this.leg.angle > 0 && this.leg.angle > 90);
            let finalIf = (this.dir==1) ? forPlayer : forPlayer2;
            if (finalIf){
                this.currentState = legStateKeys.IDLE
            } 
            if (this.kickPressed){
                this.currentState = legStateKeys.UPING;
            }
        };
        this.LegStates[legStateKeys.HOLD] = ()=>{
            // What the Leg does
            this.fixAngularSpeed( this.leg.body,0);
            if(this.dir==1)this.leg.angle = -150;
            if(this.dir==-1)this.leg.angle = -30;
            // change state ?
            if(!this.kickPressed){
                this.currentState= legStateKeys.DOWING
            }
        };

        this.fixAngularSpeed = this.scene.matter.body.setAngularVelocity;

        this.updates = [];

        this.tryJump = function(){
            let onFloor = (this.head.body.bounds.max.y >= this.floorY) ;
            if (onFloor){
                this.head.setVelocityY(-this.jumpspeed)
                this.scene.soundPlayer('jump', { volume: 0.05 } )
                return;
            };

            let isOnTop =  this.scene.isOnTop(this)
            //console.log(isOnTop)
            if (isOnTop){
                this.head.setVelocityY(-this.jumpspeed)
            }
        }   

        this.addcompoment = function(func, options){
            this.updates.push(func.call(this,options))
        }

        this.setPosition = function(x,y){
            this.head.setPosition(x,y)
        }

        this.setVelocity =(dx,dy)=>{
            this.head.setVelocity(dx,dy)
        };

        this.setVelocityX = (dx)=>{
            this.head.setVelocityX(dx)
        }

        this.setVelocityY = (dy)=>{
            this.head.setVelocityY(dy)
        }

        // Compound Body ?
        // this.compoundBody = Phaser.Physics.Matter.Matter.Body.create({
        //     parts: [ this.head.body, this.leg.body ],
        //     inertia: Infinity
        // });
        
        //it must be before the update declaration 
        //for reasons meyond human mind can comprehend


        this.update = function(time, delta){
            // bind legs to head
            this.leg.setPosition(this.head.x+this.leg.offset.x, this.head.y+this.leg.offset.y );
            this.leg.setVelocityX(0);
            this.leg.setVelocityY(0);
            this.head.setAngle(0);

            
            // handleLegRotation
            this.LegStates[this.currentState](); 
            
            
            this.updates.forEach(update=>{
                update.call(this)
            });
        }
        

        

}