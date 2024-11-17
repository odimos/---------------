export function createScoreBoard(scene){
    // this should be with bitmap

    let scoreBoard={};
    scoreBoard.score= {left:0,right:0}
    scoreBoard.scoreLeft = scene.add.bitmapText(100,50, "bitmapFont",scoreBoard.score.left.toString())
    .setOrigin(0.5,0.5).setScale(5);
    scoreBoard.scoreRight = scene.add.bitmapText(scene.gameOptions.width-100, 50, "bitmapFont", scoreBoard.score.right.toString())
    .setOrigin(0.5,0.5).setScale(5);
    

    scoreBoard.update = function(left,right){
        scoreBoard.score.left+=left
        scoreBoard.scoreLeft.text = scoreBoard.score.left;

        scoreBoard.score.right+=right
        scoreBoard.scoreRight.text = scoreBoard.score.right

    }

    return scoreBoard;

}

export function clock(scene){
    let starting_time = 60;
    let measuredTime = 0;
    let before = -1;
    let clock_txt = scene.add.bitmapText(scene.gameOptions.width/2,50, "bitmapFont",'0')
        .setOrigin(0.5,0.5).setScale(5);
   //init event 

   let update = function(time, delta){
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


}