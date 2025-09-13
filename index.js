import { filterArray } from "./data/arry.js";

import { sortArray } from "./data/sort.js";

import { convertToASCII } from "./strin/lower.js";

import { changeCase } from "./strin/ascci.js";

console.log("Filter:", filterArray([1,2,3,4,5], "x > 3"));

console.log("Sort:", sortArray([5,4,3,2,1]));

console.log("ASCII:", convertToASCII("ABC"));

console.log("Upper:", changeCase("abc", "upper"));

console.log("Lower:", changeCase("ABC", "lower"));
