/**
 * This worksheet adapts the final question of Exam 1 of Computing 1 2020/21.
 * Here you should complete each of the functions as they are specified.
 * Of course, this time, the code is in Javascript.
 *
 * Original Python Code and Exam, Becky Stewart @TheLeadingZero.
 */
const Exam = Object.create(null);

// Lists

// Write a function that returns a list containig every third item in
// the original list starting with the first item.
//    for example:
//      an input list of [1,2,3,4,5,6,7,8]
//      returns [1,4,7]

// Exam.every_third = function (Arr) {
//     let ArrOut = [];
//     let index;
//     for (index = 0; index < Arr.length; index +=1) {
//         if (index % 3 === 0) {
//             ArrOut.push(Arr[index]);
//         }
//     }
//     return ArrOut;
// };

Exam.every_third = function (array) {
    return array.filter((ignore, k) => k % 3 === 0);
};
// where k represents the keys (not the values/indexes)

// Strings

// Write a function that concatenates two sentences passed as inputs.
// The returned string is the first word from the first sentence,
// then the first word from the second sentence, alternating back forth.
// If the sentences are not the same number of words, a "ValueError" is thrown.
//    for example:
//       the input sentences "the cow jumped over the moon" and
//                            "jack and jill went up the"
//       returns "the jack cow and jumped jill over went the up moon the"


Exam.merge_sentences = function (sentence1, sentence2) {
    const arr1 = sentence1.split(" ");
    const arr2 = sentence2.split(" ");
    if (arr1.length !== arr2.length) {
        throw "ValueError";
    }
    return arr1.flatMap((v, k) => [v, arr2[k]]).join(" ");
};


// Write a function that returns the number of lowercase letters in
// input string.
//     for example:
//          the input "sPonGe bOb"
//          returns 6


    Exam.lowercase_count = function (input_string) {
        const string_to_array = input_string.split("");
        return string_to_array.filter((a) => a === a.toLowerCase()).length;
    };

// First you convert the string into an arry with each letter as an element.
// They you filter through the array of letters down to only
// those that are lowercase.
// Lastly find the length of the filtered array (giving the answer)


// Objects

// Write a function that returns the longest key in the input object
// whose keys are all strings.

Exam.longest_key = function (object) {
    return Object.keys(object).reduce((a, x) => (a.length >= x.length
        ? a : x));
};

// Write a function that returns the largest value that is an even value in the
// input dictionary whose values are all whole numbers.
Exam.value_greatest_even = function (input_dictionary) {
    const even = Object.values(input_dictionary).filter((k) => k % 2 === 0);
    return Math.max(...even)
};


// Arguments

// Write a function with two input arguments "username" and "location".
// The function should return text "Hello, {name}, how is {location}?".
//
// The username argument should not be set to a default,
// but the location argument should default to "London".
// Exam.greeting = function (username, location = "London") {
//     return "Hello, ${username} , how is ${location} ?" ;
// };

Exam.greeting = function (name, location = "London") {
    return `Hello, ${name}, how is ${location}?`;
};

// Write a function three input arguments,
// the first one, x, is required and the second two are
// the following keywords with default values:
//     scalar with a default of 1
//     offset with a default of 0
// The function returns the calculation x * scalar + offset for the input x
// if the output value of the calculation is positive, otherwise it returns 0.

Exam.floor_line = function (x, scalar = 1, offset = 0) {
    const ans = x * scalar + offset;
    if (ans < 0) {
        return 0;
    } else {
        return ans;
    }
};

const myarray = [1,2,3,4,5,6,7,8,9]
console.log(Exam.every_third(myarray));

export default Object.freeze(Exam);
