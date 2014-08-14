/* global window*/

/**
 * Module dependencies.
 */

var react = require('react');
var home = require('../../views/home');

/**
 * Render.
 */

react.renderComponent(home(), window.document.querySelector('body'));
