export function Soundshandler(scene, soundsKeys, general_volume=1){
    
    let sounds = {}
    soundsKeys.forEach( ({path, key}) => {
        sounds[key] = scene.sound.add(key);
    })

    let soundPlayer = {}
    //soundPlayer.general_volume = scene.registry.get('volume');

    soundPlayer.play = function(key, options){
        let general_volume = scene.registry.get('volume');
        if ( options && 'volumeFactor' in options ){
            let finalVolume=  options['volumeFactor'] * general_volume;
            sounds[key].play({'volume':finalVolume} );
        }else {
            sounds[key].play({'volume':general_volume} );
        }

    }

    return soundPlayer;

}