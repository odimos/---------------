//         pointTimer = 0;

// before return 
pointerTimer = 0
AI_levelNum = 1


// after return
pointTimer ++;
let oppRightCap = 700;
const ball = this.scene.ball;
const ballX = ball.x;
const ballY = ball.y;

if(pointTimer < 500)
{
    oppRightCap = 400;
}
else if(pointTimer < 1000)
{
    oppRightCap = 500;
}
else if(pointTimer < 1500)
{
    oppRightCap = 600;
}

if(AI_levelNum % 3 != 0)
{
    oppRightCap = 1000;
}
if(ballX < this.body.position.x + 20 && this.body.position.x > 75 && ballX < oppRightCap)
{
    // if not freezed
    // oppxspeed -= (30 + oppPUSpeed * 20) * (1 + AI_levelNum / 20);
    this.setVelocityX( -this.runspeed *0.75 )
}
if(oppracket.GetAngle() < 0.4 && ballY > this.body.position.y - 20 && ballX < this.body.position.x + 70 && ballX > this.body.position.x)
{
    // if not freezed
    // oppxspeed -= (30 + oppPUSpeed * 20) * (1 + AI_levelNum / 20);
    this.setVelocityX( -this.runspeed *0.75 )
    
}
else if(ballX > this.body.position.x + 25 && ballX < oppRightCap)
{
    // if not freezed
    // oppxspeed += (30 + oppPUSpeed * 20) * (1 + AI_levelNum / 20);
    this.setVelocityX( this.runspeed *0.75 )

    
}
if(ballX < this.body.position.x || ballX < this.body.position.x + 80 && ballY < this.body.position.y - 30 && ball.body.velocity.x < 0)
{
    if(this.body.position.y + Heads.height / 2 > 459)
    {
        //opp.SetLinearVelocity(new b2Vec2(opp.GetLinearVelocity().x,-175 + -40 * (AI_levelNum / 10) + oppPUJump * -50));
        this.tryJump();
    }
}
if(ballY > this.body.position.y - 20 && ballX < this.body.position.x + 70 && ballX > this.body.position.x && this.body.velocity.x >= 0)
{
    //oppJoint.SetMotorSpeed(-10 * (oppJoint.GetJointAngle() + Math.PI - 1.2 - Math.PI / 2 + 1.67));
}
else
{
    //oppJoint.SetMotorSpeed(-6 * (oppJoint.GetJointAngle() - 0.2 - Math.PI / 2 + 1.67));
}
/*
if(oppracket.GetAngle() < 0.2)
{
    oppLegLastUp = true;
}
else if(oppracket.GetAngle() > 1.5)
{
    oppLegLastUp = false;
}
oppxspeed *= 0.7;
kickOppXSP *= 0.8;
*/

//opp.SetLinearVelocity(new b2Vec2(oppxspeed + kickOppXSP,opp.GetLinearVelocity().y + 10));
