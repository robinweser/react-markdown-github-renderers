'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InlineCode;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  backgroundColor: 'rgb(240, 242, 244)',
  padding: '4px 6px',
  fontFamily: 'Dank Mono, Hack, Fira Code, monospace',
  textRendering: 'optimizeLegibility'
};

function InlineCode(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'code',
    { style: style },
    children
  );
}