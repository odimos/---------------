export function initUpdateEvent(entity){
    entity.scene.events.on(Phaser.Scenes.Events.UPDATE, entity.update, entity) // this context the 3rd arg

}
function pad(number) {
    return number.toString().padStart(2, '0'); // Ensures 2-digit format
}

export function getClockTime(seconds){
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${pad(minutes)}:${pad(secs)}`
}