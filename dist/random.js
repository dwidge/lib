"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uuid = void 0;

var uuid = function uuid() {
  return performance.now() ^ Math.random() * 0x1000000;
};

exports.uuid = uuid;