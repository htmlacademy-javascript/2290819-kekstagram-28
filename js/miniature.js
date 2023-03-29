const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

const renderMiniatures = function(randomMiniatures) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < randomMiniatures.length; i++) {
    const picture = pictureTemplate.cloneNode(true);
    const pictureLikes = picture.querySelector('.picture__likes');
    const pictureComments = picture.querySelector('.picture__comments');
    const url = picture.querySelector('.picture__img');
    url.src = randomMiniatures[i].url;
    pictureLikes.textContent = randomMiniatures[i].likes;
    pictureComments.textContent = randomMiniatures[i].comments.length;
    fragment.append(picture);
  }
  pictures.appendChild(fragment);
};

export {renderMiniatures};
