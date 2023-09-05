//Assignment is related to Arrays method foreach, map, filter, find and reduce.
/*Write a program that uses filter to remove all negative numbers from an array of numbers

Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.


Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.


Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.


Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".*/
// const array =[{name:"ibrahim"}, {name:"ibrahim"}];
// array.forEach(element=> console.log(element.name));
console.log("Question No 01");
//Write a program that uses filter to remove all negative numbers from an array of numbers
var arr = [3, 7, 6, 8, -8, 56, -6];
var nums = arr.filter(function (num) {
    return num > 0;
});
console.log(nums);
// let fun= (a:string,b:string): string=>{}
console.log("Question No 02");
//Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
var arr1 = [1, 2, 3, 4, 5];
var evenNum = arr1.map(function (element) {
    return element * 2;
});
console.log(evenNum);
console.log("Question No 03");
//Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
var fruitArr = ["apple", "banana", "cherry", "date", "grape"];
var modifiedArr = fruitArr.filter(function (num) {
    return num.length > 5;
});
console.log(modifiedArr);
console.log("Question No 04");
//Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
var integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var modInt = integers.filter(function (num) { return num % 2 === 0; });
modInt = modInt.map(function (element) {
    return element * element;
});
console.log(modInt);
console.log("Question No 05");
//Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
var tempInCel = [0, 10, 20, 30, 40];
var modTemp = tempInCel.map(function (element) {
    return (element * 9 / 5) + 32;
});
console.log(modTemp);
console.log("Question No 06");
//Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
var mapFil = [3, 6, 9, 12, 15, 18];
var modMF = mapFil.filter(function (element) {
    return element % 2 !== 0;
});
modMF = modMF.map(function (element) {
    return element * 2;
});
console.log(modMF);
console.log("Question No 07");
//Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
var names = ["Alice", "Bob", "Charlie", "David", "Emily"];
var newNam = names.forEach(function (value, index, array) {
    array[index] = value + "!";
});
console.log(names);
