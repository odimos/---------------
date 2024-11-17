export default function EffectsHandler(){
    let effectTime = 17000

    function normaliseBall(scene){
        scene.time.addEvent({
            delay: effectTime,
            callback: () => scene.ball.normalise(),
            callbackScope: scene,
            loop: false 
        });
    }
    function normalisePlayer(scene, player){
        scene.time.addEvent({
            delay: effectTime,
            callback: () => player.normalize(),
            callbackScope: scene,
            loop: false 
        });
    }

    return function(effect_name){
        console.log(this.ball)

        if (effect_name=='big_ball'){
            this.ball.MakeBig()
            normaliseBall(this)
        }
        else if (effect_name=='small_ball'){
            this.ball.MakeSmall()
            normaliseBall(this)
        }
        else if (effect_name=='heavy_ball'){
            this.ball.heavyBall()
            normaliseBall(this)
        }
        else if (effect_name=='bouncy_ball'){
            this.ball.bouncyBall()
            normaliseBall(this)
        }

        if(effect_name=='increase_speed'){
            this.lastTouched.runspeed = 10;
            normalisePlayer(this, this.lastTouched)
        } else if(effect_name=='decrease_speed'){
            this.lastTouched.runspeed = 2;
            normalisePlayer(this, this.lastTouched)
        }
        else if(effect_name=='freeze'){
            this.lastTouched.runspeed = 0;
            normalisePlayer(this, this.lastTouched)
        }
        else if(effect_name=='increase_jump'){
            this.lastTouched.jumpspeed = 14;
            normalisePlayer(this, this.lastTouched)
        }
        else if(effect_name=='decrease_jump'){
            this.lastTouched.jumpspeed = 7;
            normalisePlayer(this, this.lastTouched)
        }


    }
}

// Effects
/*

bigger/smaller head
smelly sock
antigravity
Alcohol - pills, twisted vision or colrs change
night light
multiple balls 
underwater
bombs


*/