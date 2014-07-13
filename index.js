'use strict';
var search = require('binary-search')

function SortedSet(cmp, arr) {
  if (typeof cmp != 'function')
    throw new TypeError('comparator must be a function')

  this.arr = arr || []
  this.cmp = cmp
}

SortedSet.prototype.insert = function(element) {
  var index = search(this.arr, element, this.cmp)
  if (index >= 0) {
    this.arr[index] = element
    return false
  }

  this.arr.splice(~index, 0, element)
  return true
}

SortedSet.prototype.indexOf = function(element) {
  var index = search(this.arr, element, this.cmp)
  return index >= 0
    ? index
    : -1
}

SortedSet.prototype.remove = function(element) {
  var index = search(this.arr, element, this.cmp)
  if (index < 0)
    return false

  this.arr.splice(index, 1)
  return true
}
