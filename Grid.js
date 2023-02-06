export default class Grid {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.elements = [];
    }

    handleGridClick = (event, canvas) => {
        const canvasLeft = canvas.offsetLeft + canvas.clientLeft;
        const canvasTop = canvas.offsetTop + canvas.clientTop;
        const x = event.pageX - canvasLeft;
        const y = event.pageY - canvasTop;

        const cellWidth = canvas.width / this.columns;
        const cellHeight = canvas.height / this.rows;

        const columnIndex = Math.floor(x / cellWidth);
        const rowIndex = Math.floor(y / cellHeight);

        return [rowIndex, columnIndex];
    };

    draw = (ctx, canvasWidth, canvasHeight) => {
        const cellWidth = canvasWidth / this.columns;
        const cellHeight = canvasHeight / this.rows;

        // Draw vertical lines
        for (let i = 0; i <= this.columns; i++) {
            ctx.moveTo(i * cellWidth, 0);
            ctx.lineTo(i * cellWidth, canvasHeight);
            ctx.stroke();
        }

        // Draw horizontal lines
        for (let i = 0; i <= this.rows; i++) {
            ctx.moveTo(0, i * cellHeight);
            ctx.lineTo(canvasWidth, i * cellHeight);
            ctx.stroke();
        }
    };
}
