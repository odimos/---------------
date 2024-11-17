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


    }
}

// Effects
/*

increase/decrease speed
increase/decrease jump

bigger/smaller head

freeze
smelly sock

antigravity

Alcohol - pills, twisted vision or colrs change
night light

multiple balls 
underwater
bombs



*/