# sorted-cmp-set

  a sorted set, with user-supplied sorting.

## Installation

    npm install sorted-cmp-set

## API
  
  `var SortedSet = require('sorted-cmp-set')`

### new SortedSet(function cmp(a, b) → -1|0|-1, arr = [])

  Creates a new sorted set with the supplied comparison function, backed by either a fresh array or a supplied one.

#### sortedSet.arr

  The backing array.

#### sortedSet.insert(element) → Boolean

  Inserts an element into the set.
  Returns `true` if it *added* the element, `false` if it *replaced* an existing element.

#### sortedSet.indexOf(element) → Integer

  Returns the index of the element, or `-1` if it wasn't found.

#### sortedSet.remove(element) → Boolean

  Removes an element from the set.
  Returns `true` if the element was removed, `false` if it wasn't there in the first place.

