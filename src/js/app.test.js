import Game from './Game';

test('Game initializes correctly', () => {

  document.body.innerHTML = '<div id="game-container"></div>';
  const container = document.getElementById('game-container');

  const game = new Game(container);
  game.startGame();


  const gameField = container.querySelector('.game-field');
  expect(gameField).not.toBeNull();


  const character = gameField.querySelector('img');
  expect(character).not.toBeNull();
  expect(character.src).toContain('goblin.png'); 
});