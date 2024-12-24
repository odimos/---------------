import DATA from "../data/data.js";
import { Soundshandler } from "../utils/soundsHandler.js";
import { createVolumeBtn } from "../utils/buttons.js";

export default class SelectScene extends Phaser.Scene {
    constructor(){
        super({key:'SelectScene'})
        this.gameOptions =gameOptions;

    }

    preload(){
        this.soundPlayer = Soundshandler(this, DATA['SOUNDS'] );
    }

    renderImages(heads_data, selection, player, start_x, chosen_sprite) {

        const maxPerRow = Math.floor(((this.gameOptions.width/2)-100) / 60); 
        const start_y = 200;

        heads_data.forEach((value, index) => {
            const xPosition = start_x + 70 + (index % maxPerRow) * 60;  // Wrap around after maxPerRow (8 images per row)
            const yPosition = start_y + Math.floor(index / maxPerRow) * 60; // Move to next row after maxPerRow

            // Create the sprite from the atlas
            const head = this.add.sprite(xPosition, yPosition, 'headssprites', value);
            head.setInteractive({cursor: 'pointer'});
            head.on('pointerover', () => {
                head.setTint(0xFFFF00); // Set tint to yellow on hover (highlight)
            });
        
            // Reset tint and cursor when pointer is out
            head.on('pointerout', () => {
                if (index!=selection['index'])
                    {
                        head.clearTint(); // Remove tint (reset to original color)
                    }
            });
        
            // Handle click (selection) to change the head to yellow when selected
            head.on('pointerdown', () => {
                selection['sprite'].clearTint();
                selection['index'] = index;
                selection['sprite'] = head;
                head.setTint(0xFFFF00); // Set tint to yellow when clicked (selected)
                selection['bigSprite'].setTexture('headssprites', value);
                
            });

            if (selection['index']==index){
                head.setTint(0xFFFF00);
                selection['sprite'] = head;
            }
        });
    }
    
    selection_display_logic(mode) {

        const nextButton = document.getElementById('nextButton');
        const backButton = document.getElementById('backButton');

        const frames = this.textures.get('headssprites').getFrameNames();
        // Initial setup for rendering the images and updating the cards
        this.selected1['bigSprite'] = this.add.sprite(this.gameOptions.width/4, 450, 'headssprites', frames[0])
        .setScale(4)
        .setOrigin(0.5,0);
        this.renderImages(frames, this.selected1, 1, 0, null);
        this.selected2['bigSprite'] = this.add.sprite(3*this.gameOptions.width/4, 450, 'headssprites', frames[1])
        .setScale(4)
        .setOrigin(0.5,0);
        this.renderImages(frames, this.selected2, 2, this.gameOptions.width/2, null);

    
        // Next button handler to move to the next scene
        nextButton.addEventListener('click', () => {
            const player1name = nameInput1.value || "Player1";
            const player2name = nameInput2.value || "Player2";
    
            // Select custom or default names for the players and start the game scene
            //this.select(heads_data[selectedIndex1].key, heads_data[selectedIndex2].key, player1name, player2name, mode);
            //console.log( frames[this.selected1['index']], frames[this.selected2['index']] )
            this.soundPlayer.play('choose_button');
            //this.scene.stop('SelectScene');
            this.scene.restart('Play');
            this.scene.start('Play',{
                'key1': frames[this.selected1['index']], 
                'key2': frames[this.selected2['index']],
                'name1':player1name, 
                'name2':player2name, 
                mode
            });
        });

        backButton.addEventListener('click', () => {
            this.soundPlayer.play('choose_button');
            this.scene.start('MenuScene')
        });
    }
    
    create(args){
        this.selected1 = {
            'sprite': null,
            'index':0,
            'bigSprite': null
        };
        this.selected2 = {
            'sprite': null,
            'index':1,
            'bigSprite': null
        }
        createVolumeBtn(this, this.gameOptions, 4,this.gameOptions.height)

        let menuEl = document.createElement('div');
        menuEl.id = 'menu';
        menuEl.innerHTML = /*html*/ 
        `
        
        <div class="container-fluid mt-4" style="width:${this.gameOptions.width}px;">
            <!-- Top: Player 1 and Player 2 sections -->
            <div class="player-container">
                <!-- Player 1 -->
                <div class="col-md-6 player-section">
                    <h4>Player 1</h4>
                    <div class="input-container">
                        <input type="text" class="form-control ms-2" id="nameInput1" placeholder="Enter name" />
                    </div>
                </div>
        
                <!-- Player 2 (Aligned to the far right) -->
                <div class="col-md-6 player-section">
                    <h4>Player 2</h4>
                    <div class="input-container">
                        <input type="text" class="form-control ms-2" id="nameInput2" placeholder="Enter name" />
                    </div>
                </div>
            </div>
        </div>
    `;
        
        // Optionally, you can also add some text inside the d
        const menu = this.add.dom(0,0,menuEl).setOrigin(0,0);
        
        let footerEl = document.createElement('div');
        footerEl.id = 'footer';
        footerEl.classList.add('w-50')
        footerEl.innerHTML = /*html*/ 
        `
        <div class="bottom-buttons">
            <button class="btn btn-success w-50 font-weight-bold fs-3" id="backButton">← Back</button>
            <button class="btn btn-success w-50 font-weight-bold fs-3" id="nextButton">Next</button>
        </div>
        `;
        footerEl.style.width = this.gameOptions.width+'px';
        
        // Optionally, you can also add some text inside the d
        const footer = this.add.dom(0,this.gameOptions.height,footerEl).setOrigin(0,1);
        this.selection_display_logic(args['mode'])   
    }

}


