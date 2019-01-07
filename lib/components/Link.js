'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Link;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var className = 'react-github-markdown-renderers_a';
var css = '.' + className + '[style]:hover{text-decoration:underline!important}';
var style = {
  color: '#0366d6',
  textDecoration: 'none'
};

function Link(_ref) {
  var href = _ref.href,
      children = _ref.children;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: css } }),
    _react2.default.createElement(
      'a',
      { href: href, className: className, style: style },
      children
    )
  );
}