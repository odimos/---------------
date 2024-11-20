import { initUpdateEvent } from "../utils/utils.js";

export default class Ball extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, key = 'ball') {
        super(scene.matter.world, x, y, key);
        scene.add.existing(this);

        this.scene = scene
        this.setCircle(20);
        this.setFriction(0.0);
        this.setFrictionAir(0.01);

        this.setBounce(1);
        this.setAngularVelocity(0);
        this.setMass(1);

        this.body.isBall = true;

        this.maxVelDirection = 20;
        this.scene.lastTouched = null;
        this.body.prevVelocity = {}

        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this) // this context the 3rd arg

        this.body.getKickVolume = function (body){
            // last touched 
            // sound
            let hit_power = Math.sqrt(  ( this.velocity.x - body.velocity.x )**2 + (this.velocity.y - body.velocity.y )**2 );
            console.log('hit power',hit_power)
            let vol =  hit_power/40;

            let impact = Math.sqrt(  ( this.velocity.x - this.prevVelocity.x )**2 + (this.velocity.y - this.prevVelocity.y )**2 );
            // console.log(this.velocity.x,  this.prevVelocity.x  )
            // console.log(this.velocity.y,  this.prevVelocity.y  )

            // console.log('impact',impact)
            // debugger

            if (impact>0.7){
               // debugger 
            }

            // calc inpact for leg

            if (body.isLeg) {
                console.log("leg")
                
                return 0.5

            }
            return vol;
            

        }

    }

    // Define update logic
    update(time, delta) {
        if (!this.body) return;
        const { velocity } = this.body;
        if (velocity.x > this.maxVelDirection) {
            this.setVelocity(this.maxVelDirection, velocity.y);
        } 
        if (velocity.x < -this.maxVelDirection) {
            this.setVelocity(-this.maxVelDirection, velocity.y);
        }
        if (velocity.y > this.maxVelDirection) {
            this.setVelocity(velocity.x, this.maxVelDirection);
        }
        if (velocity.y < -this.maxVelDirection) {
            this.setVelocity(velocity.x, -this.maxVelDirection);
        }
        this.body.prevVelocity.x = velocity.x;
        this.body.prevVelocity.y = velocity.y;

    }


    // Add helper methods
    MakeBig() {
        // sound
        this.setMass(0.25);
        this.setScale(2);
    }

    MakeSmall() {
        this.setMass(4);
        this.setScale(0.5);
    }

    heavyBall() {
        this.setMass(4);
        this.setFriction(0.05);
        this.setFrictionAir(0.05);
    }

    bouncyBall() {
        this.setBounce(2);
    }

    normalise() {
        this.setMass(1);
        this.setScale(1);
        this.setFriction(0.0);
        this.setFrictionAir(0.01);
        this.setBounce(1);
    }


}
