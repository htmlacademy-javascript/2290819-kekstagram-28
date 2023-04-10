import { getSimilarMiniatures } from './data.js';
import { renderMiniatures } from './miniature.js';
import { initializeUploadForm } from './form.js';


const similarMiniatures = getSimilarMiniatures();
renderMiniatures(similarMiniatures);

initializeUploadForm();

