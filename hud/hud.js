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
    let exists = 1
    let starting_time = 60;
    let measuredTime = already_passed;
    let before = -1;
    let clock_txt = scene.add.bitmapText(scene.gameOptions.width/2,50, "bitmapFont",'0')
        .setOrigin(0.5,0.5).setScale(5);
   //init event 

   let update = function(time, delta){
    if ( !this || ! exists ) return;
    if (scene.clockPaused) return;
    measuredTime+=delta;
    let round_time_now = Math.floor(measuredTime/1000);
    if (round_time_now > before ){
        before = round_time_now
        let digit_time = (starting_time - round_time_now ).toString()
        clock_txt.text = `00:${digit_time}`;
    }
   }

   scene.events.on(Phaser.Scenes.Events.UPDATE, update, this) // this context the 3rd arg

   return
}

export function goalVisuals(scene){
    const goalText = scene.add.bitmapText(scene.gameOptions.width/2,scene.gameOptions.height/3,"bitmapFont",
        'GOAL').setScale(5).setOrigin(0.5,1)
         .setVisible(false);
    //  show the goalText when the camera shakes, and hide it when it completes
    scene.cameras.main.on('camerashakestart', ()=>goalText.setVisible(true));
    scene.cameras.main.on('camerashakecomplete',  ()=>goalText.setVisible(false));
}
