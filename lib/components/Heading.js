'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Heading;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = function style(level) {
  return {
    marginTop: 8,
    marginBottom: 16,
    lineHeight: 1.25,
    paddingBottom: 2,
    fontWeight: 500,
    borderBottom: level < 3 ? '1px solid rgb(240, 240, 240)' : 0
  };
};

function Heading(_ref) {
  var level = _ref.level,
      children = _ref.children;

  return (0, _react.createElement)('h' + level, {
    style: style(level)
  }, children);
}