import React, { Fragment } from 'react';

var className = 'react-github-markdown-renderers_a';
var css = '.' + className + '[style]:hover{text-decoration:underline!important}';
var style = {
  color: '#0366d6',
  textDecoration: 'none'
};

export default function Link(_ref) {
  var href = _ref.href,
      children = _ref.children;

  return React.createElement(
    Fragment,
    null,
    React.createElement('style', { dangerouslySetInnerHTML: { __html: css } }),
    React.createElement(
      'a',
      { href: href, className: className, style: style },
      children
    )
  );
}