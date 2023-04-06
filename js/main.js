import { getSimilarMiniatures } from './data.js';
import { renderMiniatures } from './miniature.js';
import { form } from './form.js';
import { validation } from './validation.js';


const similarMiniatures = getSimilarMiniatures();
renderMiniatures(similarMiniatures);

form();
validation();

