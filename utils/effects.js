function getOtherPlayer(player, scene){
    if (player==scene.player){
        return scene.player2
    } else {
        return scene.player
    }

}

export default function EffectsHandler(scene){
    let effectTime = 5000

    function normaliseBall(scene){
        return scene.time.addEvent({
            delay: effectTime,
            callback: () => {
                scene.ball.init();
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

    function dropBalls(scene, balls, time){
        return scene.time.addEvent({
            delay: time,
            callback: () => {
                balls.forEach(ball=>{
                    ball.setCollisionCategory();
                });
                deleteBalls(scene, balls)
            },
            callbackScope: scene,
            loop: false 
        });
    } 

    function deleteBalls(scene, balls){
        return scene.time.addEvent({
            delay: effectTime,
            callback: () => {
                balls.forEach(ball=>{
                    ball.destroy()
                })
            },
            callbackScope: scene,
            loop: false 
        });
    }

    return function(effect_name, color=null){
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

        if(effect_name=='speed' && color=='Green'){
            this.lastTouched.runspeed = 10;
            return normalisePlayerSpeed(this, this.lastTouched)
        } else if(effect_name=='speed' && color=='Red'){
            this.lastTouched.runspeed = 2;
            return normalisePlayerSpeed(this, this.lastTouched)
        }
        else if(effect_name=='freeze'){
            // to the other player
            let target = getOtherPlayer(this.lastTouched , this)
            target.runspeed = 0;
            // create freeze graphics effect upd func to be in the same pos
            return normalisePlayerSpeed(this, target)
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

        if (effect_name=='many_balls'){
            let N  = Math.random() * 10;
            let new_balls = [];
            for (let i=0;i<N;i++){
                let x  = Math.random() * (this.gameOptions.width - 100) + 100;
                const new_ball = this.matter.add.sprite(x, 0,'ball');
                new_ball.setCircle();
                new_ball.setScale(1.5);
                new_ball.setBounce(1);
                new_ball.setCollisionCategory(this.ball_category);
                new_balls.push(new_ball)
            }

            return dropBalls(this, new_balls, 10000);
        }

    }
}
// Pagodromio/xioni/vroxi..
// invisible cloack!