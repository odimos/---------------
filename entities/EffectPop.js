import { initUpdateEvent } from "../utils/utils.js";


export default function Pop(scene,x,y,image='', effect=''){
    // effect , image
    let pop = scene.matter.add.image(x, y, 'pop');
    pop.name = 'pop'
    pop.setCircle(20);
    pop.setFriction(0)
    pop.body.frictionAir = 0
    
    pop.effect = function(){
        console.log("effect")
    }

    pop.setOnCollide( () =>{
        pop.effect()
        pop.setActive(false) // for destruction in the next update
    })

    pop.onDestroyClear = function(){
        pop.scene.events.removeListener(Phaser.Scenes.Events.UPDATE, pop.update, pop);
        pop.destroy();
    }

    // destroty in update after out of bounds
    pop.update = function(time, delta){
        if ( !pop.active || pop.y > pop.scene.gameOptions.height + 200)pop.onDestroyClear();
        
    }

    // effect in collision
    // after update initialisation, also after setCircle (body creation)
    pop.body.ignoreGravity = true
    pop.setVelocity(0,0.5)
    pop.body.ispop = true
    initUpdateEvent(pop)

    return pop
}