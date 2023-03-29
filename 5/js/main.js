import { getSimilarMiniatures } from './data.js';
import { renderMiniatures } from './miniature.js';

const similarMiniatures = getSimilarMiniatures();
console.log(renderMiniatures(similarMiniatures));
