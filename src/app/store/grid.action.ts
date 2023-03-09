import { createActionGroup, props } from "@ngrx/store";

export type level = 0 | 1 | 2;

export const GridAction = createActionGroup({
    source: "[App] Grid",
    events: {
        "Get Grid": props<{ level: level }>(),
        "Play": props<{ cell: [number, number] }>(),
        "Shift Play": props<{ cell: [number, number] }>(),
    }
})