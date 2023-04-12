import { renderMiniatures } from './miniature.js';
import { initializeUploadForm } from './form.js';
import { showAlert } from './functions.js';
import { getData } from './fetch.js';
import { getFilteredPictures, init, setOnFilterClick } from './filters.js';

const filters = document.querySelector('.img-filters');


getData()
  .then((photos) => {
    //renderMiniatures(photos);
    filters.classList.remove('img-filters--inactive');
    //setOnFilterClick();
    //init(photos);
    getFilteredPictures(photos);
  })
  .catch((err) => showAlert(err.message));

initializeUploadForm();

