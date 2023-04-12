//import { getData } from './fetch.js';
import { renderMiniatures } from './miniature.js';
import { getRandomPositiveInteger } from './util.js';

const filtersForm = document.querySelector('.img-fiters__form');
const filterButtons = document.querySelectorAll('.img-filters_button');

const PICTURES_NUMBER = 10;

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  POPULAR: 'filter-discussed'
};

let chosenFilter = Filter.DEFAULT;

const compareRandomly = () => getRandomPositiveInteger(1, PICTURES_NUMBER);

const getCommentRank = (picture) => picture.comments.length;

const compareByComments = (pictureA, pictureB) => {
  const rankA = getCommentRank(pictureA);
  const rankB = getCommentRank(pictureB);

  return rankB - rankA;
};

const getFilteredPictures = (miniatures) => {
  const newMiniatures = renderMiniatures(miniatures);
  switch (chosenFilter) {
    case Filter.RANDOM:
      return newMiniatures.sort(compareRandomly).slice(0, PICTURES_NUMBER);
    case Filter.DISCUSSED:
      return newMiniatures.sort(compareByComments);
    default:
      return newMiniatures;
  }
};

const setOnFilterClick = () => {
  filtersForm.addEventListener('click', (evt) => {
    filterButtons.forEach((item) => item.classList.remove('img-filters__button--active'));
    evt.target.classList.add('img-filters__button--active');
    chosenFilter = evt.target.id;
    //cb(getFilteredPictures());
  });
};

const init = (loadedPictures) => {
  setOnFilterClick();
  getFilteredPictures(loadedPictures);
};

export { getFilteredPictures, init, setOnFilterClick };
