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
const initialComments = 5;
let commentsCounter = initialComments;
let commentsStep = 0;

const commentTemplate = document.querySelector('#comment').content;

const bigPictureClose = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const bigPictureOpen = (comments) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  commentLoader.classList.remove('hidden');
  if (comments.length < 5) {
    commentsCounter = comments.length;
  } else {
    commentsCounter = initialComments;
  }
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

const updateCommentCount = (shownComments, allComments) => {
  commentCount.innerHTML = `${shownComments} из <span class="comments-count">${allComments}</span> комментариев`;
};

const updateCommentLoader = (shownComments, allComments) => {
  if (shownComments === allComments.length) {
    commentLoader.classList.add('hidden');
  }
};


const addBigPictureComments = (comments) => {
  socialComments.innerHTML = '';
  const fragment = document.createDocumentFragment();

  comments.forEach((comment, index) => {
    const commentFragment = createComment(comment);
    fragment.appendChild(commentFragment);
    if (index >= initialComments) {
      fragment.children[index].classList.add('hidden');
    }
  });

  socialComments.appendChild(fragment);

};

const showComments = function () {
  const li = socialComments.querySelectorAll('li');
  if (li.length - commentsCounter >= 5) {
    commentsStep = commentsCounter + 5;
  } else {
    commentsStep = commentsCounter + (li.length - commentsCounter);
  }
  for (let i = commentsCounter; i < commentsStep; i++) {
    li[i].classList.remove('hidden');
    commentsCounter ++ ;
  }
  updateCommentCount(commentsCounter, li.length);
  updateCommentLoader(commentsCounter, li);
};

commentLoader.addEventListener('click', showComments);

const addPictureClickHandler = (picture, miniature) => {
  picture.addEventListener('click', () => {
    addBigPictureContent(miniature);
    addBigPictureComments(miniature.comments);
    bigPictureOpen(miniature.comments);
    updateCommentCount(commentsCounter, miniature.comments.length);
    updateCommentLoader(commentsCounter, miniature.comments);
  });
};

userModalCloseElement.addEventListener('click', () => {
  bigPictureClose();
});

export { addPictureClickHandler };
