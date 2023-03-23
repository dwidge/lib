"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapObject = exports.calcObjectsFromCsv = exports.calcCsvFromObjects = void 0;

var _array = require("./array.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var calcCsvFromObjects = function calcCsvFromObjects(objects) {
  var del = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
  var arraydel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ';';
  return objects.length ? [Object.keys(objects[0]).join(del)].concat(objects.map(function (o) {
    return Object.values(o).map(csvFromObject(arraydel)).join(del);
  })).join('\n') : '';
};

exports.calcCsvFromObjects = calcCsvFromObjects;

var csvFromObject = function csvFromObject(arraydel) {
  return function (a) {
    if (arraydel && a instanceof Array) return a.map(csvFromObject()).join(arraydel);
    if (_typeof(a) === "object") return JSON.stringify(a);
    return a;
  };
};

var calcObjectsFromCsv = function calcObjectsFromCsv(csv) {
  var del = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
  var arraydel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ';';
  var lines = csv.split('\n').map(function (l) {
    return l.split(del);
  });
  var keys = lines[0];

  var numstr = function numstr(v) {
    return isNaN(+v) ? v : +v;
  };

  var arrstr = function arrstr(v) {
    var _parseJson;

    return v.includes(arraydel) ? v.split(arraydel).map(numstr) : (_parseJson = parseJson(v)) !== null && _parseJson !== void 0 ? _parseJson : numstr(v);
  };

  return lines.slice(1).map(function (l) {
    return Object.fromEntries((0, _array.transpose)([keys, l.map(arrstr)]));
  });
};

exports.calcObjectsFromCsv = calcObjectsFromCsv;

var parseJson = function parseJson(s) {
  try {
    return JSON.parse(s);
  } catch (e) {
    return;
  }
};

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