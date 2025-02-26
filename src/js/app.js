// TODO: write code here
/**
 * @jest-environment jsdom
 */
import Game from "./Game";

document.addEventListener("DOMContentLoaded", () => {
  const start = new Game(document.querySelector('.game-field'));
  start.startGame();
});
