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

export function getData(scene, LEVELS){
        let mode = scene.registry.get('mode');
        if (mode=='campaign'){
            let name1 = scene.registry.get('campaign').name1;
            let LEVEL = scene.registry.get('campaign').LEVEL;
            let name2 = LEVELS[LEVEL]['enemy_name'];
            let key1 = scene.registry.get('campaign') .key1;
            let key2 = LEVELS[LEVEL]['enemy_key'];
            return {mode, name1, name2, key1, key2};
        }else{
            let name1 = scene.registry.get('name1');
            let name2 = scene.registry.get('name2');
            let key1 = scene.registry.get('key1');
            let key2 = scene.registry.get('key2');
            return {mode, name1, name2, key1, key2};
        }
    }