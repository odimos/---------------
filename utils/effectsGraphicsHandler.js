
export default function EffectsGraphicsHandler(scene){
    this.effects = [];

    this.addEffect = function(effect){
        this.effects.push(effect);
    }

    this.update = function(time, delta){
        this.effects.forEach(effect => {
            effect.update(time, delta);
        });
    }

    this.destroyAll = function(){
        console.log('Destroy All', this.effects)
         this.effects.forEach(effect => {
             console.log('eff')
             effect.destroy();
         });
        this.effects = [];
    }

    this.remove = function (effect){
        this.effects = this.effects.filter(e => e != effect);
    }

    
    scene.events.on(Phaser.Scenes.Events.UPDATE, this.update , this) 

    return this;
}