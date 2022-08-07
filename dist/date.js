"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.today = exports.printSecondsRounded = exports.dateYYMMDDfromSeconds = exports.dateSecondsFromYYMMDD = exports.addSeconds = void 0;

var _dateFns = require("date-fns");

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

var today = function today() {
  return (0, _dateFns.format)(new Date(), 'yyyy/MM/dd');
};

exports.today = today;

var dateYYMMDDfromSeconds = function dateYYMMDDfromSeconds(sec) {
  return new Date(sec * 1000).toLocaleDateString('en-ZA').split('/').join('-');
};

exports.dateYYMMDDfromSeconds = dateYYMMDDfromSeconds;

var dateSecondsFromYYMMDD = function dateSecondsFromYYMMDD(str) {
  var segs = str.split('-');
  var date = new Date(+segs[0], +segs[1] - 1, +segs[2]);
  return date.getTime() / 1000 | 0;
};

exports.dateSecondsFromYYMMDD = dateSecondsFromYYMMDD;