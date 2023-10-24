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

// const scores = [27, 2, 41, 4, 7, 3, 75];
// const asc = [...scores].sort((a, b) => a - b);

// console.log(asc); // [2, 27, 3, 4, 41, 7, 75]
// const name = "Smoked3";
// const pizzas = ["Ultracheese", "Smoked", "Four meats"];
// console.log(pizzas.indexOf(name));
// const pizzaName = "Smoked66";
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (pizzaPalace.pizzas.includes(pizzaName) === -1) {
//       onError(pizzaName);
//       return "There is no pizza with a name <имя пиццы> in the assortment.";
//     }
//   },
// };
// console.log(pizzaPalace.pizzas.includes(pizzaName));
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
// orderedItems.forEach(function item) {
//       return totalPrice+=item;
// }

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   // Change code above this line
//   return totalPrice;
// }

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach(function (item) {
//     return (totalPrice += item);
//   });

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   // Change code above this line
//   return totalPrice;
// }

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   numbers.forEach((number) => {
//     // newArray.push(number);
//     if (number % 2 !== 0) {
//       newArray.push(number);
//     } else newArray.push(number + value);
//   });
//   console.log(newArray);
//   return newArray;
//   // Change code above this line
// }
// changeEven([1, 2, 3, 4, 5], 10);

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserEmails = users.flatMap((user) => user.email);
// console.log(getUserEmails);

// const getUserEmails = (users) => {
//   return users.map((user) => user.email);
// };
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(({ friends }) => friends.includes(friendName));
// };

// const getFriends = (users) => {
//   return users
//     .flatMap((user) => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index);
// };
// const friends = users
//   .flatMap((user) => user.friends)
//   .filter((friend, index, array) => array.indexOf(friend) === index);
// console.log(friends);

// console.log(getFriends);

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (acc, player) => acc + player.playtime / player.gamesPlayed,
//   0
// );
// (acc, player) => acc + player.playtime,
// 0
// );
// players.reduce((acc2, player) => acc2 + player.gamesPlayed, 0);
// players.reduce((acc2, gamesPlayed) => {
//   acc + players.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .filter((book) => book.rating > MIN_BOOK_RATING);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getSortedFriends = (users) => {
//   return [...users]
//     .reduce((a, b) => a.friends.localeCompare(b.friends))
//     .filter((friend, index, array) => array.indexOf(friend) === index);
// };
// const getshit = [...users]
//   .flatMap((user) => user.friends)
//   .sort((a, b) => a.localeCompare(b))
//   .filter((friend, index, array) => array.indexOf(friend) === index);
// console.log(getshit);

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = `${this.value}${str}`;
//   }
//   padStart(str) {
//     this.value = `${str}${this.value}`;
//   }
//   padBoth(str) {
//     this.value = `${str}${this.value}${str}`;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// function betterThanAverage(classPoints, yourPoints) {
//   let point = 0;
//   for (let i = 0; i <= classPoints.length; i++) {
//     point += classPoints[i] / classPoints.length;
//     console.log(point);
//     // if ((point += i) / classPoints.length > yourPoints) {
//     //   return True;
//     // }
//   }
// }
// betterThanAverage([25, 50, 100, 15], 75);
// function squareDigits(num) {
//   const numbers = String(num).split("");
//   const newArray = [];
//   for (const number of numbers) {
//     newArray.push(Math.pow(number, 2));
//   }
//   console.log(+newArray.join(""));
// }

// squareDigits(91190);
