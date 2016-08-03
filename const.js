#!/usr/bin/env node

var assert = require('assert');

function f() {
  const x = 5;
  x = 6; // TypeError
}

function g() {
  const x = [5];
  assert(x[0] === 5);
  x[0] = 6;
  assert(x[0] === 6);
  x = [6]; // TypeError
}

function h() {
  const x = 5;
  {
    const x = 6;
    assert(x === 6);
  }
  assert(x === 5);
}

assert.throws(f, TypeError);
assert.throws(g, TypeError);
h();
console.log('OK');
