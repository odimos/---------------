import { initUpdateEvent } from "../utils/utilsfunctions.js";
import {BallSize, HeadSize, BallType, GoalpostSize, 
    PlayerSpeed, PlayerJump, Freeze, ManyBalls,
    Astronaut} from  "../utils/Effects.js";

/*
Categories:

*/

const effectsList = [
    {
        effect: 'big_head', color: 'Green',
        create: (scene)=> new HeadSize(scene, 'big', false)
        
    },
    {
        effect: 'small_head', color: 'Green',
        create: (scene)=> new HeadSize(scene, 'small', true)
        
    },
    {
        effect: 'small_head', color: 'Red',
        create: (scene)=> new HeadSize(scene, 'small', false)
        
    },
    {
        effect: 'speed', color: 'Green',
        create: (scene)=> new PlayerSpeed(scene, 'increase', false)
    },
    {
        effect: 'speed', color: 'Green',
        create: (scene)=> new PlayerSpeed(scene, 'decrease', true)
    },
    {
        effect: 'speed',color: 'Red',
        create: (scene)=> new PlayerSpeed(scene, 'decrease', false)
    },
    {
        effect: 'increase_jump',
        color: 'Green',
        create: (scene)=> new PlayerJump(scene, 'increase', false)
    },
    {
        effect: 'increase_jump',
        color: 'Red',
        create: (scene)=> new PlayerJump(scene, 'decrease', false)
    },
    {
        effect: 'big_ball',
        color: 'Yellow',
        create: (scene)=> new BallSize(scene, 'big')
    },
    {
        effect: 'small_ball',
        color: 'Yellow',
        create: (scene)=> new BallSize(scene, 'small')
    },
    {
        effect: 'heavy_ball',
        color: 'Yellow',
        create: (scene)=> new BallType(scene, 'heavy')
    },
    {
        effect: 'bouncy_ball',
        color: 'Yellow',
        create: (scene)=> new BallType(scene, 'bouncy')
    },
    {
        effect: 'small_goalpost',
        color: 'Green',
        create: (scene)=> new GoalpostSize(scene, 'small', true)
    },
    {
        effect: 'big_goalpost',
        color: 'Green',
        create: (scene)=> new GoalpostSize(scene, 'big', false)
    },
    
    {
        effect: 'freeze',
        color: 'Green',
        create: (scene)=> new Freeze(scene)

    },
    {
        effect: 'many_balls',
        color: 'Yellow',
        create: (scene)=> new ManyBalls(scene)

    },
    {
        effect: 'bottle',
        color: 'Yellow',
        create: (scene)=> new Astronaut(scene)

    },
];


const LIFEtime = 6000;
export default function Pop(scene,x,y, index=null){
    // effect , image
    if (index===null) index = Math.floor(Math.random() * effectsList.length);
    const randomEffect = effectsList[index]//effectsList[index];
    const color = randomEffect.color;
    const image = randomEffect.effect + ".png";

    let pop = scene.matter.add.sprite(x, y);
    let img = scene.add.image(x, y, 'effects2', image ).setOrigin(0.5,0.5);

 
    pop.scene = scene
    pop.name = 'pop'
    pop.setCircle(20);
    pop.setFriction(0)
    pop.body.frictionAir = 0
    pop.setMass(0.01);
    pop.play(`rotate${color}`);
    pop.setDepth(0);
    pop.setSensor(true);

    pop.setCollisionCategory(scene.pop_category);
    pop.setCollidesWith([scene.ball_category]);

    scene.entities.push(pop);
    
    pop.setOnCollide( (c) =>{
        // cancel previous if at the same target
        //let popEffect = pop.scene.effectsHandler(effect_type, color);
        pop.scene.soundPlayer.play('powerup' )
        let target = pop.scene.lastTouched;
        pop.scene.effectsHandler.addEffect(
            randomEffect.create(pop.scene)
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