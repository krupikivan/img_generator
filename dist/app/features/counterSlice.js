"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementByAmount = exports.decrement = exports.increment = exports.CounterSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const counterAction_1 = require("./counterAction");
// Define the initial state using that type
const initialState = {
    value: 0,
    image: '',
};
exports.CounterSlice = (0, toolkit_1.createSlice)({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(counterAction_1.getImage.pending, (state, action) => {
            console.log('Fetching getImage.....');
        });
        builder.addCase(counterAction_1.getImage.fulfilled, (state, action) => {
            console.log('Fetched getImage.....');
            state.image = action.payload;
        });
        builder.addCase(counterAction_1.getImage.rejected, (state, action) => {
            console.log('Failed getImage.....');
        });
    }
});
_a = exports.CounterSlice.actions, exports.increment = _a.increment, exports.decrement = _a.decrement, exports.incrementByAmount = _a.incrementByAmount;
exports.default = exports.CounterSlice.reducer;
