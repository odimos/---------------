import { initUpdateEvent } from "../utils/utils.js";


export default function Ball(scene,x,y){
    let ball = scene.matter.add.image(x, y, 'ball');

    ball.setCircle(20);
    ball.setFriction(0);
    ball.setBounce(1);
    ball.setAngularVelocity(0);
    ball.setMass(1);
    const maxVelDirection = 20
    

    ball.body.isBall = true
    ball.body.goalDetection = true;

    ball.lastTouched = null;

    ball.update= ()=>{
        
        if(ball.body.velocity.x>maxVelDirection){
            ball.setVelocity(maxVelDirection, ball.body.velocity.y)
        } 
        if (ball.body.velocity.x<-maxVelDirection) {
            ball.setVelocity(-maxVelDirection, ball.body.velocity.y)
        }
        if(ball.body.velocity.y>maxVelDirection) {
            ball.setVelocity(ball.body.velocity.x ,maxVelDirection)
        }
        if(ball.body.velocity.y<-maxVelDirection) {
            ball.setVelocity(ball.body.velocity.x , -maxVelDirection)
        }

    }

    ball.MakeBig = function(){
        ball.setMass(0.25);
        ball.setScale(2)
    }

    ball.MakeSmall = function(){
        ball.setMass(4);
        ball.setScale(0.5)
    }

    ball.heavyBall = function(){
        ball.setMass(4);
        ball.setFriction(0.05);
        ball.setFrictionAir(0.05);
    }

    ball.bouncyBall = function(){
        ball.setBounce(2);
    }

    
    ball.normalise = function () {
        ball.setMass(1);
        ball.setScale(1);
        ball.setFriction(0);
        ball.setFrictionAir(0.01);
        ball.setBounce(1);
    }

    initUpdateEvent(ball)

    return ball
}