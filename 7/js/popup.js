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
const INITIAL_COMMENTS = 5;
let commentsCounter = INITIAL_COMMENTS;
const COMMENTS_STEP = 5;

const commentTemplate = document.querySelector('#comment').content;

const bigPictureClose = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsCounter = INITIAL_COMMENTS;
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

const updateCommentCount = (shownComments, allComments) => {
  commentCount.innerHTML = '';
  const param2 = document.createElement('span');
  param2.classList.add('comment-count');
  param2.textContent = allComments;
  commentCount.append(Math.min(shownComments, allComments), ' из ', param2, ' комментариев');
};

const updateCommentLoader = (shownComments, allComments) => {
  if (shownComments >= allComments) {
    commentLoader.classList.add('hidden');
  } else {
    commentLoader.classList.remove('hidden');
  }
};


const addBigPictureComments = (comments) => {
  socialComments.innerHTML = '';
  const fragment = document.createDocumentFragment();

  comments.forEach((comment, index) => {
    const commentFragment = createComment(comment);
    if (index >= INITIAL_COMMENTS) {
      commentFragment.children[0].classList.add('hidden');
    }
    fragment.appendChild(commentFragment);
    if (index >= INITIAL_COMMENTS) {
      fragment.children[index].classList.add('hidden');
    }
  });

  socialComments.appendChild(fragment);

};

commentLoader.addEventListener('click', () => {
  Array
    .from(socialComments.children)
    .slice(commentsCounter, commentsCounter + COMMENTS_STEP)
    .forEach((comment) => {
      comment.classList.remove('hidden');
    });

  commentsCounter = commentsCounter + COMMENTS_STEP;
  updateCommentCount(commentsCounter, socialComments.children.length);
  updateCommentLoader(commentsCounter, socialComments.children.length);
});

const addPictureClickHandler = (picture, miniature) => {
  picture.addEventListener('click', () => {
    addBigPictureContent(miniature);
    addBigPictureComments(miniature.comments);
    bigPictureOpen();
    updateCommentCount(commentsCounter, miniature.comments.length);
    updateCommentLoader(commentsCounter, miniature.comments.length);
  });
};

userModalCloseElement.addEventListener('click', () => {
  bigPictureClose();
});

export { addPictureClickHandler };
