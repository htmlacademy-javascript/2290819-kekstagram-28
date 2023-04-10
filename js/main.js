import { getSimilarMiniatures } from './data.js';
import { renderMiniatures } from './miniature.js';
import { initializeUploadForm } from './form.js';
import { showAlert } from './functions.js';
import { getData } from './fetch.js';


const similarMiniatures = getSimilarMiniatures();
renderMiniatures(similarMiniatures);


getData()
  .then((photos) => {
    renderMiniatures(photos);
  })
  .catch((err) => showAlert(err.message));

initializeUploadForm();
