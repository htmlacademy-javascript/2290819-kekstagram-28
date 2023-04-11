import { showErrorModal, showSuccessModal } from './modals.js';
import { sendData } from './fetch.js';
import { closeImgUpload } from './form.js';
import { isEscapeKey } from './functions.js';
import { closeActiveModal } from './modals.js';

const imgForm = document.querySelector('.img-upload__form');
const button = document.querySelector('.img-upload__submit');
const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const WRONG_HASHTAG = 'Хэштеги указаны неверно';
const WRONG_COMMENTS = 'Вы превысили максимальную длину комментария';
const MAXIMAL_COUNT_HASTAGS = 5;
const MAXIMAL_COMMENTS_LENGTH = 140;

const hashtagText = imgForm.querySelector('.text__hashtags');
const commentsText = imgForm.querySelector('.text__description');

const pristine = new Pristine(imgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper_error',
}
);

const validateTagsLength = (tags) => tags.length <= MAXIMAL_COUNT_HASTAGS;

const validateUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return new Set(lowerCaseTags).size === lowerCaseTags.length;
};

const isValidTag = (tag) => HASHTAG.test(tag);

const validateTags = (value) => {
  if (value === undefined || value.length === 0) {
    return true;
  }
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return validateTagsLength(tags) && validateUniqueTags(tags) && tags.every(isValidTag);
};

const validateCommentsField = (value) => value.length <= MAXIMAL_COMMENTS_LENGTH;

pristine.addValidator(
  hashtagText,
  validateTags,
  WRONG_HASHTAG
);

pristine.addValidator(
  commentsText,
  validateCommentsField,
  WRONG_COMMENTS
);

function onEscKeyDown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
  }
}

const onImageLoadEscKeyDown = (evt) => {
  onEscKeyDown(evt);
};

const closeMessage = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeActiveModal();
  }
};

const addImgFormValidation = () => {
  imgForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      button.disabled = true;
      sendData(new FormData(evt.target))
        .then(() => {
          showSuccessModal();
          closeImgUpload();
          document.addEventListener('keydown', closeMessage());
        })
        .catch(() => {
          showErrorModal(onImageLoadEscKeyDown);
        })
        .finally();
    } else {
      showErrorModal(onImageLoadEscKeyDown);
      document.addEventListener('keydown', closeMessage());
    }
    button.disabled = false;
  });
};

export {addImgFormValidation};
