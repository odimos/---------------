export default function Ball(scene,x,y){
    let ball = scene.matter.add.image(x, y, 'ball');
    ball.setCircle(20);
    ball.setFriction(0);
    ball.setBounce(1);
    ball.setAngularVelocity(0);
    ball.setMass(1);
    ball.maxVelDirection = 20

    ball.update= ()=>{
        
        if (ball.body.velocity.x>ball.maxVelDirection || ball.body.velocity.y>ball.maxVelDirection) 
        if(ball.body.velocity.x>ball.maxVelDirection) ball.body.velocity.x=ball.maxVelDirection;
        if(ball.body.velocity.y>ball.maxVelDirection) ball.body.velocity.y=ball.maxVelDirection;
    }

    return ball
}