import Game from "./app";

describe("Пример теста", () => {
  test.each([
    { str: "Hello!", expected: "Demo: Hello!" },
    { str: "", expected: "Demo: " },
    { str: 100, expected: "Demo: 100" },
  ])("demo($str)", ({ str, expected }) => {
    expect(demo(str)).toBe(expected);
  });
});

test("Game initializes correctly", () => {
  document.body.innerHTML = '<div class="game-field"></div>';
  const game = new Game(document.querySelector(".game-field"));
  expect(game).toBeDefined();
});
