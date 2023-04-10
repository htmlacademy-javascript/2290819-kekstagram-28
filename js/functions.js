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

const isEscapeKey = (evt) => evt.key === 'Escape';

const ALERT_MESSAGE = 5000;

const showAlert = (message) => {
  const alertBlock = document.createElement('div');
  alertBlock.classList.add('alert-class');
  alertBlock.textContent = message;
  document.body.append(alertBlock);

  setTimeout(() => {
    alertBlock.remove();
  }, ALERT_MESSAGE);
};

function debounce (callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}


export { isEscapeKey, addElement, showAlert, debounce };

