"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const store_1 = require("../../store");
const counterSlice_1 = require("../features/counterSlice");
const Counter = () => {
    // The `state` arg is correctly typed as `RootState` already
    const count = (0, store_1.useAppSelector)((state) => state.counter.value);
    const dispatch = (0, store_1.useAppDispatch)();
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ "aria-label": "Increment value", onClick: () => dispatch((0, counterSlice_1.increment)()) }, { children: "Increment" })), (0, jsx_runtime_1.jsx)("span", { children: count }), (0, jsx_runtime_1.jsx)("button", Object.assign({ "aria-label": "Decrement value", onClick: () => dispatch((0, counterSlice_1.decrement)()) }, { children: "Decrement" }))] }) }));
};
exports.default = Counter;
