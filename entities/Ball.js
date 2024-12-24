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
        this.maxVelDirection = 20;
        this.scene.lastTouched = null;

        this.body.prevVelocity = {}

        this.body.getKickVolume = function (body){
            // last touched 
            // sound
            let hit_power = Math.sqrt(  ( this.velocity.x - body.velocity.x )**2 + (this.velocity.y - body.velocity.y )**2 );
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
                //console.log("leg")
                // if leg make it according to leg phase
/*


ATTENTION

*/
                return 0.5

            }
            return vol;
            

        }

        this.randomDecimal = Math.random();


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
        this.setScale(3);        
    }

    MakeSmall() {
        this.setScale(0.75);  
    }

    heavyBall() {
        this.setMass(4);
        this.setFriction(0.05);
        this.setFrictionAir(0.01);
        this.setTexture( "effects2" , 'heavy_ball.png')

    }

    bouncyBall() {
        this.setBounce(1.5);
        this.setTexture( "effects2" , 'beach_ball.png')
    }

    init() {
        this.setScale(1);
        this.setMass(1);
        this.setFriction(0.0);
        this.setFrictionAir(0.01);
        this.setBounce(1);
        this.setTexture('ball');
       
    }


}
