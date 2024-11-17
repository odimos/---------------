export function initUpdateEvent(entity){
    entity.scene.events.on(Phaser.Scenes.Events.UPDATE, entity.update, entity) // this context the 3rd arg

}