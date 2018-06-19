'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', '', '', ''], ['', '', '', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* eslint-disable prop-types */

var endpoint = 'http://react-cdp-api.herokuapp.com/';

var glue = function glue(strings) {
  return (arguments.length <= 3 ? undefined : arguments[3]) ? '' + (arguments.length <= 1 ? undefined : arguments[1]) + (arguments.length <= 2 ? undefined : arguments[2]) + '?' + (arguments.length <= 3 ? undefined : arguments[3]) : '' + (arguments.length <= 1 ? undefined : arguments[1]) + (arguments.length <= 2 ? undefined : arguments[2]);
};

var generateQueryString = function generateQueryString(params) {
  return params ? Object.keys(params).filter(function (key) {
    return params[key];
  }).map(function (key) {
    return [key, params[key].toString().trim()].join('=');
  }).join('&') : '';
};

var fetchData = exports.fetchData = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
    var path = _ref2.path,
        params = _ref2.params;
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(glue(_templateObject, endpoint, path, generateQueryString(params)), {
              method: 'GET',
              mode: 'cors'
            });

          case 2:
            data = _context.sent;
            return _context.abrupt('return', data.json());

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function fetchData(_x) {
    return _ref.apply(this, arguments);
  };
}();

var fetchMovies = exports.fetchMovies = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { offset: 0, limit: 10000 };
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', fetchData({ path: 'movies', params: params }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function fetchMovies() {
    return _ref3.apply(this, arguments);
  };
}();

var fetchMovie = exports.fetchMovie = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', fetchData({ path: 'movies/' + id }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function fetchMovie(_x3) {
    return _ref4.apply(this, arguments);
  };
}();