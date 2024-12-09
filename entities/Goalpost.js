export default function Goalpost(scene,dir){
    // this should be a compound body brocoloco
    let horizontalSize = {
        w: 160,
        h: 20
    };
    let verticalSize = {
        w: 20,
        h: 210
    };
    
    let verticalXoffset = verticalSize.w/2;
    if (dir==-1) verticalXoffset = scene.gameOptions.width - verticalSize.w/2;
    let horizontalXoffset = horizontalSize.w/2;
    if(dir==-1) horizontalXoffset = scene.gameOptions.width-horizontalSize.w/2;
    // orizontia
    this.horizontal = scene.matter.add.image(
        horizontalXoffset, 
        scene.floorY-verticalSize.h-horizontalSize.h/2
        , 'goalpost_emtpy')
    .setRectangle( horizontalSize.w,horizontalSize.h)
    .setStatic(true);
    this.horizontal.angle = dir*2;




    // goal sensor
    let goalSensorSize = {w:horizontalSize.w*4/5,h:verticalSize.h*7/8}
    let sensorXoffset = goalSensorSize.w/2;
    if (dir==-1) sensorXoffset = scene.gameOptions.width - goalSensorSize.w/2
    let sensor = scene.matter.add.rectangle(
        sensorXoffset,scene.floorY- goalSensorSize.h/2, 
        goalSensorSize.w, goalSensorSize.h, 
        { isSensor: true })
    scene.matter.body.setStatic(sensor, true)
    sensor.dir = dir


    if (dir==-1){
        scene.add.image(scene.gameOptions.width, -20+scene.floorY-verticalSize.h-horizontalSize.h/2,"goalpost" ).setScale(-2,2).setOrigin(0,0);
    }else {
        scene.add.image( 0, -20+scene.floorY-verticalSize.h-horizontalSize.h/2,"goalpost" ).setOrigin(0,0).setScale(2);
    }
    // 1 LEFT, -1 RIGHT


}