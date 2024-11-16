export function createScoreBoard(scene,font){
    // this should be with bitmap

    let scoreBoard={};
    scoreBoard.score= {left:0,right:0}
    scoreBoard.scoreLeft = scene.add.text(100,50,scoreBoard.score.left, font).setOrigin(0.5,0.5);
    scoreBoard.scoreRight = scene.add.text(scene.gameOptions.width-100,50,scoreBoard.score.right, font)
    .setOrigin(0.5,0.5);

    scoreBoard.update = function(left,right){
        scoreBoard.score.left+=left
        scoreBoard.scoreLeft.text = scoreBoard.score.left;

        scoreBoard.score.right+=right
        scoreBoard.scoreRight.text = scoreBoard.score.right

    }

    return scoreBoard;

}