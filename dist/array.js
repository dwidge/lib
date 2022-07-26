"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unique = exports.transpose = exports.replaceItemById = exports.range = exports.onlyHan = exports.last = exports.getItemById = exports.dropItemById = exports.dropIfIncluded = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// gist.github.com/femto113/1784503?permalink_comment_id=1701169#gistcomment-1701169
var transpose = function transpose(a) {
  return a[0].map(function (_, c) {
    return a.map(function (r) {
      return r[c];
    });
  });
};

exports.transpose = transpose;

var last = function last(arr) {
  return arr[arr.length - 1];
};

exports.last = last;

var getItemById = function getItemById(list, id) {
  return list.find(function (o) {
    return o.id === id;
  });
};

exports.getItemById = getItemById;

var replaceItemById = function replaceItemById(list, item) {
  return list.map(function (o) {
    return o.id === item.id ? item : o;
  });
};

exports.replaceItemById = replaceItemById;

var dropItemById = function dropItemById(list, id) {
  return list.filter(function (o) {
    return o.id !== id;
  });
};

exports.dropItemById = dropItemById;

var dropIfIncluded = function dropIfIncluded(as, bs, isEq) {
  return as.filter(function (a) {
    return !bs.find(function (b) {
      return isEq(a, b);
    });
  });
};

exports.dropIfIncluded = dropIfIncluded;

var onlyHan = function onlyHan(chars) {
  return chars.filter(function (_char) {
    return /(?:[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/.test(_char);
  });
};

exports.onlyHan = onlyHan;

var unique = function unique(array) {
  return _toConsumableArray(new Set(array));
};

exports.unique = unique;

var range = function range(beg, end) {
  return Array(end - beg).map(function (_, i) {
    return i + beg;
  });
};

exports.range = range;