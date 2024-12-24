export default function Goalpost(scene,dir){
    this.scene = scene;
    this.dir = dir;
    this.sprite = null;
    this.dokari = null;

    if (this.dir==-1){
            this.sprite = this.scene.matter.add.image(scene.gameOptions.width, scene.floorY,"goalpost",null, { isSensor: true } )
            .setFlipX(true);
    }else {
        this.sprite= this.scene.matter.add.image( 0, scene.floorY,"goalpost",null,  { isSensor: true } );
    }

    this.sprite
    .setScale(1.5)
    .setDepth(10)
    .setBody({
        type: 'rectangle',
        width: 60,  // Custom width
        height: this.sprite.height*this.sprite.scaleY-30,  // Custom height
    })
    .setSensor(true)
    .setStatic(true);

    this.sprite.x = this.dir*2+this.sprite.x + this.dir*(this.sprite.width * this.sprite.scaleX) / 2;
    this.sprite.y = 2+this.sprite.y - (this.sprite.height * this.sprite.scaleY) / 2;

    let dokariW = Math.abs(this.sprite.width * this.sprite.scaleX) - 4;
    this.dokariH = 8 ;
    let dokariY = this.scene.floorY - (this.sprite.height * this.sprite.scaleY) + this.dokariH;

    let dokariX = dokariW/2;
    if (this.dir == -1)dokariX= scene.gameOptions.width - dokariW/2;

    this.dokari = this.scene.matter.add.image(dokariX, dokariY, null)
    .setDepth(10)
    .setBody({
        type: 'rectangle',
        width: dokariW,
        height: this.dokariH,
    })
    .setStatic(true);
    
    this.dokari.angle = this.dir*2;
    this.dokari.setOnCollide( (collision) =>{
        let body = collision.bodyA;
        body.obj.setVelocity(body.velocity.x+1*this.dir, body.velocity.y+0.5);
    });

}