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

/////////HOW TO ADD ELEMENT FROM ARRAY FROM ANYWHERE - SPLICE
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
