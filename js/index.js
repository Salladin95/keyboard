/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/main/styles/index.scss":
/*!************************************!*\
  !*** ./src/main/styles/index.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/main/script/helper.js":
/*!***********************************!*\
  !*** ./src/main/script/helper.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkActive": () => (/* binding */ checkActive),
/* harmony export */   "createEl": () => (/* binding */ createEl),
/* harmony export */   "createKeys": () => (/* binding */ createKeys),
/* harmony export */   "fillKeys": () => (/* binding */ fillKeys),
/* harmony export */   "getLowerCase": () => (/* binding */ getLowerCase),
/* harmony export */   "getUpperCase": () => (/* binding */ getUpperCase),
/* harmony export */   "isMacintosh": () => (/* binding */ isMacintosh),
/* harmony export */   "rmTxt": () => (/* binding */ rmTxt),
/* harmony export */   "setAtrsforKeys": () => (/* binding */ setAtrsforKeys),
/* harmony export */   "toggleActive": () => (/* binding */ toggleActive),
/* harmony export */   "toggleLanguage": () => (/* binding */ toggleLanguage)
/* harmony export */ });
function setAtrsforKeys() {
  const keys = document.querySelectorAll('.keys');
  for (let i = 0; i < keys.length; i += 1) {
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
  keys[11].setAttribute('UpperCaseNameRu', '_');
  keys[12].setAttribute('UpperCaseNameRu', '+');
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

function rmTxt(txtValue, ind1, ind2) {
  const startStr = txtValue.value.slice(0, ind1);
  const endStr = txtValue.value.slice(ind2);
  return `${startStr}${endStr}`;
}

function getUpperCase(key) {
  const keys = document.querySelectorAll('.keys');
  if (key === 'ShiftLeft' || key === 'ShiftLeft') {
    for (let i = 0; i < keys.length; i += 1) {
      if (localStorage.getItem('active-language') === 'en') {
        if (keys[i].getAttribute('keyEn') || keys[i].getAttribute('key')) {
          keys[i].innerHTML = keys[i].getAttribute('UpperCaseNameEn');
        }
      } else if (keys[i].getAttribute('keyRu') || keys[i].getAttribute('key')) {
        keys[i].innerHTML = keys[i].getAttribute('UpperCaseNameRu');
      }
    }
  } else {
    for (let i = 0; i < keys.length; i += 1) {
      if (localStorage.getItem('active-language') === 'en') {
        if (!keys[i].getAttribute('only-shift')) {
          if (keys[i].getAttribute('keyEn') || keys[i].getAttribute('key')) {
            keys[i].innerHTML = keys[i].getAttribute('UpperCaseNameEn');
          }
        }
      } else if (!keys[i].getAttribute('only-shift') || keys[i].getAttribute('only-shift') === 'en') {
        if (keys[i].getAttribute('keyRu') || keys[i].getAttribute('key')) {
          keys[i].innerHTML = keys[i].getAttribute('UpperCaseNameRu');
        }
      }
    }
  }
}
function getLowerCase() {
  const keys = document.querySelectorAll('.keys');
  for (let i = 0; i < keys.length; i += 1) {
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
function toggleLanguage() {
  const keys = document.querySelectorAll('.keys');
  if (localStorage.getItem('active-language') === 'en') {
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i].getAttribute('keyEn')) {
        keys[i].innerHTML = keys[i].getAttribute('keyRu');
      }
    }
    localStorage.setItem('active-language', 'ru');
  } else {
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i].getAttribute('keyEn')) {
        keys[i].innerHTML = keys[i].getAttribute('keyEn');
      }
    }
    localStorage.setItem('active-language', 'en');
  }
}

function createEl(tag, className) {
  const el = document.createElement(tag);
  el.classList.add(className);
  return el;
}

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
    i += 1;
  }

  return row;
};

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




/***/ }),

/***/ "./src/main/script/interaction.js":
/*!****************************************!*\
  !*** ./src/main/script/interaction.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/main/script/helper.js");


window.addEventListener('load', () => {
  const keyBoardWrap = document.querySelector('.keyboard_wrapp');
  const txtField = document.querySelector('.text-field');
  const keys = document.querySelectorAll('.keys');
  let focus = false;
  let language = 'en';

  (0,_helper__WEBPACK_IMPORTED_MODULE_0__.setAtrsforKeys)();

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
      (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getUpperCase)(keys, keyname);
    }
    if (e.key === 'Control' || e.key === 'Alt') {
      if (
        ((0,_helper__WEBPACK_IMPORTED_MODULE_0__.checkActive)(ctrlLeft) && (0,_helper__WEBPACK_IMPORTED_MODULE_0__.checkActive)(altLeft))
        || ((0,_helper__WEBPACK_IMPORTED_MODULE_0__.checkActive)(ctrlRight) && (0,_helper__WEBPACK_IMPORTED_MODULE_0__.checkActive)(altRight))
      ) {
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.toggleLanguage)(keys);
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
      (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getLowerCase)(keys);
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
      (0,_helper__WEBPACK_IMPORTED_MODULE_0__.toggleActive)(e.target);
      if (e.target.classList.contains('active')) {
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getUpperCase)(keys, keyname);
      } else {
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getLowerCase)(keys);
      }
    } else if (keyname === 'CapsLock') {
      (0,_helper__WEBPACK_IMPORTED_MODULE_0__.toggleActive)(e.target);
      if (e.target.classList.contains('active')) {
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getUpperCase)(keys, keyname);
      } else {
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getLowerCase)(keys);
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
        txtField.value = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.rmTxt)(txtField, txtField.selectionEnd - 1, txtField.selectionEnd);
        txtField.selectionStart = ind;
        txtField.selectionEnd = ind;
      }
    } else if (keyname === 'Enter') {
      txtField.value += '\n';
    } else if (keyname === 'Delete') {
      if (txtField.value.length > 0 && txtField.selectionEnd < txtField.value.length) {
        const ind = txtField.selectionEnd;
        txtField.value = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.rmTxt)(txtField, ind, ind + 1);
        txtField.selectionStart = ind;
        txtField.selectionEnd = ind;
      }
    }
  });
});


/***/ }),

/***/ "./src/main/script/render.js":
/*!***********************************!*\
  !*** ./src/main/script/render.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/main/script/helper.js");


const keysMap = new Map();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keysMap);

window.addEventListener('load', () => {
  (0,_helper__WEBPACK_IMPORTED_MODULE_0__.fillKeys)(keysMap);

  const body = document.querySelector('body');
  const container = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'container');
  body.appendChild(container);

  const wrapper = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'wrapper');
  container.appendChild(wrapper);

  const textArea = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createEl)('textarea', 'text-field');
  wrapper.appendChild(textArea);
  textArea.placeholder = 'Hello there! \nEnter your thoughts...';

  const noticeHowChancgeLanguage = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createEl)('h1', 'title');
  noticeHowChancgeLanguage.classList.add('change-language_title');
  noticeHowChancgeLanguage.innerHTML = 'Press Ctrl + Alt to change language';

  const ocTitle = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createEl)('h2', 'title');
  const oc = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.isMacintosh)() ? 'Mac OS' : 'Windows';
  ocTitle.classList.add('ocTitle_title');
  ocTitle.innerHTML = `Made for ${oc}`;

  wrapper.appendChild(noticeHowChancgeLanguage);
  wrapper.appendChild(ocTitle);

  const keyBoardWrap = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'keyboard_wrapp');
  const keyboardKeysWr = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'keyboard_keys');
  keyBoardWrap.appendChild(keyboardKeysWr);

  wrapper.appendChild(keyBoardWrap);

  const keyboardKeys = document.querySelector('.keyboard_keys');

  for (let i = 0; i < keysMap.size; i += 1) {
    keyboardKeys.appendChild(keysMap.get(`row${i + 1}`));
  }

  for (let i = 0; i < keyboardKeys.childNodes[0].childNodes.length - 1; i += 1) {
    keyboardKeys.childNodes[0].childNodes[i].setAttribute('only-shift', 'true');
  }
  keyboardKeys.childNodes[0].firstChild.setAttribute('only-shift', 'en');
  keyboardKeys.childNodes[1].childNodes[11].setAttribute('only-shift', 'en');
  keyboardKeys.childNodes[1].childNodes[12].setAttribute('only-shift', 'en');
  keyboardKeys.childNodes[1].childNodes[13].setAttribute('only-shift', 'true');
  keyboardKeys.childNodes[3].childNodes[1].setAttribute('only-shift', 'true');
  keyboardKeys.childNodes[3].childNodes[11].setAttribute('only-shift', 'true');
  keyboardKeys.childNodes[3].childNodes[9].setAttribute('only-shift', 'en');
  keyboardKeys.childNodes[3].childNodes[10].setAttribute('only-shift', 'en');
  keyboardKeys.childNodes[2].childNodes[10].setAttribute('only-shift', 'en');
  keyboardKeys.childNodes[2].childNodes[11].setAttribute('only-shift', 'en');

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/main/styles/index.scss");
/* harmony import */ var _script_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/render */ "./src/main/script/render.js");
/* harmony import */ var _script_interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/interaction */ "./src/main/script/interaction.js");




__webpack_require__(/*! normalize.css/normalize.css */ "./node_modules/normalize.css/normalize.css");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUyxFQUFFLE9BQU87QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFjRTs7Ozs7Ozs7Ozs7OztBQzNQZ0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHVEQUFjOztBQUVoQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxxREFBWTtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9EQUFXLGNBQWMsb0RBQVc7QUFDN0MsWUFBWSxvREFBVyxlQUFlLG9EQUFXO0FBQ2pEO0FBQ0EsUUFBUSx1REFBYztBQUN0QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTSxxREFBWTtBQUNsQjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU0scURBQVk7QUFDbEI7QUFDQSxRQUFRLHFEQUFZO0FBQ3BCLFFBQVE7QUFDUixRQUFRLHFEQUFZO0FBQ3BCO0FBQ0EsTUFBTTtBQUNOLE1BQU0scURBQVk7QUFDbEI7QUFDQSxRQUFRLHFEQUFZO0FBQ3BCLFFBQVE7QUFDUixRQUFRLHFEQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsNEJBQTRCLFVBQVUsRUFBRSxPQUFPO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EseUJBQXlCLDhDQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EseUJBQXlCLDhDQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyT2lCOztBQUVsQjtBQUNBLGlFQUFlLE9BQU8sRUFBQzs7QUFFdkI7QUFDQSxFQUFFLGlEQUFROztBQUVWO0FBQ0Esb0JBQW9CLGlEQUFRO0FBQzVCOztBQUVBLGtCQUFrQixpREFBUTtBQUMxQjs7QUFFQSxtQkFBbUIsaURBQVE7QUFDM0I7QUFDQTs7QUFFQSxtQ0FBbUMsaURBQVE7QUFDM0M7QUFDQTs7QUFFQSxrQkFBa0IsaURBQVE7QUFDMUIsYUFBYSxvREFBVztBQUN4QjtBQUNBLGtDQUFrQyxHQUFHOztBQUVyQztBQUNBOztBQUVBLHVCQUF1QixpREFBUTtBQUMvQix5QkFBeUIsaURBQVE7QUFDakM7O0FBRUE7O0FBRUE7O0FBRUEsa0JBQWtCLGtCQUFrQjtBQUNwQywrQ0FBK0MsTUFBTTtBQUNyRDs7QUFFQSxrQkFBa0Isc0RBQXNEO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7O1VDL0pEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNKO0FBQ0s7O0FBRTlCLG1CQUFPLENBQUMsK0VBQTZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnNzLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz9mYjU3Iiwid2VicGFjazovL3Jzcy8uL3NyYy9tYWluL3N0eWxlcy9pbmRleC5zY3NzPzM3ZTYiLCJ3ZWJwYWNrOi8vcnNzLy4vc3JjL21haW4vc2NyaXB0L2hlbHBlci5qcyIsIndlYnBhY2s6Ly9yc3MvLi9zcmMvbWFpbi9zY3JpcHQvaW50ZXJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNzLy4vc3JjL21haW4vc2NyaXB0L3JlbmRlci5qcyIsIndlYnBhY2s6Ly9yc3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yc3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc3MvLi9zcmMvbWFpbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJmdW5jdGlvbiBzZXRBdHJzZm9yS2V5cygpIHtcbiAgY29uc3Qga2V5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXlzJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKSkge1xuICAgICAga2V5c1tpXS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICdVcHBlckNhc2VOYW1lRW4nLFxuICAgICAgICBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgKTtcbiAgICAgIGtleXNbaV0uc2V0QXR0cmlidXRlKFxuICAgICAgICAnVXBwZXJDYXNlTmFtZVJ1JyxcbiAgICAgICAga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1JykudG9VcHBlckNhc2UoKSxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGtleXNbMV0uc2V0QXR0cmlidXRlKCdrZXknLCAnMScpO1xuICBrZXlzWzJdLnNldEF0dHJpYnV0ZSgna2V5JywgJzInKTtcbiAga2V5c1szXS5zZXRBdHRyaWJ1dGUoJ2tleScsICczJyk7XG4gIGtleXNbNF0uc2V0QXR0cmlidXRlKCdrZXknLCAnNCcpO1xuICBrZXlzWzVdLnNldEF0dHJpYnV0ZSgna2V5JywgJzUnKTtcbiAga2V5c1s2XS5zZXRBdHRyaWJ1dGUoJ2tleScsICc2Jyk7XG4gIGtleXNbN10uc2V0QXR0cmlidXRlKCdrZXknLCAnNycpO1xuICBrZXlzWzhdLnNldEF0dHJpYnV0ZSgna2V5JywgJzgnKTtcbiAga2V5c1s5XS5zZXRBdHRyaWJ1dGUoJ2tleScsICc5Jyk7XG4gIGtleXNbMTBdLnNldEF0dHJpYnV0ZSgna2V5JywgJzAnKTtcbiAga2V5c1sxMV0uc2V0QXR0cmlidXRlKCdrZXknLCAnLScpO1xuICBrZXlzWzEyXS5zZXRBdHRyaWJ1dGUoJ2tleScsICc9Jyk7XG4gIGtleXNbMF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnficpO1xuICBrZXlzWzFdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJyEnKTtcbiAga2V5c1syXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICdAJyk7XG4gIGtleXNbM10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnIycpO1xuICBrZXlzWzRdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJyQnKTtcbiAga2V5c1s1XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICclJyk7XG4gIGtleXNbNl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnXicpO1xuICBrZXlzWzddLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJyYnKTtcbiAga2V5c1s4XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICcqJyk7XG4gIGtleXNbOV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnKCcpO1xuICBrZXlzWzEwXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICcpJyk7XG4gIGtleXNbMTFdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ18nKTtcbiAga2V5c1sxMl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnKycpO1xuICBrZXlzWzFdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJyEnKTtcbiAga2V5c1syXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICdcIicpO1xuICBrZXlzWzNdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJ+KElicpO1xuICBrZXlzWzRdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJzsnKTtcbiAga2V5c1s1XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICclJyk7XG4gIGtleXNbNl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnOicpO1xuICBrZXlzWzddLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJz8nKTtcbiAga2V5c1s4XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICcqJyk7XG4gIGtleXNbOV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnKCcpO1xuICBrZXlzWzEwXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICcpJyk7XG4gIGtleXNbMTFdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJ18nKTtcbiAga2V5c1sxMl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnKycpO1xuICBrZXlzWzI1XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICd7Jyk7XG4gIGtleXNbMjZdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ30nKTtcbiAga2V5c1syN10uc2V0QXR0cmlidXRlKCdrZXknLCAnXFxcXCcpO1xuICBrZXlzWzI3XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICd8Jyk7XG4gIGtleXNbMjddLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJ3wnKTtcbiAga2V5c1szOV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnOicpO1xuICBrZXlzWzQwXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICdcIicpO1xuICBrZXlzWzUxXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICc8Jyk7XG4gIGtleXNbNTJdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJz4nKTtcbiAga2V5c1s0M10uc2V0QXR0cmlidXRlKCdrZXknLCAnLycpO1xuICBrZXlzWzQzXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICcvJyk7XG4gIGtleXNbNDNdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJywnKTtcbiAga2V5c1s1M10uc2V0QXR0cmlidXRlKCdrZXknLCAnLycpO1xuICBrZXlzWzUzXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICc/Jyk7XG4gIGtleXNbNTNdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJy4nKTtcbn1cblxuZnVuY3Rpb24gcm1UeHQodHh0VmFsdWUsIGluZDEsIGluZDIpIHtcbiAgY29uc3Qgc3RhcnRTdHIgPSB0eHRWYWx1ZS52YWx1ZS5zbGljZSgwLCBpbmQxKTtcbiAgY29uc3QgZW5kU3RyID0gdHh0VmFsdWUudmFsdWUuc2xpY2UoaW5kMik7XG4gIHJldHVybiBgJHtzdGFydFN0cn0ke2VuZFN0cn1gO1xufVxuXG5mdW5jdGlvbiBnZXRVcHBlckNhc2Uoa2V5KSB7XG4gIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5cycpO1xuICBpZiAoa2V5ID09PSAnU2hpZnRMZWZ0JyB8fCBrZXkgPT09ICdTaGlmdExlZnQnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpID09PSAnZW4nKSB7XG4gICAgICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKSB8fCBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5JykpIHtcbiAgICAgICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKSB8fCBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5JykpIHtcbiAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1Jyk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnKSA9PT0gJ2VuJykge1xuICAgICAgICBpZiAoIWtleXNbaV0uZ2V0QXR0cmlidXRlKCdvbmx5LXNoaWZ0JykpIHtcbiAgICAgICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykgfHwga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleScpKSB7XG4gICAgICAgICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWtleXNbaV0uZ2V0QXR0cmlidXRlKCdvbmx5LXNoaWZ0JykgfHwga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ29ubHktc2hpZnQnKSA9PT0gJ2VuJykge1xuICAgICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1JykgfHwga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleScpKSB7XG4gICAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGdldExvd2VyQ2FzZSgpIHtcbiAgY29uc3Qga2V5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXlzJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5JykpIHtcbiAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleScpO1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpID09PSAnZW4nKSB7XG4gICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykpIHtcbiAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpKSB7XG4gICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gdG9nZ2xlQWN0aXZlKGVsKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0gZWxzZSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNoZWNrQWN0aXZlKGVsKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gdG9nZ2xlTGFuZ3VhZ2UoKSB7XG4gIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5cycpO1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpID09PSAnZW4nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykpIHtcbiAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScsICdydScpO1xuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpKSB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnLCAnZW4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbCh0YWcsIGNsYXNzTmFtZSkge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICByZXR1cm4gZWw7XG59XG5cbmNvbnN0IGNyZWF0ZUtleXMgPSAoYXJyKSA9PiB7XG4gIGxldCBpID0gMDtcblxuICBjb25zdCByb3cgPSBjcmVhdGVFbCgnZGl2JywgJ3JvdycpO1xuXG4gIHdoaWxlIChpIDwgYXJyLmxlbmd0aCkge1xuICAgIGNvbnN0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXlzJyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyW2ldKSkge1xuICAgICAga2V5LnNldEF0dHJpYnV0ZSgna2V5RW4nLCBhcnJbaV1bMF0pO1xuICAgICAga2V5LnNldEF0dHJpYnV0ZSgna2V5UnUnLCBhcnJbaV1bMV0pO1xuICAgICAga2V5LmlubmVySFRNTCA9IGtleS5nZXRBdHRyaWJ1dGUoJ2tleUVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleS5pbm5lckhUTUwgPSBhcnJbaV07XG4gICAgfVxuICAgIHJvdy5hcHBlbmRDaGlsZChrZXkpO1xuICAgIGkgKz0gMTtcbiAgfVxuXG4gIHJldHVybiByb3c7XG59O1xuXG5mdW5jdGlvbiBpc01hY2ludG9zaCgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKCdNYWMnKSA+IC0xO1xufVxuXG5mdW5jdGlvbiBmaWxsS2V5cyhtYXApIHtcbiAgY29uc3Qgb2MgPSBpc01hY2ludG9zaCgpID8gJ01hYycgOiAnV2luJztcblxuICBtYXAuc2V0KCdyb3cxJywgY3JlYXRlS2V5cyhbWydgJywgJ9GRJ10sIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDAsICctJywgJz0nLCAnQmFja3NwYWNlJ10pKTtcbiAgbWFwLnNldChcbiAgICAncm93MicsXG4gICAgY3JlYXRlS2V5cyhbJ1RhYicsXG4gICAgICBbJ3EnLCAn0LknXSxcbiAgICAgIFsndycsICfRhiddLFxuICAgICAgWydlJywgJ9GDJ10sXG4gICAgICBbJ3InLCAn0LonXSxcbiAgICAgIFsndCcsICfQtSddLFxuICAgICAgWyd5JywgJ9C9J10sXG4gICAgICBbJ3UnLCAn0LMnXSxcbiAgICAgIFsnaScsICfRiCddLFxuICAgICAgWydvJywgJ9GJJ10sXG4gICAgICBbJ3AnLCAn0LcnXSxcbiAgICAgIFsnWycsICfRhSddLFxuICAgICAgWyddJywgJ9GKJ10sXG4gICAgICAnXFxcXCcsXG4gICAgICAnREVMJyxcbiAgICBdKSxcbiAgKTtcbiAgbWFwLnNldChcbiAgICAncm93MycsXG4gICAgY3JlYXRlS2V5cyhbXG4gICAgICAnQ2FwcyBMb2NrJyxcbiAgICAgIFsnYScsICfRhCddLFxuICAgICAgWydzJywgJ9GLJ10sXG4gICAgICBbJ2QnLCAn0LInXSxcbiAgICAgIFsnZicsICfQsCddLFxuICAgICAgWydnJywgJ9C/J10sXG4gICAgICBbJ2gnLCAn0YAnXSxcbiAgICAgIFsnaicsICfQviddLFxuICAgICAgWydrJywgJ9C7J10sXG4gICAgICBbJ2wnLCAn0LQnXSxcbiAgICAgIFsnOycsICfQtiddLFxuICAgICAgW1wiJ1wiLCAn0Y0nXSxcbiAgICAgICdFbnRlcicsXG4gICAgXSksXG4gICk7XG4gIG1hcC5zZXQoXG4gICAgJ3JvdzQnLFxuICAgIGNyZWF0ZUtleXMoW1xuICAgICAgJ1NoaWZ0JyxcbiAgICAgICcvJyxcbiAgICAgIFsneicsICfRjyddLFxuICAgICAgWyd4JywgJ9GHJ10sXG4gICAgICBbJ2MnLCAn0YEnXSxcbiAgICAgIFsndicsICfQvCddLFxuICAgICAgWydiJywgJ9C4J10sXG4gICAgICBbJ24nLCAn0YInXSxcbiAgICAgIFsnbScsICfRjCddLFxuICAgICAgWycuJywgJ9CxJ10sXG4gICAgICBbJywnLCAn0Y4nXSxcbiAgICAgICcvJyxcbiAgICAgICcnLFxuICAgICAgJ1NoaWZ0JyxcbiAgICBdKSxcbiAgKTtcbiAgbWFwLnNldChcbiAgICAncm93NScsXG4gICAgY3JlYXRlS2V5cyhbJ0N0cmwnLCBvYywgJ0FsdCcsICcnLCAnQWx0JywgJ0N0cmwnLCAnJywgJycsICcnXSksXG4gICk7XG59XG5cbmV4cG9ydCB7XG4gIHNldEF0cnNmb3JLZXlzLFxuICBybVR4dCxcbiAgdG9nZ2xlTGFuZ3VhZ2UsXG4gIGNoZWNrQWN0aXZlLFxuICB0b2dnbGVBY3RpdmUsXG4gIGdldExvd2VyQ2FzZSxcbiAgZ2V0VXBwZXJDYXNlLFxuICBjcmVhdGVFbCxcbiAgY3JlYXRlS2V5cyxcbiAgZmlsbEtleXMsXG4gIGlzTWFjaW50b3NoLFxufTtcbiIsImltcG9ydCB7XG4gIHNldEF0cnNmb3JLZXlzLFxuICBybVR4dCxcbiAgdG9nZ2xlTGFuZ3VhZ2UsXG4gIGNoZWNrQWN0aXZlLFxuICB0b2dnbGVBY3RpdmUsXG4gIGdldExvd2VyQ2FzZSxcbiAgZ2V0VXBwZXJDYXNlLFxufSBmcm9tICcuL2hlbHBlcic7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBjb25zdCBrZXlCb2FyZFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmRfd3JhcHAnKTtcbiAgY29uc3QgdHh0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dC1maWVsZCcpO1xuICBjb25zdCBrZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtleXMnKTtcbiAgbGV0IGZvY3VzID0gZmFsc2U7XG4gIGxldCBsYW5ndWFnZSA9ICdlbic7XG5cbiAgc2V0QXRyc2ZvcktleXMoKTtcblxuICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGFjZV9rZXknKTtcbiAgc3BhY2Uuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ1NwYWNlJyk7XG5cbiAgY29uc3QgY2Fwc0xvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fwc19sb2NrX2tleScpO1xuICBjYXBzTG9jay5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQ2Fwc0xvY2snKTtcblxuICBjb25zdCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiX2tleScpO1xuICB0YWIuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ1RhYicpO1xuXG4gIGNvbnN0IGVudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVudGVyX2tleScpO1xuICBlbnRlci5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnRW50ZXInKTtcblxuICBjb25zdCBiYWNrc3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja3NwYWNlX2tleScpO1xuICBiYWNrc3BhY2Uuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0JhY2tzcGFjZScpO1xuXG4gIGNvbnN0IHNoaWZ0TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0X3NoaWZ0Jyk7XG4gIGNvbnN0IHNoaWZ0UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHRfc2hpZnQnKTtcbiAgc2hpZnRMZWZ0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdTaGlmdExlZnQnKTtcbiAgc2hpZnRSaWdodC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnU2hpZnRSaWdodCcpO1xuXG4gIGNvbnN0IGN0cmxMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN0cmxfbGVmdCcpO1xuICBjb25zdCBjdHJsUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3RybF9yaWdodCcpO1xuICBjdHJsTGVmdC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQ29udHJvbExlZnQnKTtcbiAgY3RybFJpZ2h0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdDb250cm9sUmlnaHQnKTtcblxuICBjb25zdCBhbHRMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsdF9sZWZ0Jyk7XG4gIGNvbnN0IGFsdFJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsdF9yaWdodCcpO1xuICBhbHRMZWZ0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBbHRMZWZ0Jyk7XG4gIGFsdFJpZ2h0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBbHRSaWdodCcpO1xuXG4gIGNvbnN0IGRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxfa2V5Jyk7XG4gIGRlbC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnRGVsZXRlJyk7XG5cbiAgY29uc3QgdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBfa2V5Jyk7XG4gIGNvbnN0IGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93bl9rZXknKTtcbiAgY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0X2tleScpO1xuICBjb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodF9rZXknKTtcblxuICB1cC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQXJyb3dVcCcpO1xuICB1cC5jbGFzc0xpc3QuYWRkKCdhcnInKTtcbiAgZG93bi5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQXJyb3dEb3duJyk7XG4gIGRvd24uY2xhc3NMaXN0LmFkZCgnYXJyJyk7XG4gIGxlZnQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0Fycm93TGVmdCcpO1xuICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2FycicpO1xuICByaWdodC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQXJyb3dSaWdodCcpO1xuICByaWdodC5jbGFzc0xpc3QuYWRkKCdhcnInKTtcblxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpICYmIGxhbmd1YWdlICE9PSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlLWxhbmd1YWdlJykpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKSkge1xuICAgICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYW5ndWFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBsZXQga2V5bmFtZTtcbiAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdrZXlOYW1lJykpIHtcbiAgICAgIGtleW5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2tleU5hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5bmFtZSA9IG51bGw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKVxuICAgICAgICB8fCBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1JylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nKVxuICAgICAgICB8fCBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScpXG4gICAgICAgIHx8IGUuY29kZSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleW5hbWUnKVxuICAgICAgKSB7XG4gICAgICAgIGtleXNbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSAnU2hpZnQnIHx8IGUua2V5ID09PSAnQ2Fwc0xvY2snKSB7XG4gICAgICBnZXRVcHBlckNhc2Uoa2V5cywga2V5bmFtZSk7XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ0NvbnRyb2wnIHx8IGUua2V5ID09PSAnQWx0Jykge1xuICAgICAgaWYgKFxuICAgICAgICAoY2hlY2tBY3RpdmUoY3RybExlZnQpICYmIGNoZWNrQWN0aXZlKGFsdExlZnQpKVxuICAgICAgICB8fCAoY2hlY2tBY3RpdmUoY3RybFJpZ2h0KSAmJiBjaGVja0FjdGl2ZShhbHRSaWdodCkpXG4gICAgICApIHtcbiAgICAgICAgdG9nZ2xlTGFuZ3VhZ2Uoa2V5cyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKFxuICAgICAgICBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpXG4gICAgICAgIHx8IGUuY29kZSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleW5hbWUnKVxuICAgICAgICB8fCBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JylcbiAgICAgICkge1xuICAgICAgICBrZXlzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBrZXlzW2ldLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAga2V5c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmUnKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ1NoaWZ0JyB8fCBlLmtleSA9PT0gJ0NhcHNMb2NrJykge1xuICAgICAgZ2V0TG93ZXJDYXNlKGtleXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgdHh0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgaWYgKCFmb2N1cykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZvY3VzID0gdHJ1ZTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfVxuICB9KTtcblxuICB0eHRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgIGlmIChmb2N1cykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZvY3VzID0gZmFsc2U7XG4gICAgICB9LCAyMDApO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJibHVyXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAga2V5Qm9hcmRXcmFwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBsZXQga2V5bmFtZTtcbiAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdrZXlOYW1lJykpIHtcbiAgICAgIGtleW5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2tleU5hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5bmFtZSA9IG51bGw7XG4gICAgfVxuICAgIGlmIChrZXluYW1lID09PSAnU2hpZnRMZWZ0JyB8fCBrZXluYW1lID09PSAnU2hpZnRSaWdodCcpIHtcbiAgICAgIHRvZ2dsZUFjdGl2ZShlLnRhcmdldCk7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBnZXRVcHBlckNhc2Uoa2V5cywga2V5bmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRMb3dlckNhc2Uoa2V5cyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXluYW1lID09PSAnQ2Fwc0xvY2snKSB7XG4gICAgICB0b2dnbGVBY3RpdmUoZS50YXJnZXQpO1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgZ2V0VXBwZXJDYXNlKGtleXMsIGtleW5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0TG93ZXJDYXNlKGtleXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm9jdXMpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0eHRGaWVsZC5mb2N1cygpO1xuICAgICAgfSwgMjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhcnInKSkge1xuICAgICAgaWYgKCFmb2N1cykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsZWZ0JykpIHtcbiAgICAgICAgaWYgKHR4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID4gMCkge1xuICAgICAgICAgIGNvbnN0IGluZCA9IHR4dEZpZWxkLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID0gaW5kIC0gMTtcbiAgICAgICAgICB0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPSBpbmQgLSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmlnaHQnKSkge1xuICAgICAgICBjb25zdCBpbmQgPSB0eHRGaWVsZC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgaWYgKGluZCA8IHR4dEZpZWxkLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID0gaW5kICsgMTtcbiAgICAgICAgICB0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPSBpbmQgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdrZXlzJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5pbm5lckhUTUw7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcGFjZV9rZXknKSkge1xuICAgICAgY29uc3QgaW5kID0gdHh0RmllbGQuc2VsZWN0aW9uRW5kICsgMTtcbiAgICAgIGlmICh0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPj0gdHh0RmllbGQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHR4dEZpZWxkLnZhbHVlICs9ICcgJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0U3RyID0gdHh0RmllbGQudmFsdWUuc2xpY2UoMCwgW3R4dEZpZWxkLnNlbGVjdGlvbkVuZF0pO1xuICAgICAgICBjb25zdCBlbmRTdHIgPSB0eHRGaWVsZC52YWx1ZS5zbGljZShbdHh0RmllbGQuc2VsZWN0aW9uRW5kXSk7XG4gICAgICAgIHR4dEZpZWxkLnZhbHVlID0gYCR7c3RhcnRTdHJ9ICR7ZW5kU3RyfWA7XG4gICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID0gaW5kO1xuICAgICAgICB0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPSBpbmQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0YXJnZXQubGVuZ3RoID09PSAxKSB7XG4gICAgICB0eHRGaWVsZC52YWx1ZSArPSB0YXJnZXQ7XG4gICAgfSBlbHNlIGlmIChrZXluYW1lID09PSAnVGFiJykge1xuICAgICAgdHh0RmllbGQudmFsdWUgKz0gJyAgICAnO1xuICAgIH0gZWxzZSBpZiAoa2V5bmFtZSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgIGlmICh0eHRGaWVsZC52YWx1ZS5sZW5ndGggPiAwICYmIHR4dEZpZWxkLnNlbGVjdGlvbkVuZCA+IDApIHtcbiAgICAgICAgY29uc3QgaW5kID0gdHh0RmllbGQuc2VsZWN0aW9uRW5kIC0gMTtcbiAgICAgICAgdHh0RmllbGQudmFsdWUgPSBybVR4dCh0eHRGaWVsZCwgdHh0RmllbGQuc2VsZWN0aW9uRW5kIC0gMSwgdHh0RmllbGQuc2VsZWN0aW9uRW5kKTtcbiAgICAgICAgdHh0RmllbGQuc2VsZWN0aW9uU3RhcnQgPSBpbmQ7XG4gICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvbkVuZCA9IGluZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleW5hbWUgPT09ICdFbnRlcicpIHtcbiAgICAgIHR4dEZpZWxkLnZhbHVlICs9ICdcXG4nO1xuICAgIH0gZWxzZSBpZiAoa2V5bmFtZSA9PT0gJ0RlbGV0ZScpIHtcbiAgICAgIGlmICh0eHRGaWVsZC52YWx1ZS5sZW5ndGggPiAwICYmIHR4dEZpZWxkLnNlbGVjdGlvbkVuZCA8IHR4dEZpZWxkLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBpbmQgPSB0eHRGaWVsZC5zZWxlY3Rpb25FbmQ7XG4gICAgICAgIHR4dEZpZWxkLnZhbHVlID0gcm1UeHQodHh0RmllbGQsIGluZCwgaW5kICsgMSk7XG4gICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID0gaW5kO1xuICAgICAgICB0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPSBpbmQ7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pO1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlRWwsXG4gIGZpbGxLZXlzLFxuICBpc01hY2ludG9zaCxcbn0gZnJvbSAnLi9oZWxwZXInO1xuXG5jb25zdCBrZXlzTWFwID0gbmV3IE1hcCgpO1xuZXhwb3J0IGRlZmF1bHQga2V5c01hcDtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGZpbGxLZXlzKGtleXNNYXApO1xuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCAnY29udGFpbmVyJyk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCB3cmFwcGVyID0gY3JlYXRlRWwoJ2RpdicsICd3cmFwcGVyJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcblxuICBjb25zdCB0ZXh0QXJlYSA9IGNyZWF0ZUVsKCd0ZXh0YXJlYScsICd0ZXh0LWZpZWxkJyk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xuICB0ZXh0QXJlYS5wbGFjZWhvbGRlciA9ICdIZWxsbyB0aGVyZSEgXFxuRW50ZXIgeW91ciB0aG91Z2h0cy4uLic7XG5cbiAgY29uc3Qgbm90aWNlSG93Q2hhbmNnZUxhbmd1YWdlID0gY3JlYXRlRWwoJ2gxJywgJ3RpdGxlJyk7XG4gIG5vdGljZUhvd0NoYW5jZ2VMYW5ndWFnZS5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UtbGFuZ3VhZ2VfdGl0bGUnKTtcbiAgbm90aWNlSG93Q2hhbmNnZUxhbmd1YWdlLmlubmVySFRNTCA9ICdQcmVzcyBDdHJsICsgQWx0IHRvIGNoYW5nZSBsYW5ndWFnZSc7XG5cbiAgY29uc3Qgb2NUaXRsZSA9IGNyZWF0ZUVsKCdoMicsICd0aXRsZScpO1xuICBjb25zdCBvYyA9IGlzTWFjaW50b3NoKCkgPyAnTWFjIE9TJyA6ICdXaW5kb3dzJztcbiAgb2NUaXRsZS5jbGFzc0xpc3QuYWRkKCdvY1RpdGxlX3RpdGxlJyk7XG4gIG9jVGl0bGUuaW5uZXJIVE1MID0gYE1hZGUgZm9yICR7b2N9YDtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKG5vdGljZUhvd0NoYW5jZ2VMYW5ndWFnZSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQob2NUaXRsZSk7XG5cbiAgY29uc3Qga2V5Qm9hcmRXcmFwID0gY3JlYXRlRWwoJ2RpdicsICdrZXlib2FyZF93cmFwcCcpO1xuICBjb25zdCBrZXlib2FyZEtleXNXciA9IGNyZWF0ZUVsKCdkaXYnLCAna2V5Ym9hcmRfa2V5cycpO1xuICBrZXlCb2FyZFdyYXAuYXBwZW5kQ2hpbGQoa2V5Ym9hcmRLZXlzV3IpO1xuXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoa2V5Qm9hcmRXcmFwKTtcblxuICBjb25zdCBrZXlib2FyZEtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmRfa2V5cycpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5c01hcC5zaXplOyBpICs9IDEpIHtcbiAgICBrZXlib2FyZEtleXMuYXBwZW5kQ2hpbGQoa2V5c01hcC5nZXQoYHJvdyR7aSArIDF9YCkpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbaV0uc2V0QXR0cmlidXRlKCdvbmx5LXNoaWZ0JywgJ3RydWUnKTtcbiAgfVxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1swXS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZSgnb25seS1zaGlmdCcsICdlbicpO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzExXS5zZXRBdHRyaWJ1dGUoJ29ubHktc2hpZnQnLCAnZW4nKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxMl0uc2V0QXR0cmlidXRlKCdvbmx5LXNoaWZ0JywgJ2VuJyk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMTNdLnNldEF0dHJpYnV0ZSgnb25seS1zaGlmdCcsICd0cnVlJyk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMV0uc2V0QXR0cmlidXRlKCdvbmx5LXNoaWZ0JywgJ3RydWUnKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbM10uY2hpbGROb2Rlc1sxMV0uc2V0QXR0cmlidXRlKCdvbmx5LXNoaWZ0JywgJ3RydWUnKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbM10uY2hpbGROb2Rlc1s5XS5zZXRBdHRyaWJ1dGUoJ29ubHktc2hpZnQnLCAnZW4nKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbM10uY2hpbGROb2Rlc1sxMF0uc2V0QXR0cmlidXRlKCdvbmx5LXNoaWZ0JywgJ2VuJyk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMTBdLnNldEF0dHJpYnV0ZSgnb25seS1zaGlmdCcsICdlbicpO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzExXS5zZXRBdHRyaWJ1dGUoJ29ubHktc2hpZnQnLCAnZW4nKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1swXS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYmFja3NwYWNlX2tleScpO1xuXG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzFdLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgndGFiX2tleScpO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1sxXS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnZGVsX2tleScpO1xuXG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzJdLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnY2Fwc19sb2NrX2tleScpO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1syXS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnZW50ZXJfa2V5Jyk7XG5cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbM10uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFxuICAgICdzaGlmdF9rZXknLFxuICAgICdsZWZ0X3NoaWZ0JyxcbiAgKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbM10ubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoXG4gICAgJ3NoaWZ0X2tleScsXG4gICAgJ3JpZ2h0X3NoaWZ0JyxcbiAgKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2N0cmxfa2V5JywgJ2N0cmxfbGVmdCcpO1xuXG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbMl0uY2xhc3NMaXN0LmFkZChcbiAgICAnYWx0X2tleScsXG4gICAgJ2FsdF9sZWZ0JyxcbiAgKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1s0XS5jbGFzc0xpc3QuYWRkKFxuICAgICdhbHRfa2V5JyxcbiAgICAnYWx0X3JpZ2h0JyxcbiAgKTtcblxuICBjb25zdCBzcGFjZSA9IGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbM107XG4gIHNwYWNlLmNsYXNzTGlzdC5hZGQoJ3NwYWNlX2tleScpO1xuXG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbNV0uY2xhc3NMaXN0LmFkZChcbiAgICAnY3RybF9rZXknLFxuICAgICdjdHJsX3JpZ2h0JyxcbiAgKTtcblxuICBjb25zdCB1cCA9IGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzNdLmxhc3RDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gIGNvbnN0IGRvd24gPSBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzddO1xuICBjb25zdCBsZWZ0ID0ga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1s2XTtcbiAgY29uc3QgcmlnaHQgPSBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzhdO1xuXG4gIHVwLmNsYXNzTGlzdC5hZGQoJ3VwX2tleScsICd1cCcpO1xuICBkb3duLmNsYXNzTGlzdC5hZGQoJ2Rvd25fa2V5JywgJ2Rvd24nKTtcbiAgbGVmdC5jbGFzc0xpc3QuYWRkKCdsZWZ0X2tleScsICdsZWZ0Jyk7XG4gIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0X2tleScsICdyaWdodCcpO1xuXG4gIHVwLmlubmVySFRNTCA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgPHN2ZyBjbGFzcz1cImFyciB1cFwiIHdpZHRoPVwiMzZweFwiIGhlaWdodD1cIjM2cHhcIiB2aWV3Qm94PVwiMCAtNi41IDM2IDM2XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgXG4gICAgICA8dGl0bGU+dXAtYXJyb3c8L3RpdGxlPlxuICAgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG4gICAgICA8ZyBpZD1cImljb25zXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICA8ZyBpZD1cInVwXCIgY2xhc3M9XCJhcnJvd3MgYXJyIHVwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNDIuMDAwMDAwLCAtMTU5LjAwMDAwMClcIiBmaWxsPVwiIzI1MjUyOFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJzcXVhcmUtZmlsbGVkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwLjAwMDAwMCwgMTIwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiYXJyb3dzIGFyciB1cFwiIGQ9XCJNMzE3LjEwODAxMiwzOS4yOTAyODU3IEwzMjcuNjQ5ODA0LDQ5Ljc0MTcwNDMgTDMyNy43MDg5OTQsNDkuNzk1OTE2OSBDMzI3Ljg4OTE0MSw0OS45NzQ1NTQzIDMyNy45ODYxNDMsNTAuMjA0NDE4MiAzMjgsNTAuNDM4MjIyNyBMMzI4LDUwLjU2MTc3NzMgQzMyNy45ODYxNDMsNTAuNzk1NTgxOCAzMjcuODg5MTQxLDUxLjAyNTQ0NTcgMzI3LjcwODk5NCw1MS4yMDQwODMxIEwzMjcuNjU3MSw1MS4yNDc5ODAzIEwzMTcuMTA4MDEyLDYxLjcwOTcxNDMgQzMxNi43MTc2OTQsNjIuMDk2NzYxOSAzMTYuMDg0ODY1LDYyLjA5Njc2MTkgMzE1LjY5NDU0Nyw2MS43MDk3MTQzIEMzMTUuMzA0MjMsNjEuMzIyNjY2OCAzMTUuMzA0MjMsNjAuNjk1MTM4NyAzMTUuNjk0NTQ3LDYwLjMwODA5MTEgTDMyNC43MDI2NjYsNTEuMzczODQ5NiBMMjkyLjk5OTQ3LDUxLjM3NDYyOTEgQzI5Mi40NDc0NzgsNTEuMzc0NjI5MSAyOTIsNTAuOTMwODk5NyAyOTIsNTAuMzgzNTMxOCBDMjkyLDQ5LjgzNjE2MzkgMjkyLjQ0NzQ3OCw0OS4zOTI0MzQ1IDI5Mi45OTk0Nyw0OS4zOTI0MzQ1IEwzMjQuNDY3NzksNDkuMzkxNjU1MSBMMzE1LjY5NDU0Nyw0MC42OTE5MDg5IEMzMTUuMzA0MjMsNDAuMzA0ODYxMyAzMTUuMzA0MjMsMzkuNjc3MzMzMiAzMTUuNjk0NTQ3LDM5LjI5MDI4NTcgQzMxNi4wODQ4NjUsMzguOTAzMjM4MSAzMTYuNzE3Njk0LDM4LjkwMzIzODEgMzE3LjEwODAxMiwzOS4yOTAyODU3IFogTTMyNy4xMTUzNTcsNTAuMzgyNjkzIEwzMTYuNDAxMjc5LDYxLjAwODkwMjcgTDMyNy4wMDIxNTEsNTAuNTAwMjA0NiBMMzI3LjAwMjI1Miw1MC40OTYzNzE5IEwzMjYuOTQzMTQyLDUwLjQ0MjU4NSBMMzI2Ljg4MjczNyw1MC4zODI2OTMgTDMyNy4xMTUzNTcsNTAuMzgyNjkzIFpcIiBpZD1cImxlZnQtYXJyb3dcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzEwLjAwMDAwMCwgNTAuNTAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zMTAuMDAwMDAwLCAtNTAuNTAwMDAwKSBcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gIDwvc3ZnPmA7XG4gIGRvd24uaW5uZXJIVE1MID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICA8c3ZnIGNsYXNzPVwiYXJyIGRvd25cIiB3aWR0aD1cIjM2cHhcIiBoZWlnaHQ9XCIzNnB4XCIgdmlld0JveD1cIjAgLTYuNSAzNiAzNlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gIFxuICAgICAgPHRpdGxlPmRvd24tYXJyb3c8L3RpdGxlPlxuICAgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG4gICAgICA8ZyBpZD1cImljb25zXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICA8ZyBpZD1cImRvd25cIiBjbGFzcz1cImFycm93cyBhcnIgZG93blwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzQyLjAwMDAwMCwgLTE1OS4wMDAwMDApXCIgZmlsbD1cIiMyNTI1MjhcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCI+XG4gICAgICAgICAgICAgIDxnIGlkPVwic3F1YXJlLWZpbGxlZFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MC4wMDAwMDAsIDEyMC4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImFycm93cyBhcnIgZG93blwiIGQ9XCJNMzE3LjEwODAxMiwzOS4yOTAyODU3IEwzMjcuNjQ5ODA0LDQ5Ljc0MTcwNDMgTDMyNy43MDg5OTQsNDkuNzk1OTE2OSBDMzI3Ljg4OTE0MSw0OS45NzQ1NTQzIDMyNy45ODYxNDMsNTAuMjA0NDE4MiAzMjgsNTAuNDM4MjIyNyBMMzI4LDUwLjU2MTc3NzMgQzMyNy45ODYxNDMsNTAuNzk1NTgxOCAzMjcuODg5MTQxLDUxLjAyNTQ0NTcgMzI3LjcwODk5NCw1MS4yMDQwODMxIEwzMjcuNjU3MSw1MS4yNDc5ODAzIEwzMTcuMTA4MDEyLDYxLjcwOTcxNDMgQzMxNi43MTc2OTQsNjIuMDk2NzYxOSAzMTYuMDg0ODY1LDYyLjA5Njc2MTkgMzE1LjY5NDU0Nyw2MS43MDk3MTQzIEMzMTUuMzA0MjMsNjEuMzIyNjY2OCAzMTUuMzA0MjMsNjAuNjk1MTM4NyAzMTUuNjk0NTQ3LDYwLjMwODA5MTEgTDMyNC43MDI2NjYsNTEuMzczODQ5NiBMMjkyLjk5OTQ3LDUxLjM3NDYyOTEgQzI5Mi40NDc0NzgsNTEuMzc0NjI5MSAyOTIsNTAuOTMwODk5NyAyOTIsNTAuMzgzNTMxOCBDMjkyLDQ5LjgzNjE2MzkgMjkyLjQ0NzQ3OCw0OS4zOTI0MzQ1IDI5Mi45OTk0Nyw0OS4zOTI0MzQ1IEwzMjQuNDY3NzksNDkuMzkxNjU1MSBMMzE1LjY5NDU0Nyw0MC42OTE5MDg5IEMzMTUuMzA0MjMsNDAuMzA0ODYxMyAzMTUuMzA0MjMsMzkuNjc3MzMzMiAzMTUuNjk0NTQ3LDM5LjI5MDI4NTcgQzMxNi4wODQ4NjUsMzguOTAzMjM4MSAzMTYuNzE3Njk0LDM4LjkwMzIzODEgMzE3LjEwODAxMiwzOS4yOTAyODU3IFogTTMyNy4xMTUzNTcsNTAuMzgyNjkzIEwzMTYuNDAxMjc5LDYxLjAwODkwMjcgTDMyNy4wMDIxNTEsNTAuNTAwMjA0NiBMMzI3LjAwMjI1Miw1MC40OTYzNzE5IEwzMjYuOTQzMTQyLDUwLjQ0MjU4NSBMMzI2Ljg4MjczNyw1MC4zODI2OTMgTDMyNy4xMTUzNTcsNTAuMzgyNjkzIFpcIiBpZD1cImxlZnQtYXJyb3dcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzEwLjAwMDAwMCwgNTAuNTAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zMTAuMDAwMDAwLCAtNTAuNTAwMDAwKSBcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gIDwvc3ZnPmA7XG4gIGxlZnQuaW5uZXJIVE1MID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICA8c3ZnIGNsYXNzPVwiYXJyIGxlZnRcIiB3aWR0aD1cIjM2cHhcIiBoZWlnaHQ9XCIzNnB4XCIgdmlld0JveD1cIjAgLTYuNSAzNiAzNlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gIFxuICAgICAgPHRpdGxlPmxlZnQtYXJyb3c8L3RpdGxlPlxuICAgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG4gICAgICA8ZyBpZD1cImljb25zXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICA8ZyBpZD1cImxlZnRcIiBjbGFzcz1cImFycm93cyBhcnIgbGVmdFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzQyLjAwMDAwMCwgLTE1OS4wMDAwMDApXCIgZmlsbD1cIiMyNTI1MjhcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCI+XG4gICAgICAgICAgICAgIDxnIGlkPVwic3F1YXJlLWZpbGxlZFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MC4wMDAwMDAsIDEyMC4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImFycm93cyBhcnIgbGVmdFwiIGQ9XCJNMzE3LjEwODAxMiwzOS4yOTAyODU3IEwzMjcuNjQ5ODA0LDQ5Ljc0MTcwNDMgTDMyNy43MDg5OTQsNDkuNzk1OTE2OSBDMzI3Ljg4OTE0MSw0OS45NzQ1NTQzIDMyNy45ODYxNDMsNTAuMjA0NDE4MiAzMjgsNTAuNDM4MjIyNyBMMzI4LDUwLjU2MTc3NzMgQzMyNy45ODYxNDMsNTAuNzk1NTgxOCAzMjcuODg5MTQxLDUxLjAyNTQ0NTcgMzI3LjcwODk5NCw1MS4yMDQwODMxIEwzMjcuNjU3MSw1MS4yNDc5ODAzIEwzMTcuMTA4MDEyLDYxLjcwOTcxNDMgQzMxNi43MTc2OTQsNjIuMDk2NzYxOSAzMTYuMDg0ODY1LDYyLjA5Njc2MTkgMzE1LjY5NDU0Nyw2MS43MDk3MTQzIEMzMTUuMzA0MjMsNjEuMzIyNjY2OCAzMTUuMzA0MjMsNjAuNjk1MTM4NyAzMTUuNjk0NTQ3LDYwLjMwODA5MTEgTDMyNC43MDI2NjYsNTEuMzczODQ5NiBMMjkyLjk5OTQ3LDUxLjM3NDYyOTEgQzI5Mi40NDc0NzgsNTEuMzc0NjI5MSAyOTIsNTAuOTMwODk5NyAyOTIsNTAuMzgzNTMxOCBDMjkyLDQ5LjgzNjE2MzkgMjkyLjQ0NzQ3OCw0OS4zOTI0MzQ1IDI5Mi45OTk0Nyw0OS4zOTI0MzQ1IEwzMjQuNDY3NzksNDkuMzkxNjU1MSBMMzE1LjY5NDU0Nyw0MC42OTE5MDg5IEMzMTUuMzA0MjMsNDAuMzA0ODYxMyAzMTUuMzA0MjMsMzkuNjc3MzMzMiAzMTUuNjk0NTQ3LDM5LjI5MDI4NTcgQzMxNi4wODQ4NjUsMzguOTAzMjM4MSAzMTYuNzE3Njk0LDM4LjkwMzIzODEgMzE3LjEwODAxMiwzOS4yOTAyODU3IFogTTMyNy4xMTUzNTcsNTAuMzgyNjkzIEwzMTYuNDAxMjc5LDYxLjAwODkwMjcgTDMyNy4wMDIxNTEsNTAuNTAwMjA0NiBMMzI3LjAwMjI1Miw1MC40OTYzNzE5IEwzMjYuOTQzMTQyLDUwLjQ0MjU4NSBMMzI2Ljg4MjczNyw1MC4zODI2OTMgTDMyNy4xMTUzNTcsNTAuMzgyNjkzIFpcIiBpZD1cImxlZnQtYXJyb3dcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzEwLjAwMDAwMCwgNTAuNTAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zMTAuMDAwMDAwLCAtNTAuNTAwMDAwKSBcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gIDwvc3ZnPmA7XG4gIHJpZ2h0LmlubmVySFRNTCA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgPHN2ZyBjbGFzcz1cImFyciByaWdodFwiIHdpZHRoPVwiMzZweFwiIGhlaWdodD1cIjM2cHhcIiB2aWV3Qm94PVwiMCAtNi41IDM2IDM2XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgXG4gICAgICA8dGl0bGU+cmlnaHQtYXJyb3c8L3RpdGxlPlxuICAgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG4gICAgICA8ZyBpZD1cImljb25zXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICA8ZyBpZD1cInJpZ2h0XCIgY2xhc3M9XCJhcnJvd3MgYXJyIHJpZ2h0XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNDIuMDAwMDAwLCAtMTU5LjAwMDAwMClcIiBmaWxsPVwiIzI1MjUyOFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJzcXVhcmUtZmlsbGVkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwLjAwMDAwMCwgMTIwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiYXJyb3dzIGFyciByaWdodFwiIGQ9XCJNMzE3LjEwODAxMiwzOS4yOTAyODU3IEwzMjcuNjQ5ODA0LDQ5Ljc0MTcwNDMgTDMyNy43MDg5OTQsNDkuNzk1OTE2OSBDMzI3Ljg4OTE0MSw0OS45NzQ1NTQzIDMyNy45ODYxNDMsNTAuMjA0NDE4MiAzMjgsNTAuNDM4MjIyNyBMMzI4LDUwLjU2MTc3NzMgQzMyNy45ODYxNDMsNTAuNzk1NTgxOCAzMjcuODg5MTQxLDUxLjAyNTQ0NTcgMzI3LjcwODk5NCw1MS4yMDQwODMxIEwzMjcuNjU3MSw1MS4yNDc5ODAzIEwzMTcuMTA4MDEyLDYxLjcwOTcxNDMgQzMxNi43MTc2OTQsNjIuMDk2NzYxOSAzMTYuMDg0ODY1LDYyLjA5Njc2MTkgMzE1LjY5NDU0Nyw2MS43MDk3MTQzIEMzMTUuMzA0MjMsNjEuMzIyNjY2OCAzMTUuMzA0MjMsNjAuNjk1MTM4NyAzMTUuNjk0NTQ3LDYwLjMwODA5MTEgTDMyNC43MDI2NjYsNTEuMzczODQ5NiBMMjkyLjk5OTQ3LDUxLjM3NDYyOTEgQzI5Mi40NDc0NzgsNTEuMzc0NjI5MSAyOTIsNTAuOTMwODk5NyAyOTIsNTAuMzgzNTMxOCBDMjkyLDQ5LjgzNjE2MzkgMjkyLjQ0NzQ3OCw0OS4zOTI0MzQ1IDI5Mi45OTk0Nyw0OS4zOTI0MzQ1IEwzMjQuNDY3NzksNDkuMzkxNjU1MSBMMzE1LjY5NDU0Nyw0MC42OTE5MDg5IEMzMTUuMzA0MjMsNDAuMzA0ODYxMyAzMTUuMzA0MjMsMzkuNjc3MzMzMiAzMTUuNjk0NTQ3LDM5LjI5MDI4NTcgQzMxNi4wODQ4NjUsMzguOTAzMjM4MSAzMTYuNzE3Njk0LDM4LjkwMzIzODEgMzE3LjEwODAxMiwzOS4yOTAyODU3IFogTTMyNy4xMTUzNTcsNTAuMzgyNjkzIEwzMTYuNDAxMjc5LDYxLjAwODkwMjcgTDMyNy4wMDIxNTEsNTAuNTAwMjA0NiBMMzI3LjAwMjI1Miw1MC40OTYzNzE5IEwzMjYuOTQzMTQyLDUwLjQ0MjU4NSBMMzI2Ljg4MjczNyw1MC4zODI2OTMgTDMyNy4xMTUzNTcsNTAuMzgyNjkzIFpcIiBpZD1cImxlZnQtYXJyb3dcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzEwLjAwMDAwMCwgNTAuNTAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zMTAuMDAwMDAwLCAtNTAuNTAwMDAwKSBcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gIDwvc3ZnPmA7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zY3JpcHQvcmVuZGVyJztcbmltcG9ydCAnLi9zY3JpcHQvaW50ZXJhY3Rpb24nO1xuXG5yZXF1aXJlKCdub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==