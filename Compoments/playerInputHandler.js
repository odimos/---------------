export const player1options = function() {
    return {
        'kick' : ['m','μ', 'M', 'Μ', 'ω', 'Ω', 'v', 'V'],
        'left' : this.cursor.left,
        'right' : this.cursor.right,
        'up' : this.cursor.up
    }
}

export const player2options = function() {
    return {
        'kick' : ['z','ζ', 'Z', 'Ζ', ' '],
        'left' : this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        'right' : this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
        'up' : this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    }
}

export const player_3_options = function() {
    return {
        'kick' : ['z','ζ', 'Z', 'Ζ',' '],
        'left' : this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        'right' : this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
        'up' : this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    }
}

export function playerInputhandler(options){
    this.cursor = this.scene.input.keyboard.createCursorKeys();
    const {kick, left, right, up, down} =  options.call(this);
    
    this.scene.input.keyboard.on('keydown',(e)=>{
        if(kick.includes(e.key) ){
            this.kickPressed = true;

            if (down){
                this.kickPressed = true;
            }
        }
    })

    this.scene.input.keyboard.on('keyup',(e)=>{
        if(kick.includes(e.key)){
            this.kickPressed = false;
        }
    })
    
    return function updateInput(){
        // handle input
        if (left.isDown && right.isDown){
            this.head.setVelocityX(0)
        }
        else if (left.isDown){
            this.head.setVelocityX(-this.runspeed)
        }
        else if (right.isDown){
            this.head.setVelocityX(this.runspeed)
        } else {
            this.head.setVelocityX(0)
        };

        if (up.isDown){
            this.tryJump()
        }

    }
}