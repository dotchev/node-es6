#!/usr/bin/env node

var assert = require('assert');

function sum(a, b, c) {
  return a + b + c;
}

var args = [1, 2, 3];
assert(sum.apply(null, args) === 6);
assert(sum(...args) === 6);
assert(sum(...[3, 4], 5) === 12);

var items = [...args, 4, 5];
assert.deepEqual(items, [1, 2, 3, 4, 5]);

var par = [...args]; // like args.slice()
par[0] = 5;
assert(par[0] === 5 && args[0] === 1);

console.log('OK');
