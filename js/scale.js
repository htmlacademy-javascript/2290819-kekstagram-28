const scale = document.querySelector('.img-upload__scale ');
const scaleSmaller = scale.querySelector('.scale__control--smaller');
const scaleBigger = scale.querySelector('.scale__control--bigger');
const scaleValue = scale.querySelector('.scale__control--value');
const picture = document.querySelector('.img-upload__preview');


const getBiggerScale = () => {
  if (scaleValue.value !== '100%') {
    scaleValue.value = `${Number(scaleValue.value.slice(0, scaleValue.value.length - 1)) + 25}%`;
  }
};

const getSmallerScale = () => {
  if (scaleValue.value !== '25%') {
    scaleValue.value = `${Number(scaleValue.value.slice(0, scaleValue.value.length - 1)) - 25}%`;
  }
};

const changePicture = () => {
  scaleSmaller.addEventListener('click', getSmallerScale);
  scaleBigger.addEventListener('click', getBiggerScale);
  scaleBigger.addEventListener('click', () => {
    picture.style.transform = `scale(${Number(scaleValue.value.slice(0, scaleValue.value.length - 1)) * 0.01})`;
  });
};

export {changePicture};

