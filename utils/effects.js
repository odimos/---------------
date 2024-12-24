export class EffectsHandler{
    constructor(scene){
        this.scene = scene;
        this.effects = [];
        //scene.events.on(Phaser.Scenes.Events.UPDATE, this.update , this)
        // with this it needs despatching before changing scene 
    }

    addEffect(effect){
        effect.handler = this;
        this.solveConficts(effect);
        this.effects.push(effect);
        effect.apply();
    }

    solveConficts(effect){
        this.effects.forEach(e => {
            if (e.target == effect.target){
                console.log(e);
                e.undo();
                e.destroy();
                this.removeEffect(e);
            }
        })
    }

    removeEffect(effect){
        // assumed already undone
        this.effects = this.effects.filter(e => e !== effect);
    }

    // handle timedEvents
    removeAll(){
        this.effects.forEach(effect => {
            effect.undo();
            effect.destroy();
        });
        this.effects = [];
    }

    update(){
        this.effects.forEach(effect => effect.update());
    }

    pause(){
        this.effects.forEach(effect => effect.pause());
    }

    resume(){
        this.effects.forEach(effect => effect.resume());
    }
}

class Effect {
    constructor(scene, target, type){
        // pointer to handler to remove from list
        // .constructor.name / type
        this.scene = scene;
        this.timedEvent = null;
        this.conficts = [];
        this.target = target; // last touched or other player, or this ball, or goalpost/player
        this.type = type;

        
    }

    update(){
        //console.log('update')
    }

    apply(duration){
        this.timedEvent = this.scene.time.addEvent({
            delay: duration,
            callback: () => {
                this.undo();
                this.destroy();
            },
            callbackScope: this.scene,
            loop: false 
        })
    }

    undo(){
        console.log('undo O')
        // destroy also ?
        
    }

    pause(){
        console.log('pause');
        if (this.timedEvent)this.timedEvent.paused = true;

    }

    resume(){
        console.log('resume');
        if (this.timedEvent)this.timedEvent.paused = false;
    }

    destroy(){
        //console.log('remove')
        if (this.timedEvent)this.timedEvent.destroy();
        this.handler.removeEffect(this)
        // remove from handler
        // graphics
        // timed event
        // object
        // sprites

    }
}

export class BallSize extends Effect{
    constructor(scene, mode){
        super(scene, scene.ball, 'ballSize');
        this.mode = mode
    }

    apply(){
        super.apply(1000);
        if(this.target){
            if (this.mode=='small')this.target.setScale(0.5);  
            else this.target.setScale(1.5);
        }
    }

    undo(){
        if(this.target)this.target.setScale(1);
    }
}

export class HeadSize extends Effect{
    constructor(scene, target, mode){
        super(scene, target, 'headSize');
        this.mode = mode;
    }

    apply(){
        super.apply(52000);
        if(this.target){
            if (this.mode=='big'){
                this.target.head.setScale(1.5*(-this.target.dir), 1.5);
            } else {
                this.target.head.setScale(0.75*(-this.target.dir), 0.75);
            }
        }
    }

    undo(){
        if(this.target)this.target.head.setScale(1*(-this.target.dir), 1);
    }
}


export class BallType extends Effect{
    constructor(scene, mode){
        super(scene, scene.ball, 'BallType');
        this.mode = mode;
        // Bouncy, Heavy, 
        if (this.mode=='heavy')
        this.newSprite =  this.scene.add.sprite(400, 400, "effects2" , 'heavy_ball.png')
        .setScale(1.5);
        else if (this.mode=='bouncy')
        this.newSprite =  this.scene.add.sprite(400, 400, "effects2" , 'beach_ball.png')
        .setScale(1.5);
    }

    apply(){
        super.apply(6000);
        if(this.target){

            if (this.mode=='heavy'){
                this.target.setMass(4);
                this.target.setBounce(0.5);
            } else if (this.mode=='bouncy'){
                this.target.setBounce(1.5);
            }
        }
    }

    update(){
        //console.log('update', this.handler);
        if (this.newSprite && this.target){
            this.newSprite.x = this.target.x;
            this.newSprite.y = this.target.y;
        }

    }

    undo(){
        if(this.target){
            if (this.mode=='heavy'){
                this.target.setMass(1);
                this.target.setBounce(0.95);
            } else if (this.mode=='bouncy'){
                this.target.setBounce(0.95);
            }

        }
        this.newSprite.destroy();
    }
}

export class GoalpostSize extends Effect{
    constructor(scene, mode){
        super(scene, scene.ball, 'GoalpostSize');
        this.mode = mode
    }

    apply(){
        super.apply(1000);
        if(this.target){
            if (this.mode=='small')this.target.setScale(0.5);  
            else this.target.setScale(1.5);
        }
    }

    undo(){
        if(this.target)this.target.setScale(1);
    }
}