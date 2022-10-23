"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ApiError = require("../error/apiError");

var bcrypt = require('bcrypt');

var UserModel = require("../db/models/userModel");

var userService = require('../services/userService');

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "register",
    value: function register(req, res) {
      var _req$body, email, password, registeredUser;

      return regeneratorRuntime.async(function register$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, email = _req$body.email, password = _req$body.password;
              _context.next = 4;
              return regeneratorRuntime.awrap(userService.register(email, password));

            case 4:
              registeredUser = _context.sent;
              res.cookie('refreshToken', registeredUser.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
              });
              return _context.abrupt("return", res.status(200).json(registeredUser));

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 9]]);
    }
  }, {
    key: "login",
    value: function login(req, res) {
      return regeneratorRuntime.async(function login$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              try {} catch (e) {
                console.log(e);
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "check",
    value: function check(req, res, next) {
      return regeneratorRuntime.async(function check$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              try {} catch (e) {
                console.log(e);
              }

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "activate",
    value: function activate(req, res, next) {
      return regeneratorRuntime.async(function activate$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return regeneratorRuntime.awrap(userService.activate(req.params.link));

            case 3:
              return _context4.abrupt("return", res.redirect("".concat(process.env.BASE_CLIENT_URL, "/").concat(process.env.CLIENT_URL_ACTIVATION_PAGE)));

            case 6:
              _context4.prev = 6;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0);

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 6]]);
    }
  }]);

  return UserController;
}();

module.exports = new UserController();