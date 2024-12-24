import { initUpdateEvent } from "../utils/utilsfunctions.js";

function setEffect(body, scene){
    let effect = scene.add.sprite(body.position.x, body.position.y+15, 'effects2', 'freeze.png')
    .setOrigin(0.5,0.5)
    .setDepth(10)
    .setScale(1.5)
    .setAngle(90); 
    

    effect.update = function(time, delta){
        this.setPosition(body.position.x, body.position.y+15)
    }

    return effect
}

function getOtherPlayer(player, scene){
    if (player==scene.player){
        return scene.player2
    } else {
        return scene.player
    }
}

function checkOtherEffectsConficts(effect, target, scene){

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
    function normalisePlayerSpeed(scene, player, effect=null){
        return scene.time.addEvent({
            delay: effectTime,
            callback: () => {
                player.normalizeSpeed();
                if (effect) {
                    scene.effects_graphics_handler.remove(effect);
                    effect.destroy();
                }
            },
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
            console.log(target)
            let effect = setEffect(target.head.body, this); // could be seperate binded with it
            this.effects_graphics_handler.addEffect(effect)
            // create freeze graphics effect upd func to be in the same pos
            return normalisePlayerSpeed(this, target, effect)
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
