import { isEscapeKey } from './functions.js';

const uploadFile = document.querySelector('#upload-file');
const imgUpload = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');
const imgForm = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const hashtagField = imgForm.querySelector('.text__hashtags');
const commentField = imgForm.querySelector('.text__description');


const onEditorKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeImgUpload();
  }
};

const hashtagFocus = () => {
  hashtagField.addEventListener('focus', () => {
    document.removeEventListener('keydown', onEditorKeydown);
  });

  hashtagField.addEventListener('blur', () => {
    document.addEventListener('keydown', onEditorKeydown);
  });
};

const hashtagFocusEditor = () => {
  commentField.addEventListener('focus', () => {
    document.removeEventListener('keydown', onEditorKeydown);
  });

  commentField.addEventListener('blur', () => {
    document.addEventListener('keydown', onEditorKeydown);
  });
};

function openEditor () {
  uploadFile.addEventListener('change', () => {
    imgUpload.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onEditorKeydown);
  });
}

function closeEditor () {
  closeImgUpload();
  imgForm.reset();
  document.removeEventListener('keydown', onEditorKeydown);
}

function closeImgUpload () {
  imgUpload.classList.add('hidden');
  body.classList.remove('modal-open');
}

const form = function() {
  uploadFile.addEventListener('click', () => {
    openEditor();
  });
  closeButton.addEventListener('click', () => {
    closeEditor();
  });
  hashtagFocus();
  hashtagFocusEditor();
};

export {form};
