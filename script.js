const numInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const resultField = document.getElementById('output');
convertBtn.addEventListener('click', convertInput);

function convertInput() {
  const input = parseInt(numInput.value);
  console.log(input);
  if (isNaN(input)) {
    resultField.innerText = 'Please enter a valid number';
  } else if (input <= 0) {
    resultField.innerText = 'Please enter a number greater than or equal to 1';
  } else if (input >= 4000) {
    resultField.innerText = 'Please enter a number less than 4000';
  } else {
    abcd(input);
  }
}

function abcd(number, result = '') {
  const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
  ];
  if (number === 0) {
    resultField.innerText = result;
    return result;
  }

  for (const { value, symbol } of romanNumerals) {
    if (number >= value) {
      return abcd(number - value, result + symbol);
    }
  }
}
// num input converted to a string after parse int removes leading zeros
// .split turns string to an array, and .map(Number) converts it to a number array in this instance
// function abc() {
//   const numString = String(parseInt(numInput.value));
//   const inputArray = cleanString(numString.split('')).map(Number);
//   console.log(numString);
//   console.log(numInput.value);
//   console.log(inputArray);
// }

// function cleanString(string) {
//   const regex = /[^a-zA-Z0-9]/g;
//   return string.replace(regex, '');
// }

// const numToRom = (input) => {
//   // base case
//   if (input === 0) {
//     resultField.innerText = '0';
//     return;
//   }

//   if (a) {
//   }
// };

//array.shift removes first element in array

// function logic(array) {
//   let digitplace = 4;
//   if (array.length === digitplace && array[0] === 0) {
//     array.shift();
//     digitplace -= 1;
//   } else {
//     while (array.length === 4 && 0 < array[0] < 4) {
//       resultField.innerText += 'M';
//       array[0] = array[0] - 1;
//     }
//   }
// }
//make function or add code to function to check length of string array and then create logic from there,
// also have it either remove the last element or first element of the array and then call itself

// if (array.length === 4 && array[0] === 4) {
//   resultField.innerText += 'CM';
//   array.shift();
// } else {
// }
