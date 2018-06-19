'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
jest.mock('./components/back-to-search', function () {
  return 'BackToSearch';
});
jest.mock('./components/movie-details', function () {
  return 'MovieDetails';
});
jest.mock('./components/results-list', function () {
  return 'ResultsList';
});

describe('Movie', function () {
  it('should render', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, null));

    expect(component.toJSON()).toMatchSnapshot();
  });
});