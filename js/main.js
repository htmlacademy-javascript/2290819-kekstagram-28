import { renderMiniatures } from './miniature.js';
import { initializeUploadForm } from './form.js';
import { showAlert } from './util.js';
import { getData } from './fetch.js';
import { initializeFilters } from './filters.js';


getData()
  .then((photos) => {
    renderMiniatures(photos);
    initializeFilters(photos);
  })
  .catch((err) => showAlert(err.message));

initializeUploadForm();

