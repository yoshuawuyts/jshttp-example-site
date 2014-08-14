/**
 * Module dependencies.
 */

var react = require('react');
var header = require('../modules/header/header');
var element = require('../modules/module/module');
var dom = react.DOM;

/**
 * Create 'home' class.
 */

module.exports = react.createClass({
  render: render
});

/**
 * Render.
 */

function render() {
  return dom.section({className: 'section-root'},
    header(),
    dom.section({className: 'section-modules'},
      element(),
      element(),
      element(),
      element(),
      element(),
      element(),
      element(),
      element()
    )
  );
}
