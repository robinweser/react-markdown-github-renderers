'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlockQuote;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var className = 'react-github-markdown-renderers_blockquote';
var css = '.' + className + '[style] & p{margin-bottom:0!important}';
var style = {
  borderLeft: '4px solid rgb(223, 226, 229)',
  padding: '0 16px',
  marginBottom: 16,
  color: 'rgb(106, 115, 125)'
};

function BlockQuote(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: css } }),
    _react2.default.createElement(
      'blockquote',
      { className: className, style: style },
      children
    )
  );
}