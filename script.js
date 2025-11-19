const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");

const CELL_SIZE = 30; // Distance between grid points
const GRID_COLOR = '#888';
const LINE_WIDTH = 1;

ctx.strokeStyle = GRID_COLOR;
ctx.lineWidth = LINE_WIDTH;

// Calculate vertical spacing for isometric grid (sin(60°) = 0.866)
const vSpacing = CELL_SIZE * Math.sin(Math.PI / 3);

function drawIsometricGrid() {
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();

    // Draw vertical lines
    for (let x = 0; x <= width; x += CELL_SIZE) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
    }

    // Draw lines at +30° (down-right)
    for (let i = -Math.ceil(height / vSpacing); i < Math.ceil(width / CELL_SIZE); i++) {
        let startX = i * CELL_SIZE;
        let startY = 0;
        let endX = startX + height / Math.tan(Math.PI / 3);
        let endY = height;
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
    }

    // Draw lines at -30° (down-left)
    for (let i = 0; i < Math.ceil(width / CELL_SIZE) + Math.ceil(height / vSpacing); i++) {
        let startX = i * CELL_SIZE;
        let startY = 0;
        let endX = startX - height / Math.tan(Math.PI / 3);
        let endY = height;
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
    }

    ctx.stroke();
}

drawIsometricGrid();