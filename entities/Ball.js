import { initUpdateEvent } from "../utils/utilsfunctions.js";

export default class Ball extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, key = 'ball') {
        super(scene.matter.world, x, y, key);
        scene.add.existing(this);
        this.scene = scene

        this.setCircle();
        this.init()
        this.setAngularVelocity(0);
        this.body.isBall = true;
        this.body.obj = this;
        this.maxVelDirection = 200;
        this.scene.lastTouched = null;

        this.setCollisionCategory(this.scene.ball_category);
        // this.setCollidesWith([this.scene.player_head_category, this.scene.player_legs_category, 
        //     this.scene.platform_category, this.scene.pop_category,
        //     64]);

        this.body.prevVelocity = {}

//         this.body.getKickVolume = function (body){
//             // last touched 
//             // sound
//             let hit_power = Math.sqrt(  ( this.velocity.x - body.velocity.x )**2 + (this.velocity.y - body.velocity.y )**2 );
//             let vol =  hit_power/40;

//             let impact = Math.sqrt(  ( this.velocity.x - this.prevVelocity.x )**2 + (this.velocity.y - this.prevVelocity.y )**2 );
//             // console.log(this.velocity.x,  this.prevVelocity.x  )
//             // console.log(this.velocity.y,  this.prevVelocity.y  )

//             // console.log('impact',impact)
//             // debugger

//             if (impact>0.7){
//                // debugger 
//             }

//             // calc inpact for leg

//             if (body.isLeg) {
//                 //console.log("leg")
//                 // if leg make it according to leg phase
// /*


// ATTENTION

// */
//                 return 0.5

//             }
//             return vol;
            

//         }

        this.randomDecimal = Math.random();
        //Phaser.Physics.Matter.Matter.Body.setInertia(this.body, Infinity);


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

    init() {
        this.setScale(1);
        this.setMass(1);
        this.setFriction(0.01);
        this.setFrictionAir(0.01);
        this.setBounce(0.9);
    }


}
