const ALERT_MESSAGE = 5000;

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdGenerator = (min, max) => {
  const ids = Array.from({length: (max - min + 1)}, (_, index) => index + min);
  return () => {
    const randomIndex = getRandomPositiveInteger(0, ids.length - 1);
    const [randomId] = ids.splice(randomIndex, 1);
    return randomId;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

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

const showAlert = (message) => {
  const alertBlock = document.createElement('div');
  alertBlock.textContent = message;
  document.body.append(alertBlock);

  setTimeout(() => {
    alertBlock.remove();
  }, ALERT_MESSAGE);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomArrayElement,
  getRandomPositiveInteger,
  createRandomIdGenerator,
  isEscapeKey,
  addElement,
  showAlert,
  debounce };
