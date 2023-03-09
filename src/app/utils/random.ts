export const random = (grid: Array<Array<number | null>>, level: number) => {
    if (level == 0) {
        for (let i = 1; i <= 10; i++) {
            let row: number = Math.floor(Math.random() * 10);
            let col: number = Math.floor(Math.random() * 10);
            while (grid[row][col] == -1) {
                row = Math.floor(Math.random() * 10);
                col = Math.floor(Math.random() * 10);
            }
            grid[row][col] = -1;
        }
    } else if (level == 1) {
        for (let i = 1; i <= 40; i++) {
            let row: number = Math.floor(Math.random() * 16);
            let col: number = Math.floor(Math.random() * 16);
            while (grid[row][col] == 1) {
                row = Math.floor(Math.random() * 16);
                col = Math.floor(Math.random() * 16);
            }
            grid[row][col] = -1;
        }
    } else if (level == 2) {
        for (let i = 1; i <= 99; i++) {
            let row: number = Math.floor(Math.random() * 20);
            let col: number = Math.floor(Math.random() * 24);
            while (grid[row][col] == -1) {
                row = Math.floor(Math.random() * 20);
                col = Math.floor(Math.random() * 24);
            }
            grid[row][col] = -1;
        }
    }

    return grid;
}