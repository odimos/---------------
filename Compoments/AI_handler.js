export function AI_handler(options){
    console.log("init ai handler")
    // const AI_levelNum = this.levelNum || 1;
    let pointTimer = 0
    let AI_levelNum = 1
    let kick_active = 0;
    
    return function updateInput(time, delta){

        if (this.kickPressed )kick_active+=delta;

        pointTimer ++;
        let oppRightCap = 700;
        const ball = this.scene.ball;
        const ballX = ball.body.position.x;
        const ballY = ball.body.position.y;
        
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
        
        // if(AI_levelNum % 3 != 0)
        // {
        //     oppRightCap = 1000;
        // }
        if(ballX < this.head.body.position.x + 20 && this.head.body.position.x > 75 && ballX < oppRightCap)
        {
            // if not freezed
            // oppxspeed -= (30 + oppPUSpeed * 20) * (1 + AI_levelNum / 20);
            this.setVelocityX( -this.runspeed *0.75 )
        }
        if( false && /*oppracket.GetAngle() < 0.4 &&*/ ballY > this.head.body.position.y - 20 && ballX < this.head.body.position.x + 70 && ballX > this.head.body.position.x)
        {
            // if not freezed
            // oppxspeed -= (30 + oppPUSpeed * 20) * (1 + AI_levelNum / 20);
            this.setVelocityX( -this.runspeed *0.75 )
            
        }
        else if(ballX > this.head.body.position.x + 25 && ballX < oppRightCap)
        {
            // if not freezed
            // oppxspeed += (30 + oppPUSpeed * 20) * (1 + AI_levelNum / 20);
            this.setVelocityX( this.runspeed *0.75 )
        
            
        }
        if ( ballX > this.head.body.position.x && (ballX - this.head.body.position.x) < 80  ){
            this.tryJump();
        }
        // if( ! ballX < this.head.body.position.x || ballX < this.head.body.position.x + 80 && ballY < this.head.body.position.y - 100)
        // {

        //     if(this.head.body.position.y + /*Heads.height / 2*/30 > 459)
        //     {
        //         //opp.SetLinearVelocity(new b2Vec2(opp.GetLinearVelocity().x,-175 + -40 * (AI_levelNum / 10) + oppPUJump * -50));
        //         if (){
        //             this.tryJump();
        //         }
                
        //     }
        // }
        if(ballY > this.head.body.position.y - 20 && ballX < this.head.body.position.x + 70 && ballX > this.head.body.position.x && this.head.body.velocity.x >= 0)
        {
            //oppJoint.SetMotorSpeed(-10 * (oppJoint.GetJointAngle() + Math.PI - 1.2 - Math.PI / 2 + 1.67));
            this.kickPressed = true;

        }
        else
        {
            //oppJoint.SetMotorSpeed(-6 * (oppJoint.GetJointAngle() - 0.2 - Math.PI / 2 + 1.67));
            if (kick_active>500){
                this.kickPressed = false;
                kick_active = false
            }


        }
    }
}