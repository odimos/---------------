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

    // Reset any keys that were added manually (player2options, player_3_options)
    scene.input.keyboard.clearCaptures();

    console.log('Player input cleared and reset');
}


  function gaussianRand() {
    var rand = 0;
  
    for (var i = 0; i < 6; i += 1) {
      rand += Math.random();
    }
  
    return rand / 6;
  }
export  function gaussianRandom(start, end) {
    return Math.floor(start + gaussianRand() * (end - start + 1));
  }