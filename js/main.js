const pictureCount = 25;
const avatarMinimalCount = 1;
const avatarMaximalCount = 6;
const likeMinimalCount = 15;
const likeMaximalCount = 200;
const commentMinimalCount = 1;
const commentMaximalCount = 10;

const names = [
  'Лиза',
  'Ангелина',
  'Кристина',
  'Саша',
  'Женя',
  'Олег',
  'Лола',
  'Даша',
  'Петя',
  'Даня',
  'Ника',
  'Эвелина',
  'Лев',
  'Миша',
  'Паша',
  'Сережа',
  'Коля',
  'Настя',
  'Аня',
  'Надя',
  'Карина',
  'Зоя',
  'Эмили',
  'Николь',
  'Милана'
];

const descriptions = [
  'Тост с беконом',
  'Моя собака',
  'Вид из окна',
  'Мои подружки',
  'Кукурузный суп-пюре',
  'Путешествия 2020',
  'Токио и Сеул',
  'Цели 2023',
  'Маникюр',
  'Розовый - хит сезона',
  'Жизнь без глютена',
  'Жизнь без глюкозы',
  'Жизнь без удовольствий',
];

const messages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];


const getRandomPositiveInteger = function (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/*const getRandomValue = function (min, max) {
  const previousValue = [];

  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValue.length >= (max - min + 1)) {
      return null;
    }
    while (previousValue.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValue.push(currentValue);
    return currentValue;
  };
};*/

const getRandomArrayElement = function (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

/*function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}*/

const createComment = function(index) {
  return {
    id: index,
    avatar: `img/avatar-${getRandomPositiveInteger(avatarMinimalCount,avatarMaximalCount)}.svg`,
    message: getRandomArrayElement(messages),
    name: getRandomArrayElement(names)
  };
};

const createPicture = function (index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(descriptions),
    likes: getRandomPositiveInteger(likeMinimalCount, likeMaximalCount),
    comments: Array.from({length: getRandomPositiveInteger(commentMinimalCount, commentMaximalCount)}, () => createComment())
  };
};

export const similarObjects = () =>
  Array.from({length: pictureCount}, (_, pictureIndex) => createPicture(pictureIndex + 1));

