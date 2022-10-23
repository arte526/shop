"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserModel = require('../db/models/userModel');

var uuid = require('uuid');

var bcrypt = require('bcrypt');

var _require = require('./mailService'),
    sendActivationMail = _require.sendActivationMail;

var tokenService = require('./tokenService');

var userDTO = require('../dtos/userDto');

var userService =
/*#__PURE__*/
function () {
  function userService() {
    _classCallCheck(this, userService);
  }

  _createClass(userService, [{
    key: "register",
    value: function register(email, password) {
      var isUser, activationLink, userId, hasedpassword, UserParams, user, tokenUserDTO, tokens;
      return regeneratorRuntime.async(function register$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(UserModel.findOne({
                email: email
              }));

            case 2:
              isUser = _context.sent;

              if (!isUser) {
                _context.next = 5;
                break;
              }

              throw new Error("User with email: ".concat(email, " is already exists"));

            case 5:
              activationLink = uuid.v4();
              userId = uuid.v4();
              _context.next = 9;
              return regeneratorRuntime.awrap(bcrypt.hash(password, 7));

            case 9:
              hasedpassword = _context.sent;
              UserParams = {
                user_id: userId,
                email: email,
                password: hasedpassword,
                activationLink: activationLink
              };
              user = new UserModel(UserParams);
              _context.next = 14;
              return regeneratorRuntime.awrap(user.save());

            case 14:
              _context.next = 16;
              return regeneratorRuntime.awrap(sendActivationMail(email, "".concat(process.env.BASE_API_URL, "/api/user/activate/").concat(activationLink)));

            case 16:
              tokenUserDTO = new userDTO(user);
              _context.next = 19;
              return regeneratorRuntime.awrap(tokenService.generateTokens(tokenUserDTO));

            case 19:
              tokens = _context.sent;
              _context.next = 22;
              return regeneratorRuntime.awrap(tokenService.saveTokens(tokenUserDTO.id, tokens.refreshToken));

            case 22:
              return _context.abrupt("return", _objectSpread({}, tokens, {
                user: tokenUserDTO
              }));

            case 23:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "activate",
    value: function activate(activationLink) {
      var user;
      return regeneratorRuntime.async(function activate$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(UserModel.findOne({
                activationLink: activationLink
              }));

            case 3:
              user = _context2.sent;

              if (user) {
                _context2.next = 6;
                break;
              }

              throw new Error("User not registered");

            case 6:
              user.activationLink = null;
              user.isActivated = true;
              _context2.next = 10;
              return regeneratorRuntime.awrap(user.save());

            case 10:
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 12]]);
    }
  }]);

  return userService;
}();

module.exports = new userService();