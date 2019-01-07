'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Paragraph;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  marginBottom: 16,
  lineHeight: 1.5
};

function Paragraph(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'p',
    { style: style },
    children
  );
}