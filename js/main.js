import { getSimilarMiniatures } from './data.js';
import { renderMiniatures } from './miniature.js';
import { initializeUploadForm } from './form.js';
//import { changePicture } from './scale.js';
//import { resetEffects } from './effects.js';


const similarMiniatures = getSimilarMiniatures();
renderMiniatures(similarMiniatures);

initializeUploadForm();
//changePicture();
//resetEffects();
