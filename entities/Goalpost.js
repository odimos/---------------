export default function Goalpost(scene,dir){
    // this should be a compound body brocoloco
    let horizontalSize = {
        w: 100,
        h: 10
    };
    let verticalSize = {
        w: 20,
        h: 200
    };
    
    let verticalXoffset = verticalSize.w/2;
    if (dir==-1) verticalXoffset = scene.gameOptions.width - verticalSize.w/2;
    let horizontalXoffset = horizontalSize.w/2;
    if(dir==-1) horizontalXoffset = scene.gameOptions.width-horizontalSize.w/2;
    // orizontia
    this.horizontal = scene.matter.add.image(
        horizontalXoffset, 
        scene.floorY-verticalSize.h-horizontalSize.h/2
        , 'upPost')
    .setRectangle( horizontalSize.w,horizontalSize.h)
    .setStatic(true);
    this.horizontal.angle = dir*2;


    // ka8eta
    this.vertical = scene.matter.add.image(
        verticalXoffset, scene.floorY-verticalSize.h/2, 'downPost')
    .setRectangle( verticalSize.w,verticalSize.h)
    .setStatic(true)
    .setOrigin(0.5,0.5);

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


    
    // 1 LEFT, -1 RIGHT


}