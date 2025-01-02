export function AI_handler2(options){
    console.log("init ai handler2")

    let legStateKeys = {IDLE:'IDLE',UPING:'UPING',DOWING:'DOWING',HOLD:'HOLD'};

    let width = 800; // everything must be proportioned to that, my wdth is 1200, so eveything must be * 1.5
    let scaler = 1.5;

    const ball = this.scene.ball;
    let player = this.scene.player;
    let player2 = this.scene.player2;
    let oppLegLastUp = false;
    let pointTimer = 1; // proportional to my duration and use time / delta
    let oppPUSpeed = 1;

    let DIFFICULTY = 0;
    let mode = this.scene.registry.get('mode');
    
    if(mode == 'campaign'){
        let AI_levelNum =  this.scene.registry.get('campaign').LEVEL;
        DIFFICULTY = AI_levelNum - 2;
    }
    let oppxspeed = 0;
    let oppRightCap = 0;

    let kickOppXSP = 0;

    return function updateInput(time, delta){

    
    player = this.scene.player;
    player2 = this.scene.player2;


    pointTimer+=delta; // delta



    if(pointTimer < 10*1000)
    {
        oppRightCap = window.gameOptions.width/2;
    }
    else if(pointTimer < 30*1000)
    {
        oppRightCap += window.gameOptions.width/4;
    }
    else if(pointTimer < 40*1000)
    {
        oppRightCap = window.gameOptions.width;
    }
    else
    {
        oppRightCap = window.gameOptions.width;
    }
    if(DIFFICULTY >= 0)
    {
        oppRightCap = window.gameOptions.width;
    }
    if(ball.x < player2.head.x + 20 && player2.head.x > 75 && ball.x < oppRightCap)
    {
        oppxspeed -= (0 + oppPUSpeed * player2.runspeed/2) * (1 + DIFFICULTY / 10); 
    }
    if( /*oppracket.GetAngle() < 0.4*/   (player2.currentState == legStateKeys.HOLD  || player2.currentState == legStateKeys.DOWING)
        && ball.y > player2.head.y - 20 && ball.x < player2.head.x + 30 && ball.x > player2.head.x)
    {
        oppxspeed -= (0 + oppPUSpeed * player2.runspeed/2) * (1 + DIFFICULTY / 10);
    }
    else if(ball.x > player2.head.x + 25 && ball.x < oppRightCap)
    {
            oppxspeed += (0 + oppPUSpeed * player2.runspeed/2) * (1 + DIFFICULTY / 10);
    }
    if( (ball.x < player2.head.x   )
        || ball.x < player2.head.x + 80 && ball.y < player2.head.y - 30 && ball.body.velocity.x < 0)
    {
        player2.tryJump();
    }
    if(ball.y > player2.head.y - 20 && ball.x < player2.head.x + 40 && ball.x > player2.head.x+5 /*&& oppxspeed >= 0*/)
    {
        // kick
        player2.kickPressed = true;
        oppLegLastUp = true;
    }
    else
    {
        if (player2.currentState == legStateKeys.HOLD){
            player2.kickPressed = false
        }
        
    }
    

    oppxspeed *= 0.7;
    kickOppXSP *= 0.8;
    if(player.head.body.x < ball.x + 30 && player.kickPressed) {
        kickOppXSP = -7
    }
    let speedX = oppxspeed + kickOppXSP;
    speedX = Math.max( Math.min(speedX, 5), -5);
        
    player2.head.setVelocityX(speedX );

    }

}

