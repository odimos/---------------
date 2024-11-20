export function Soundshandler(scene, soundsKeys, general_volume=1){
    
    let sounds = {}
    soundsKeys.forEach( ({path, key}) => {
        sounds[key] = scene.sound.add(key);
    })

    let soundPlayer = {}
    soundPlayer.general_volume = general_volume;

    soundPlayer.play = function(key, options){
        console.log(options)
        if ( options && 'volume' in options ){
            options['volume'] =  options['volume'] * soundPlayer.general_volume;
        }
        sounds[key].play(options);

    }

    return soundPlayer;

}