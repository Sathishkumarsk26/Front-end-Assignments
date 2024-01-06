//Write a JavaScript Program to find GCD of two given numbers.
/*
 * Find GCD of two numbers
 * GCD :: Greatest Common Divisor
 * The HCF or GCD of two numbers is the largest number
 * that can divide both numbers without reminder.
 *
 * Number a = 45 = 3 * 3 * 5
 * Number b = 75 = 3 * 5 * 5
 * GCD is = 3 * 5 = 15
 */

let a=45;
let b=75;
let GCD;
for (var i = 1; i <= a; i++) {
  if (a % i === 0 && b % i === 0) {
    GCD = i;
  }
}
console.log(GCD);//output = 15