///////////////////////////////////////////ADD & REMOVING///////////////////////////////////

/////////ADD TO ARRAY END OF
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers, 'push');

//////////REMOVE FROM END OF ARRAY
numbers.pop();
console.log(numbers, 'pop');

/////////ADD TO START OF ARRAY
numbers.unshift(0);
console.log(numbers, 'unshift');

/////////REMOVE FROM START OF ARRAY
numbers.shift(0);
console.log(numbers, 'shift');

/////////HOW TO REMOVE ELEMENT FROM ARRAY FROM ANYWHERE - SPLICE
numbers.splice(2, 3);
console.log(numbers, 'slice');

/////////HOW TO ADD ELEMENT FROM ARRAY FROM ANYWHERE - SPLICE - will mutate array
numbers.splice(2, 0, 3, 4, 5);
console.log(numbers, 'splice');

/////////HOW TO REMOVE ELEMENTS FROM ARRAY AND THEN ADD
numbers.splice(2, 3, 6, 17);
console.log(numbers, 'splice');

///////////////////////////////////////////ITERATING///////////////////////////////////

////////////CONCAT
let nums = [1, 2, 3, 4];
let otherNums = nums.concat(5, 6, 7);
console.log(otherNums, 'concat');

////////////EVERY - test where all element in array meet a condition, if it meets even one false, it returns and stop iteration
const everyResults = otherNums.every((num) => num > 0);
console.log(everyResults, 'every');

////////////SOME - test all elements in the array, if even one elements meets that condition then the iteration will stop.
const someResults = otherNums.some((num) => num % 2 == 0);
console.log(someResults, 'some results');

////////////FOR EACH - will iterate through the whole array and do something to each elements. This function will iterate through the whole array no matter what.
otherNums.forEach((num) => console.log(num * 2));

//////////MAP - will iterate through the whole array and will return a new array
const mapping = otherNums.map((num) => num * 2);
console.log(mapping, 'map');

//////////FILTER - will iterate through the whole array and will return a new array where the condition is met
const filteredArr = otherNums.filter((num) => num > 3);
console.log(filteredArr, 'filter');

////////////REDUCE
const reducedSum = otherNums.reduce((prev, curr) => prev + curr);
console.log(reducedSum, 'reduce');

///////////////////////////////////////////SORT///////////////////////////////////

//// SORT ARRAY WITH NUMBERS-  sorting array by value, if I just use sorted then the array would be sorted alphabetically
let numsNotSorted = [1, 3, 4, 5, 6, 1, 34, 6, 790, 71, 13, 8];

const sortedNum = numsNotSorted.sort((a, b) => a - b);
console.log(sortedNum, 'sorted nums');

//// SORT ARRAY OF OBJECTS
let unsortedArrOfObjects = [
  { name: 'eder', age: 27, relentless: true },
  { name: 'esha', age: 26, mentallyStrong: true },
  { name: 'conor', age: 33, discplined: true },
];

let sortedArrayOfObjects = unsortedArrOfObjects.sort((a, b) => a.age - b.age);
console.log(sortedArrayOfObjects, 'sorted array of objects');

//// SORT ARRAY WITH STRINGS
let unsortedNames = ['eder', 'Conor', 'esha', 'Ben'];
let sortedNames = unsortedNames.sort((a, b) => {
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  return 0;
});

let sortedNames1 = unsortedNames.sort(
  (a, b) => a.toLowerCase() - b.toLowerCase()
);
console.log(sortedNames, 'sorted name long way');
console.log(sortedNames1, 'sorted names short way');

///////////////////////////////////////////SEARCH///////////////////////////////////

///////// SEARCH - INDEX OF - will return location of first instance
let randomArr = [1, 2, 3, 4, 6, 7, 8, 2, 1, 3, 4, 1, 4, 5, 6, 8, 2, 1, 3, 12];
console.log(randomArr.indexOf(1), 'indexof');

///////// SEARCH - LAST INDEX OF - will return location of very last instance
console.log(randomArr.lastIndexOf(1), 'lastindexof');

///////////////////////////////////////////MISC///////////////////////////////////

/////////ARRAY TO STRING - toString() turns this whole array into a string seperated by a comma
let randNum = [1, 2, 3, 4, 5];
console.log(randNum.toString(), 'tostring');

////////ARRAY TO STRING - JOIN, will turn array elements to string and then seperate them by whatever we pass to the join function
console.log(randNum.join('-'), 'join');
