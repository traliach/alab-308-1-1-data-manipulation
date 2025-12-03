// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// New variable: true only when all numbers are 25 or under.
const allUnderOrEqual25 = !isOver25;
console.log(`Are all numbers 25 or under? ${allUnderOrEqual25}.`);

// Check five: all numbers are divisible by 5
const alldivby5 =
  n1 % 5 === 0 &&
  n2 % 5 === 0 &&
  n3 % 5 === 0 &&
  n4 % 5 === 0;
console.log(`Are all the numbers divisible by 5? ${alldivby5}.`);

// Check: is the first number larger than the last?
const firstGreaterThanLast = n1 > n4;
console.log(`Is the first number larger than the last? ${firstGreaterThanLast}.`);

// Arithmetic operations using the four numbers:
// 1) Subtract n1 from n2
const secondMinusFirst = n2 - n1;
console.log(`n2 - n1: ${secondMinusFirst}.`);

// 2) Multiply the result by n3
const multipliedByThird = secondMinusFirst * n3;
console.log(`(n2 - n1) * n3: ${multipliedByThird}.`);

// 3) Remainder of the result divided by n4
const remainderByFourth = multipliedByThird % n4;
console.log(`Remainder of the result divided by n4: ${remainderByFourth}.`);