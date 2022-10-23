"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./ActivationPage.scss");
var ActivationPage = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "wrapper__template" },
            react_1["default"].createElement("div", { className: "Upper" },
                react_1["default"].createElement("div", { className: "svg-box" },
                    react_1["default"].createElement("svg", { className: "circular green-stroke" },
                        react_1["default"].createElement("circle", { className: "path", cx: "75", cy: "75", r: "50", fill: "none", "stroke-width": "5", "stroke-miterlimit": "10" })),
                    react_1["default"].createElement("svg", { className: "checkmark green-stroke" },
                        react_1["default"].createElement("g", { transform: "matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-489.57,-205.679)" },
                            react_1["default"].createElement("path", { className: "checkmark__check", fill: "none", d: "M616.306,283.025L634.087,300.805L673.361,261.53" })))),
                react_1["default"].createElement("div", { className: "left" },
                    react_1["default"].createElement("p", { className: "SuccessP" }, "Success activation"),
                    react_1["default"].createElement("form", { action: "/", className: "submitForm" },
                        react_1["default"].createElement("button", { className: "submit-button" }, "Back to shop")))))));
};
exports["default"] = ActivationPage;
