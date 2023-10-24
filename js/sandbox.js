// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));

// function countdown(n) {
//   // Base case: if n is less than 1, return an empty array
//   if (n < 1) {
//     return [];
//   }

//   // Recursive case: call countdown with n - 1 and append n to the result
//   const countArray = countdown(n - 1);
//   countArray.unshift(n);

//   return countArray;
// }

// // Example usage:
// console.log(countdown(5)); // Output: [5, 4, 3, 2, 1]

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum > endNum) {
//     return [];
//   } else {
//     const arr = rangeOfNumbers(startNum, endNum - 1);
//     arr.push(endNum);

//     return arr;
//   }
// }

// console.log(rangeOfNumbers(1, 5));

/* create the function which returns square of the number passed to it*/
// 1
// function square(n) {
//   return n * n;
// }
// 2
// const square = (n) => n ** 2;
// console.log(square(3));

/*In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.

 */
/**Solution */
// 1
// function testEven(n) {
//   return n % 2 ? false : true;
// }

// 2
// function testEven(n) {
//   return !(n % 2);
// }

/**
 * Given two integers a and b, which can be positive or negative,
 * find the sum of all the integers between and including them and return it. 
 * If the two numbers are equal return a or b.
Note: a and b are not ordered!
*EXAMPLES
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
 */
// 1
// function getSum(a, b) {
//   let result = 0;

//   if (a <= b) {
//     for (let i = a; i <= b; i++) {
//       result += i;
//     }
//   } else {
//     for (let i = a; i >= b; i--) {
//       result += i;
//     }
//   }

//   return result;
// }
// 2
// const getSum = (a, b) => {
//   let min = Math.min(a, b),
//     max = Math.max(a, b);
//   return ((max - min + 1) * (min + max)) / 2;
// };
// console.log(getSum(2, -1));
// console.log(getSum(0, 1));

// function expressionMatter(a, b, c) {
//   const var1 = a * (b + c);
//   const var2 = a * b * c;
//   const var3 = a + b * c;
//   const var4 = (a + b) * c;
//   const var5 = a + b + c;
//   return Math.max(var1, var2, var3, var4, var5);
// }

/**
 * Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
//  */
/**Solution */
// function rowSumOddNumbers(n) {
//   // TODO
//   const arr = [];
//   const initialValue = n ** 2 - (n - 1);

//   for (let i = initialValue; i <= initialValue + (n * 2 - 1); i++) {
//     if (i % 2) {
//       arr.push(i);
//     }
//   }
//   // return arr;
//   const total = arr.reduce((acc, number) => {
//     return acc + number;
//   }, 0);
//   console.log(total);
// }

// rowSumOddNumbers(1);

// function rentalCarCost(d) {
//   const rentCost = 40;

//   // if (d < 3) {
//   //   return d * 40;
//   // } else if (d >= 7) {
//   //   return d * 40 - 50;
//   // } else {
//   //   return d * 40 - 20;
//   // }

//   return d < 3 ? d * 40 : d >= 7 ? d * 40 - 50 : d * 40 - 20;
// }
// console.log(rentalCarCost(1));

/**count when father will be or was twice older than his son */

/**Solution */
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return dadYearsOld / sonYearsOld === 2
//     ? 0
//     : Math.abs(dadYearsOld - sonYearsOld * 2);
// }
// console.log(twiceAsOld(30, 7));

/**
 * Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
 */

/**Solution */
// var number = function (array) {
//   return array.map((text, index) => `${index + 1}: ${text}`);
// };

// console.log(number(["a", "b", "c"]));

/**
 * In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
 */

/**Solution */
// var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";

// function printerError(s) {
//   const errorChars = /[n-z]/g;
//   const errorCount = (s.match(errorChars) || []).length;

//   return `${errorCount}/${s.length}`;
// }
// console.log(printerError(s));
// function solution(str, ending) {
//   return str.slice(-1) === ending.slice(-1) && str[0] === ending[0];
//   // return str.slice(-1) === ending.slice(-1) && str[0] === ending[0];
// }
// console.log(solution("adbcde", "ae"));
// console.log(solution("abcde", "cde"));
