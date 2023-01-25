// function getExtremeElements(array) {
//   // Change code below this line

//   const firstElement = array[0];
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];
//   array = [firstElement, lastElement];

//   let result = array;
//   console.log(result);
//   // Change code above this line
// }
// getExtremeElements(["apple", "peach", "palm", "banana"]);
// getExtremeElements([1, 2, 3, 4, 5]);

// const message = "Web-development is creative work";
// let words = message.split(" ");
// const wordsQ = words.length;
// console.log(words);
// console.log(wordsQ);
// const price = 10;
// let summ = wordsQ * price;
// console.log(summ);

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let words = message.split(" ");

//   const wordsQuantity = words.length;
//   let summ = pricePerWord * wordsQuantity;

//   console.log(summ);
//   // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);

// function slugify(title) {
// Change code below this line

// title = title.split(" ");
// title = title.join("-");
// console.log(slug);
// let slug = title.join("-");
// console.log(slug);

// Change code above this line
// }
// slugify("Arrays for begginers");

// SUMM OF NUMBERS
// 1
// function calculateTotal(number) {
//   // Change code below this line
//   let summ = 0;
//   for (let i = 1; i <= number; i++) {
//     summ += i;
//   }
//   console.log(summ);
//   // Change code above this line
// }
// calculateTotal(3);
// 2
// function calculateTotal(number) {
//   if (n == 1) return 1;
//   return n + calculateTotal(n - 1);
// }

// console.lof(calculateTotal(100));
// 3
// function calculateTotal(number) {
//   return (n * (n + 1)) / 2;
// }

// console.log(calculateTotal(100));
// function findLongestWord(string = " ") {
//   const stringSplit = string.split(" ");
//   let longestWord = "";

//   for (const word of stringSplit) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return word.length;
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
// function filterArray(numbers, value) {
//   // Change code below this line
//   let number = 0;
//   let arr = [];

//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);
// function filterArray(numbers, value) {
//   // Change code below this line
//   let number = [];
//   for (let i = 0; i <= numbers.length; i++) {
//     if (numbers[i] > value) {
//       number.push(numbers[i]);
//     }
//   }
//   // return number;
//   console.log(number);
//   // Change code above this line
// }

// filterArray([12, 24, 8, 41, 76], 20);

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const ln1 = array1.length;
//   const ln2 = array2.length;
//   let array = [];
//   for (let i = 0; i < ln1; i += 1) {
//     array = array1[i];
//     for (let j = 0; j < ln2; j += 1) {
//       if (array == array2[j]) {
//         console.log(array.push(array2[j]));
//       }
//     }
//   }
//   // Change code above this line
// }
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   newArray = [];
//   for (x of array1) {
//     if (array2.includes(x)) {
//       newArray.push(x);
//     }
//   }
//   console.log(newArray);
//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   console.log(newArray);
//   // Change code above this line
// }
// // getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let newArr = [];

//   for (let i = start; i <= end; i += 1) {
//     // console.log(i);
//     if (i % 2 === 0) {
//       newArr.push(i);
//     }
//   }
//   console.log(newArr);
//   // Change code above this line
// }
// getEvenNumbers(6, 12);

// function includes(array, value) {
//   // Change code below this line
//   let x = false;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] != value) {
//       // return x;
//       console.log(x);
//     } else {
//       x = true;
//       return x;
//       console.log(x);
//     }
//   }
//   console.log(x);
//   // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 17);
// let s1 = 95;
// let s2 = 99;
// let s3 = 92;
// const s0 = (s1 + s2 + s3) / 3;
// console.log(s0);
// function getGrade(s1, s2, s3) {
//   // Code here
//   const s0 = (s1 + s2 + s3) / 3;
//   console.log(s0);
//   let lettter = "";
//   if (s0 >= 90 && s0 <= 100) {
//     console.log((letter = "A"));
//   } else if (s0 >= 80 || s0 < 90) {
//     return (letter = "B");
//   } else if (s0 >= 70 || s0 < 80) {
//     return (letter = "C");
//   } else if (s0 >= 60 || s0 < 70) {
//     return (letter = "D");
//   } else {
//     return (letter = "F");
//   }
//   console.log(letter);
// }

// function getArray(value) {
//   let array = [value];
//   for (let i = value; i >= 1; i = value - 1) {
//     array.push((value, (value -= 1)));
//   }
//   console.log(array);
// }
// getArray(12);
// n = 5;
// const reverseSeq = (n) => {
//   let array = [n];

//   // return [(n -= 1)];
//   console.log((n -= 1));
// };

// function areYouPlayingBanjo(name) {
//   // Implement me
//   name = name.toLowerCase();
//   let length = name.length;
//   if (name.indexOf("r", 0)) {
//     return name + " does not play banjo";
//   }
//   return name + " plays banjo";
// }

// areYouPlayingBanjo("Adam");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   for (const product of products) {
//   }
//   console.log(product);
//   // Change code above this line
// }
// const showProfileInfo = function (userProfile) {
//   console.log(userProfile);
// };

// const profile = {
//   name: "Mykola Fedotov",
//   age: 39,
//   country: "Netherlands",
// };

// showProfileInfo(profile);

// Change code below this line
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const i = this.potions.indexOf(potionName);
//     console.log(i);
//     this.potions.splice(i, 1, potionName);
//     // console.log(this.potions.splice(i, 1));
//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion("Dragon breath");

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (const item of this.potions) {
//       if (item.name === oldName) {
//         item.name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

const scores = [27, 2, 41, 4, 7, 3, 75];
const asc = [...scores].sort((a, b) => a - b);

console.log(asc); // [2, 27, 3, 4, 41, 7, 75]
