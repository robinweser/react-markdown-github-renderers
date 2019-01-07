import React, { createElement } from 'react';

var className = 'react-github-markdown-renderers_list';
var css = '.' + className + '[style] & ul{margin-bottom: 0!important}';
var style = {
  paddingLeft: 24,
  marginBottom: 16
};

export default function List(_ref) {
  var ordered = _ref.ordered,
      children = _ref.children;

  return createElement(ordered ? 'ol' : 'ul', {
    style: style,
    className: className
  }, children);
}