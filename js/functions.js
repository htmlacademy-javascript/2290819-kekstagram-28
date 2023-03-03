function checkLength1 (row, maximalLength) {
  return row.length >= maximalLength ? 'false' : 'true';
}

console.log(checkLength1('hello my name is kate', 2));

function checkLength2 (row, maximalLength) {
  if (row.length <= maximalLength) {
    return true;
  }
  return false;
}

console.log(checkLength2 ('hi whatsup', 3))

function isPalindrome (word) {
  const newWord = word.split(' ');
  let newString = '';
  for (let i = 0; i < newWord.length; i++) {
    newWord[i] = newWord[i].toLowerCase();
    newString += newWord[i];
  }

  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === newString.at(-(i + 1))) {
      return true;
    }
    return false;
  }
}
console.log(isPalindrome('holo9holo'));

function getNumber (row) {
  if (typeof row === 'number') {
    row = String(row);
  }

  let newNumber = '';

  for (let i = 0; i < row.length; i++) {
    if (Number(row[i]) <= 9 && Number(row[i] > 0)) {
      newNumber += row[i];
    }
  }
  newNumber = Number(newNumber);
  if (newNumber === 0) {
    newNumber = NaN;
  }
  return newNumber;
}

console.log(getNumber('hello you 77 6 t'));

function addElement (row, minimalLength, addSymbol) {
  if (typeof row === 'number') {
    row = String(row);
  }
  let newRow = '';
  let index = 0;
  while (newRow.length + row.length < minimalLength) {
    newRow += addSymbol[index];
    if (index < addSymbol.length - 1) {
      index++;
    } else {
      index = 0;
    }
  } row = newRow + row;
  return row;
}

console.log(addElement(333888, 10, 'hidden feature'));
