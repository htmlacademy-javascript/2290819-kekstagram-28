const PICTURE_COUNT = 25;
const AVATAR_MINIMAL_COUNT = 1;
const AVATAR_MAXIMAL_COUNT = 6;
const LIKE_MINIMAL_COUNT = 15;
const LIKE_MAXIMAL_COUNT = 200;
const COMMENT_MINIMAL_COUNT = 1;
const COMMENT_MAXIMAL_COUNT = 10;
const URL_COUNT = 25;

const NAMES = [
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

const DESCRIPTIONS = [
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

const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];


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

const generateRandomPictureId = createRandomIdGenerator(1, PICTURE_COUNT);
const generateRandomURLId = createRandomIdGenerator(1, URL_COUNT);
const generateRandomCommentId = createRandomIdGenerator(COMMENT_MINIMAL_COUNT, COMMENT_MAXIMAL_COUNT);

const createComment = () => ({
  id: generateRandomCommentId(),
  avatar: `img/avatar-${getRandomPositiveInteger(AVATAR_MINIMAL_COUNT,AVATAR_MAXIMAL_COUNT)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createPicture = () => ({
  id: generateRandomPictureId(),
  url: `photos/${generateRandomURLId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(LIKE_MINIMAL_COUNT, LIKE_MAXIMAL_COUNT),
  comments: Array.from({length: getRandomPositiveInteger(COMMENT_MINIMAL_COUNT, COMMENT_MAXIMAL_COUNT)}, createComment)
});

export const getSimilarObjects = () =>
  Array.from({length: PICTURE_COUNT}, (_, pictureIndex) => createPicture(pictureIndex + 1));
