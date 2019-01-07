'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ListItem;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  marginTop: 4,
  lineHeight: 1.5
};

function ListItem(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'li',
    { style: style },
    children
  );
}