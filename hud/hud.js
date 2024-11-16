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