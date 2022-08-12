"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapObject = exports.calcObjectsFromCsv = exports.calcCsvFromObjects = void 0;

var _array = require("./array.js");

var calcCsvFromObjects = function calcCsvFromObjects(objects) {
  var del = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
  return [Object.keys(objects[0]).join(del)].concat(objects.map(function (o) {
    return Object.values(o).join(del);
  })).join('\n');
};

exports.calcCsvFromObjects = calcCsvFromObjects;

var calcObjectsFromCsv = function calcObjectsFromCsv(csv) {
  var del = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
  var lines = csv.split('\n').map(function (l) {
    return l.split(del);
  });
  var keys = lines[0];

  var numstr = function numstr(v) {
    return isNaN(+v) ? v : +v;
  };

  return lines.slice(1).map(function (l) {
    return Object.fromEntries((0, _array.transpose)([keys, l.map(numstr)]));
  });
};

exports.calcObjectsFromCsv = calcObjectsFromCsv;

var mapObject = function mapObject(from) {
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : from;
  var transform = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var passthru = function passthru(v) {
    return v;
  };

  var map = function map(o) {
    return from.map(function (name, i) {
      return (transform[i] || passthru)(o[name]);
    });
  };

  return function (o) {
    return Object.fromEntries((0, _array.transpose)([to, map(o)]));
  };
};

exports.mapObject = mapObject;