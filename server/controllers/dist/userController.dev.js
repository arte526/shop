"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ApiError = require("../error/apiError");

var bcrypt = require('bcrypt');

var UserModel = require("../db/models/userModel");

var userService = require('../services/userService');

var _require = require('express-validator'),
    validationResult = _require.validationResult;

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "register",
    value: function register(req, res, next) {
      var isValid, _req$body, email, password, userData;

      return regeneratorRuntime.async(function register$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              isValid = validationResult(req);

              if (isValid.isEmpty()) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", next(ApiError.badRequest("Error with validation", isValid.array())));

            case 4:
              _req$body = req.body, email = _req$body.email, password = _req$body.password;
              _context.next = 7;
              return regeneratorRuntime.awrap(userService.register(email, password));

            case 7:
              userData = _context.sent;
              res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
              });
              return _context.abrupt("return", res.status(200).json(userData));

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              next(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 12]]);
    }
  }, {
    key: "login",
    value: function login(req, res, next) {
      var _req$body2, email, password, userData;

      return regeneratorRuntime.async(function login$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
              _context2.next = 4;
              return regeneratorRuntime.awrap(userService.login(email, password));

            case 4:
              userData = _context2.sent;
              res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
              });
              return _context2.abrupt("return", res.status(200).json(userData));

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              next(_context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 9]]);
    }
  }, {
    key: "logout",
    value: function logout(req, res, next) {
      var refreshToken, token;
      return regeneratorRuntime.async(function logout$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              refreshToken = req.cookies.refreshToken;
              _context3.next = 4;
              return regeneratorRuntime.awrap(userService.logout(refreshToken));

            case 4:
              token = _context3.sent;
              res.clearCookie('refreshToken');
              return _context3.abrupt("return", res.json({
                message: 'Successful logout',
                token: token
              }));

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              next(_context3.t0);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 9]]);
    }
  }, {
    key: "refresh",
    value: function refresh(req, res, next) {
      var refreshToken, userData;
      return regeneratorRuntime.async(function refresh$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              refreshToken = req.cookies.refreshToken;
              _context4.next = 4;
              return regeneratorRuntime.awrap(userService.refresh(refreshToken));

            case 4:
              userData = _context4.sent;
              res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
              });
              return _context4.abrupt("return", res.status(200).json(userData));

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              next(_context4.t0);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 9]]);
    }
  }, {
    key: "check",
    value: function check(req, res, next) {
      return regeneratorRuntime.async(function check$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              try {} catch (e) {
                next(e);
              }

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }, {
    key: "activate",
    value: function activate(req, res, next) {
      return regeneratorRuntime.async(function activate$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return regeneratorRuntime.awrap(userService.activate(req.params.link));

            case 3:
              return _context6.abrupt("return", res.redirect("".concat(process.env.BASE_CLIENT_URL, "/").concat(process.env.CLIENT_URL_ACTIVATION_PAGE)));

            case 6:
              _context6.prev = 6;
              _context6.t0 = _context6["catch"](0);
              next(_context6.t0);

            case 9:
            case "end":
              return _context6.stop();
          }
        }
      }, null, null, [[0, 6]]);
    }
  }]);

  return UserController;
}();

module.exports = new UserController();