#!/usr/bin/env node

var assert = require('assert');

function f() {
  let arr = [1, 2, 3];
  var res = '';
  for (const v of arr) {
    res += v;
  }
  assert.equal(res, '123');
}

function g() {
  let str = 'abc';
  var res = '';
  for (const v of str) {
    res += v;
  }
  assert.equal(res, str);
}

function h() {
  var x = { a: 1, b: 5 };

  for (let v of x) { // TypeError
    console.log(v);
  }
}

f();
g();
assert.throws(h, TypeError);
console.log('OK');
