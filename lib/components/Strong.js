'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Strong;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  fontWeight: 600
};

function Strong(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'strong',
    { style: style },
    children
  );
}