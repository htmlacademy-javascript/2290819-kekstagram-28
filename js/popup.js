import { isEscapeKey } from './functions.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureSrc = bigPicture.querySelector('img');
const bigLikes = bigPicture.querySelector('.likes-count');
const bigComments = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const userModalCloseElement = bigPicture.querySelector('.big-picture__cancel');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentLoader = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');

const commentTemplate = document.querySelector('#comment').content;

commentCount.classList.add('hidden');
commentLoader.classList.add('hidden');

const bigPictureClose = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const bigPictureOpen = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureClose();
  }
}

const addBigPictureContent = (miniature) => {
  bigPictureSrc.src = miniature.url;
  bigLikes.textContent = miniature.likes;
  bigComments.textContent = miniature.comments.length;
  socialCaption.textContent = miniature.description;
};

const createComment = (comment) => {
  const commentFragment = commentTemplate.cloneNode(true);

  const commentIcon = commentFragment.querySelector('.social__picture');
  const commentText = commentFragment.querySelector('.social__text');

  commentIcon.src = comment.avatar;
  commentIcon.alt = comment.name;
  commentText.textContent = comment.message;

  return commentFragment;
};

const addBigPictureComments = (comments) => {
  socialComments.innerHTML = '';
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentFragment = createComment(comment);
    fragment.appendChild(commentFragment);
  });

  socialComments.appendChild(fragment);
};

const addPictureClickHandler = (picture, miniature) => {
  picture.addEventListener('click', () => {
    addBigPictureContent(miniature);
    addBigPictureComments(miniature.comments);
    bigPictureOpen();
  });
};

userModalCloseElement.addEventListener('click', () => {
  bigPictureClose();
});

export { addPictureClickHandler };
