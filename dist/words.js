"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wordsOfString = exports.paragraphsOfString = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var paragraphsOfString = function paragraphsOfString(h) {
  var ps = [];
  var reg = /<p(|\s+[^>]*)>(.*?)<\/p\s*>/g;
  var result;

  while (ps.length < 99 && (result = reg.exec(h)) !== null) {
    var p = result[2];
    ps.push(p);
  }

  return ps;
};

exports.paragraphsOfString = paragraphsOfString;

var stripWhitespace = function stripWhitespace(s) {
  return s.replace(/\s+/g, ' ');
};

var stripAnchors = function stripAnchors(s) {
  return s.replace(/<a(|\s+[^>]*)>(.*?)<\/a\s*>/g, '');
};

var stripSpans = function stripSpans(s) {
  return s.replace(/<(i|b|span)(|\s+[^>]*)>(.*?)<\/(i|b|span)\s*>/g, '$3');
};

var stripDigits = function stripDigits(s) {
  return s.replace(/[0-9]+/g, '');
};

var stripHtml = function stripHtml(s) {
  return s.replace(/<[^>]*>/g, '');
};

var punc = '.,!?"'.split('');

var replace = function replace(abs) {
  return function (s) {
    return abs.reduce(function (t, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          a = _ref2[0],
          b = _ref2[1];

      return t.split(a).join(b);
    }, s);
  };
};

var padchars = function padchars(chars) {
  return replace(chars.map(function (c) {
    return [c, ' ' + c + ' '];
  }));
};

var wordsOfString = function wordsOfString(h) {
  h = h.toLowerCase();
  h = stripWhitespace(h);
  h = stripAnchors(h);
  h = stripSpans(h);
  h = stripDigits(h);
  h = stripHtml(h);
  h = h.replace(/[^a-zA-Z- ]/g, '');
  h = padchars(punc)(h).split(' ').map(function (w) {
    return w.trim();
  }).filter(function (v) {
    return v;
  });
  return h;
};

exports.wordsOfString = wordsOfString;