import { isEscapeKey } from './functions.js';
import { getSimilarMiniatures } from './data.js';

const similarMiniatures = getSimilarMiniatures();
const bigPicture = document.querySelector('.big-picture');
const bigPictureSrc = bigPicture.querySelector('img');
const bigLikes = bigPicture.querySelector('.likes-count');
const bigComments = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const pictures = document.querySelectorAll('.picture');
const userModalCloseElement = bigPicture.querySelector('.big-picture__cancel');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentLoader = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureClose();
  }
};

const bigPictureClose = function () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const bigPictureOpen = function () {
  bigPicture.classList.remove('hidden');
  body.classList.remove('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const commentRemove = function () {
  commentCount.classList.add('.hidden');
  commentLoader.classList.add('hidden');
};


const addPictureClickHandler = function (picture, miniature) {
  picture.addEventListener('click', (evt) => {
    evt.preventDefault();
    bigPictureOpen();
    commentRemove();
    body.classList.add('modal-open');
    bigPictureSrc.src = picture.querySelector('img').src;
    bigLikes.textContent = picture.querySelector('.picture__likes').textContent;
    bigComments.textContent = picture.querySelector('.picture__comments').textContent;
    socialCaption.textContent = miniature.description;
    socialComments.innerHTML = '';
    for (let i = 0; i < bigComments.textContent; i++) {
      const socialComment = document.createElement('li');
      socialComment.classList.add('social__comment');
      socialComments.appendChild(socialComment);

      const socialCommentImg = document.createElement('img');
      socialCommentImg.classList.add('social__picture');
      socialCommentImg.setAttribute('src', miniature.comments[i].avatar);
      socialCommentImg.setAttribute('alt', miniature.comments[i].name);
      socialCommentImg.setAttribute('width', 35);
      socialCommentImg.setAttribute('height', 35);
      socialComment.appendChild(socialCommentImg);
      const socialCommentText = document.createElement('p');
      socialCommentText.classList.add('social__text');
      socialCommentText.textContent = miniature.comments[i].message;
      socialComment.appendChild(socialCommentText);
    }
  });
  userModalCloseElement.addEventListener('click', () => {
    bigPictureClose();
  });
};

for (let i = 0; i < pictures.length; i++) {
  addPictureClickHandler(pictures[i], similarMiniatures[i]);
}


