import { getClockTime } from "../utils/utils.js";

export function createScoreBoard(scene, left, right){
    // this should be with bitmap

    let scoreBoard={};
    scoreBoard.score= {left:left,right:right}
    scoreBoard.scoreLeft = scene.add.bitmapText(100,50, "bitmapFont",scoreBoard.score.left.toString())
    .setOrigin(0.5,0.5).setScale(5);
    scoreBoard.scoreRight = scene.add.bitmapText(scene.gameOptions.width-100, 50, "bitmapFont", scoreBoard.score.right.toString())
    .setOrigin(0.5,0.5).setScale(5);
    
    scoreBoard.update = function(left,right){
        scoreBoard.scoreLeft.text = left;
        scoreBoard.scoreRight.text = right
    }

    return scoreBoard;
}

export function clock(scene, already_passed){
    // end game message 
    // check goals
    let exists = 1
    let starting_time = 30;
    let measuredTime = already_passed;
    let before = -1;
    let clock_txt = scene.add.bitmapText(scene.gameOptions.width/2,50, "bitmapFont",getClockTime(starting_time))
        .setOrigin(0.5,0.5).setScale(5);
   //init event 

   let update = function(time, delta){
    if ( !this || ! exists ) {
        //console.log('no clock')
        return;
    }
    if (scene.clockPaused || scene.clockPausedGoal) {
        //console.log('paused clock')
        return;
    }
    measuredTime+=delta;
    let round_time_now = Math.floor(measuredTime/1000);
    if (round_time_now > before ){
        before = round_time_now
        let seconds = starting_time - round_time_now;
        
        clock_txt.text = getClockTime(seconds);
    }
    if (round_time_now==starting_time){
        console.log('End');
        scene.matter.world.pause(); // after poping screen
        scene.clockPaused = true;
        setTimeout(()=>{
            scene.scene.start('EndScene',{
                "win":"CIA"
            });
        }, 1000)

        // pause for 3 seconds and then go to end Screen
    }
   }

   //scene.events.on(Phaser.Scenes.Events.UPDATE, update, this) // this context the 3rd arg

   return update
}

export function goalVisuals(scene){
    const goalText = scene.add.bitmapText(scene.gameOptions.width/2,scene.gameOptions.height/3,"bitmapFont",
        'GOAL').setScale(5).setOrigin(0.5,1)
         .setVisible(false)
         .setTint(0xff0000);
    //  show the goalText when the camera shakes, and hide it when it completes
    scene.cameras.main.on('camerashakestart', ()=>goalText.setVisible(true));
    scene.cameras.main.on('camerashakecomplete',  ()=>goalText.setVisible(false));
}

export function pauseButton(scene){
    // Initially use the first image for the button
    const button = scene.add.image(400, 300, 'non_paused').setInteractive();

    scene.paused = false;

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

