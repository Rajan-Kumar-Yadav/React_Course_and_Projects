// console.log("Hello Rajan kumar");
// let number = prompt("Please enter your");

// if (number % 5 === 0) {
//   console.log(number, "Yor number is multiple of 5");
// } else {
//   console.log(number, "Your number is  not number multiple of 5");
// }

// let marks = prompt("Pleas enter your marks");

// if (marks >= 80) {
//   console.log("Your grade is A");
// } else if (marks >= 70) {
//   console.log("your Grade is B");
// } else if (marks >= 60) {
//   console.log("your grade is C");
// } else if (marks >= 50) {
//   console.log("your grade is D");
// } else {
//   console.log("Your grade is F");
// }
// //question
// // let fullName = prompt("Pleas enter your Full Name");

// // console.log("@" + fullName + fullName.length);

// //Qs- print all elements of an array
// let array = [8, 5, 2, 8, 5, 0, 34, 45, 23];
// console.log(array);

// //Qs- For a given arraywith marks of Students - [85,97,44,37,76,60] Find the average marks of the entire class.

// let studentsMarks = [85, 97, 44, 37, 76, 60];
// let averageMarks = 0;
// let sum = 0;
// for (let i = 0; i < studentsMarks.length; i++) {
//   sum = sum + studentsMarks[i];
//   averageMarks = sum / studentsMarks.length;
// }
// console.log(studentsMarks);
// console.log("sum of the mrks is: ", sum);
// console.log("Average of the marks is: ", averageMarks);

// // Qs- For a given array with prices of 5 items -[250,645,300,900,50] All items have an offer of 10% OFF on them. Change the array to store  final price after applying offer.

// let items = [250, 645, 300, 900, 50];
// console.log(items);

// for (let i = 0; i < items.length; i++) {
//   let offer = (10 / 100) * items[i];
//   items[i] = offer;
// }
// console.log("offer items");
// console.log(items);

// //Qs- Create an array to store companies->"Sloomberg","Microsoft","Uber","Google","IBM","Netfix"

// let companies = ["Sloomberg", "Microsoft", "Uber", "Google", "IBM", "Netfix"];
// console.log(companies);
// //a.Remove the first company from the array,
// // companies.shift("Sloomberg");
// // console.log(companies);
// //  b.Remove Uber and add Ola in its place,
// companies.splice(2, 1, "Ola");
// console.log(companies);

// // c.Add Amazon at the end.
// companies.push("Amazon");
// console.log(companies);

//Qs Create a function using the "function"keyword that takes a String as an arguments and returns the number of vowels in the string.

// function numberVowels(string) {
//   let vowels = 0;
//   let i = 0;
//   while (i < string.length) {
//     console.log(string[i]);
//     if (
//       string[i] === "a" ||
//       string[i] === "e" ||
//       string[i] === "i" ||
//       string[i] === "o" ||
//       string[i] === "u"
//     ) {
//       vowels++;
//     }
//     i++;
//   }
//   return vowels;
// }

// let string = prompt("pease enter your String to count number of the voules");

// let vowels = numberVowels(string);
// console.log("number of the : ", vowels);

//Qs Create an arroe function to perform the same task.
// const numberOfVowels = (str) => {
//   let count = 0;
//   for (const char of str) {
//     console.log(char);
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };
// let string = prompt("Please enter your String to count Voules");
// let voules = numberOfVowels(string);
// console.log("no of voules: ", voules);

// for Each loop  in Array

// function rajan() {
//   console.log("Hello Rajan kumar");
// }
// function myFunc(abc) {
//   return abc;
// }
// rajan();
// myFunc(rajan());

// Qs- For a given array of numbers ,print the square of each value using the forEach loop.;

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function square(array) {
//   array.forEach((num, index, arr) => {
//     console.log(num * num);
//   });
// }
// square(arr);

// const multipleNumber = (array) => {
//   array.forEach((num, index, array) => {
//     console.log(num * num, index, array);
//   });
//   return square;
// };

// multipleNumber(arr);

// Map method in array

// let num = [67, 52, 39];

// num.map((val) => {
//   console.log(val);
// });

// let newArray = num.map((val) => {
//   return val * val;
// });
// console.log(newArray);

// Filter method in array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// let evenNumberArray = arr.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(evenNumberArray);

// Reduce method in Array

// let arr = [1, 23, 5, 34, 9, 59, 39, 23, 53, 48, 10, 44];
// let largestNumber = arr.reduce((preValue, currentValue) => {
//   return preValue > currentValue ? preValue : currentValue;
// });
// console.log(largestNumber);
