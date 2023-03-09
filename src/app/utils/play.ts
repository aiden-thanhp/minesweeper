export type game = {
    win: boolean,
    lose: boolean,
    open: number,
    total: number,
    bomb: [number, number],
    shift: Array<string>
    grid: Array<Array<number | null>>
}

export const shiftPlay = (game: game, cell: [number, number]) => {
    let win: boolean = false;
    let lose: boolean = false;
    let open: number = game.open;
    let shift: Array<string> = [...game.shift]
    let total: number = game.total;
    let bomb: [number, number] = [...game.bomb];
    let grid = JSON.parse(JSON.stringify(game.grid));

    if (shift.includes(`${cell[0]}-${cell[1]}`)) {
        shift = shift.filter((item) => {
            return item != `${cell[0]}-${cell[1]}`
        })
    } else shift.push(`${cell[0]}-${cell[1]}`)
    
    return {
        win,
        lose,
        open,
        bomb,
        shift,
        total, 
        grid
    };
}

export const play = (game: game, cell: [number, number]) => {
    let win: boolean = false;
    let lose: boolean = false;
    let open: number = game.open;
    let shift: Array<string> = [...game.shift]
    let total: number = game.total;
    let bomb: [number, number] = [...game.bomb]
    const newGrid = JSON.parse(JSON.stringify(game.grid))   

    if (shift.includes(`${cell[0]}-${cell[1]}`)) {
        shift = shift.filter((item) => {
            return item != `${cell[0]}-${cell[1]}`
        })
    }

    if (newGrid[cell[0]][cell[1]] == -1) {
        lose = true;
        shift = [];
        bomb = [cell[0], cell[1]]
    } else {
        open = helper(shift, open, newGrid, cell[0], cell[1]);
    }
    
    if (open == total) {
        win = true;
    };

    console.log(open, win)

    return {
        win,
        lose,
        open,
        bomb,
        shift,
        total, 
        grid: newGrid
    };
}

const helper = (shift: Array<string>, open: number, grid: Array<Array<number | null>>, row: number, col: number) => {
    if (shift.includes(`${row}-${col}`)) {
        shift.forEach((item, index) => {
            if (item == `${row}-${col}`) {
                shift.splice(index, 1)
            }
        })
    }

    if (typeof grid[row][col] != "undefined" && grid[row][col] != -2) {
        const val = count(grid, row, col);
        open ++;
        if (val != -1) grid[row][col] = val;
        if (grid[row][col] == 0) {
            grid[row][col] = -2
            if(grid[row][col+1] == null) open = helper(shift, open, grid, row, col+1)
            if(grid[row][col-1] == null) open = helper(shift, open, grid, row, col-1)
            if (grid[row+1] && grid[row+1][col] == null) {
                open = helper(shift, open, grid, row+1, col)
            }
            if (grid[row-1] && grid[row-1][col] == null) {
                open = helper(shift, open, grid, row-1, col)
            }
            grid[row][col] = 0;
        }   
    }
    return open;
}

const count = (grid: Array<Array<number | null>>, row: number, col: number) => {
    let count = 0;

    if (grid[row+1] && grid[row+1][col] == -1) count ++;
    if (grid[row-1] && grid[row-1][col] == -1) count ++;
    if (grid[row] && grid[row][col+1] == -1) count ++;
    if (grid[row] && grid[row][col-1] == -1) count ++;
    if (grid[row+1] && grid[row+1][col+1] == -1) count ++;
    if (grid[row+1] && grid[row+1][col-1] == -1) count ++;
    if (grid[row-1] && grid[row-1][col+1] == -1) count ++;
    if (grid[row-1] && grid[row-1][col-1] == -1) count ++;

    return count;
}