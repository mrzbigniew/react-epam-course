'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

jest.mock('../../components/container', function () {
  return 'Container';
});
jest.mock('../../components/header', function () {
  return 'Header';
});
jest.mock('../../components/footer', function () {
  return 'Footer';
});
jest.mock('../../components/content', function () {
  return 'Content';
});
jest.mock('../../components/logo', function () {
  return 'Logo';
});
jest.mock('./components/search-form', function () {
  return 'SearchForm';
});
jest.mock('./components/results-list', function () {
  return 'ResultsList';
});

describe('MovieList', function () {
  it('should render', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var component;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, null));

            expect(component.toJSON()).toMatchSnapshot();

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));
});