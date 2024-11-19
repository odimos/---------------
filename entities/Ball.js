import { initUpdateEvent } from "../utils/utils.js";

export default class Ball extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, key = 'ball') {
        super(scene.matter.world, x, y, key);
        scene.add.existing(this);

        this.scene = scene
        this.setCircle(20);
        this.setFriction(0.05);
        this.setBounce(1);
        this.setAngularVelocity(0);
        this.setMass(1);

        this.body.isBall = true;

        this.maxVelDirection = 20;
        this.scene.lastTouched = null;

        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this) // this context the 3rd arg

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
    }

    hitted(by){

        // last touched 
        // sound
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
        this.setFriction(0.05);
        this.setFrictionAir(0.01);
        this.setBounce(1);
    }


}
