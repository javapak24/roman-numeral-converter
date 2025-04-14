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
    resultField.innerText = 'Please enter a number less than or equal to 3999';
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
