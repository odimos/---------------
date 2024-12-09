export function toMenu(scene){
    let back = scene.add.bitmapText(100, 400, "bitmapFont", 'menu',50).setOrigin(0.5,0.5).setInteractive({ useHandCursor: true  } );

    back.on('pointerdown', function (event){
        scene.soundPlayer.play('pop');
        scene.scene.start('MenuScene'); // wtf
    });

    return back;
}

export function restart(scene){
    let replay_btn = scene.add.bitmapText(100, 600, "bitmapFont", 'replay',50).setOrigin(0.5,0.5).setInteractive({ useHandCursor: true  } );

    replay_btn.on('pointerdown', function (event){
        scene.soundPlayer.play('pop');
        scene.scene.start('Play',{
            'mode':'single'
        }); // wtf
    });

    return replay_btn
}


export function pauseButton(scene, x, y){
    // Initially use the first image for the button
    const button = scene.add.image(x, y, 'non_paused').setOrigin(0,1).setInteractive({ useHandCursor: true  });
   // Set custom width and height button.setDisplaySize(width, height);
    scene.paused = false;
    button.setDepth(3)

    // Add a click event to toggle the image
    button.on('pointerdown', () => {
        if (scene.clockPausedGoal ) return;
        if (scene.paused) {
            button.setTexture('non_paused'); // Switch to the second image
            scene.matter.world.resume();
            scene.timedEvents.forEach(e=>e.paused= false);
            scene.clockPaused = false;

        } else {
            button.setTexture('paused'); // Switch back to the first image
            scene.matter.world.pause();
            scene.timedEvents.forEach(e=>e.paused= true);
            scene.clockPaused = true;

        }
        scene.paused = !scene.paused; // Toggle the state
    });

}

export function createVolumeBtn(scene, gameOptions, x, y){
    let menuEl = document.createElement('div');
    menuEl.id = 'menu';
    menuEl.innerHTML = 
    `
    <div class="volume-container">
        <img id="speaker" src="assets/speaker.png" alt="Speaker">
        <input type="range" id="vol" name="vol" min="0" max="100">
    </div>
    `;
    
    // Optionally, you can also add some text inside the d
    const menu = scene.add.dom(x,y,menuEl).setOrigin(0,1);

    const volumeSlider = document.getElementById('vol');
    const speakerImage = document.getElementById('speaker');
    if (gameOptions['VOLUME']==0){
        speakerImage.src = 'assets/speaker_muted.png'; 

    }
    volumeSlider.value = gameOptions['VOLUME'] * 100;

    volumeSlider.addEventListener('input', (event) => {
        const volume = event.target.value; // Get the slider value
        if (volume == 0) {
            speakerImage.src = 'assets/speaker_muted.png'; 
        } else {
            speakerImage.src = 'assets/speaker.png'; 
        }
        gameOptions['VOLUME'] = volume/100;

    });

    speakerImage.addEventListener('click',(event)=>{
        let volume = volumeSlider.value ;
        if (volume == 0) {
            volume = 50;
            speakerImage.src = 'assets/speaker.png'; 
        } else {
            volume = 0;
            speakerImage.src = 'assets/speaker_muted.png'; 
        }
        volumeSlider.value = volume;
        gameOptions['VOLUME'] = volume/100;
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
    let quit = scene.add.image(x, y, 'quit').setOrigin(0,1).setInteractive({ useHandCursor: true  } );

    quit.on('pointerdown', function (event){
        scene.soundPlayer.play('pop');
        scene.scene.start('MenuScene'); // wtf
    });

    quit.setDepth(3)

    return quit
}

export function buttonsContainer(scene, start_x, start_y){
    createVolumeBtn(scene, scene.gameOptions, start_x, start_y)
    pauseButton(scene, start_x+250, start_y);
    quit(scene, start_x+250+70, start_y)
    return
}
