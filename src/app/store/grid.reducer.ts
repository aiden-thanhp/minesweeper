import { createReducer, on } from "@ngrx/store";
import { random } from "../utils/random";
import { play, shiftPlay } from "../utils/play";
import { GridAction } from "./grid.action";

const initialState: {
    win: boolean,
    lose: boolean,
    open: number,
    shift: Array<string>
    total: number,
    bomb: [number, number],
    grid: Array<Array<number | null>>
} = {
    win: false,
    lose: false,
    bomb: [-1, -1],
    open: 0,
    shift: [],
    total: 0,
    grid: []
}

export const GridReducer = createReducer(
    initialState,
    on(GridAction.getGrid, (state, { level }) => {
        let row: number, col: number, open: number, total: number;
        if (level == 1) {
            row = 16;
            col = 16;
            open = 40;
            total = 256;
        } else if (level == 2) {
            row = 20;
            col = 24;
            open = 99;
            total = 480;
        } else {
            row = 10;
            col = 10;
            open = 10;
            total = 100;
        }
        
        const arr = new Array(row)
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(col)
        };

        const grid = random(arr, level)

        return {
            win: false,
            lose: false,
            bomb: [-1, -1],
            open,
            shift: [],
            total,
            grid
        }
    }),
    on(GridAction.play, (state, { cell }) => {
        const game = play(state, cell)
        return game
    }),
    on(GridAction.shiftPlay, (state, { cell }) => {
        const game = shiftPlay(state, cell)
        return game;
    })
)