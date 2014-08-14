/**
 * Module dependencies.
 */

var react = require('react');
var dom = react.DOM;

module.exports = react.createClass({
  render: render
});

function render() {
  return dom.section({className: 'section-module'},
    dom.h3(null, 'Query-stringify'),
    dom.p(null, 'Bacon ipsum dolor sit amet sirloin boudin tail pork belly' +
    'strip steak ground round leberkas jowl short loin pancetta andouille pork' +
    'chop. Ground round tenderloin andouille pork loin ham hock ball tip.' +
    'Ham tail tri-tip, chicken ground'),
    dom.img({src: 'http://img.shields.io/travis/jshttp/vary.svg?style=flat-square'}),
    dom.img({src: 'http://img.shields.io/coveralls/jshttp/vary.svg?style=flat-square'}),
    dom.img({src: 'http://img.shields.io/npm/v/vary.svg?style=flat-square'}),
    dom.img({src: 'http://img.shields.io/npm/dm/vary.svg?style=flat-square'})
  );
}
