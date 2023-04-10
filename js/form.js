import { isEscapeKey } from './functions.js';
import { addImgFormValidation } from './validation.js';
import { changePicture } from './scale.js';
import { resetEffects } from './effects.js';
const picture = document.querySelector('.img-upload__preview');

const uploadFile = document.querySelector('#upload-file');
const imgUpload = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');
const imgForm = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const hashtagField = imgForm.querySelector('.text__hashtags');
const commentField = imgForm.querySelector('.text__description');
const imgUploadInput = imgForm.querySelector('.img-upload__input');
const scaleControl = imgForm.querySelector('.scale__control--value');
const effectLevelValue = imgForm.querySelector('.effect-level__value');
const effectDefault = imgForm.querySelector('#effect-none');

const resetImgForm = () => {
  picture.style.transform = 'scale(1)';
  resetEffects();
  hashtagField.value = '';
  commentField.value = '';
  imgUploadInput.value = '';
  scaleControl.value = '100%';
  effectLevelValue.value = '100%';
  effectDefault.checked = true;
};

const closeImgUpload = () => {
  imgUpload.classList.add('hidden');
  body.classList.remove('modal-open');
  resetImgForm();
};

const onEditorKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeImgUpload();
  }
};

const addHashtagFieldListeners = () => {
  hashtagField.addEventListener('focus', () => {
    document.removeEventListener('keydown', onEditorKeydown);
  });

  hashtagField.addEventListener('blur', () => {
    document.addEventListener('keydown', onEditorKeydown);
  });
};

const addCommentFieldListeners = () => {
  commentField.addEventListener('focus', () => {
    document.removeEventListener('keydown', onEditorKeydown);
  });

  commentField.addEventListener('blur', () => {
    document.addEventListener('keydown', onEditorKeydown);
  });
};

const closeEditor = () => {
  closeImgUpload();
  document.removeEventListener('keydown', onEditorKeydown);
};

const openEditor = () => {
  imgUpload.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEditorKeydown);
};

const initializeUploadForm = () => {
  resetImgForm();
  uploadFile.addEventListener('change', openEditor);
  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeEditor();
  });
  addHashtagFieldListeners();
  addCommentFieldListeners();
  addImgFormValidation();
  changePicture();
};

export {initializeUploadForm};
