import { showErrorModal, showSuccessModal } from './modals.js';
import { sendData } from './fetch.js';
import { closeEditor } from './form.js';

const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const WRONG_HASHTAG = 'Хэштеги указаны неверно';
const WRONG_COMMENTS = 'Вы превысили максимальную длину комментария';
const MAXIMAL_COUNT_HASTAGS = 5;
const MAXIMAL_COMMENTS_LENGTH = 140;

const imgForm = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');

const hashtagText = imgForm.querySelector('.text__hashtags');
const commentsText = imgForm.querySelector('.text__description');

const pristine = new Pristine(imgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper_error',
}
);

const validateTagsLength = (tags) => tags.length <= MAXIMAL_COUNT_HASTAGS;

const validateUniqueTags = (tags) =>
  new Set(tags).size === tags.length;
const isValidTag = (tag) => HASHTAG.test(tag);

const validateTags = (value) => {
  if (value === undefined || value.length === 0) {
    return true;
  }
  const tags = value
    .trim()
    .toLowerCase()
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


const addImgFormValidation = () => {
  imgForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      submitButton.disabled = true;
      sendData(new FormData(evt.target))
        .then(() => {
          showSuccessModal();
          closeEditor();
        })
        .catch(() => {
          showErrorModal();
          closeEditor(false);
        })
        .finally(() => {
          submitButton.disabled = false;
        });
    }
  });
};

export {addImgFormValidation, pristine};
