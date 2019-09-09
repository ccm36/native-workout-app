import { createContext } from "react";

type WorkoutDay = 'a' | 'b';

interface WorkoutHistory {
    [key: string]: Array<{
        exercise: string,
        value: number
    }>
}

/*

{
    08-16-2019: [
        {
            exercise: squat,
            value: 135
        },
        {
            exercise: bench,
            value: 185
        },
    ]
}

*/

class WorkoutStore {
    currentSquat: number;
    currentBenchPress: number;
    currentOverheadPress: number;
    currentDeadlift: number;
    currentBarbellRow: number;

    lastWorkoutType: WorkoutDay;
    history: WorkoutHistory;
}

export const WorkoutStoreContext = createContext(new WorkoutStore())