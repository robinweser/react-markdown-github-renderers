'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = List;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var className = 'react-github-markdown-renderers_list';
var css = '.' + className + '[style] & ul{margin-bottom: 0!important}';
var style = {
  paddingLeft: 24,
  marginBottom: 16
};

function List(_ref) {
  var ordered = _ref.ordered,
      children = _ref.children;

  return (0, _react.createElement)(ordered ? 'ol' : 'ul', {
    style: style,
    className: className
  }, children);
}