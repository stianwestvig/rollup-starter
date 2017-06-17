export function printThree() {
  console.log('Loaded three.js - using some es6 features:');
  [1,2,3,4].map((number => console.log(`Counting: ${number}...`)));
}

