import React from 'react';

var style = {
  marginTop: 4,
  lineHeight: 1.5
};

export default function ListItem(_ref) {
  var children = _ref.children;

  return React.createElement(
    'li',
    { style: style },
    children
  );
}