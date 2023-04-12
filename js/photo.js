const FILE_TYPES = ['gif', 'jpg', 'jpeg'];

const fileChooser = document.querySelector('.img-upload__input[type=file]');
const shownPhotoBox = document.querySelector('.img-upload__preview');
const shownPhoto = shownPhotoBox.querySelector('img');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  shownPhoto.src = URL.createObjectURL(file);
  }
});
