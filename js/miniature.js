import { addPictureClickHandler } from './popup.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

const deleteMiniatures = () => {
  const miniatures = document.querySelectorAll('.picture');
  miniatures.forEach((miniature) => {
    miniature.remove();
  });
};

const renderMiniatures = (miniatures) => {
  deleteMiniatures();
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < miniatures.length; i++) {
    const pictureFragment = pictureTemplate.cloneNode(true);

    const picture = pictureFragment.querySelector('.picture');
    const pictureLikes = picture.querySelector('.picture__likes');
    const pictureComments = picture.querySelector('.picture__comments');
    const url = picture.querySelector('.picture__img');

    url.src = miniatures[i].url;
    pictureLikes.textContent = miniatures[i].likes;
    pictureComments.textContent = miniatures[i].comments.length;

    addPictureClickHandler(picture, miniatures[i]);

    fragment.append(pictureFragment);
  }

  pictures.appendChild(fragment);
};

export {renderMiniatures};
