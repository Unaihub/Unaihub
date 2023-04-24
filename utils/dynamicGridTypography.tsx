const canvas = document.getElementById("animationCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

canvas.width = 200;
canvas.height = 200;

const gridWidth = 5;
const gridHeight = 10;
const cellSize = 20;

const letterU = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
];

function drawCell(x: number, y: number, cellState: number): void {
  ctx.fillStyle = cellState ? "#ffffff" : "#000000";
  ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
}

function animateLetter(): void {
  for (let y = 0; y < gridHeight; y++) {
    for (let x = 0; x < gridWidth; x++) {
      const cellState = Math.random() > 0.5 ? letterU[y][x] : 0;
      drawCell(x, y, cellState);
    }
  }
}

export default animateLetter;
