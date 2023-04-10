const scale = document.querySelector('.img-upload__scale ');
const scaleSmaller = scale.querySelector('.scale__control--smaller');
const scaleBigger = scale.querySelector('.scale__control--bigger');
const scaleValue = scale.querySelector('.scale__control--value');
const picture = document.querySelector('.img-upload__preview');
const COMMENTS_STEP = 25;
const MAXIMAL_VALUE = '100%';
const MINIMAL_VALUE = '25%';


const getBiggerScale = () => {
  if (scaleValue.value !== MAXIMAL_VALUE) {
    scaleValue.value = `${Number.parseFloat(scaleValue.value) + COMMENTS_STEP}%`;
    picture.style.transform = `scale(${Number.parseFloat(scaleValue.value) * 0.01})`;

  }
};

const getSmallerScale = () => {
  if (scaleValue.value !== MINIMAL_VALUE) {
    scaleValue.value = `${Number.parseFloat(scaleValue.value) - COMMENTS_STEP}%`;
    picture.style.transform = `scale(${Number.parseFloat(scaleValue.value) * 0.01})`;
  }
};

const changePicture = () => {
  scaleSmaller.addEventListener('click', getSmallerScale);
  scaleBigger.addEventListener('click', getBiggerScale);
};

export {changePicture};

