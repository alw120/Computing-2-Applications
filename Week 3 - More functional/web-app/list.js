const List = Object.create(null);

// Returns a new array with entries from 0 to n - 1
const new_array = Array;
List.sequence = (n) => new_array(n).fill().map((ignore, k) => k);

const sequence2 = (number) => Array.from(new Array(number).keys());
console.log(sequence2(5)); //returns [0, 1, 2, 3, 4]

/* Transposes an array (swaps rows and columns). */
List.transpose = (list) => list[0].map(
    (ignore, colIndex) => list.map((row) => row[colIndex])
);


/* 1. Returns an array with equally spaced entries starting at start
and ending at end (exclusive) in steps of step.
i.e. range(2, 5, 0.5) = [2, 2.5, 3, 3.5, 4, 4.5].
range = (start, end, step) => array */

List.range = (start, end, step) => new_array.from(
    {length: (end - start) / step + 1}, (_, i) => start + (i * step));

console.log(List.range);

// function range(start, end, num, endpoint = true) {
//     const div = (endpoint ? (num - 1) : num);
//     const step = (end - start) / div;
//     return Array.from({length: num}, (_, i) => start + step * i);
// }
    // range(1,2,3) returns [ 1, 1.5, 2 ]

/* 2. Write curried versions of map, includes, filter, every, some,
 flat_map – i.e. for map, write a function with the signature
 map = (function) => (array) => array, that on its first call takes a function,
and on its 2nd takes an array and returns that function mapped to the array.*/

//Map
const map = (func) => (array) => array.map(func);
console.log(map(List.range)([1, 2, 3, 4]));

//Fiter
const filter = (element) => (condition) => condition.element === element;
filter(3, 3);

//Include

//Every

//Some

//Flat_map

/* 3. Write reject = (function) => (array) => array, which is
the oposite of filter,e.g. removes all values for which the
function returns true. */

//reject = (function) => (array) => array

function reject(array, iteratorFunction) {
    return array.filter(function (item) {
        return !iteratorFunction(item);
    });
}

reject([1, 2, 3, 4], List.range);
/* console.log(reject([1, 2, 3, 4, 5], iteratorFunction))
where iterator function is any function e.g. range (an above example) */

// 4. Code that returns the first element of the array, also write last
List.first = (array) => (array[0]);
console.log(List.first([1, 2, 3])); // returns [1]

List.last = (array) => array[array.length - 1];
console.log(List.last([1, 2, 3])); // returns [3]

// 5. Return an array with the first element removed.
List.rest = (array) => array.slice(1);
console.log(List.rest(["a", "b", "c"])); // returns ['b', 'c']

// 6. Return an array with the last element removed.
List.most = (array) => array.slice(0, -1);
console.log(List.most([1, 2, 3, 4, 5])); //returns [1, 2, 3, 4]

/* 7. Zip is a function like map but that applies to two arrays.
E.g. zip(g)([a, b, c])([x, y, z]) would return [g(a, x), g(b, y), g(c, z)]. */

List.zip = (func) => (arr1) => (arr2) => arr1.map((ignore, index) => 
func(arr1[index], arr2[index]));

// function zippp(arrays) {
//     return arrays[0].map(function (i) {
//         return arrays.map(function (array) {
//             return array[i];
//         });
//     });
// }

console.log(List.zip([1, 2, 3, 4]));

/* '_' is a valid variable identifier in JavaScript,
and could theoretically refer to anything. */



export default Object.freeze(List);
