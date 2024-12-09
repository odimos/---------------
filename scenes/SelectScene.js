import DATA from "../data/data.js";

export default class SelectScene extends Phaser.Scene {
    constructor(gameOptions){
        super({key:'SelectScene'})
        this.gameOptions =gameOptions;

    }

    select(key1, key2, name1, name2, mode){
        this.scene.start('Play',{
            key1, key2, name1, name2, mode
        })
    }

    renderImages(heads_data, selectedIndex, player) {
        const imageGallery = document.getElementById(`imageGallery${player}`);
        imageGallery.innerHTML = ''; // Clear the gallery before rendering new images
        heads_data.forEach((image, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = "../" + image.path;
            imgElement.alt = image.key;
            imgElement.dataset.id = image.id;
    
            // Only add the 'selected-image' class if the image is selected
            if (index === selectedIndex) {
                imgElement.classList.add('selected-image');
            }
    
            imgElement.classList.add('img-thumbnail');
            imageGallery.appendChild(imgElement);
        });
    }
    
    updateCard(index, heads_data, player) {
        const imageData = heads_data[index];
        const cardImage = document.getElementById(`cardImage${player}`);
        const cardTitle = document.getElementById(`cardTitle${player}`);
        const nameInput = document.getElementById(`nameInput${player}`);
    
        // Update the card with the selected image data
        cardImage.src = "../" + imageData.path;
        cardTitle.textContent = imageData.key;
    
        // Set player name input
        nameInput.value = '';
        nameInput.placeholder = imageData.key;
    
        // Highlight the selected image in the gallery
        const allImages = document.querySelectorAll(`#imageGallery${player} img`);
        allImages.forEach(img => img.classList.remove('selected-image'));
        allImages[index].classList.add('selected-image');
    }
    
    selection_display_logic(mode) {
        let selectedIndex1 = 0;
        let selectedIndex2 = 0;
        const heads_data = DATA['HEADS'];
        const nextButton = document.getElementById('nextButton');
        const backButton = document.getElementById('backButton');

        const nameInput1 = document.getElementById('nameInput1');
        const nameInput2 = document.getElementById('nameInput2');
    
        // Image click handler for Player 1 and Player 2
        document.getElementById('imageGallery1').addEventListener('click', (event) => {
            if (event.target.tagName.toLowerCase() === 'img') {
                const clickedIndex = Array.from(event.target.parentElement.children).indexOf(event.target);
                selectedIndex1 = clickedIndex;
                this.updateCard(selectedIndex1, heads_data, 1);
            }
        });
    
        document.getElementById('imageGallery2').addEventListener('click', (event) => {
            if (event.target.tagName.toLowerCase() === 'img') {
                const clickedIndex = Array.from(event.target.parentElement.children).indexOf(event.target);
                selectedIndex2 = clickedIndex;
                this.updateCard(selectedIndex2, heads_data, 2);
            }
        });
    
        // Initial setup for rendering the images and updating the cards
        this.renderImages(heads_data, selectedIndex1, 1);
        this.renderImages(heads_data, selectedIndex2, 2);
        this.updateCard(selectedIndex1, heads_data, 1);
        this.updateCard(selectedIndex2, heads_data, 2);
    
        // Next button handler to move to the next scene
        nextButton.addEventListener('click', () => {
            const player1name = nameInput1.value || heads_data[selectedIndex1].key;
            const player2name = nameInput2.value || heads_data[selectedIndex2].key;
    
            // Select custom or default names for the players and start the game scene
            console.log(mode)
            this.select(heads_data[selectedIndex1].key, heads_data[selectedIndex2].key, player1name, player2name, mode);
        });

        backButton.addEventListener('click', () => {
            this.scene.start('MenuScene')
        });
    }
    
    create(args){
        let menuEl = document.createElement('div');
        menuEl.id = 'menu';
        menuEl.innerHTML = /*html*/ 
        `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <div class="container-fluid mt-4" style="width:${this.gameOptions.width}px;height:${this.gameOptions.height}px;">
            <!-- Top: Player 1 and Player 2 sections -->
            <div class="player-container">
                <!-- Player 1 -->
                <div class="col-md-6 player-section">
                    <h4>Player 1</h4>
                    <div class="input-container">
                        <input type="text" class="form-control ms-2" id="nameInput1" placeholder="Enter name" />
                    </div>
                    <div class="image-container" id="imageGallery1">
                        <!-- Player 1's images will be dynamically added here -->
                    </div>
                </div>
        
                <!-- Player 2 (Aligned to the far right) -->
                <div class="col-md-6 player-section">
                    <h4>Player 2</h4>
                    <div class="input-container">
                        <input type="text" class="form-control ms-2" id="nameInput2" placeholder="Enter name" />
                    </div>
                    <div class="image-container" id="imageGallery2">
                        <!-- Player 2's images will be dynamically added here -->
                    </div>
                </div>
            </div>
    
            <!-- Main content -->
            <div class="row">
            <!-- Left: Card to display selected image for Player 1 -->
            <div class="col-6 col-md-6 d-flex justify-content-center">
                <div class="card" id="card1" style="width: 10rem;">
                    <img src="https://via.placeholder.com/100" class="card-img-top" id="cardImage1" alt="Card image" />
                    <div class="card-body">
                        <h6 class="card-title" id="cardTitle1">Selected Image 1</h6>
                    </div>
                </div>
            </div>

            <!-- Right: Card to display selected image for Player 2 -->
            <div class="col-6 col-md-6 d-flex justify-content-center" >
                <div class="card " id="card2" style="width: 10rem;">
                    <img src="https://via.placeholder.com/100" class="card-img-top" id="cardImage2" alt="Card image" />
                    <div class="card-body">
                        <h6 class="card-title" id="cardTitle2">Selected Image 2</h6>
                    </div>
                </div>
            </div>
        </div>
    
            <!-- Bottom: Next and Back buttons -->
            <div class="bottom-buttons ">
                <button class="btn btn-success font-weight-bold w-50 fs-4" id="backButton">← Back</button>
                <button class="btn btn-success font-weight-bold w-50 fs-4" id="nextButton">Select</button>
            </div>
        </div>
    
        
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.js"></script>
    `;
        
        // Optionally, you can also add some text inside the d
        const menu = this.add.dom(0,0,menuEl).setOrigin(0,0);
        this.selection_display_logic(args['mode'])


        //this.select('bob', 'bob', 'maria', 'zen');
        
    }

}


