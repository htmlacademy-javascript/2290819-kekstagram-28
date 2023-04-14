import { isEscapeKey } from './util.js';

const Modals = {
  success: getModalElement('success'),
  error: getModalElement('error')
};

let activeModalType = null;

const onOuterBodyClick = (evt) => {
  if (!evt.target.closest(`.${activeModalType}__inner`)) {
    closeActiveModal();
  }
};

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeActiveModal();
  }
};

const showModal = (type) => {
  activeModalType = type;
  document.addEventListener('click', onOuterBodyClick);
  document.addEventListener('keydown', onModalEscKeydown);
  document.body.append(Modals[activeModalType]);
};

function closeActiveModal() {
  Modals[activeModalType].remove();
  activeModalType = null;
  document.removeEventListener('click', onOuterBodyClick);
  document.removeEventListener('keydown', onModalEscKeydown);
}

function getModalElement(type) {
  const template = document.querySelector(`#${type}`).content;
  const modalElement = template.querySelector(`.${type}`).cloneNode(true);

  modalElement.querySelector(`.${type}__button`).addEventListener('click', closeActiveModal);

  return modalElement;
}

const showSuccessModal = () => showModal('success');
const showErrorModal = () => showModal('error');

export {showSuccessModal, showErrorModal, closeActiveModal};

