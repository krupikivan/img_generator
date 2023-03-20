"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("../App.css");
const Form = () => {
    const [term, setTerm] = (0, react_1.useState)('');
    const submitForm = (event) => {
        // Preventing the page from reloading
        event.preventDefault();
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "container" }, { children: (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: submitForm }, { children: [(0, jsx_runtime_1.jsx)("input", { value: term, onChange: (e) => setTerm(e.target.value), type: "text", placeholder: "Enter a Prompt", className: "input" }), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "submit", className: "btn" }, { children: "Get Image" }))] })) })));
};
exports.default = Form;
