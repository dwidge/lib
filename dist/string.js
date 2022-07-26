"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepend = void 0;

var prepend = function prepend(pre) {
  return function (s) {
    return pre + s;
  };
};

exports.prepend = prepend;