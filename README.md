# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hawa-mjh/lotide`

**Require it:**

`const _ = require('@hawa-mjh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

`assertEqual` : Checks if two values are equal
`assertArraysEqual`: Checks if two arrays are equal
`assertObjectsEqual`: Checks if two objects are equal
`head`: Returns first element in array
`tail`: Returns array without the first element
`middle`: Returns element(s) in the middle of the array
`without`: Returns subset of a given array, removes unwanted elements
`flatten`: Takes array with nested arrays and returns a single flattened array
`countLetters`: Returns counts of each character within a given string
`letterPositions`: Returns the position that each character of a string is in
`countOnly`: Returns count of specific subset of items
`eqArrays`: Checks if two arrays are equal
`eqObjects`: Checks if objects are identical
`findKey`: Returns the first key that the callback function returns a truthy value for
`findKeyByValue`: Returns first key with a specific value
`map`: Returns array based on result of callback function
`takeUntil`: Takes a slice from the beginning of array