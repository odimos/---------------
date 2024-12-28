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

export function clearPlayerInput(scene) {
    // Remove all key listeners from the scene's input manager
    scene.input.keyboard.removeAllListeners();

    scene.input.keyboard.clearCaptures();

    console.log('Player input cleared and reset');
}


  function gaussianRand() {
    let random = 0;
    for (let i = 0; i<10; i ++) random = random + Math.random();
    return random / 10;
  }
export  function gaussianRandom(start, end) {
    return Math.floor(start + gaussianRand() * (end - start + 1));
  }