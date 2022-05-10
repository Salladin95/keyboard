/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/main/styles/index.scss":
/*!************************************!*\
  !*** ./src/main/styles/index.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/main/script/interaction.js":
/*!****************************************!*\
  !*** ./src/main/script/interaction.js ***!
  \****************************************/
/***/ (() => {

window.addEventListener('load', () => {
  const keyBoardWrap = document.querySelector('.keyboard_wrapp');
  const txtField = document.querySelector('.text-field');
  const keys = document.querySelectorAll('.keys');
  let focus = false;
  let highlight = '';
  let language = 'en';

  setAtrsforKeys(keys);

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
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].getAttribute('keyRu')) {
        keys[i].innerHTML = keys[i].getAttribute('keyRu');
      }
    }
    language = localStorage.getItem('active-language');
  }

  window.addEventListener('keydown', (e) => {
    for (let i = 0; i < keys.length; i++) {
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

    if (e.key === 'Shift') {
      getUpperCase(keys);
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
    for (let i = 0; i < keys.length; i++) {
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
    if (e.key === 'Shift') {
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
      const target = e.target.classList;
      if (target.contains('left')) {
        if (txtField.selectionStart > 0) {
          const ind = txtField.selectionStart;
          txtField.selectionStart = txtField.selectionEnd = ind - 1;
        }
      } else if (target.contains('right')) {
        const ind = txtField.selectionStart;
        if (ind < txtField.value.length) {
          txtField.selectionStart = txtField.selectionEnd = ind + 1;
        }
      }
    }
    if (!e.target.classList.contains('keys')) {
      return;
    }
    // txtField.focus();
    let keyname;

    if (e.target.getAttribute('keyName')) {
      keyname = e.target.getAttribute('keyName');
    } else {
      keyname = null;
    }

    const target = e.target.innerHTML;

    if (e.target.classList.contains('space_key')) {
      txtField.value += ' ';
    } else if (target.length === 1) {
      txtField.value += target;
    } else if (keyname === 'ShiftLeft' || keyname === 'ShiftRight' || keyname === 'CapsLock') {
      toggleActive(e.target);
      if (e.target.classList.contains('active')) {
        getUpperCase(keys);
      } else {
        getLowerCase(keys);
      }
    } else if (keyname === 'Tab') {
      txtField.value += '    ';
    } else if (keyname === 'Backspace') {
      if (txtField.value.length > 0) {
        if (highlight === '') {
          txtField.value = rmTxt(txtField.selectionEnd - 1, txtField.value);
        } else {
          txtField.value = rmTxt(highlight, txtField.value);
          highlight = '';
        }
      }
    } else if (keyname === 'Enter') {
      txtField.value += '\n';
    } else if (keyname === 'Delete') {
      if (txtField.value.length > 0 && txtField.selectionEnd < txtField.value.length) {
        txtField.value = rmTxt(txtField.selectionEnd, txtField.value);
      }
    }
  });

  document.onselectionchange = () => {
    //console.log(txtField.selectionStart);
    //console.log(txtField.selectionEnd);
  };
});

function rmTxt(target, txtValue) {
  if (typeof target === 'number') {
    return txtValue.slice(0, target);
  }
  const regExp = /target/i;
  return txtValue.replace(regExp, '');
}

function getUpperCase(keys) {
  for (let i = 0; i < keys.length; i++) {
    if (localStorage.getItem('active-language') === 'en') {
      if (keys[i].getAttribute('keyEn') || keys[i].getAttribute('key')) {
        keys[i].innerHTML = keys[i].getAttribute('UpperCaseNameEn');
      }
    } else if (keys[i].getAttribute('keyRu') || keys[i].getAttribute('key')) {
      keys[i].innerHTML = keys[i].getAttribute('UpperCaseNameRu');
    }
  }
}

function getLowerCase(keys) {
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].getAttribute('key')) {
      keys[i].innerHTML = keys[i].getAttribute('key');
    }
    if (localStorage.getItem('active-language') === 'en') {
      if (keys[i].getAttribute('keyEn')) {
        keys[i].innerHTML = keys[i].getAttribute('keyEn');
      }
    } else if (keys[i].getAttribute('keyRu')) {
      keys[i].innerHTML = keys[i].getAttribute('keyRu');
    }
  }
}

function toggleActive(el) {
  if (el.classList.contains('active')) {
    el.classList.remove('active');
  } else {
    el.classList.add('active');
  }
}

function checkActive(el) {
  if (el.classList.contains('active')) {
    return true;
  }
  return false;
}

function toggleLanguage(keys) {
  if (localStorage.getItem('active-language') === 'en') {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].getAttribute('keyEn')) {
        keys[i].innerHTML = keys[i].getAttribute('keyRu');
      }
    }
    localStorage.setItem('active-language', 'ru');
  } else {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].getAttribute('keyEn')) {
        keys[i].innerHTML = keys[i].getAttribute('keyEn');
      }
    }
    localStorage.setItem('active-language', 'en');
  }
}

function setAtrsforKeys(keys) {
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].getAttribute('keyEn')) {
      keys[i].setAttribute(
        'UpperCaseNameEn',
        keys[i].getAttribute('keyEn').toUpperCase(),
      );
      keys[i].setAttribute(
        'UpperCaseNameRu',
        keys[i].getAttribute('keyRu').toUpperCase(),
      );
    }
  }

  keys[1].setAttribute('key', '1');
  keys[2].setAttribute('key', '2');
  keys[3].setAttribute('key', '3');
  keys[4].setAttribute('key', '4');
  keys[5].setAttribute('key', '5');
  keys[6].setAttribute('key', '6');
  keys[7].setAttribute('key', '7');
  keys[8].setAttribute('key', '8');
  keys[9].setAttribute('key', '9');
  keys[10].setAttribute('key', '0');
  keys[11].setAttribute('key', '-');
  keys[12].setAttribute('key', '=');

  keys[0].setAttribute('UpperCaseNameEn', '~');
  keys[1].setAttribute('UpperCaseNameEn', '!');
  keys[2].setAttribute('UpperCaseNameEn', '@');
  keys[3].setAttribute('UpperCaseNameEn', '#');
  keys[4].setAttribute('UpperCaseNameEn', '$');
  keys[5].setAttribute('UpperCaseNameEn', '%');
  keys[6].setAttribute('UpperCaseNameEn', '^');
  keys[7].setAttribute('UpperCaseNameEn', '&');
  keys[8].setAttribute('UpperCaseNameEn', '*');
  keys[9].setAttribute('UpperCaseNameEn', '(');
  keys[10].setAttribute('UpperCaseNameEn', ')');
  keys[11].setAttribute('UpperCaseNameEn', '_');
  keys[12].setAttribute('UpperCaseNameEn', '+');

  keys[1].setAttribute('UpperCaseNameRu', '!');
  keys[2].setAttribute('UpperCaseNameRu', '"');
  keys[3].setAttribute('UpperCaseNameRu', '№');
  keys[4].setAttribute('UpperCaseNameRu', ';');
  keys[5].setAttribute('UpperCaseNameRu', '%');
  keys[6].setAttribute('UpperCaseNameRu', ':');
  keys[7].setAttribute('UpperCaseNameRu', '?');
  keys[8].setAttribute('UpperCaseNameRu', '*');
  keys[9].setAttribute('UpperCaseNameRu', '(');
  keys[10].setAttribute('UpperCaseNameRu', ')');
  keys[11].setAttribute('UpperCaseNameRu', '-');
  keys[12].setAttribute('UpperCaseNameRu', '=');

  keys[25].setAttribute('UpperCaseNameEn', '{');
  keys[26].setAttribute('UpperCaseNameEn', '}');

  keys[27].setAttribute('key', '\\');
  keys[27].setAttribute('UpperCaseNameEn', '|');
  keys[27].setAttribute('UpperCaseNameRu', '|');

  keys[39].setAttribute('UpperCaseNameEn', ':');
  keys[40].setAttribute('UpperCaseNameEn', '"');

  keys[51].setAttribute('UpperCaseNameEn', '<');
  keys[52].setAttribute('UpperCaseNameEn', '>');

  keys[43].setAttribute('key', '/');
  keys[43].setAttribute('UpperCaseNameEn', '/');
  keys[43].setAttribute('UpperCaseNameRu', ',');

  keys[53].setAttribute('key', '/');
  keys[53].setAttribute('UpperCaseNameEn', '?');
  keys[53].setAttribute('UpperCaseNameRu', '.');
}


/***/ }),

/***/ "./src/main/script/render.js":
/*!***********************************!*\
  !*** ./src/main/script/render.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const keysMap = new Map();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keysMap);

window.addEventListener('load', () => {
  fillKeys(keysMap);

  const body = document.querySelector('body');
  const container = createEl('div', 'container');
  body.appendChild(container);

  const wrapper = createEl('div', 'wrapper');
  container.appendChild(wrapper);

  const textArea = createEl('textarea', 'text-field');
  wrapper.appendChild(textArea);
  textArea.placeholder = 'Hello there! \nEnter your thoughts...';

  const noticeHowChancgeLanguage = createEl('h1', 'title');
  noticeHowChancgeLanguage.classList.add('change-language_title');
  noticeHowChancgeLanguage.innerHTML = 'Press Ctrl + Alt to change language';

  const ocTitle = createEl('h2', 'title');
  const oc = isMacintosh() ? 'Mac OS' : 'Windows';
  ocTitle.classList.add('ocTitle_title');
  ocTitle.innerHTML = `Made for ${oc}`;

  wrapper.appendChild(noticeHowChancgeLanguage);
  wrapper.appendChild(ocTitle);

  const keyBoardWrap = createEl('div', 'keyboard_wrapp');
  const keyboardLights = createEl('div', 'keyboard_lights');
  const keyboardKeysWr = createEl('div', 'keyboard_keys');
  keyBoardWrap.appendChild(keyboardLights);
  keyBoardWrap.appendChild(keyboardKeysWr);

  wrapper.appendChild(keyBoardWrap);

  const keyboardKeys = document.querySelector('.keyboard_keys');

  for (let i = 0; i < keysMap.size; i++) {
    keyboardKeys.appendChild(keysMap.get(`row${i + 1}`));
  }

  keyboardKeys.childNodes[0].lastChild.classList.add('backspace_key');

  keyboardKeys.childNodes[1].firstChild.classList.add('tab_key');
  keyboardKeys.childNodes[1].lastChild.classList.add('del_key');

  keyboardKeys.childNodes[2].firstChild.classList.add('caps_lock_key');
  keyboardKeys.childNodes[2].lastChild.classList.add('enter_key');

  keyboardKeys.childNodes[3].firstChild.classList.add(
    'shift_key',
    'left_shift',
  );
  keyboardKeys.childNodes[3].lastChild.classList.add(
    'shift_key',
    'right_shift',
  );

  keyboardKeys.childNodes[4].firstChild.classList.add('ctrl_key', 'ctrl_left');

  keyboardKeys.childNodes[4].childNodes[2].classList.add(
    'alt_key',
    'alt_left',
  );
  keyboardKeys.childNodes[4].childNodes[4].classList.add(
    'alt_key',
    'alt_right',
  );

  const space = keyboardKeys.childNodes[4].childNodes[3];
  space.classList.add('space_key');

  keyboardKeys.childNodes[4].childNodes[5].classList.add(
    'ctrl_key',
    'ctrl_right',
  );

  const up = keyboardKeys.childNodes[3].lastChild.previousSibling;
  const down = keyboardKeys.childNodes[4].childNodes[7];
  const left = keyboardKeys.childNodes[4].childNodes[6];
  const right = keyboardKeys.childNodes[4].childNodes[8];

  up.classList.add('up_key', 'up');
  down.classList.add('down_key', 'down');
  left.classList.add('left_key', 'left');
  right.classList.add('right_key', 'right');

  up.innerHTML = `<?xml version="1.0" encoding="UTF-8"?>
  <svg class="arr up" width="36px" height="36px" viewBox="0 -6.5 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  
      <title>up-arrow</title>
      <desc>Created with Sketch.</desc>
      <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="up" class="arrows arr up" transform="translate(-342.000000, -159.000000)" fill="#252528" fill-rule="nonzero">
              <g id="square-filled" transform="translate(50.000000, 120.000000)">
                  <path class="arrows arr up" d="M317.108012,39.2902857 L327.649804,49.7417043 L327.708994,49.7959169 C327.889141,49.9745543 327.986143,50.2044182 328,50.4382227 L328,50.5617773 C327.986143,50.7955818 327.889141,51.0254457 327.708994,51.2040831 L327.6571,51.2479803 L317.108012,61.7097143 C316.717694,62.0967619 316.084865,62.0967619 315.694547,61.7097143 C315.30423,61.3226668 315.30423,60.6951387 315.694547,60.3080911 L324.702666,51.3738496 L292.99947,51.3746291 C292.447478,51.3746291 292,50.9308997 292,50.3835318 C292,49.8361639 292.447478,49.3924345 292.99947,49.3924345 L324.46779,49.3916551 L315.694547,40.6919089 C315.30423,40.3048613 315.30423,39.6773332 315.694547,39.2902857 C316.084865,38.9032381 316.717694,38.9032381 317.108012,39.2902857 Z M327.115357,50.382693 L316.401279,61.0089027 L327.002151,50.5002046 L327.002252,50.4963719 L326.943142,50.442585 L326.882737,50.382693 L327.115357,50.382693 Z" id="left-arrow" transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "></path>
              </g>
          </g>
      </g>
  </svg>`;
  down.innerHTML = `<?xml version="1.0" encoding="UTF-8"?>
  <svg class="arr down" width="36px" height="36px" viewBox="0 -6.5 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  
      <title>down-arrow</title>
      <desc>Created with Sketch.</desc>
      <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="down" class="arrows arr down" transform="translate(-342.000000, -159.000000)" fill="#252528" fill-rule="nonzero">
              <g id="square-filled" transform="translate(50.000000, 120.000000)">
                  <path class="arrows arr down" d="M317.108012,39.2902857 L327.649804,49.7417043 L327.708994,49.7959169 C327.889141,49.9745543 327.986143,50.2044182 328,50.4382227 L328,50.5617773 C327.986143,50.7955818 327.889141,51.0254457 327.708994,51.2040831 L327.6571,51.2479803 L317.108012,61.7097143 C316.717694,62.0967619 316.084865,62.0967619 315.694547,61.7097143 C315.30423,61.3226668 315.30423,60.6951387 315.694547,60.3080911 L324.702666,51.3738496 L292.99947,51.3746291 C292.447478,51.3746291 292,50.9308997 292,50.3835318 C292,49.8361639 292.447478,49.3924345 292.99947,49.3924345 L324.46779,49.3916551 L315.694547,40.6919089 C315.30423,40.3048613 315.30423,39.6773332 315.694547,39.2902857 C316.084865,38.9032381 316.717694,38.9032381 317.108012,39.2902857 Z M327.115357,50.382693 L316.401279,61.0089027 L327.002151,50.5002046 L327.002252,50.4963719 L326.943142,50.442585 L326.882737,50.382693 L327.115357,50.382693 Z" id="left-arrow" transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "></path>
              </g>
          </g>
      </g>
  </svg>`;
  left.innerHTML = `<?xml version="1.0" encoding="UTF-8"?>
  <svg class="arr left" width="36px" height="36px" viewBox="0 -6.5 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  
      <title>left-arrow</title>
      <desc>Created with Sketch.</desc>
      <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="left" class="arrows arr left" transform="translate(-342.000000, -159.000000)" fill="#252528" fill-rule="nonzero">
              <g id="square-filled" transform="translate(50.000000, 120.000000)">
                  <path class="arrows arr left" d="M317.108012,39.2902857 L327.649804,49.7417043 L327.708994,49.7959169 C327.889141,49.9745543 327.986143,50.2044182 328,50.4382227 L328,50.5617773 C327.986143,50.7955818 327.889141,51.0254457 327.708994,51.2040831 L327.6571,51.2479803 L317.108012,61.7097143 C316.717694,62.0967619 316.084865,62.0967619 315.694547,61.7097143 C315.30423,61.3226668 315.30423,60.6951387 315.694547,60.3080911 L324.702666,51.3738496 L292.99947,51.3746291 C292.447478,51.3746291 292,50.9308997 292,50.3835318 C292,49.8361639 292.447478,49.3924345 292.99947,49.3924345 L324.46779,49.3916551 L315.694547,40.6919089 C315.30423,40.3048613 315.30423,39.6773332 315.694547,39.2902857 C316.084865,38.9032381 316.717694,38.9032381 317.108012,39.2902857 Z M327.115357,50.382693 L316.401279,61.0089027 L327.002151,50.5002046 L327.002252,50.4963719 L326.943142,50.442585 L326.882737,50.382693 L327.115357,50.382693 Z" id="left-arrow" transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "></path>
              </g>
          </g>
      </g>
  </svg>`;
  right.innerHTML = `<?xml version="1.0" encoding="UTF-8"?>
  <svg class="arr right" width="36px" height="36px" viewBox="0 -6.5 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  
      <title>right-arrow</title>
      <desc>Created with Sketch.</desc>
      <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="right" class="arrows arr right" transform="translate(-342.000000, -159.000000)" fill="#252528" fill-rule="nonzero">
              <g id="square-filled" transform="translate(50.000000, 120.000000)">
                  <path class="arrows arr right" d="M317.108012,39.2902857 L327.649804,49.7417043 L327.708994,49.7959169 C327.889141,49.9745543 327.986143,50.2044182 328,50.4382227 L328,50.5617773 C327.986143,50.7955818 327.889141,51.0254457 327.708994,51.2040831 L327.6571,51.2479803 L317.108012,61.7097143 C316.717694,62.0967619 316.084865,62.0967619 315.694547,61.7097143 C315.30423,61.3226668 315.30423,60.6951387 315.694547,60.3080911 L324.702666,51.3738496 L292.99947,51.3746291 C292.447478,51.3746291 292,50.9308997 292,50.3835318 C292,49.8361639 292.447478,49.3924345 292.99947,49.3924345 L324.46779,49.3916551 L315.694547,40.6919089 C315.30423,40.3048613 315.30423,39.6773332 315.694547,39.2902857 C316.084865,38.9032381 316.717694,38.9032381 317.108012,39.2902857 Z M327.115357,50.382693 L316.401279,61.0089027 L327.002151,50.5002046 L327.002252,50.4963719 L326.943142,50.442585 L326.882737,50.382693 L327.115357,50.382693 Z" id="left-arrow" transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "></path>
              </g>
          </g>
      </g>
  </svg>`;
});

const createKeys = (arr) => {
  let i = 0;

  const row = createEl('div', 'row');

  while (i < arr.length) {
    const key = document.createElement('div');
    key.classList.add('keys');
    if (Array.isArray(arr[i])) {
      key.setAttribute('keyEn', arr[i][0]);
      key.setAttribute('keyRu', arr[i][1]);
      key.innerHTML = key.getAttribute('keyEn');
    } else {
      key.innerHTML = arr[i];
    }
    row.appendChild(key);
    i++;
  }

  return row;
};

function createEl(tag, className) {
  const el = document.createElement(tag);
  el.classList.add(className);
  return el;
}

function isMacintosh() {
  return navigator.platform.indexOf('Mac') > -1;
}

function fillKeys(map) {
  const oc = isMacintosh() ? 'Mac' : 'Win';

  map.set('row1', createKeys([['`', 'ё'], 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace']));
  map.set(
    'row2',
    createKeys(['Tab',
      ['q', 'й'],
      ['w', 'ц'],
      ['e', 'у'],
      ['r', 'к'],
      ['t', 'е'],
      ['y', 'н'],
      ['u', 'г'],
      ['i', 'ш'],
      ['o', 'щ'],
      ['p', 'з'],
      ['[', 'х'],
      [']', 'ъ'],
      '\\',
      'DEL',
    ]),
  );
  map.set(
    'row3',
    createKeys([
      'Caps Lock',
      ['a', 'ф'],
      ['s', 'ы'],
      ['d', 'в'],
      ['f', 'а'],
      ['g', 'п'],
      ['h', 'р'],
      ['j', 'о'],
      ['k', 'л'],
      ['l', 'д'],
      [';', 'ж'],
      ["'", 'э'],
      'Enter',
    ]),
  );
  map.set(
    'row4',
    createKeys([
      'Shift',
      '/',
      ['z', 'я'],
      ['x', 'ч'],
      ['c', 'с'],
      ['v', 'м'],
      ['b', 'и'],
      ['n', 'т'],
      ['m', 'ь'],
      ['.', 'б'],
      [',', 'ю'],
      '/',
      '',
      'Shift',
    ]),
  );
  map.set(
    'row5',
    createKeys(['Ctrl', oc, 'Alt', '', 'Alt', 'Ctrl', '', '', '']),
  );
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/main/styles/index.scss");
/* harmony import */ var _script_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/render */ "./src/main/script/render.js");
/* harmony import */ var _script_interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/interaction */ "./src/main/script/interaction.js");
/* harmony import */ var _script_interaction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_script_interaction__WEBPACK_IMPORTED_MODULE_2__);




__webpack_require__(/*! normalize.css/normalize.css */ "./node_modules/normalize.css/normalize.css");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDO0FBQzdDLDZDQUE2Qzs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3VkE7QUFDQSxpRUFBZSxPQUFPLEVBQUM7O0FBRXZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsR0FBRzs7QUFFckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGtCQUFrQixrQkFBa0I7QUFDcEMsK0NBQStDLE1BQU07QUFDckQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQy9PQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNKO0FBQ0s7O0FBRTlCLG1CQUFPLENBQUMsK0VBQTZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnNzLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz9mYjU3Iiwid2VicGFjazovL3Jzcy8uL3NyYy9tYWluL3N0eWxlcy9pbmRleC5zY3NzPzM3ZTYiLCJ3ZWJwYWNrOi8vcnNzLy4vc3JjL21haW4vc2NyaXB0L2ludGVyYWN0aW9uLmpzIiwid2VicGFjazovL3Jzcy8uL3NyYy9tYWluL3NjcmlwdC9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jzcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yc3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jzcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jzcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jzcy8uL3NyYy9tYWluL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBjb25zdCBrZXlCb2FyZFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmRfd3JhcHAnKTtcbiAgY29uc3QgdHh0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dC1maWVsZCcpO1xuICBjb25zdCBrZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtleXMnKTtcbiAgbGV0IGZvY3VzID0gZmFsc2U7XG4gIGxldCBoaWdobGlnaHQgPSAnJztcbiAgbGV0IGxhbmd1YWdlID0gJ2VuJztcblxuICBzZXRBdHJzZm9yS2V5cyhrZXlzKTtcblxuICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGFjZV9rZXknKTtcbiAgc3BhY2Uuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ1NwYWNlJyk7XG5cbiAgY29uc3QgY2Fwc0xvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fwc19sb2NrX2tleScpO1xuICBjYXBzTG9jay5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQ2Fwc0xvY2snKTtcblxuICBjb25zdCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiX2tleScpO1xuICB0YWIuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ1RhYicpO1xuXG4gIGNvbnN0IGVudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVudGVyX2tleScpO1xuICBlbnRlci5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnRW50ZXInKTtcblxuICBjb25zdCBiYWNrc3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja3NwYWNlX2tleScpO1xuICBiYWNrc3BhY2Uuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0JhY2tzcGFjZScpO1xuXG4gIGNvbnN0IHNoaWZ0TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0X3NoaWZ0Jyk7XG4gIGNvbnN0IHNoaWZ0UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHRfc2hpZnQnKTtcbiAgc2hpZnRMZWZ0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdTaGlmdExlZnQnKTtcbiAgc2hpZnRSaWdodC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnU2hpZnRSaWdodCcpO1xuXG4gIGNvbnN0IGN0cmxMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN0cmxfbGVmdCcpO1xuICBjb25zdCBjdHJsUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3RybF9yaWdodCcpO1xuICBjdHJsTGVmdC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQ29udHJvbExlZnQnKTtcbiAgY3RybFJpZ2h0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdDb250cm9sUmlnaHQnKTtcblxuICBjb25zdCBhbHRMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsdF9sZWZ0Jyk7XG4gIGNvbnN0IGFsdFJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsdF9yaWdodCcpO1xuICBhbHRMZWZ0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBbHRMZWZ0Jyk7XG4gIGFsdFJpZ2h0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBbHRSaWdodCcpO1xuXG4gIGNvbnN0IGRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxfa2V5Jyk7XG4gIGRlbC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnRGVsZXRlJyk7XG5cbiAgY29uc3QgdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBfa2V5Jyk7XG4gIGNvbnN0IGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93bl9rZXknKTtcbiAgY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0X2tleScpO1xuICBjb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodF9rZXknKTtcblxuICB1cC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQXJyb3dVcCcpO1xuICB1cC5jbGFzc0xpc3QuYWRkKCdhcnInKTtcbiAgZG93bi5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQXJyb3dEb3duJyk7XG4gIGRvd24uY2xhc3NMaXN0LmFkZCgnYXJyJyk7XG4gIGxlZnQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0Fycm93TGVmdCcpO1xuICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2FycicpO1xuICByaWdodC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQXJyb3dSaWdodCcpO1xuICByaWdodC5jbGFzc0xpc3QuYWRkKCdhcnInKTtcblxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpICYmIGxhbmd1YWdlICE9PSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlLWxhbmd1YWdlJykpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKSkge1xuICAgICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYW5ndWFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKVxuICAgICAgICB8fCBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JylcbiAgICAgICAgfHwgZS5jb2RlID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5bmFtZScpXG4gICAgICApIHtcbiAgICAgICAga2V5c1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZS5rZXkgPT09ICdTaGlmdCcpIHtcbiAgICAgIGdldFVwcGVyQ2FzZShrZXlzKTtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAnQ29udHJvbCcgfHwgZS5rZXkgPT09ICdBbHQnKSB7XG4gICAgICBpZiAoXG4gICAgICAgIChjaGVja0FjdGl2ZShjdHJsTGVmdCkgJiYgY2hlY2tBY3RpdmUoYWx0TGVmdCkpXG4gICAgICAgIHx8IChjaGVja0FjdGl2ZShjdHJsUmlnaHQpICYmIGNoZWNrQWN0aXZlKGFsdFJpZ2h0KSlcbiAgICAgICkge1xuICAgICAgICB0b2dnbGVMYW5ndWFnZShrZXlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKVxuICAgICAgICB8fCBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1JylcbiAgICAgICAgfHwgZS5jb2RlID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5bmFtZScpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnKVxuICAgICAgKSB7XG4gICAgICAgIGtleXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGtleXNbaV0uY2xhc3NMaXN0LmFkZCgncmVtb3ZlJyk7XG4gICAgICB9XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBrZXlzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZScpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAnU2hpZnQnKSB7XG4gICAgICBnZXRMb3dlckNhc2Uoa2V5cyk7XG4gICAgfVxuICB9KTtcblxuICB0eHRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICBpZiAoIWZvY3VzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZm9jdXMgPSB0cnVlO1xuICAgICAgfSwgMjAwKTtcbiAgICB9XG4gIH0pO1xuXG4gIHR4dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgaWYgKGZvY3VzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZm9jdXMgPSBmYWxzZTtcbiAgICAgIH0sIDIwMCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImJsdXJcIik7XG4gICAgfVxuICB9KTtcblxuICBrZXlCb2FyZFdyYXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChmb2N1cykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHR4dEZpZWxkLmZvY3VzKCk7XG4gICAgICB9LCAyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FycicpKSB7XG4gICAgICBpZiAoIWZvY3VzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmNsYXNzTGlzdDtcbiAgICAgIGlmICh0YXJnZXQuY29udGFpbnMoJ2xlZnQnKSkge1xuICAgICAgICBpZiAodHh0RmllbGQuc2VsZWN0aW9uU3RhcnQgPiAwKSB7XG4gICAgICAgICAgY29uc3QgaW5kID0gdHh0RmllbGQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgdHh0RmllbGQuc2VsZWN0aW9uU3RhcnQgPSB0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPSBpbmQgLSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldC5jb250YWlucygncmlnaHQnKSkge1xuICAgICAgICBjb25zdCBpbmQgPSB0eHRGaWVsZC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgaWYgKGluZCA8IHR4dEZpZWxkLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID0gdHh0RmllbGQuc2VsZWN0aW9uRW5kID0gaW5kICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygna2V5cycpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHR4dEZpZWxkLmZvY3VzKCk7XG4gICAgbGV0IGtleW5hbWU7XG5cbiAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdrZXlOYW1lJykpIHtcbiAgICAgIGtleW5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2tleU5hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5bmFtZSA9IG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuaW5uZXJIVE1MO1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3BhY2Vfa2V5JykpIHtcbiAgICAgIHR4dEZpZWxkLnZhbHVlICs9ICcgJztcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHR4dEZpZWxkLnZhbHVlICs9IHRhcmdldDtcbiAgICB9IGVsc2UgaWYgKGtleW5hbWUgPT09ICdTaGlmdExlZnQnIHx8IGtleW5hbWUgPT09ICdTaGlmdFJpZ2h0JyB8fCBrZXluYW1lID09PSAnQ2Fwc0xvY2snKSB7XG4gICAgICB0b2dnbGVBY3RpdmUoZS50YXJnZXQpO1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgZ2V0VXBwZXJDYXNlKGtleXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0TG93ZXJDYXNlKGtleXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5bmFtZSA9PT0gJ1RhYicpIHtcbiAgICAgIHR4dEZpZWxkLnZhbHVlICs9ICcgICAgJztcbiAgICB9IGVsc2UgaWYgKGtleW5hbWUgPT09ICdCYWNrc3BhY2UnKSB7XG4gICAgICBpZiAodHh0RmllbGQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoaGlnaGxpZ2h0ID09PSAnJykge1xuICAgICAgICAgIHR4dEZpZWxkLnZhbHVlID0gcm1UeHQodHh0RmllbGQuc2VsZWN0aW9uRW5kIC0gMSwgdHh0RmllbGQudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR4dEZpZWxkLnZhbHVlID0gcm1UeHQoaGlnaGxpZ2h0LCB0eHRGaWVsZC52YWx1ZSk7XG4gICAgICAgICAgaGlnaGxpZ2h0ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleW5hbWUgPT09ICdFbnRlcicpIHtcbiAgICAgIHR4dEZpZWxkLnZhbHVlICs9ICdcXG4nO1xuICAgIH0gZWxzZSBpZiAoa2V5bmFtZSA9PT0gJ0RlbGV0ZScpIHtcbiAgICAgIGlmICh0eHRGaWVsZC52YWx1ZS5sZW5ndGggPiAwICYmIHR4dEZpZWxkLnNlbGVjdGlvbkVuZCA8IHR4dEZpZWxkLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICB0eHRGaWVsZC52YWx1ZSA9IHJtVHh0KHR4dEZpZWxkLnNlbGVjdGlvbkVuZCwgdHh0RmllbGQudmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQub25zZWxlY3Rpb25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgLy9jb25zb2xlLmxvZyh0eHRGaWVsZC5zZWxlY3Rpb25TdGFydCk7XG4gICAgLy9jb25zb2xlLmxvZyh0eHRGaWVsZC5zZWxlY3Rpb25FbmQpO1xuICB9O1xufSk7XG5cbmZ1bmN0aW9uIHJtVHh0KHRhcmdldCwgdHh0VmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHR4dFZhbHVlLnNsaWNlKDAsIHRhcmdldCk7XG4gIH1cbiAgY29uc3QgcmVnRXhwID0gL3RhcmdldC9pO1xuICByZXR1cm4gdHh0VmFsdWUucmVwbGFjZShyZWdFeHAsICcnKTtcbn1cblxuZnVuY3Rpb24gZ2V0VXBwZXJDYXNlKGtleXMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnKSA9PT0gJ2VuJykge1xuICAgICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpIHx8IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXknKSkge1xuICAgICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpIHx8IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXknKSkge1xuICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1Jyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldExvd2VyQ2FzZShrZXlzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5JykpIHtcbiAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleScpO1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpID09PSAnZW4nKSB7XG4gICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykpIHtcbiAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpKSB7XG4gICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVBY3RpdmUoZWwpIHtcbiAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSBlbHNlIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0FjdGl2ZShlbCkge1xuICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTGFuZ3VhZ2Uoa2V5cykge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpID09PSAnZW4nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykpIHtcbiAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScsICdydScpO1xuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpKSB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnLCAnZW4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRBdHJzZm9yS2V5cyhrZXlzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKSkge1xuICAgICAga2V5c1tpXS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICdVcHBlckNhc2VOYW1lRW4nLFxuICAgICAgICBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgKTtcbiAgICAgIGtleXNbaV0uc2V0QXR0cmlidXRlKFxuICAgICAgICAnVXBwZXJDYXNlTmFtZVJ1JyxcbiAgICAgICAga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1JykudG9VcHBlckNhc2UoKSxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAga2V5c1sxXS5zZXRBdHRyaWJ1dGUoJ2tleScsICcxJyk7XG4gIGtleXNbMl0uc2V0QXR0cmlidXRlKCdrZXknLCAnMicpO1xuICBrZXlzWzNdLnNldEF0dHJpYnV0ZSgna2V5JywgJzMnKTtcbiAga2V5c1s0XS5zZXRBdHRyaWJ1dGUoJ2tleScsICc0Jyk7XG4gIGtleXNbNV0uc2V0QXR0cmlidXRlKCdrZXknLCAnNScpO1xuICBrZXlzWzZdLnNldEF0dHJpYnV0ZSgna2V5JywgJzYnKTtcbiAga2V5c1s3XS5zZXRBdHRyaWJ1dGUoJ2tleScsICc3Jyk7XG4gIGtleXNbOF0uc2V0QXR0cmlidXRlKCdrZXknLCAnOCcpO1xuICBrZXlzWzldLnNldEF0dHJpYnV0ZSgna2V5JywgJzknKTtcbiAga2V5c1sxMF0uc2V0QXR0cmlidXRlKCdrZXknLCAnMCcpO1xuICBrZXlzWzExXS5zZXRBdHRyaWJ1dGUoJ2tleScsICctJyk7XG4gIGtleXNbMTJdLnNldEF0dHJpYnV0ZSgna2V5JywgJz0nKTtcblxuICBrZXlzWzBdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ34nKTtcbiAga2V5c1sxXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICchJyk7XG4gIGtleXNbMl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnQCcpO1xuICBrZXlzWzNdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJyMnKTtcbiAga2V5c1s0XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICckJyk7XG4gIGtleXNbNV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnJScpO1xuICBrZXlzWzZdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ14nKTtcbiAga2V5c1s3XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICcmJyk7XG4gIGtleXNbOF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnKicpO1xuICBrZXlzWzldLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJygnKTtcbiAga2V5c1sxMF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnKScpO1xuICBrZXlzWzExXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICdfJyk7XG4gIGtleXNbMTJdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJysnKTtcblxuICBrZXlzWzFdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJyEnKTtcbiAga2V5c1syXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICdcIicpO1xuICBrZXlzWzNdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJ+KElicpO1xuICBrZXlzWzRdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJzsnKTtcbiAga2V5c1s1XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICclJyk7XG4gIGtleXNbNl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnOicpO1xuICBrZXlzWzddLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJz8nKTtcbiAga2V5c1s4XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICcqJyk7XG4gIGtleXNbOV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnKCcpO1xuICBrZXlzWzEwXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICcpJyk7XG4gIGtleXNbMTFdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJy0nKTtcbiAga2V5c1sxMl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnPScpO1xuXG4gIGtleXNbMjVdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ3snKTtcbiAga2V5c1syNl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnfScpO1xuXG4gIGtleXNbMjddLnNldEF0dHJpYnV0ZSgna2V5JywgJ1xcXFwnKTtcbiAga2V5c1syN10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnfCcpO1xuICBrZXlzWzI3XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICd8Jyk7XG5cbiAga2V5c1szOV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnOicpO1xuICBrZXlzWzQwXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICdcIicpO1xuXG4gIGtleXNbNTFdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJzwnKTtcbiAga2V5c1s1Ml0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnPicpO1xuXG4gIGtleXNbNDNdLnNldEF0dHJpYnV0ZSgna2V5JywgJy8nKTtcbiAga2V5c1s0M10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnLycpO1xuICBrZXlzWzQzXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICcsJyk7XG5cbiAga2V5c1s1M10uc2V0QXR0cmlidXRlKCdrZXknLCAnLycpO1xuICBrZXlzWzUzXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICc/Jyk7XG4gIGtleXNbNTNdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJy4nKTtcbn1cbiIsImNvbnN0IGtleXNNYXAgPSBuZXcgTWFwKCk7XG5leHBvcnQgZGVmYXVsdCBrZXlzTWFwO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgZmlsbEtleXMoa2V5c01hcCk7XG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsICdjb250YWluZXInKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVFbCgnZGl2JywgJ3dyYXBwZXInKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gIGNvbnN0IHRleHRBcmVhID0gY3JlYXRlRWwoJ3RleHRhcmVhJywgJ3RleHQtZmllbGQnKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gIHRleHRBcmVhLnBsYWNlaG9sZGVyID0gJ0hlbGxvIHRoZXJlISBcXG5FbnRlciB5b3VyIHRob3VnaHRzLi4uJztcblxuICBjb25zdCBub3RpY2VIb3dDaGFuY2dlTGFuZ3VhZ2UgPSBjcmVhdGVFbCgnaDEnLCAndGl0bGUnKTtcbiAgbm90aWNlSG93Q2hhbmNnZUxhbmd1YWdlLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZS1sYW5ndWFnZV90aXRsZScpO1xuICBub3RpY2VIb3dDaGFuY2dlTGFuZ3VhZ2UuaW5uZXJIVE1MID0gJ1ByZXNzIEN0cmwgKyBBbHQgdG8gY2hhbmdlIGxhbmd1YWdlJztcblxuICBjb25zdCBvY1RpdGxlID0gY3JlYXRlRWwoJ2gyJywgJ3RpdGxlJyk7XG4gIGNvbnN0IG9jID0gaXNNYWNpbnRvc2goKSA/ICdNYWMgT1MnIDogJ1dpbmRvd3MnO1xuICBvY1RpdGxlLmNsYXNzTGlzdC5hZGQoJ29jVGl0bGVfdGl0bGUnKTtcbiAgb2NUaXRsZS5pbm5lckhUTUwgPSBgTWFkZSBmb3IgJHtvY31gO1xuXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQobm90aWNlSG93Q2hhbmNnZUxhbmd1YWdlKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChvY1RpdGxlKTtcblxuICBjb25zdCBrZXlCb2FyZFdyYXAgPSBjcmVhdGVFbCgnZGl2JywgJ2tleWJvYXJkX3dyYXBwJyk7XG4gIGNvbnN0IGtleWJvYXJkTGlnaHRzID0gY3JlYXRlRWwoJ2RpdicsICdrZXlib2FyZF9saWdodHMnKTtcbiAgY29uc3Qga2V5Ym9hcmRLZXlzV3IgPSBjcmVhdGVFbCgnZGl2JywgJ2tleWJvYXJkX2tleXMnKTtcbiAga2V5Qm9hcmRXcmFwLmFwcGVuZENoaWxkKGtleWJvYXJkTGlnaHRzKTtcbiAga2V5Qm9hcmRXcmFwLmFwcGVuZENoaWxkKGtleWJvYXJkS2V5c1dyKTtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGtleUJvYXJkV3JhcCk7XG5cbiAgY29uc3Qga2V5Ym9hcmRLZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkX2tleXMnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNNYXAuc2l6ZTsgaSsrKSB7XG4gICAga2V5Ym9hcmRLZXlzLmFwcGVuZENoaWxkKGtleXNNYXAuZ2V0KGByb3cke2kgKyAxfWApKTtcbiAgfVxuXG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzBdLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdiYWNrc3BhY2Vfa2V5Jyk7XG5cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMV0uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCd0YWJfa2V5Jyk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzFdLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdkZWxfa2V5Jyk7XG5cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMl0uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdjYXBzX2xvY2tfa2V5Jyk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzJdLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdlbnRlcl9rZXknKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1szXS5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoXG4gICAgJ3NoaWZ0X2tleScsXG4gICAgJ2xlZnRfc2hpZnQnLFxuICApO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1szXS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcbiAgICAnc2hpZnRfa2V5JyxcbiAgICAncmlnaHRfc2hpZnQnLFxuICApO1xuXG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnY3RybF9rZXknLCAnY3RybF9sZWZ0Jyk7XG5cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QuYWRkKFxuICAgICdhbHRfa2V5JyxcbiAgICAnYWx0X2xlZnQnLFxuICApO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzRdLmNsYXNzTGlzdC5hZGQoXG4gICAgJ2FsdF9rZXknLFxuICAgICdhbHRfcmlnaHQnLFxuICApO1xuXG4gIGNvbnN0IHNwYWNlID0ga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1szXTtcbiAgc3BhY2UuY2xhc3NMaXN0LmFkZCgnc3BhY2Vfa2V5Jyk7XG5cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1s1XS5jbGFzc0xpc3QuYWRkKFxuICAgICdjdHJsX2tleScsXG4gICAgJ2N0cmxfcmlnaHQnLFxuICApO1xuXG4gIGNvbnN0IHVwID0ga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbM10ubGFzdENoaWxkLnByZXZpb3VzU2libGluZztcbiAgY29uc3QgZG93biA9IGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbN107XG4gIGNvbnN0IGxlZnQgPSBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzZdO1xuICBjb25zdCByaWdodCA9IGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbOF07XG5cbiAgdXAuY2xhc3NMaXN0LmFkZCgndXBfa2V5JywgJ3VwJyk7XG4gIGRvd24uY2xhc3NMaXN0LmFkZCgnZG93bl9rZXknLCAnZG93bicpO1xuICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2xlZnRfa2V5JywgJ2xlZnQnKTtcbiAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHRfa2V5JywgJ3JpZ2h0Jyk7XG5cbiAgdXAuaW5uZXJIVE1MID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICA8c3ZnIGNsYXNzPVwiYXJyIHVwXCIgd2lkdGg9XCIzNnB4XCIgaGVpZ2h0PVwiMzZweFwiIHZpZXdCb3g9XCIwIC02LjUgMzYgMzZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICBcbiAgICAgIDx0aXRsZT51cC1hcnJvdzwvdGl0bGU+XG4gICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICAgIDxnIGlkPVwiaWNvbnNcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgIDxnIGlkPVwidXBcIiBjbGFzcz1cImFycm93cyBhcnIgdXBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM0Mi4wMDAwMDAsIC0xNTkuMDAwMDAwKVwiIGZpbGw9XCIjMjUyNTI4XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiPlxuICAgICAgICAgICAgICA8ZyBpZD1cInNxdWFyZS1maWxsZWRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTAuMDAwMDAwLCAxMjAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJhcnJvd3MgYXJyIHVwXCIgZD1cIk0zMTcuMTA4MDEyLDM5LjI5MDI4NTcgTDMyNy42NDk4MDQsNDkuNzQxNzA0MyBMMzI3LjcwODk5NCw0OS43OTU5MTY5IEMzMjcuODg5MTQxLDQ5Ljk3NDU1NDMgMzI3Ljk4NjE0Myw1MC4yMDQ0MTgyIDMyOCw1MC40MzgyMjI3IEwzMjgsNTAuNTYxNzc3MyBDMzI3Ljk4NjE0Myw1MC43OTU1ODE4IDMyNy44ODkxNDEsNTEuMDI1NDQ1NyAzMjcuNzA4OTk0LDUxLjIwNDA4MzEgTDMyNy42NTcxLDUxLjI0Nzk4MDMgTDMxNy4xMDgwMTIsNjEuNzA5NzE0MyBDMzE2LjcxNzY5NCw2Mi4wOTY3NjE5IDMxNi4wODQ4NjUsNjIuMDk2NzYxOSAzMTUuNjk0NTQ3LDYxLjcwOTcxNDMgQzMxNS4zMDQyMyw2MS4zMjI2NjY4IDMxNS4zMDQyMyw2MC42OTUxMzg3IDMxNS42OTQ1NDcsNjAuMzA4MDkxMSBMMzI0LjcwMjY2Niw1MS4zNzM4NDk2IEwyOTIuOTk5NDcsNTEuMzc0NjI5MSBDMjkyLjQ0NzQ3OCw1MS4zNzQ2MjkxIDI5Miw1MC45MzA4OTk3IDI5Miw1MC4zODM1MzE4IEMyOTIsNDkuODM2MTYzOSAyOTIuNDQ3NDc4LDQ5LjM5MjQzNDUgMjkyLjk5OTQ3LDQ5LjM5MjQzNDUgTDMyNC40Njc3OSw0OS4zOTE2NTUxIEwzMTUuNjk0NTQ3LDQwLjY5MTkwODkgQzMxNS4zMDQyMyw0MC4zMDQ4NjEzIDMxNS4zMDQyMywzOS42NzczMzMyIDMxNS42OTQ1NDcsMzkuMjkwMjg1NyBDMzE2LjA4NDg2NSwzOC45MDMyMzgxIDMxNi43MTc2OTQsMzguOTAzMjM4MSAzMTcuMTA4MDEyLDM5LjI5MDI4NTcgWiBNMzI3LjExNTM1Nyw1MC4zODI2OTMgTDMxNi40MDEyNzksNjEuMDA4OTAyNyBMMzI3LjAwMjE1MSw1MC41MDAyMDQ2IEwzMjcuMDAyMjUyLDUwLjQ5NjM3MTkgTDMyNi45NDMxNDIsNTAuNDQyNTg1IEwzMjYuODgyNzM3LDUwLjM4MjY5MyBMMzI3LjExNTM1Nyw1MC4zODI2OTMgWlwiIGlkPVwibGVmdC1hcnJvd1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTAuMDAwMDAwLCA1MC41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMxMC4wMDAwMDAsIC01MC41MDAwMDApIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgPC9zdmc+YDtcbiAgZG93bi5pbm5lckhUTUwgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gIDxzdmcgY2xhc3M9XCJhcnIgZG93blwiIHdpZHRoPVwiMzZweFwiIGhlaWdodD1cIjM2cHhcIiB2aWV3Qm94PVwiMCAtNi41IDM2IDM2XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgXG4gICAgICA8dGl0bGU+ZG93bi1hcnJvdzwvdGl0bGU+XG4gICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICAgIDxnIGlkPVwiaWNvbnNcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgIDxnIGlkPVwiZG93blwiIGNsYXNzPVwiYXJyb3dzIGFyciBkb3duXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNDIuMDAwMDAwLCAtMTU5LjAwMDAwMClcIiBmaWxsPVwiIzI1MjUyOFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJzcXVhcmUtZmlsbGVkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwLjAwMDAwMCwgMTIwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiYXJyb3dzIGFyciBkb3duXCIgZD1cIk0zMTcuMTA4MDEyLDM5LjI5MDI4NTcgTDMyNy42NDk4MDQsNDkuNzQxNzA0MyBMMzI3LjcwODk5NCw0OS43OTU5MTY5IEMzMjcuODg5MTQxLDQ5Ljk3NDU1NDMgMzI3Ljk4NjE0Myw1MC4yMDQ0MTgyIDMyOCw1MC40MzgyMjI3IEwzMjgsNTAuNTYxNzc3MyBDMzI3Ljk4NjE0Myw1MC43OTU1ODE4IDMyNy44ODkxNDEsNTEuMDI1NDQ1NyAzMjcuNzA4OTk0LDUxLjIwNDA4MzEgTDMyNy42NTcxLDUxLjI0Nzk4MDMgTDMxNy4xMDgwMTIsNjEuNzA5NzE0MyBDMzE2LjcxNzY5NCw2Mi4wOTY3NjE5IDMxNi4wODQ4NjUsNjIuMDk2NzYxOSAzMTUuNjk0NTQ3LDYxLjcwOTcxNDMgQzMxNS4zMDQyMyw2MS4zMjI2NjY4IDMxNS4zMDQyMyw2MC42OTUxMzg3IDMxNS42OTQ1NDcsNjAuMzA4MDkxMSBMMzI0LjcwMjY2Niw1MS4zNzM4NDk2IEwyOTIuOTk5NDcsNTEuMzc0NjI5MSBDMjkyLjQ0NzQ3OCw1MS4zNzQ2MjkxIDI5Miw1MC45MzA4OTk3IDI5Miw1MC4zODM1MzE4IEMyOTIsNDkuODM2MTYzOSAyOTIuNDQ3NDc4LDQ5LjM5MjQzNDUgMjkyLjk5OTQ3LDQ5LjM5MjQzNDUgTDMyNC40Njc3OSw0OS4zOTE2NTUxIEwzMTUuNjk0NTQ3LDQwLjY5MTkwODkgQzMxNS4zMDQyMyw0MC4zMDQ4NjEzIDMxNS4zMDQyMywzOS42NzczMzMyIDMxNS42OTQ1NDcsMzkuMjkwMjg1NyBDMzE2LjA4NDg2NSwzOC45MDMyMzgxIDMxNi43MTc2OTQsMzguOTAzMjM4MSAzMTcuMTA4MDEyLDM5LjI5MDI4NTcgWiBNMzI3LjExNTM1Nyw1MC4zODI2OTMgTDMxNi40MDEyNzksNjEuMDA4OTAyNyBMMzI3LjAwMjE1MSw1MC41MDAyMDQ2IEwzMjcuMDAyMjUyLDUwLjQ5NjM3MTkgTDMyNi45NDMxNDIsNTAuNDQyNTg1IEwzMjYuODgyNzM3LDUwLjM4MjY5MyBMMzI3LjExNTM1Nyw1MC4zODI2OTMgWlwiIGlkPVwibGVmdC1hcnJvd1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTAuMDAwMDAwLCA1MC41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMxMC4wMDAwMDAsIC01MC41MDAwMDApIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgPC9zdmc+YDtcbiAgbGVmdC5pbm5lckhUTUwgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gIDxzdmcgY2xhc3M9XCJhcnIgbGVmdFwiIHdpZHRoPVwiMzZweFwiIGhlaWdodD1cIjM2cHhcIiB2aWV3Qm94PVwiMCAtNi41IDM2IDM2XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgXG4gICAgICA8dGl0bGU+bGVmdC1hcnJvdzwvdGl0bGU+XG4gICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICAgIDxnIGlkPVwiaWNvbnNcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgIDxnIGlkPVwibGVmdFwiIGNsYXNzPVwiYXJyb3dzIGFyciBsZWZ0XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNDIuMDAwMDAwLCAtMTU5LjAwMDAwMClcIiBmaWxsPVwiIzI1MjUyOFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJzcXVhcmUtZmlsbGVkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwLjAwMDAwMCwgMTIwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiYXJyb3dzIGFyciBsZWZ0XCIgZD1cIk0zMTcuMTA4MDEyLDM5LjI5MDI4NTcgTDMyNy42NDk4MDQsNDkuNzQxNzA0MyBMMzI3LjcwODk5NCw0OS43OTU5MTY5IEMzMjcuODg5MTQxLDQ5Ljk3NDU1NDMgMzI3Ljk4NjE0Myw1MC4yMDQ0MTgyIDMyOCw1MC40MzgyMjI3IEwzMjgsNTAuNTYxNzc3MyBDMzI3Ljk4NjE0Myw1MC43OTU1ODE4IDMyNy44ODkxNDEsNTEuMDI1NDQ1NyAzMjcuNzA4OTk0LDUxLjIwNDA4MzEgTDMyNy42NTcxLDUxLjI0Nzk4MDMgTDMxNy4xMDgwMTIsNjEuNzA5NzE0MyBDMzE2LjcxNzY5NCw2Mi4wOTY3NjE5IDMxNi4wODQ4NjUsNjIuMDk2NzYxOSAzMTUuNjk0NTQ3LDYxLjcwOTcxNDMgQzMxNS4zMDQyMyw2MS4zMjI2NjY4IDMxNS4zMDQyMyw2MC42OTUxMzg3IDMxNS42OTQ1NDcsNjAuMzA4MDkxMSBMMzI0LjcwMjY2Niw1MS4zNzM4NDk2IEwyOTIuOTk5NDcsNTEuMzc0NjI5MSBDMjkyLjQ0NzQ3OCw1MS4zNzQ2MjkxIDI5Miw1MC45MzA4OTk3IDI5Miw1MC4zODM1MzE4IEMyOTIsNDkuODM2MTYzOSAyOTIuNDQ3NDc4LDQ5LjM5MjQzNDUgMjkyLjk5OTQ3LDQ5LjM5MjQzNDUgTDMyNC40Njc3OSw0OS4zOTE2NTUxIEwzMTUuNjk0NTQ3LDQwLjY5MTkwODkgQzMxNS4zMDQyMyw0MC4zMDQ4NjEzIDMxNS4zMDQyMywzOS42NzczMzMyIDMxNS42OTQ1NDcsMzkuMjkwMjg1NyBDMzE2LjA4NDg2NSwzOC45MDMyMzgxIDMxNi43MTc2OTQsMzguOTAzMjM4MSAzMTcuMTA4MDEyLDM5LjI5MDI4NTcgWiBNMzI3LjExNTM1Nyw1MC4zODI2OTMgTDMxNi40MDEyNzksNjEuMDA4OTAyNyBMMzI3LjAwMjE1MSw1MC41MDAyMDQ2IEwzMjcuMDAyMjUyLDUwLjQ5NjM3MTkgTDMyNi45NDMxNDIsNTAuNDQyNTg1IEwzMjYuODgyNzM3LDUwLjM4MjY5MyBMMzI3LjExNTM1Nyw1MC4zODI2OTMgWlwiIGlkPVwibGVmdC1hcnJvd1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTAuMDAwMDAwLCA1MC41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMxMC4wMDAwMDAsIC01MC41MDAwMDApIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgPC9zdmc+YDtcbiAgcmlnaHQuaW5uZXJIVE1MID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICA8c3ZnIGNsYXNzPVwiYXJyIHJpZ2h0XCIgd2lkdGg9XCIzNnB4XCIgaGVpZ2h0PVwiMzZweFwiIHZpZXdCb3g9XCIwIC02LjUgMzYgMzZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICBcbiAgICAgIDx0aXRsZT5yaWdodC1hcnJvdzwvdGl0bGU+XG4gICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICAgIDxnIGlkPVwiaWNvbnNcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgIDxnIGlkPVwicmlnaHRcIiBjbGFzcz1cImFycm93cyBhcnIgcmlnaHRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM0Mi4wMDAwMDAsIC0xNTkuMDAwMDAwKVwiIGZpbGw9XCIjMjUyNTI4XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiPlxuICAgICAgICAgICAgICA8ZyBpZD1cInNxdWFyZS1maWxsZWRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTAuMDAwMDAwLCAxMjAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJhcnJvd3MgYXJyIHJpZ2h0XCIgZD1cIk0zMTcuMTA4MDEyLDM5LjI5MDI4NTcgTDMyNy42NDk4MDQsNDkuNzQxNzA0MyBMMzI3LjcwODk5NCw0OS43OTU5MTY5IEMzMjcuODg5MTQxLDQ5Ljk3NDU1NDMgMzI3Ljk4NjE0Myw1MC4yMDQ0MTgyIDMyOCw1MC40MzgyMjI3IEwzMjgsNTAuNTYxNzc3MyBDMzI3Ljk4NjE0Myw1MC43OTU1ODE4IDMyNy44ODkxNDEsNTEuMDI1NDQ1NyAzMjcuNzA4OTk0LDUxLjIwNDA4MzEgTDMyNy42NTcxLDUxLjI0Nzk4MDMgTDMxNy4xMDgwMTIsNjEuNzA5NzE0MyBDMzE2LjcxNzY5NCw2Mi4wOTY3NjE5IDMxNi4wODQ4NjUsNjIuMDk2NzYxOSAzMTUuNjk0NTQ3LDYxLjcwOTcxNDMgQzMxNS4zMDQyMyw2MS4zMjI2NjY4IDMxNS4zMDQyMyw2MC42OTUxMzg3IDMxNS42OTQ1NDcsNjAuMzA4MDkxMSBMMzI0LjcwMjY2Niw1MS4zNzM4NDk2IEwyOTIuOTk5NDcsNTEuMzc0NjI5MSBDMjkyLjQ0NzQ3OCw1MS4zNzQ2MjkxIDI5Miw1MC45MzA4OTk3IDI5Miw1MC4zODM1MzE4IEMyOTIsNDkuODM2MTYzOSAyOTIuNDQ3NDc4LDQ5LjM5MjQzNDUgMjkyLjk5OTQ3LDQ5LjM5MjQzNDUgTDMyNC40Njc3OSw0OS4zOTE2NTUxIEwzMTUuNjk0NTQ3LDQwLjY5MTkwODkgQzMxNS4zMDQyMyw0MC4zMDQ4NjEzIDMxNS4zMDQyMywzOS42NzczMzMyIDMxNS42OTQ1NDcsMzkuMjkwMjg1NyBDMzE2LjA4NDg2NSwzOC45MDMyMzgxIDMxNi43MTc2OTQsMzguOTAzMjM4MSAzMTcuMTA4MDEyLDM5LjI5MDI4NTcgWiBNMzI3LjExNTM1Nyw1MC4zODI2OTMgTDMxNi40MDEyNzksNjEuMDA4OTAyNyBMMzI3LjAwMjE1MSw1MC41MDAyMDQ2IEwzMjcuMDAyMjUyLDUwLjQ5NjM3MTkgTDMyNi45NDMxNDIsNTAuNDQyNTg1IEwzMjYuODgyNzM3LDUwLjM4MjY5MyBMMzI3LjExNTM1Nyw1MC4zODI2OTMgWlwiIGlkPVwibGVmdC1hcnJvd1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTAuMDAwMDAwLCA1MC41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMxMC4wMDAwMDAsIC01MC41MDAwMDApIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgPC9zdmc+YDtcbn0pO1xuXG5jb25zdCBjcmVhdGVLZXlzID0gKGFycikgPT4ge1xuICBsZXQgaSA9IDA7XG5cbiAgY29uc3Qgcm93ID0gY3JlYXRlRWwoJ2RpdicsICdyb3cnKTtcblxuICB3aGlsZSAoaSA8IGFyci5sZW5ndGgpIHtcbiAgICBjb25zdCBrZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5cycpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycltpXSkpIHtcbiAgICAgIGtleS5zZXRBdHRyaWJ1dGUoJ2tleUVuJywgYXJyW2ldWzBdKTtcbiAgICAgIGtleS5zZXRBdHRyaWJ1dGUoJ2tleVJ1JywgYXJyW2ldWzFdKTtcbiAgICAgIGtleS5pbm5lckhUTUwgPSBrZXkuZ2V0QXR0cmlidXRlKCdrZXlFbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXkuaW5uZXJIVE1MID0gYXJyW2ldO1xuICAgIH1cbiAgICByb3cuYXBwZW5kQ2hpbGQoa2V5KTtcbiAgICBpKys7XG4gIH1cblxuICByZXR1cm4gcm93O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRWwodGFnLCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBpc01hY2ludG9zaCgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKCdNYWMnKSA+IC0xO1xufVxuXG5mdW5jdGlvbiBmaWxsS2V5cyhtYXApIHtcbiAgY29uc3Qgb2MgPSBpc01hY2ludG9zaCgpID8gJ01hYycgOiAnV2luJztcblxuICBtYXAuc2V0KCdyb3cxJywgY3JlYXRlS2V5cyhbWydgJywgJ9GRJ10sIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDAsICctJywgJz0nLCAnQmFja3NwYWNlJ10pKTtcbiAgbWFwLnNldChcbiAgICAncm93MicsXG4gICAgY3JlYXRlS2V5cyhbJ1RhYicsXG4gICAgICBbJ3EnLCAn0LknXSxcbiAgICAgIFsndycsICfRhiddLFxuICAgICAgWydlJywgJ9GDJ10sXG4gICAgICBbJ3InLCAn0LonXSxcbiAgICAgIFsndCcsICfQtSddLFxuICAgICAgWyd5JywgJ9C9J10sXG4gICAgICBbJ3UnLCAn0LMnXSxcbiAgICAgIFsnaScsICfRiCddLFxuICAgICAgWydvJywgJ9GJJ10sXG4gICAgICBbJ3AnLCAn0LcnXSxcbiAgICAgIFsnWycsICfRhSddLFxuICAgICAgWyddJywgJ9GKJ10sXG4gICAgICAnXFxcXCcsXG4gICAgICAnREVMJyxcbiAgICBdKSxcbiAgKTtcbiAgbWFwLnNldChcbiAgICAncm93MycsXG4gICAgY3JlYXRlS2V5cyhbXG4gICAgICAnQ2FwcyBMb2NrJyxcbiAgICAgIFsnYScsICfRhCddLFxuICAgICAgWydzJywgJ9GLJ10sXG4gICAgICBbJ2QnLCAn0LInXSxcbiAgICAgIFsnZicsICfQsCddLFxuICAgICAgWydnJywgJ9C/J10sXG4gICAgICBbJ2gnLCAn0YAnXSxcbiAgICAgIFsnaicsICfQviddLFxuICAgICAgWydrJywgJ9C7J10sXG4gICAgICBbJ2wnLCAn0LQnXSxcbiAgICAgIFsnOycsICfQtiddLFxuICAgICAgW1wiJ1wiLCAn0Y0nXSxcbiAgICAgICdFbnRlcicsXG4gICAgXSksXG4gICk7XG4gIG1hcC5zZXQoXG4gICAgJ3JvdzQnLFxuICAgIGNyZWF0ZUtleXMoW1xuICAgICAgJ1NoaWZ0JyxcbiAgICAgICcvJyxcbiAgICAgIFsneicsICfRjyddLFxuICAgICAgWyd4JywgJ9GHJ10sXG4gICAgICBbJ2MnLCAn0YEnXSxcbiAgICAgIFsndicsICfQvCddLFxuICAgICAgWydiJywgJ9C4J10sXG4gICAgICBbJ24nLCAn0YInXSxcbiAgICAgIFsnbScsICfRjCddLFxuICAgICAgWycuJywgJ9CxJ10sXG4gICAgICBbJywnLCAn0Y4nXSxcbiAgICAgICcvJyxcbiAgICAgICcnLFxuICAgICAgJ1NoaWZ0JyxcbiAgICBdKSxcbiAgKTtcbiAgbWFwLnNldChcbiAgICAncm93NScsXG4gICAgY3JlYXRlS2V5cyhbJ0N0cmwnLCBvYywgJ0FsdCcsICcnLCAnQWx0JywgJ0N0cmwnLCAnJywgJycsICcnXSksXG4gICk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zY3JpcHQvcmVuZGVyJztcbmltcG9ydCAnLi9zY3JpcHQvaW50ZXJhY3Rpb24nO1xuXG5yZXF1aXJlKCdub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==