import React from 'react';

var style = {
  backgroundColor: 'rgb(240, 242, 244)',
  padding: '4px 6px',
  fontFamily: 'Dank Mono, Hack, Fira Code, monospace',
  textRendering: 'optimizeLegibility'
};

export default function InlineCode(_ref) {
  var children = _ref.children;

  return React.createElement(
    'code',
    { style: style },
    children
  );
}