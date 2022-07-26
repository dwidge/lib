"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printSecondsRounded = exports.addSeconds = void 0;

var addSeconds = function addSeconds(dt, s) {
  return dt.setSeconds(dt.getSeconds() + s);
};

exports.addSeconds = addSeconds;

var printSecondsRounded = function printSecondsRounded(t) {
  var at = Math.abs(t);
  if (at < 60) return (t | 0) + 's';
  if (at < 60 * 60) return (t / 60 | 0) + 'm';
  if (at < 24 * 60 * 60) return (t / 60 / 60 | 0) + 'h';
  return (t / 60 / 60 / 24 | 0) + 'd';
};

exports.printSecondsRounded = printSecondsRounded;