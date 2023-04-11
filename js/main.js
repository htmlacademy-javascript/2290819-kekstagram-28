import { renderMiniatures } from './miniature.js';
import { initializeUploadForm } from './form.js';
import { showAlert } from './functions.js';
import { getData } from './fetch.js';


getData()
  .then((photos) => {
    renderMiniatures(photos);
  })
  .catch((err) => showAlert(err.message));

initializeUploadForm();
