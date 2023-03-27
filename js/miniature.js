import {getSimilarObjects} from './data.js';

const fragment = document.createDocumentFragment('.pictures');
const pictureTemplate = document.querySelector('#picture').content;


const similarObjects = getSimilarObjects();
for (let i = 0; i < similarObjects.length; i++) {
  const element = pictureTemplate.cloneNode(true);
  const pictureLikes = element.querySelector('.picture__likes');
  const pictureComments = element.querySelector('.picture__comments');
  const url = element.querySelector('.picture__img');
  url.setAttribute('src', similarObjects[i].url);
  pictureLikes.innerHTML = similarObjects[i].likes;
  pictureComments.innerHTML = similarObjects[i].comments.length;

  fragment.append(element);
}
export{fragment};
