import { initUpdateEvent } from "../utils/utilsfunctions.js";

const effectsList = [
    ['big_head', "Green"],
    ['small_head', "Red"],

    ['speed', "Green"],
    ['speed', "Red"],

    ['freeze', "Green"],
    ['freeze', "Green"],
    ['increase_jump', 'Green'],

    ['big_ball', "Yellow"],
    ['small_ball', "Yellow"],
    ['heavy_ball', "Yellow"],
    ['bouncy_ball', "Yellow"],
    ['bottle', "Yellow"]
];


export default function Pop(scene,x,y){
    // effect , image
    const index = Math.floor(Math.random() * effectsList.length);
    const randomEffect = effectsList[index];
    console.log(index,randomEffect,effectsList )
    const color = randomEffect[1];
    const effect_type =  randomEffect[0];
    console.log(effect_type, color)

    let pop = scene.matter.add.sprite(x, y);
    let img = scene.add.image(x, y, 'effects2', effect_type+".png" ).setOrigin(0.5,0.5);
    pop.scene = scene
    pop.name = 'pop'
    pop.setCircle(20);
    pop.setFriction(0)
    pop.body.frictionAir = 0
    pop.setMass(0.1);
    pop.play(`rotate${color}`);
    


    pop.setOnCollide( () =>{
        // cancel previous if at the same target
        let popEffect = pop.scene.effectsHandler(effect_type, color);
        pop.scene.soundPlayer.play('powerup' )

        pop.scene.timedEvents.push(popEffect);
        pop.setActive(false) // for destruction in the next update
    })

    pop.onDestroyClear = function(){
        scene.events.removeListener(Phaser.Scenes.Events.UPDATE, pop.update, pop);
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
    initUpdateEvent(pop)



    return pop
}