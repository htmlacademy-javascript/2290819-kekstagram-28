function checkLength (row, maximalLength) {
  return row.length <= maximalLength;
}

export {checkLength};

function isPalindrome (word) {
  const newWord = word.toLowerCase();
  let newString = '';
  for (let i = newWord.length - 1; i >= 0 ; i--) {
    newString += newWord[i];
  }

  if (newString === newWord) {
    return true;
  }
  return false;

}

export {isPalindrome};

function getNumber (row) {
  let newNumber = '';
  for (let i = 0; i < row.length; i++) {
    if (row[i] !== ' ' && !Number.isNaN(+row[i])) {
      newNumber += row[i];
    }
  }
  newNumber = Number(newNumber);
  if (newNumber === 0) {
    newNumber = NaN;
  }
  return newNumber;
}

export {getNumber};

function addElement (row, minimalLength, addSymbol) {
  let newRow = '';
  let index = 0;
  while (newRow.length + row.length < minimalLength) {
    newRow += addSymbol[index];
    if (index < addSymbol.length - 1) {
      index++;
    } else {
      index = 0;
    }
  }
  row = newRow + row;
  return row;
}

export {addElement};

const isEscapeKey = (evt) => evt.key === 'Escape';
export {isEscapeKey};


