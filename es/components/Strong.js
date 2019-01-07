import React from 'react';

var style = {
  fontWeight: 600
};

export default function Strong(_ref) {
  var children = _ref.children;

  return React.createElement(
    'strong',
    { style: style },
    children
  );
}