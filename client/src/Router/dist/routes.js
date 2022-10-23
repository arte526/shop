"use strict";
exports.__esModule = true;
exports.RoutesForNotAuthorized = exports.RoutesForAuthorized = exports.ACTIVATION = exports.TEST_PAGE = exports.DEFAULT_PAGE = void 0;
var goodsPage_1 = require("../pages/goodsPage/goodsPage");
var ActivationPage_1 = require("../pages/successActivation/ActivationPage");
var testPage_1 = require("../pages/testPage/testPage");
exports.DEFAULT_PAGE = '/';
exports.TEST_PAGE = '/testPage';
exports.ACTIVATION = '/activation';
exports.RoutesForAuthorized = [
    {
        path: exports.DEFAULT_PAGE,
        component: goodsPage_1["default"]
    },
    {
        path: exports.ACTIVATION,
        component: ActivationPage_1["default"]
    }
];
exports.RoutesForNotAuthorized = [
    {
        path: exports.DEFAULT_PAGE,
        component: goodsPage_1["default"]
    },
    {
        path: exports.TEST_PAGE,
        component: testPage_1["default"]
    },
    {
        path: exports.ACTIVATION,
        component: ActivationPage_1["default"]
    }
];
