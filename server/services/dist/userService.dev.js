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

var ApiError = require('../error/apiError');

var userService =
/*#__PURE__*/
function () {
  function userService() {
    _classCallCheck(this, userService);
  }

  _createClass(userService, [{
    key: "register",
    value: function register(email, password) {
      var isUser, activationLink, userId, hasedpassword, UserParams, user, userDto, tokens;
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

              throw ApiError.forbidden("User with email: ".concat(email, " is already exists"));

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
              userDto = new userDTO(user);
              _context.next = 19;
              return regeneratorRuntime.awrap(tokenService.generateTokens(userDto));

            case 19:
              tokens = _context.sent;
              _context.next = 22;
              return regeneratorRuntime.awrap(tokenService.saveTokens(userDto.id, tokens.refreshToken));

            case 22:
              return _context.abrupt("return", _objectSpread({
                message: 'Success registration',
                user: userDto
              }, tokens));

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
              _context2.next = 2;
              return regeneratorRuntime.awrap(UserModel.findOne({
                activationLink: activationLink
              }));

            case 2:
              user = _context2.sent;

              if (user) {
                _context2.next = 5;
                break;
              }

              throw ApiError.badRequest("User not registered");

            case 5:
              user.activationLink = null;
              user.isActivated = true;
              _context2.next = 9;
              return regeneratorRuntime.awrap(user.save());

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "login",
    value: function login(email, password) {
      var user, validatePassword, userDto, tokens;
      return regeneratorRuntime.async(function login$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(UserModel.findOne({
                email: email
              }));

            case 2:
              user = _context3.sent;

              if (user) {
                _context3.next = 5;
                break;
              }

              throw ApiError.badRequest("User with ".concat(email, " not registered"));

            case 5:
              _context3.next = 7;
              return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

            case 7:
              validatePassword = _context3.sent;

              if (validatePassword) {
                _context3.next = 10;
                break;
              }

              throw ApiError.badRequest("Password isn't correct");

            case 10:
              userDto = new userDTO(user);
              _context3.next = 13;
              return regeneratorRuntime.awrap(tokenService.generateTokens(userDto));

            case 13:
              tokens = _context3.sent;
              _context3.next = 16;
              return regeneratorRuntime.awrap(tokenService.saveTokens(userDto.id, tokens.refreshToken));

            case 16:
              return _context3.abrupt("return", _objectSpread({
                message: 'Success authorization',
                user: userDto
              }, tokens));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "logout",
    value: function logout(refreshToken) {
      var tokenData;
      return regeneratorRuntime.async(function logout$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(tokenService.removeToken(refreshToken));

            case 2:
              tokenData = _context4.sent;
              return _context4.abrupt("return", tokenData);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "refresh",
    value: function refresh(refreshToken) {
      var userData, token, user, userDto, tokens;
      return regeneratorRuntime.async(function refresh$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (refreshToken) {
                _context5.next = 2;
                break;
              }

              throw ApiError.unAuthorized();

            case 2:
              userData = tokenService.validateRefreshToken(refreshToken);
              token = tokenService.findToken(refreshToken);

              if (!(!userData || !token)) {
                _context5.next = 6;
                break;
              }

              throw ApiError.unAuthorized();

            case 6:
              _context5.next = 8;
              return regeneratorRuntime.awrap(UserModel.findById(userData.id));

            case 8:
              user = _context5.sent;
              userDto = new userDTO(user);
              _context5.next = 12;
              return regeneratorRuntime.awrap(tokenService.generateTokens(userDto));

            case 12:
              tokens = _context5.sent;
              _context5.next = 15;
              return regeneratorRuntime.awrap(tokenService.saveTokens(userDto.id, tokens.refreshToken));

            case 15:
              return _context5.abrupt("return", _objectSpread({
                message: 'Success authorization',
                user: userDto
              }, tokens));

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }]);

  return userService;
}();

module.exports = new userService();