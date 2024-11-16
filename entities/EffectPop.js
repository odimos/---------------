export default function Pop(scene,x,y){
    let pop = scene.matter.add.image(x, y, 'pop');
    pop.name = 'pop'
    pop.setCircle(20);
    pop.setFriction(0)
    pop.body.frictionAir = 0
    console.log(pop)

    pop.body.ignoreGravity = true
    pop.setVelocity(0,1)
    pop.body.collisionFilter.category = 0

    pop.body.ispop = true
    return pop
}