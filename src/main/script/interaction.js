import {
  setAtrsforKeys,
  rmTxt,
  toggleLanguage,
  checkActive,
  toggleActive,
  getLowerCase,
  getUpperCase,
} from './helper';

window.addEventListener('load', () => {
  const keyBoardWrap = document.querySelector('.keyboard_wrapp');
  const txtField = document.querySelector('.text-field');
  const keys = document.querySelectorAll('.keys');
  let focus = false;
  let language = 'en';

  setAtrsforKeys();

  const space = document.querySelector('.space_key');
  space.setAttribute('keyname', 'Space');

  const capsLock = document.querySelector('.caps_lock_key');
  capsLock.setAttribute('keyname', 'CapsLock');

  const tab = document.querySelector('.tab_key');
  tab.setAttribute('keyname', 'Tab');

  const enter = document.querySelector('.enter_key');
  enter.setAttribute('keyname', 'Enter');

  const backspace = document.querySelector('.backspace_key');
  backspace.setAttribute('keyname', 'Backspace');

  const shiftLeft = document.querySelector('.left_shift');
  const shiftRight = document.querySelector('.right_shift');
  shiftLeft.setAttribute('keyname', 'ShiftLeft');
  shiftRight.setAttribute('keyname', 'ShiftRight');

  const ctrlLeft = document.querySelector('.ctrl_left');
  const ctrlRight = document.querySelector('.ctrl_right');
  ctrlLeft.setAttribute('keyname', 'ControlLeft');
  ctrlRight.setAttribute('keyname', 'ControlRight');

  const altLeft = document.querySelector('.alt_left');
  const altRight = document.querySelector('.alt_right');
  altLeft.setAttribute('keyname', 'AltLeft');
  altRight.setAttribute('keyname', 'AltRight');

  const del = document.querySelector('.del_key');
  del.setAttribute('keyname', 'Delete');

  const up = document.querySelector('.up_key');
  const down = document.querySelector('.down_key');
  const left = document.querySelector('.left_key');
  const right = document.querySelector('.right_key');

  up.setAttribute('keyname', 'ArrowUp');
  up.classList.add('arr');
  down.setAttribute('keyname', 'ArrowDown');
  down.classList.add('arr');
  left.setAttribute('keyname', 'ArrowLeft');
  left.classList.add('arr');
  right.setAttribute('keyname', 'ArrowRight');
  right.classList.add('arr');

  if (localStorage.getItem('active-language') && language !== localStorage.getItem('active-language')) {
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i].getAttribute('keyRu')) {
        keys[i].innerHTML = keys[i].getAttribute('keyRu');
      }
    }
    language = localStorage.getItem('active-language');
  }

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
      ) {
        keys[i].classList.add('active');
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
      // console.log("blur");
    }
  });

  keyBoardWrap.addEventListener('click', (e) => {
    let keyname;
    if (e.target.getAttribute('keyName')) {
      keyname = e.target.getAttribute('keyName');
    } else {
      keyname = null;
    }
    if (keyname === 'ShiftLeft' || keyname === 'ShiftRight') {
      toggleActive(e.target);
      if (e.target.classList.contains('active')) {
        getUpperCase(keys, keyname);
      } else {
        getLowerCase(keys);
      }
    } else if (keyname === 'CapsLock') {
      toggleActive(e.target);
      if (e.target.classList.contains('active')) {
        getUpperCase(keys, keyname);
      } else {
        getLowerCase(keys);
      }
    }
    if (focus) {
      setTimeout(() => {
        txtField.focus();
      }, 200);
    } else {
      return;
    }
    if (e.target.classList.contains('arr')) {
      if (!focus) {
        return;
      }
      if (e.target.classList.contains('left')) {
        if (txtField.selectionStart > 0) {
          const ind = txtField.selectionStart;
          txtField.selectionStart = ind - 1;
          txtField.selectionEnd = ind - 1;
        }
      } else if (e.target.classList.contains('right')) {
        const ind = txtField.selectionStart;
        if (ind < txtField.value.length) {
          txtField.selectionStart = ind + 1;
          txtField.selectionEnd = ind + 1;
        }
      }
    }
    if (!e.target.classList.contains('keys')) {
      return;
    }

    const target = e.target.innerHTML;

    if (e.target.classList.contains('space_key')) {
      const ind = txtField.selectionEnd + 1;
      if (txtField.selectionEnd >= txtField.value.length) {
        txtField.value += ' ';
      } else {
        const startStr = txtField.value.slice(0, [txtField.selectionEnd]);
        const endStr = txtField.value.slice([txtField.selectionEnd]);
        txtField.value = `${startStr} ${endStr}`;
        txtField.selectionStart = ind;
        txtField.selectionEnd = ind;
      }
    } else if (target.length === 1) {
      txtField.value += target;
    } else if (keyname === 'Tab') {
      txtField.value += '    ';
    } else if (keyname === 'Backspace') {
      if (txtField.value.length > 0 && txtField.selectionEnd > 0) {
        const ind = txtField.selectionEnd - 1;
        txtField.value = rmTxt(txtField, txtField.selectionEnd - 1, txtField.selectionEnd);
        txtField.selectionStart = ind;
        txtField.selectionEnd = ind;
      }
    } else if (keyname === 'Enter') {
      txtField.value += '\n';
    } else if (keyname === 'Delete') {
      if (txtField.value.length > 0 && txtField.selectionEnd < txtField.value.length) {
        const ind = txtField.selectionEnd;
        txtField.value = rmTxt(txtField, ind, ind + 1);
        txtField.selectionStart = ind;
        txtField.selectionEnd = ind;
      }
    }
  });
});
