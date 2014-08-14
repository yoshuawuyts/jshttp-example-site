/**
 * Module dependencies.
 */

var react = require('react');
var dom = react.DOM;

module.exports = react.createClass({
  render: render
});

function render() {
  return dom.header({className: 'section-header'},
    dom.h1(null, 'jshttp')
  );
}
