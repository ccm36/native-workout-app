"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
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
var WorkoutStore = /** @class */ (function () {
    function WorkoutStore() {
    }
    return WorkoutStore;
}());
exports.WorkoutStoreContext = react_1.createContext(new WorkoutStore());
