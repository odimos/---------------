export default function EffectsHandler(scene){
    let effectTime = 5000

    function normaliseBall(scene){
        return scene.time.addEvent({
            delay: effectTime,
            callback: () => {
                scene.ball.normalise();
                console.log('normalize');
            },
            callbackScope: scene,
            loop: false 
        })
    }
    function normalisePlayerSpeed(scene, player){
        return scene.time.addEvent({
            delay: effectTime,
            callback: () => player.normalizeSpeed(),
            callbackScope: scene,
            loop: false 
        });
    }

    function normalisePlayerSize(scene, player){
        return scene.time.addEvent({
            delay: effectTime,
            callback: () => player.normalizeSize(),
            callbackScope: scene,
            loop: false 
        });
    }

    return function(effect_name){
        console.log(this.ball)

        if (effect_name=='big_ball'){
            this.ball.MakeBig()
            return normaliseBall(this)
        }
        else if (effect_name=='small_ball'){
            this.ball.MakeSmall()
            return normaliseBall(this)
        }
        else if (effect_name=='heavy_ball'){
            this.ball.heavyBall()
            return normaliseBall(this)
        }
        else if (effect_name=='bouncy_ball'){
            this.ball.bouncyBall()
            return normaliseBall(this)
        }

        if(effect_name=='increase_speed'){
            this.lastTouched.runspeed = 10;
            return normalisePlayerSpeed(this, this.lastTouched)
        } else if(effect_name=='decrease_speed'){
            this.lastTouched.runspeed = 2;
            return normalisePlayerSpeed(this, this.lastTouched)
        }
        else if(effect_name=='freeze'){
            this.lastTouched.runspeed = 0;
            return normalisePlayerSpeed(this, this.lastTouched)
        }
        else if(effect_name=='increase_jump'){
            this.lastTouched.jumpspeed = 14;
            return normalisePlayerSpeed(this, this.lastTouched)
        }
        else if(effect_name=='decrease_jump'){
            this.lastTouched.jumpspeed = 7;
            return normalisePlayerSpeed(this, this.lastTouched)
        }
        // opponent

        if(effect_name=='big_head'){
            let player = this.lastTouched
            player.big_head()
            return normalisePlayerSize(this, this.lastTouched)
        }
        else if(effect_name=='small_head'){
            let player = this.lastTouched
            player.small_head()
            return normalisePlayerSize(this, this.lastTouched)

        }


    }
}

// Effects
/*
rocks
antigravity  - astronaut
smelly sock
big small goalpost
bottle / pills
night light
multiple balls 
underwater

*/