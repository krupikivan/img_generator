"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppSelector = exports.useAppDispatch = exports.store = void 0;
const react_redux_1 = require("react-redux");
const toolkit_1 = require("@reduxjs/toolkit");
const counterSlice_1 = require("./app/features/counterSlice");
// ...
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        counter: counterSlice_1.CounterSlice.reducer,
    },
});
exports.useAppDispatch = react_redux_1.useDispatch;
exports.useAppSelector = react_redux_1.useSelector;
