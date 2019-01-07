import React, { Fragment } from 'react';
import { highlightAuto } from 'highlight.js';

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

export default function Code(_ref) {
  var language = _ref.language,
      value = _ref.value;

  var highlightedCode = highlightAuto(value, [language]);

  return React.createElement(
    Fragment,
    null,
    React.createElement('style', { dangerouslySetInnerHTML: { __html: githubSyntax } }),
    React.createElement(
      'pre',
      { style: preStyle },
      React.createElement('code', {
        style: codeStyle,
        dangerouslySetInnerHTML: {
          __html: highlightedCode.value
        }
      })
    )
  );
}