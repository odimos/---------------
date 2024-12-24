import { initUpdateEvent } from "../utils/utilsfunctions.js";
import {BallSize, HeadSize, BallType, GoalpostSize} from  "../utils/Effects.js";

function getOtherPlayer(player, scene){
    if (player==scene.player){
        return scene.player2
    } else {
        return scene.player
    }
}

/*
Categories:

*/

const effectsList = [
    {
        effect: 'big_head',
        image: 'big_head.png',
        color: 'Green'
    },
    {
        effect: 'small_head',
        image: 'small_head.png',
        color: 'Green'
    },
    {
        effect: 'speed',
        image: 'speed.png',
        color: 'Green'
    },
    {
        effect: 'freeze',
        image: 'freeze.png',
        color: 'Green'
    },
    {
        effect: 'increase_jump',
        image: 'increase_jump.png',
        color: 'Green'
    },
    {
        effect: 'big_ball',
        image: 'big_ball.png',
        color: 'Yellow'
    },
    {
        effect: 'small_ball',
        image: 'small_ball.png',
        color: 'Yellow'
    },
    {
        effect: 'heavy_ball',
        image: 'heavy_ball.png',
        color: 'Yellow'
    },
    {
        effect: 'bouncy_ball',
        image: 'bouncy_ball.png',
        color: 'Yellow'
    },
    {
        effect: 'bottle',
        image: 'bottle.png',
        color: 'Yellow'
    },
    {
        effect: 'small_goalpost',
        image: 'bottle.png',
        color: 'Green'
    },
    {
        effect: 'big_goalpost',
        image: 'bottle.png',
        color: 'Red'
    },
];


const LIFEtime = 2000;
export default function Pop(scene,x,y){
    // effect , image
    const index = Math.floor(Math.random() * effectsList.length);
    const randomEffect = effectsList[index];
    const color = randomEffect.color;
    const effect_type = randomEffect.effect// randomEffect[0];

    let pop = scene.matter.add.sprite(x, y);
    let img = scene.add.image(x, y, 'effects2', randomEffect.image ).setOrigin(0.5,0.5);
    
    pop.scene = scene
    pop.name = 'pop'
    pop.setCircle(20);
    pop.setFriction(0)
    pop.body.frictionAir = 0
    pop.setMass(0.1);
    pop.play(`rotate${color}`);
    pop.setDepth(0);
    scene.entities.push(pop);
    
    pop.setOnCollide( () =>{
        // cancel previous if at the same target
        //let popEffect = pop.scene.effectsHandler(effect_type, color);
        pop.scene.soundPlayer.play('powerup' )
        let target = pop.scene.lastTouched;
        pop.scene.effectsHandler.addEffect(
            new GoalpostSize(pop.scene,target, 'big')
        )

        //pop.scene.timedEvents.push(popEffect);
        pop.setActive(false) // for destruction in the next update
    })

    pop.onDestroyClear = function(){
        //scene.events.removeListener(Phaser.Scenes.Events.UPDATE, pop.update, pop);

        //remove from scene entities
        let index = this.scene.entities.indexOf(this); // Find the index of entity2
        if (index !== -1) {
            this.scene.entities.splice(index, 1); // Remove 1 element at the found index
        }
        pop.destroy();
        img.destroy();
    }



    // destroty in update after out of bounds
    pop.update = function(time, delta){
        if ( !pop.active || pop.y > pop.scene.gameOptions.height + 200){
            pop.onDestroyClear();
            return;
        }
        img.setPosition(pop.x, pop.y)
        
    }
        // effect in collision
    // after update initialisation, also after setCircle (body creation)
    pop.body.ignoreGravity = true
    pop.setVelocity(0,0)
    pop.body.ispop = true
    
    //initUpdateEvent(pop)

    pop.scene.time.addEvent({
        delay: LIFEtime,
        callback: () => {
            pop.setActive(false) // for destruction in the next update
        },
        callbackScope: this,
        loop: true 
    });



    return pop
}