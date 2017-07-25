//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: string => {
    return string.split('').reverse().join('')
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: array => {
    return Array.from(new Set(array));
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: string => {
    const firstCaps = string.toLowerCase().split(' ');
    for (let i = 0; i < firstCaps.length; i++) {
      firstCaps[i] = firstCaps[i].charAt(0).toUpperCase() + firstCaps[i].substring(1);
      console.log(firstCaps[i].substring(1))
    }
    return firstCaps.join(' ');
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: string => {
    const counted = []
    const array = string.toLowerCase().split('')
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' || array[i] === 'u') {
        counted.push(array[i])
      }
    } return counted.length
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: value => {
    if (value < 0) {
      return false
    } else {
      for (let i = 2; i < value; i++)
        if (value % i === 0) return false;
      return value !== 1;
    }

  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: 'Hello World',
  log2: undefined
}


