import { getClockTime } from "../utils/utilsfunctions.js";
import {clearPlayerInput} from '../utils/utilsfunctions.js'

export function createScoreBoard(scene, left, right, custom_name1, custom_name2){
    // this should be with bitmap

    let scoreBoard={};
    scoreBoard.score= {left:left,right:right}
    let name1 = scene.add.bitmapText(100,50, "bitmapFont",custom_name1, 30)
    .setOrigin(0.5,0.5);
    scoreBoard.scoreLeft = scene.add.bitmapText(100,100, "bitmapFont",scoreBoard.score.right.toString(),50)
    .setOrigin(0.5,0.5);
    let name2 = scene.add.bitmapText(scene.gameOptions.width-100,50, "bitmapFont",custom_name2, 30)
    .setOrigin(0.5,0.5);
    scoreBoard.scoreRight = scene.add.bitmapText(scene.gameOptions.width-100, 100, "bitmapFont", scoreBoard.score.left.toString(),50)
    .setOrigin(0.5,0.5);
    
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
    let starting_time = 60;
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
        if (seconds<10){
            clock_txt.setTint(0xff0000);
        }
    }
    if (round_time_now==starting_time){
        console.log('End');
        scene.clockPaused = true;
        scene.soundPlayer.play('whistle', { volumeFactor: 0.6 } )
        const endText = scene.add.bitmapText(scene.gameOptions.width/2,scene.gameOptions.height/3,"bitmapFont",
            'GAME OVER!').setScale(5).setOrigin(0.5,1)
             .setVisible(true)
             .setTint(0xff0000);

        scene.time.addEvent({
        delay: 1500, // 500 ms delay
        callback: () => {
            scene.matter.world.pause(); // Pause the Matter physics world
            clearPlayerInput(scene);
            scene.registry.set({
                'player1score': scene.score.player1,
                'player2score': scene.score.player2,
            });
            scene.scene.start('EndScene');
        },
        callbackScope: scene, // Ensures the correct `this` context inside the callback
        loop: false // This is a one-time event
    });

        // pause for 3 seconds and then go to end Screen
    }
   }

   //scene.events.on(Phaser.Scenes.Events.UPDATE, update, this) // this context the 3rd arg

   return update
}

export function goalVisuals(scene){
    const goalText = scene.add.bitmapText(scene.gameOptions.width/2,scene.gameOptions.height/2,"bitmapFont",
        'GOAL', 100).setOrigin(0.5,1)
         .setVisible(false)
         .setTint(0xFFFF00);
    
    const scoreText = scene.add.bitmapText(scene.gameOptions.width/2, (scene.gameOptions.height+150)/ 2,"bitmapFont",
        '0 - 0', 60).setOrigin(0.5,1)
        .setVisible(false)
        .setTint(0xF0000);

    //  show the goalText when the camera shakes, and hide it when it completes
    scene.cameras.main.on('camerashakestart', ()=>{
        goalText.setVisible(true);
        goalText.alpha=1;

        scoreText.setVisible(true);
        scoreText.alpha=1;
        scoreText.text = scene.score.player2 + " - " + scene.score.player1;

    });

    scene.cameras.main.on('camerashakecomplete',  ()=>{
        scene.tweens.add({
            targets: [goalText, scoreText],
            alpha: 0,          
            duration: 2000,   
            ease: 'Linear',    
            onComplete: function () {
                goalText.setVisible(false); 
                scoreText.setVisible(false);
            }
        });

    });
}
