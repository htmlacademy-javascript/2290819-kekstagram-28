const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdGenerator = (min, max) => {
  const ids = Array.from({length: (max - min)}, (_, index) => index + 1);
  return () => {
    const randomIndex = getRandomPositiveInteger(min, max);
    const [randomId] = ids.splice(randomIndex, 1);
    return randomId;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

export {getRandomArrayElement};
export {getRandomPositiveInteger};
export {createRandomIdGenerator};
