export function Soundshandler(scene, soundsKeys){

    let sounds = {}
    soundsKeys.forEach( ({path, key}) => {
        sounds[key] = scene.sound.add(key);
    })

    return function (key, options){
        sounds[key].play(options);
    }


}