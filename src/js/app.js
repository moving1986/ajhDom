// TODO: write code here
/**
 * @jest-environment jsdom
 */
import { Game } from "./Game";

// comment this to pass build
const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

console.log("app.js included");

document.addEventListener("DOMContentLoaded", () => {
  const start = new Game(document.querySelector(".game-field"));
  setInterval(() => start.randPosition(), 10000);
});
