'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _reactMockRouter = require('react-mock-router');

var _reactMockRouter2 = _interopRequireDefault(_reactMockRouter);

var _reactRouterDom = require('react-router-dom');

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

jest.mock('../../../../components/button', function () {
  return 'Button';
});

describe('BackToSearch', function () {
  it('should render', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var history, component;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            history = {
              goBack: jest.fn()
            };
            component = _reactTestRenderer2.default.create(_react2.default.createElement(
              _reactMockRouter2.default,
              null,
              _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
                  return _react2.default.createElement(_index2.default, Object.assign(props, history));
                } })
            ));

            expect(component.toJSON()).toMatchSnapshot();

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));

  describe('#wrapper', function () {
    var history = {
      goBack: jest.fn()
    };

    it('clicking on button should trigger history goBack method', function () {
      var context = {
        router: {
          route: {
            location: '',
            match: {
              url: '',
              params: {},
              path: ''
            }
          },
          history: {
            path: '',
            createHref: jest.fn(),
            push: jest.fn(),
            replace: jest.fn(),
            goBack: jest.fn()
          }
        }
      };

      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
          return _react2.default.createElement(_index2.default, props);
        } }), { context: context });

      wrapper.find('.btn').at(0).simulate('click');

      expect(context.router.history.goBack).toBeCalled();
    });
  });
});