import React, { Fragment } from 'react';

var className = 'react-github-markdown-renderers_blockquote';
var css = '.' + className + '[style] & p{margin-bottom:0!important}';
var style = {
  borderLeft: '4px solid rgb(223, 226, 229)',
  padding: '0 16px',
  marginBottom: 16,
  color: 'rgb(106, 115, 125)'
};

export default function BlockQuote(_ref) {
  var children = _ref.children;

  return React.createElement(
    Fragment,
    null,
    React.createElement('style', { dangerouslySetInnerHTML: { __html: css } }),
    React.createElement(
      'blockquote',
      { className: className, style: style },
      children
    )
  );
}