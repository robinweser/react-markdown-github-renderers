import React from 'react';

var style = {
  marginBottom: 16,
  lineHeight: 1.5
};

export default function Paragraph(_ref) {
  var children = _ref.children;

  return React.createElement(
    'p',
    { style: style },
    children
  );
}