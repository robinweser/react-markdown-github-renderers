'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Code;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _highlight = require('highlight.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var preStyle = {
  width: '100%',
  maxWidth: '100%',
  overflow: 'auto',
  padding: 16,
  backgroundColor: 'rgb(244, 246, 248)',
  boxSizing: 'border-box',
  marginBottom: 16
};

var codeStyle = {
  fontFamily: 'Dank Mono, Hack, Fira Code, monospace',
  textRendering: 'optimizeLegibility'
};

var githubSyntax = '.hljs{display:block;overflow-x:auto;padding:0.5em;color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:bold}.hljs-number,.hljs-literal,.hljs-variable,.hljs-template-variable,.hljs-tag .hljs-attr{color:#008080}.hljs-string,.hljs-doctag{color:#d14}.hljs-title,.hljs-section,.hljs-selector-id{color:#900;font-weight:bold}.hljs-subst{font-weight:normal}.hljs-type,.hljs-class .hljs-title{color:#458;font-weight:bold}.hljs-tag,.hljs-name,.hljs-attribute{color:#000080;font-weight:normal}.hljs-regexp,.hljs-link{color:#009926}.hljs-symbol,.hljs-bullet{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:bold}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}';

function Code(_ref) {
  var language = _ref.language,
      value = _ref.value;

  var highlightedCode = (0, _highlight.highlightAuto)(value, [language]);

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: githubSyntax } }),
    _react2.default.createElement(
      'pre',
      { style: preStyle },
      _react2.default.createElement('code', {
        style: codeStyle,
        dangerouslySetInnerHTML: {
          __html: highlightedCode.value
        }
      })
    )
  );
}