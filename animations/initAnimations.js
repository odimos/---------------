export const effectAnimation =
    function(scene){
        if (!scene.anims.exists('rotateGreen')) {
            scene.anims.create({
                key: 'rotateGreen',
                frames: scene.anims.generateFrameNumbers('popBackgrounds',  { frames: [ 0, 1, 2, 4, 6, 7, 15, 17 , 18, 20 ] }),
                frameRate: 30,
                repeat: -1
            });
        }
    
        if (!scene.anims.exists('rotateYellow')) {
            scene.anims.create({
                key: 'rotateYellow',
                frames: scene.anims.generateFrameNumbers('popBackgrounds',  { frames: [ 30, 32, 34, 36, 37,  45, 47, 48, 50 ] }),
                frameRate: 30,
                repeat: -1
            });
        }
    
        if (!scene.anims.exists('rotateRed')) {
            scene.anims.create({
                key: 'rotateRed',
                frames: scene.anims.generateFrameNumbers('popBackgrounds',  { frames: [ 60, 61, 65, 67 , 70 ] }),
                frameRate: 10,
                repeat: -1
            });
        }
        
    }
