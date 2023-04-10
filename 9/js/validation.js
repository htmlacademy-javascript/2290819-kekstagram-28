const imgForm = document.querySelector('.img-upload__form');

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

const addImgFormValidation = (evt) => {
  imgForm.addEventListener('submit', () => {
    if (!pristine.validate()) {
      evt.preventDefault();
    }
  });
};

export {addImgFormValidation};
