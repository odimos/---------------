import {clearPlayerInput} from './utilsfunctions.js'

export function pauseButton(scene, x, y){
    // Initially use the first image for the button
    const button = scene.add.image(x, y,"generall_assets", 'non_paused.png').setOrigin(0,1).setInteractive({ useHandCursor: true  });
   // Set custom width and height button.setDisplaySize(width, height);
    scene.paused = false;
    button.setDepth(3)

    // Add a click event to toggle the image
    button.on('pointerdown', () => {
        if (scene.clockPausedGoal ) return;
        if (scene.paused) {
            button.setTexture("generall_assets",'non_paused.png'); // Switch to the second image
            scene.matter.world.resume();
            //scene.timedEvents.forEach(e=>e.paused= false);
            scene.time.timeScale = 1;
            scene.clockPaused = false;

        } else {
            button.setTexture("generall_assets",'paused.png'); // Switch back to the first image
            scene.matter.world.pause();
            //scene.timedEvents.forEach(e=>e.paused= true);
            scene.clockPaused = true;
            scene.time.timeScale = 0;

        }
        scene.paused = !scene.paused; // Toggle the state
    });

}

export function createVolumeBtn(scene, x, y){
    let menuEl = document.createElement('div');
    menuEl.id = 'menu';
    menuEl.innerHTML = 
    `
    <div class="volume-container">
        <img id="speaker" src="assets/generall_assets/speaker.png" alt="Speaker">
        <input type="range" id="vol" name="vol" min="0" max="100">
    </div>
    `;
    
    // Optionally, you can also add some text inside the d
    const menu = scene.add.dom(x,y,menuEl).setOrigin(0,1);

    const volumeSlider = document.getElementById('vol');
    const speakerImage = document.getElementById('speaker');
    
    if (! scene.registry.has('volume')) scene.registry.set('volume', 0.20);

    const currentVolume = scene.registry.get('volume');

    if (currentVolume == 0)speakerImage.src = 'assets/generall_assets/speaker_muted.png'; 
    else  speakerImage.src = 'assets/generall_assets/speaker.png';

    volumeSlider.value = currentVolume*100;


    volumeSlider.addEventListener('input', (event) => {
        const volume = event.target.value; // Get the slider value
        if (volume == 0) {
            speakerImage.src = 'assets/generall_assets/speaker_muted.png'; 
        } else {
            speakerImage.src = 'assets/generall_assets/speaker.png'; 
        }
        scene.registry.set('volume', (volume/100));
    });

    speakerImage.addEventListener('click',(event)=>{
        let volume = volumeSlider.value ;
        if (volume == 0) {
            volume = 50;
            speakerImage.src = 'assets/generall_assets/speaker.png'; 
        } else {
            volume = 0;
            speakerImage.src = 'assets/generall_assets/speaker_muted.png'; 
        }
        volumeSlider.value = volume;
        scene.registry.set('volume', (volume/100));

    });


}

export function musicButton(scene, x, y){
    // Initially use the first image for the button
    const buttonMusic = scene.add.image(400, 300, 'music').setOrigin(0,0.5).setInteractive();

    // Add a click event to toggle the image
    buttonMusic.on('pointerdown', () => {
        if (music.paused) {
            button.setTexture('music'); // Switch to the second image
            music.pause()
        } else {
            button.setTexture('music_paused'); // Switch back to the first image
            music.pause()
        }
    });
}

export function quit(scene,x, y){
    let quit = scene.add.image(x, y, "generall_assets",'quit.png').setOrigin(0,1).setInteractive({ useHandCursor: true  } );

    quit.on('pointerdown', function (event){
        scene.soundPlayer.play('choose_button');
        //scene.scene.remove('Play');
        clearPlayerInput(scene)
        scene.time.timeScale = 1;
        scene.scene.start('MenuScene'); // wtf
        //scene.scene.remove('Play');
    });

    quit.setDepth(3)

    return quit
}

export function buttonsContainer(scene, start_x, start_y){
    createVolumeBtn(scene, start_x, start_y)
    pauseButton(scene, start_x+250, start_y);
    quit(scene, start_x+250+70, start_y)
    return
}

export function displayControllers(scene, start_x, start_y){
    let controller1="Player 1 Controls: Arrows + M"
    let controller2="Player 2 Controls: A, W, D + Z"

    scene.add.bitmapText(start_x, start_y-25, "bitmapFont", controller1,20).setOrigin(0,1);
    scene.add.bitmapText(start_x, start_y, "bitmapFont", controller2,20).setOrigin(0,1);



}