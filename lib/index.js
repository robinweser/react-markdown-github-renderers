'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BlockQuote = require('./components/BlockQuote');

var _BlockQuote2 = _interopRequireDefault(_BlockQuote);

var _Code = require('./components/Code');

var _Code2 = _interopRequireDefault(_Code);

var _Heading = require('./components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _InlineCode = require('./components/InlineCode');

var _InlineCode2 = _interopRequireDefault(_InlineCode);

var _Link = require('./components/Link');

var _Link2 = _interopRequireDefault(_Link);

var _List = require('./components/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('./components/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Paragraph = require('./components/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Strong = require('./components/Strong');

var _Strong2 = _interopRequireDefault(_Strong);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  link: _Link2.default,
  blockquote: _BlockQuote2.default,
  list: _List2.default,
  listItem: _ListItem2.default,
  paragraph: _Paragraph2.default,
  strong: _Strong2.default,
  heading: _Heading2.default,
  inlineCode: _InlineCode2.default,
  code: _Code2.default
};