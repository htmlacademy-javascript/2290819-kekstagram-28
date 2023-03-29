const bigPicture = document.querySelector('.big-picture');
const bigPictureSrc = bigPicture.querySelector('img');
const bigLikes = document.querySelector('.likes-count');
const bigComments = document.querySelector('.comments-count');
const socialComments = document.querySelector('.social__comments');
const pictures = document.querySelectorAll('.picture');
const userModalCloseElement = document.querySelector('.big-picture__cancel');
const isEscapeKey = (evt) => evt.key === 'Escape';
const commentCount = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');


const addPictureClickHandler = function (picture) {
  picture.addEventListener('click', (evt) => {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    bigPictureSrc.src = picture.querySelector('img').src;
    bigLikes.textContent = picture.querySelector('.picture__likes').textContent;
    bigComments.textContent = picture.querySelector('.picture__comments').textContent;
    socialComments.innerHTML = '';
    for (let i = 0; i < bigComments.textContent; i++) {
      const socialComment = document.createElement('li');
      socialComment.classList.add('social__comment');
      socialComments.appendChild(socialComment);

      const socialCommentImg = document.createElement('img');
      socialCommentImg.classList.add('social__picture');
      socialCommentImg.setAttribute('src',picture.querySelector('img').src);
      socialCommentImg.setAttribute('alt', 'hi');
      socialCommentImg.setAttribute('width', 35);
      socialCommentImg.setAttribute('height', 35);
      socialComment.appendChild(socialCommentImg);
    }
  });
  commentCount.classList.add('.hidden');
  commentLoader.classList.add('hidden');
  body.classList.add('.modal-open');
};

for (let i = 0; i < pictures.length; i++) {
  addPictureClickHandler(pictures[i]);
}

userModalCloseElement.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('.modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    bigPicture.classList.add('hidden');
    body.classList.remove('.modal-open');
  }
});

