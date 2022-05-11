import {
  checkActive,
  getUpperCase,
  toggleLanguage,
  getLowerCase,
  addValueToTxt,
} from './helper';

window.addEventListener('load', () => {
  const keys = document.querySelectorAll('.keys');
  const ctrlLeft = document.querySelector('.ctrl_left');
  const ctrlRight = document.querySelector('.ctrl_right');
  const altLeft = document.querySelector('.alt_left');
  const altRight = document.querySelector('.alt_right');
  const txtField = document.querySelector('.text-field');
  let focus = false;

  txtField.addEventListener('focus', () => {
    if (!focus) {
      setTimeout(() => {
        focus = true;
      }, 200);
    }
  });

  txtField.addEventListener('blur', () => {
    if (focus) {
      setTimeout(() => {
        focus = false;
      }, 200);
    }
  });

  window.addEventListener('keydown', (e) => {
    let keyname;
    if (e.target.getAttribute('keyName')) {
      keyname = e.target.getAttribute('keyName');
    } else {
      keyname = null;
    }

    for (let i = 0; i < keys.length; i += 1) {
      if (
        e.key === keys[i].getAttribute('keyEn')
        || e.key === keys[i].getAttribute('keyRu')
        || e.key === keys[i].getAttribute('UpperCaseNameEn')
        || e.key === keys[i].getAttribute('UpperCaseNameRu')
        || e.code === keys[i].getAttribute('keyname')
        || e.key === keys[i].getAttribute('key')
      ) {
        keys[i].classList.add('active');
      }
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      if (!focus) {
        return;
      }
      const ind = txtField.selectionEnd + 4;
      if (txtField.selectionEnd >= txtField.value.length) {
        txtField.value += '    ';
      } else {
        txtField.value = addValueToTxt(
          txtField,
          '    ',
        );
        txtField.selectionStart = ind;
        txtField.selectionEnd = ind;
      }
    }
    if (e.key === 'Shift' || e.key === 'CapsLock') {
      getUpperCase(keys, keyname);
    }
    if (e.key === 'Control' || e.key === 'Alt') {
      if (
        (checkActive(ctrlLeft) && checkActive(altLeft))
        || (checkActive(ctrlRight) && checkActive(altRight))
      ) {
        toggleLanguage(keys);
      }
    }
  });

  window.addEventListener('keyup', (e) => {
    for (let i = 0; i < keys.length; i += 1) {
      if (
        e.key === keys[i].getAttribute('keyEn')
        || e.key === keys[i].getAttribute('keyRu')
        || e.code === keys[i].getAttribute('keyname')
        || e.key === keys[i].getAttribute('UpperCaseNameEn')
        || e.key === keys[i].getAttribute('UpperCaseNameRu')
        || e.key === keys[i].getAttribute('key')
      ) {
        keys[i].classList.remove('active');
        keys[i].classList.add('remove');
      }

      setTimeout(() => {
        keys[i].classList.remove('remove');
      }, 100);
    }
    if (e.key === 'Shift' || e.key === 'CapsLock') {
      getLowerCase(keys);
    }
  });
});
