"use strict";

var express = require('express');

require('dotenv').config();

var mongoose = require('mongoose');

var cors = require('cors');

var routes = require('./routes/index');

var cookieParser = require('cookie-parser');

var errorMiddleware = require('./middleware/errorHandlingMiddleware');

var app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', routes); // last handler Error 

app.use(errorMiddleware);

var start = function start() {
  return regeneratorRuntime.async(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('\n');
          _context.next = 4;
          return regeneratorRuntime.awrap(mongoose.connect(process.env.DB_CONNECTLINK));

        case 4:
          console.log('\n');
          console.log("\u2705 DB  connected");
          app.listen(process.env.PORT_APP, function () {
            console.log("\u2705 APP server       started at port ".concat(process.env.PORT_APP));
          });
          _context.next = 12;
          break;

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
};

start();