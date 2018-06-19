'use strict';

var _configureStore = require('./configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('configureStore', function () {
  it('should be a function', function () {
    expect(_configureStore2.default).toBeInstanceOf(Function);
  });

  it('should return object with store and persister objects', function () {
    var result = (0, _configureStore2.default)();

    expect(result.store).toBeDefined();
    expect(result.persistor).toBeDefined();

    global.window.devToolsExtension = function () {
      return function (f) {
        return f;
      };
    };

    result = (0, _configureStore2.default)();
    expect(result.store).toBeDefined();
    expect(result.persistor).toBeDefined();
  });
}); /* eslint-disable prop-types */