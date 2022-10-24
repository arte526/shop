"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

require("dotenv").config();

var jwt = require('jsonwebtoken');

var tokenModel = require('../db/models/tokenModel');

var tokenService =
/*#__PURE__*/
function () {
  function tokenService() {
    _classCallCheck(this, tokenService);
  }

  _createClass(tokenService, [{
    key: "validateAccessToken",
    value: function validateAccessToken(token) {
      try {
        var userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        return userData;
      } catch (e) {
        return null;
      }
    }
  }, {
    key: "validateRefreshToken",
    value: function validateRefreshToken(token) {
      try {
        var userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        return userData;
      } catch (e) {
        return null;
      }
    }
  }, {
    key: "generateTokens",
    value: function generateTokens(payload) {
      var accessToken, refreshToken;
      return regeneratorRuntime.async(function generateTokens$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              accessToken = jwt.sign(_objectSpread({}, payload), process.env.JWT_ACCESS_SECRET, {
                expiresIn: '1h'
              });
              refreshToken = jwt.sign(_objectSpread({}, payload), process.env.JWT_REFRESH_SECRET, {
                expiresIn: '30d'
              });
              return _context.abrupt("return", {
                accessToken: accessToken,
                refreshToken: refreshToken
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "saveTokens",
    value: function saveTokens(user_id, refreshToken) {
      var token, tokenNew;
      return regeneratorRuntime.async(function saveTokens$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(tokenModel.findOne({
                user_id: user_id
              }));

            case 2:
              token = _context2.sent;

              if (!token) {
                _context2.next = 6;
                break;
              }

              token.refreshToken = refreshToken;
              return _context2.abrupt("return", token.save());

            case 6:
              _context2.next = 8;
              return regeneratorRuntime.awrap(tokenModel.create({
                user_id: user_id,
                refreshToken: refreshToken
              }));

            case 8:
              tokenNew = _context2.sent;
              return _context2.abrupt("return", tokenNew);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "removeToken",
    value: function removeToken(refreshToken) {
      var token;
      return regeneratorRuntime.async(function removeToken$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(tokenModel.deleteOne({
                refreshToken: refreshToken
              }));

            case 2:
              token = _context3.sent;
              return _context3.abrupt("return", token);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "findToken",
    value: function findToken(refreshToken) {
      var token;
      return regeneratorRuntime.async(function findToken$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(tokenModel.findOne({
                refreshToken: refreshToken
              }));

            case 2:
              token = _context4.sent;
              return _context4.abrupt("return", token);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }]);

  return tokenService;
}();

module.exports = new tokenService();