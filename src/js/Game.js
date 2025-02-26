import imageGoblin from "../img/goblin.png";
export default class Game {
  constructor(element) {
    this._element = element;
    this.cells = []; 
    this.character = null;
    this.currentCellIndex = null; 
  }

  renderGame() {
    const gameField = document.createElement("div");
    gameField.classList.add("game-field");
    this._element.appendChild(gameField);

    
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      gameField.appendChild(cell);
      this.cells.push(cell);
    }

   
    this.character = document.createElement("img");
    this.character.src = imageGoblin;
    this.character.alt = "Goblin";

  
    this.currentCellIndex = Math.floor(Math.random() * 16);
    this.cells[this.currentCellIndex].appendChild(this.character);
  }

  
  moveCharacter() {
    let newCellIndex;
    do {
      newCellIndex = Math.floor(Math.random() * 16);
    } while (newCellIndex === this.currentCellIndex); 

    this.cells[newCellIndex].appendChild(this.character);
    this.currentCellIndex = newCellIndex;
  }

 
  startGame() {
    this.renderGame(); 
    setInterval(() => this.moveCharacter(), 2000); 
  }
}