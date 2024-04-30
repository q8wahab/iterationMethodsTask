//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.

Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

//part1
// Q1) Create a new array containing numbers that are greater than or equal to 25.

const result = numbers.filter((num) => {
  if (num >= 25) {
    return true;
  } else {
    return false;
  }
});
console.log(result);

//Q2) Create a new array containing numbers that are divisible by 5.

const result2 = numbers.filter((num) => {
  if (num % 5) {
    return false;
  } else {
    return true;
  }
});
console.log(result2);

//Part 2: Mapping
//Q3) Create a new array that contains each number squared.
const sqr = numbers.map((num) => {
  return num * num;
});
console.log(sqr); // [100,  169,  400, 625, 1444, 1225,1600]

//Q4) Create a new array that contains each number multiplied by 2.

const by2 = numbers.map((num) => {
  return num * 2;
});
console.log(by2); //[ 20, 26, 40, 50,  76, 70, 80 ]

//Part 3: Combining Filtering and Mapping
//Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.

const result3 = numbers
  .filter((num) => {
    if (num >= 20) {
      return true;
    } else {
      return false;
    }
  })
  .map((num) => {
    return num * num;
  });

console.log(result3); //[ 400, 625, 1444, 1225, 1600 ]

// Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
const result6 = numbers
  .filter((num) => {
    if (num % 5) {
      return false;
    } else {
      return true;
    }
  })
  .map((num) => {
    return num * 3;
  });

console.log(result6); //[ 30, 60, 75, 105, 120 ]
