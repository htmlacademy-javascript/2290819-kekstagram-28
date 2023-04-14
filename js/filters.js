import { renderMiniatures } from './miniature.js';
import { createRandomIdGenerator, debounce } from './util.js';

const PICTURES_NUMBER = 10;
const RERENDER_MINIATURES_TIMEOUT = 500;

const filters = document.querySelector('.img-filters');
const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');


let chosenFilter = filterDefault;

const renderMiniaturesDebounce = debounce(renderMiniatures, RERENDER_MINIATURES_TIMEOUT);

const showFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

const getCommentRank = (picture) => picture.comments.length;

const compareByComments = (pictureA, pictureB) => {
  const rankA = getCommentRank(pictureA);
  const rankB = getCommentRank(pictureB);

  return rankB - rankA;
};


const updateChosenFilter = () => {
  filterDefault.classList.remove('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');
  chosenFilter.classList.add('img-filters__button--active');
};

const renderMiniaturesByDefault = (miniatures) => {
  renderMiniaturesDebounce(miniatures);
};

const renderMiniaturesRandomly = (miniatures) => {
  const getRandomIndex = createRandomIdGenerator(0, miniatures.length - 1);

  const thumbnails = [];
  for (let i = 0; i < PICTURES_NUMBER; i++) {
    thumbnails.push(miniatures[getRandomIndex()]);
  }

  renderMiniaturesDebounce(thumbnails);
};

const renderMiniaturesByComments = (miniatures) => {
  const thumbnails = miniatures
    .slice()
    .sort(compareByComments);

  renderMiniaturesDebounce(thumbnails);
};


const initializeFilters = (loadedPictures) => {
  showFilters();

  filterDefault.addEventListener('click', () => {
    chosenFilter = filterDefault;
    updateChosenFilter();
    renderMiniaturesByDefault(loadedPictures);
  });

  filterRandom.addEventListener('click', () => {
    chosenFilter = filterRandom;
    updateChosenFilter();
    renderMiniaturesRandomly(loadedPictures);
  });

  filterDiscussed.addEventListener('click', () => {
    chosenFilter = filterDiscussed;
    updateChosenFilter();
    renderMiniaturesByComments(loadedPictures);
  });
};

export { initializeFilters };
