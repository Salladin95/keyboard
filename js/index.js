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
/* harmony export */   "addValueToTxt": () => (/* binding */ addValueToTxt),
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

function addValueToTxt(txtValue, additional) {
  const startStr = txtValue.value.slice(0, txtValue.selectionEnd);
  const endStr = txtValue.value.slice(txtValue.selectionEnd);
  return `${startStr}${additional}${endStr}`;
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

    if (target.length === 1) {
      const ind = txtField.selectionEnd + 1;
      if (txtField.selectionEnd >= txtField.value.length) {
        txtField.value += target;
      } else {
        txtField.value = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addValueToTxt)(
          txtField,
          target,
        );
        txtField.selectionStart = ind;
        txtField.selectionEnd = ind;
      }
    } else if (e.target.classList.contains('space_key')) {
      const ind = txtField.selectionEnd + 1;
      if (txtField.selectionEnd >= txtField.value.length) {
        txtField.value += ' ';
      } else {
        txtField.value = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addValueToTxt)(
          txtField,
          ' ',
        );
        txtField.selectionStart = ind;
        txtField.selectionEnd = ind;
      }
    } else if (keyname === 'Tab') {
      const ind = txtField.selectionEnd + 4;
      if (txtField.selectionEnd >= txtField.value.length) {
        txtField.value += '    ';
      } else {
        txtField.value = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addValueToTxt)(
          txtField,
          '    ',
        );
        txtField.selectionStart = ind;
        txtField.selectionEnd = ind;
      }
    } else if (keyname === 'Enter') {
      const ind = txtField.selectionEnd + 1;
      if (txtField.selectionEnd >= txtField.value.length) {
        txtField.value += '\n';
      } else {
        txtField.value = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addValueToTxt)(
          txtField,
          '\n',
        );
        txtField.selectionStart = ind;
        txtField.selectionEnd = ind;
      }
    } else if (keyname === 'Backspace') {
      if (txtField.value.length > 0 && txtField.selectionEnd > 0) {
        const ind = txtField.selectionEnd - 1;
        txtField.value = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.rmTxt)(txtField, txtField.selectionEnd - 1, txtField.selectionEnd);
        txtField.selectionStart = ind;
        txtField.selectionEnd = ind;
      }
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

/***/ "./src/main/script/key-interaction.js":
/*!********************************************!*\
  !*** ./src/main/script/key-interaction.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/main/script/helper.js");


window.addEventListener('load', () => {
  const keys = document.querySelectorAll('.keys');
  const ctrlLeft = document.querySelector('.ctrl_left');
  const ctrlRight = document.querySelector('.ctrl_right');
  const altLeft = document.querySelector('.alt_left');
  const altRight = document.querySelector('.alt_right');

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
      (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getLowerCase)(keys);
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
/* harmony import */ var _script_key_interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script/key-interaction */ "./src/main/script/key-interaction.js");





__webpack_require__(/*! normalize.css/normalize.css */ "./node_modules/normalize.css/normalize.css");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFrQixzREFBc0Q7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7VUMvSkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNKO0FBQ0s7QUFDSTs7QUFFbEMsbUJBQU8sQ0FBQywrRUFBNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc3MvLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzP2ZiNTciLCJ3ZWJwYWNrOi8vcnNzLy4vc3JjL21haW4vc3R5bGVzL2luZGV4LnNjc3M/MzdlNiIsIndlYnBhY2s6Ly9yc3MvLi9zcmMvbWFpbi9zY3JpcHQvaGVscGVyLmpzIiwid2VicGFjazovL3Jzcy8uL3NyYy9tYWluL3NjcmlwdC9pbnRlcmFjdGlvbi5qcyIsIndlYnBhY2s6Ly9yc3MvLi9zcmMvbWFpbi9zY3JpcHQva2V5LWludGVyYWN0aW9uLmpzIiwid2VicGFjazovL3Jzcy8uL3NyYy9tYWluL3NjcmlwdC9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jzcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNzLy4vc3JjL21haW4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZnVuY3Rpb24gc2V0QXRyc2ZvcktleXMoKSB7XG4gIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5cycpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykpIHtcbiAgICAgIGtleXNbaV0uc2V0QXR0cmlidXRlKFxuICAgICAgICAnVXBwZXJDYXNlTmFtZUVuJyxcbiAgICAgICAga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykudG9VcHBlckNhc2UoKSxcbiAgICAgICk7XG4gICAgICBrZXlzW2ldLnNldEF0dHJpYnV0ZShcbiAgICAgICAgJ1VwcGVyQ2FzZU5hbWVSdScsXG4gICAgICAgIGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpLnRvVXBwZXJDYXNlKCksXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBrZXlzWzFdLnNldEF0dHJpYnV0ZSgna2V5JywgJzEnKTtcbiAga2V5c1syXS5zZXRBdHRyaWJ1dGUoJ2tleScsICcyJyk7XG4gIGtleXNbM10uc2V0QXR0cmlidXRlKCdrZXknLCAnMycpO1xuICBrZXlzWzRdLnNldEF0dHJpYnV0ZSgna2V5JywgJzQnKTtcbiAga2V5c1s1XS5zZXRBdHRyaWJ1dGUoJ2tleScsICc1Jyk7XG4gIGtleXNbNl0uc2V0QXR0cmlidXRlKCdrZXknLCAnNicpO1xuICBrZXlzWzddLnNldEF0dHJpYnV0ZSgna2V5JywgJzcnKTtcbiAga2V5c1s4XS5zZXRBdHRyaWJ1dGUoJ2tleScsICc4Jyk7XG4gIGtleXNbOV0uc2V0QXR0cmlidXRlKCdrZXknLCAnOScpO1xuICBrZXlzWzEwXS5zZXRBdHRyaWJ1dGUoJ2tleScsICcwJyk7XG4gIGtleXNbMTFdLnNldEF0dHJpYnV0ZSgna2V5JywgJy0nKTtcbiAga2V5c1sxMl0uc2V0QXR0cmlidXRlKCdrZXknLCAnPScpO1xuICBrZXlzWzBdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ34nKTtcbiAga2V5c1sxXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICchJyk7XG4gIGtleXNbMl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnQCcpO1xuICBrZXlzWzNdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJyMnKTtcbiAga2V5c1s0XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICckJyk7XG4gIGtleXNbNV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnJScpO1xuICBrZXlzWzZdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ14nKTtcbiAga2V5c1s3XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICcmJyk7XG4gIGtleXNbOF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnKicpO1xuICBrZXlzWzldLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJygnKTtcbiAga2V5c1sxMF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnKScpO1xuICBrZXlzWzExXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICdfJyk7XG4gIGtleXNbMTJdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJysnKTtcbiAga2V5c1sxXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICchJyk7XG4gIGtleXNbMl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnXCInKTtcbiAga2V5c1szXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICfihJYnKTtcbiAga2V5c1s0XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICc7Jyk7XG4gIGtleXNbNV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnJScpO1xuICBrZXlzWzZdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJzonKTtcbiAga2V5c1s3XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICc/Jyk7XG4gIGtleXNbOF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnKicpO1xuICBrZXlzWzldLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJygnKTtcbiAga2V5c1sxMF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnKScpO1xuICBrZXlzWzExXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICdfJyk7XG4gIGtleXNbMTJdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJysnKTtcbiAga2V5c1syNV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAneycpO1xuICBrZXlzWzI2XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICd9Jyk7XG4gIGtleXNbMjddLnNldEF0dHJpYnV0ZSgna2V5JywgJ1xcXFwnKTtcbiAga2V5c1syN10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnfCcpO1xuICBrZXlzWzI3XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICd8Jyk7XG4gIGtleXNbMzldLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJzonKTtcbiAga2V5c1s0MF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnXCInKTtcbiAga2V5c1s1MV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnPCcpO1xuICBrZXlzWzUyXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICc+Jyk7XG4gIGtleXNbNDNdLnNldEF0dHJpYnV0ZSgna2V5JywgJy8nKTtcbiAga2V5c1s0M10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnLycpO1xuICBrZXlzWzQzXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICcsJyk7XG4gIGtleXNbNTNdLnNldEF0dHJpYnV0ZSgna2V5JywgJy8nKTtcbiAga2V5c1s1M10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnPycpO1xuICBrZXlzWzUzXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICcuJyk7XG59XG5cbmZ1bmN0aW9uIHJtVHh0KHR4dFZhbHVlLCBpbmQxLCBpbmQyKSB7XG4gIGNvbnN0IHN0YXJ0U3RyID0gdHh0VmFsdWUudmFsdWUuc2xpY2UoMCwgaW5kMSk7XG4gIGNvbnN0IGVuZFN0ciA9IHR4dFZhbHVlLnZhbHVlLnNsaWNlKGluZDIpO1xuICByZXR1cm4gYCR7c3RhcnRTdHJ9JHtlbmRTdHJ9YDtcbn1cblxuZnVuY3Rpb24gYWRkVmFsdWVUb1R4dCh0eHRWYWx1ZSwgYWRkaXRpb25hbCkge1xuICBjb25zdCBzdGFydFN0ciA9IHR4dFZhbHVlLnZhbHVlLnNsaWNlKDAsIHR4dFZhbHVlLnNlbGVjdGlvbkVuZCk7XG4gIGNvbnN0IGVuZFN0ciA9IHR4dFZhbHVlLnZhbHVlLnNsaWNlKHR4dFZhbHVlLnNlbGVjdGlvbkVuZCk7XG4gIHJldHVybiBgJHtzdGFydFN0cn0ke2FkZGl0aW9uYWx9JHtlbmRTdHJ9YDtcbn1cblxuZnVuY3Rpb24gZ2V0VXBwZXJDYXNlKGtleSkge1xuICBjb25zdCBrZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtleXMnKTtcbiAgaWYgKGtleSA9PT0gJ1NoaWZ0TGVmdCcgfHwga2V5ID09PSAnU2hpZnRMZWZ0Jykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnKSA9PT0gJ2VuJykge1xuICAgICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykgfHwga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleScpKSB7XG4gICAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1JykgfHwga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleScpKSB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlLWxhbmd1YWdlJykgPT09ICdlbicpIHtcbiAgICAgICAgaWYgKCFrZXlzW2ldLmdldEF0dHJpYnV0ZSgnb25seS1zaGlmdCcpKSB7XG4gICAgICAgICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpIHx8IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXknKSkge1xuICAgICAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFrZXlzW2ldLmdldEF0dHJpYnV0ZSgnb25seS1zaGlmdCcpIHx8IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdvbmx5LXNoaWZ0JykgPT09ICdlbicpIHtcbiAgICAgICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpIHx8IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXknKSkge1xuICAgICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBnZXRMb3dlckNhc2UoKSB7XG4gIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5cycpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleScpKSB7XG4gICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXknKTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnKSA9PT0gJ2VuJykge1xuICAgICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpKSB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKSkge1xuICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZShlbCkge1xuICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9IGVsc2Uge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9XG59XG5mdW5jdGlvbiBjaGVja0FjdGl2ZShlbCkge1xuICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHRvZ2dsZUxhbmd1YWdlKCkge1xuICBjb25zdCBrZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtleXMnKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnKSA9PT0gJ2VuJykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpKSB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnLCAncnUnKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKSkge1xuICAgICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpO1xuICAgICAgfVxuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlLWxhbmd1YWdlJywgJ2VuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRWwodGFnLCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIGVsO1xufVxuXG5jb25zdCBjcmVhdGVLZXlzID0gKGFycikgPT4ge1xuICBsZXQgaSA9IDA7XG5cbiAgY29uc3Qgcm93ID0gY3JlYXRlRWwoJ2RpdicsICdyb3cnKTtcblxuICB3aGlsZSAoaSA8IGFyci5sZW5ndGgpIHtcbiAgICBjb25zdCBrZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5cycpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycltpXSkpIHtcbiAgICAgIGtleS5zZXRBdHRyaWJ1dGUoJ2tleUVuJywgYXJyW2ldWzBdKTtcbiAgICAgIGtleS5zZXRBdHRyaWJ1dGUoJ2tleVJ1JywgYXJyW2ldWzFdKTtcbiAgICAgIGtleS5pbm5lckhUTUwgPSBrZXkuZ2V0QXR0cmlidXRlKCdrZXlFbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXkuaW5uZXJIVE1MID0gYXJyW2ldO1xuICAgIH1cbiAgICByb3cuYXBwZW5kQ2hpbGQoa2V5KTtcbiAgICBpICs9IDE7XG4gIH1cblxuICByZXR1cm4gcm93O1xufTtcblxuZnVuY3Rpb24gaXNNYWNpbnRvc2goKSB7XG4gIHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm0uaW5kZXhPZignTWFjJykgPiAtMTtcbn1cblxuZnVuY3Rpb24gZmlsbEtleXMobWFwKSB7XG4gIGNvbnN0IG9jID0gaXNNYWNpbnRvc2goKSA/ICdNYWMnIDogJ1dpbic7XG5cbiAgbWFwLnNldCgncm93MScsIGNyZWF0ZUtleXMoW1snYCcsICfRkSddLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAwLCAnLScsICc9JywgJ0JhY2tzcGFjZSddKSk7XG4gIG1hcC5zZXQoXG4gICAgJ3JvdzInLFxuICAgIGNyZWF0ZUtleXMoWydUYWInLFxuICAgICAgWydxJywgJ9C5J10sXG4gICAgICBbJ3cnLCAn0YYnXSxcbiAgICAgIFsnZScsICfRgyddLFxuICAgICAgWydyJywgJ9C6J10sXG4gICAgICBbJ3QnLCAn0LUnXSxcbiAgICAgIFsneScsICfQvSddLFxuICAgICAgWyd1JywgJ9CzJ10sXG4gICAgICBbJ2knLCAn0YgnXSxcbiAgICAgIFsnbycsICfRiSddLFxuICAgICAgWydwJywgJ9C3J10sXG4gICAgICBbJ1snLCAn0YUnXSxcbiAgICAgIFsnXScsICfRiiddLFxuICAgICAgJ1xcXFwnLFxuICAgICAgJ0RFTCcsXG4gICAgXSksXG4gICk7XG4gIG1hcC5zZXQoXG4gICAgJ3JvdzMnLFxuICAgIGNyZWF0ZUtleXMoW1xuICAgICAgJ0NhcHMgTG9jaycsXG4gICAgICBbJ2EnLCAn0YQnXSxcbiAgICAgIFsncycsICfRiyddLFxuICAgICAgWydkJywgJ9CyJ10sXG4gICAgICBbJ2YnLCAn0LAnXSxcbiAgICAgIFsnZycsICfQvyddLFxuICAgICAgWydoJywgJ9GAJ10sXG4gICAgICBbJ2onLCAn0L4nXSxcbiAgICAgIFsnaycsICfQuyddLFxuICAgICAgWydsJywgJ9C0J10sXG4gICAgICBbJzsnLCAn0LYnXSxcbiAgICAgIFtcIidcIiwgJ9GNJ10sXG4gICAgICAnRW50ZXInLFxuICAgIF0pLFxuICApO1xuICBtYXAuc2V0KFxuICAgICdyb3c0JyxcbiAgICBjcmVhdGVLZXlzKFtcbiAgICAgICdTaGlmdCcsXG4gICAgICAnLycsXG4gICAgICBbJ3onLCAn0Y8nXSxcbiAgICAgIFsneCcsICfRhyddLFxuICAgICAgWydjJywgJ9GBJ10sXG4gICAgICBbJ3YnLCAn0LwnXSxcbiAgICAgIFsnYicsICfQuCddLFxuICAgICAgWyduJywgJ9GCJ10sXG4gICAgICBbJ20nLCAn0YwnXSxcbiAgICAgIFsnLicsICfQsSddLFxuICAgICAgWycsJywgJ9GOJ10sXG4gICAgICAnLycsXG4gICAgICAnJyxcbiAgICAgICdTaGlmdCcsXG4gICAgXSksXG4gICk7XG4gIG1hcC5zZXQoXG4gICAgJ3JvdzUnLFxuICAgIGNyZWF0ZUtleXMoWydDdHJsJywgb2MsICdBbHQnLCAnJywgJ0FsdCcsICdDdHJsJywgJycsICcnLCAnJ10pLFxuICApO1xufVxuXG5leHBvcnQge1xuICBzZXRBdHJzZm9yS2V5cyxcbiAgcm1UeHQsXG4gIHRvZ2dsZUxhbmd1YWdlLFxuICBjaGVja0FjdGl2ZSxcbiAgdG9nZ2xlQWN0aXZlLFxuICBnZXRMb3dlckNhc2UsXG4gIGdldFVwcGVyQ2FzZSxcbiAgY3JlYXRlRWwsXG4gIGNyZWF0ZUtleXMsXG4gIGZpbGxLZXlzLFxuICBpc01hY2ludG9zaCxcbiAgYWRkVmFsdWVUb1R4dCxcbn07XG4iLCJpbXBvcnQge1xuICBzZXRBdHJzZm9yS2V5cyxcbiAgcm1UeHQsXG4gIHRvZ2dsZUFjdGl2ZSxcbiAgZ2V0TG93ZXJDYXNlLFxuICBnZXRVcHBlckNhc2UsXG4gIGFkZFZhbHVlVG9UeHQsXG59IGZyb20gJy4vaGVscGVyJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGNvbnN0IGtleUJvYXJkV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZF93cmFwcCcpO1xuICBjb25zdCB0eHRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LWZpZWxkJyk7XG4gIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5cycpO1xuICBsZXQgZm9jdXMgPSBmYWxzZTtcbiAgbGV0IGxhbmd1YWdlID0gJ2VuJztcblxuICBzZXRBdHJzZm9yS2V5cygpO1xuXG4gIGNvbnN0IHNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwYWNlX2tleScpO1xuICBzcGFjZS5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnU3BhY2UnKTtcblxuICBjb25zdCBjYXBzTG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXBzX2xvY2tfa2V5Jyk7XG4gIGNhcHNMb2NrLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdDYXBzTG9jaycpO1xuXG4gIGNvbnN0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJfa2V5Jyk7XG4gIHRhYi5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnVGFiJyk7XG5cbiAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50ZXJfa2V5Jyk7XG4gIGVudGVyLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdFbnRlcicpO1xuXG4gIGNvbnN0IGJhY2tzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrc3BhY2Vfa2V5Jyk7XG4gIGJhY2tzcGFjZS5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQmFja3NwYWNlJyk7XG5cbiAgY29uc3Qgc2hpZnRMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnRfc2hpZnQnKTtcbiAgY29uc3Qgc2hpZnRSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodF9zaGlmdCcpO1xuICBzaGlmdExlZnQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ1NoaWZ0TGVmdCcpO1xuICBzaGlmdFJpZ2h0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdTaGlmdFJpZ2h0Jyk7XG5cbiAgY29uc3QgY3RybExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3RybF9sZWZ0Jyk7XG4gIGNvbnN0IGN0cmxSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdHJsX3JpZ2h0Jyk7XG4gIGN0cmxMZWZ0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdDb250cm9sTGVmdCcpO1xuICBjdHJsUmlnaHQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0NvbnRyb2xSaWdodCcpO1xuXG4gIGNvbnN0IGFsdExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWx0X2xlZnQnKTtcbiAgY29uc3QgYWx0UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWx0X3JpZ2h0Jyk7XG4gIGFsdExlZnQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0FsdExlZnQnKTtcbiAgYWx0UmlnaHQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0FsdFJpZ2h0Jyk7XG5cbiAgY29uc3QgZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbF9rZXknKTtcbiAgZGVsLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdEZWxldGUnKTtcblxuICBjb25zdCB1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cF9rZXknKTtcbiAgY29uc3QgZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3duX2tleScpO1xuICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnRfa2V5Jyk7XG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0X2tleScpO1xuXG4gIHVwLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBcnJvd1VwJyk7XG4gIHVwLmNsYXNzTGlzdC5hZGQoJ2FycicpO1xuICBkb3duLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBcnJvd0Rvd24nKTtcbiAgZG93bi5jbGFzc0xpc3QuYWRkKCdhcnInKTtcbiAgbGVmdC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQXJyb3dMZWZ0Jyk7XG4gIGxlZnQuY2xhc3NMaXN0LmFkZCgnYXJyJyk7XG4gIHJpZ2h0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBcnJvd1JpZ2h0Jyk7XG4gIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2FycicpO1xuXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlLWxhbmd1YWdlJykgJiYgbGFuZ3VhZ2UgIT09IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnKSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpKSB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhbmd1YWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpO1xuICB9XG5cbiAgdHh0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgaWYgKCFmb2N1cykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZvY3VzID0gdHJ1ZTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfVxuICB9KTtcblxuICB0eHRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgIGlmIChmb2N1cykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZvY3VzID0gZmFsc2U7XG4gICAgICB9LCAyMDApO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJibHVyXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAga2V5Qm9hcmRXcmFwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBsZXQga2V5bmFtZTtcbiAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdrZXlOYW1lJykpIHtcbiAgICAgIGtleW5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2tleU5hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5bmFtZSA9IG51bGw7XG4gICAgfVxuICAgIGlmIChrZXluYW1lID09PSAnU2hpZnRMZWZ0JyB8fCBrZXluYW1lID09PSAnU2hpZnRSaWdodCcpIHtcbiAgICAgIHRvZ2dsZUFjdGl2ZShlLnRhcmdldCk7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBnZXRVcHBlckNhc2Uoa2V5cywga2V5bmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRMb3dlckNhc2Uoa2V5cyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXluYW1lID09PSAnQ2Fwc0xvY2snKSB7XG4gICAgICB0b2dnbGVBY3RpdmUoZS50YXJnZXQpO1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgZ2V0VXBwZXJDYXNlKGtleXMsIGtleW5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0TG93ZXJDYXNlKGtleXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm9jdXMpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0eHRGaWVsZC5mb2N1cygpO1xuICAgICAgfSwgMjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhcnInKSkge1xuICAgICAgaWYgKCFmb2N1cykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsZWZ0JykpIHtcbiAgICAgICAgaWYgKHR4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID4gMCkge1xuICAgICAgICAgIGNvbnN0IGluZCA9IHR4dEZpZWxkLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID0gaW5kIC0gMTtcbiAgICAgICAgICB0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPSBpbmQgLSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmlnaHQnKSkge1xuICAgICAgICBjb25zdCBpbmQgPSB0eHRGaWVsZC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgaWYgKGluZCA8IHR4dEZpZWxkLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID0gaW5kICsgMTtcbiAgICAgICAgICB0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPSBpbmQgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdrZXlzJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5pbm5lckhUTUw7XG5cbiAgICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kID0gdHh0RmllbGQuc2VsZWN0aW9uRW5kICsgMTtcbiAgICAgIGlmICh0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPj0gdHh0RmllbGQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHR4dEZpZWxkLnZhbHVlICs9IHRhcmdldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR4dEZpZWxkLnZhbHVlID0gYWRkVmFsdWVUb1R4dChcbiAgICAgICAgICB0eHRGaWVsZCxcbiAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICk7XG4gICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID0gaW5kO1xuICAgICAgICB0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPSBpbmQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NwYWNlX2tleScpKSB7XG4gICAgICBjb25zdCBpbmQgPSB0eHRGaWVsZC5zZWxlY3Rpb25FbmQgKyAxO1xuICAgICAgaWYgKHR4dEZpZWxkLnNlbGVjdGlvbkVuZCA+PSB0eHRGaWVsZC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdHh0RmllbGQudmFsdWUgKz0gJyAnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHh0RmllbGQudmFsdWUgPSBhZGRWYWx1ZVRvVHh0KFxuICAgICAgICAgIHR4dEZpZWxkLFxuICAgICAgICAgICcgJyxcbiAgICAgICAgKTtcbiAgICAgICAgdHh0RmllbGQuc2VsZWN0aW9uU3RhcnQgPSBpbmQ7XG4gICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvbkVuZCA9IGluZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleW5hbWUgPT09ICdUYWInKSB7XG4gICAgICBjb25zdCBpbmQgPSB0eHRGaWVsZC5zZWxlY3Rpb25FbmQgKyA0O1xuICAgICAgaWYgKHR4dEZpZWxkLnNlbGVjdGlvbkVuZCA+PSB0eHRGaWVsZC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdHh0RmllbGQudmFsdWUgKz0gJyAgICAnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHh0RmllbGQudmFsdWUgPSBhZGRWYWx1ZVRvVHh0KFxuICAgICAgICAgIHR4dEZpZWxkLFxuICAgICAgICAgICcgICAgJyxcbiAgICAgICAgKTtcbiAgICAgICAgdHh0RmllbGQuc2VsZWN0aW9uU3RhcnQgPSBpbmQ7XG4gICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvbkVuZCA9IGluZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleW5hbWUgPT09ICdFbnRlcicpIHtcbiAgICAgIGNvbnN0IGluZCA9IHR4dEZpZWxkLnNlbGVjdGlvbkVuZCArIDE7XG4gICAgICBpZiAodHh0RmllbGQuc2VsZWN0aW9uRW5kID49IHR4dEZpZWxkLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICB0eHRGaWVsZC52YWx1ZSArPSAnXFxuJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR4dEZpZWxkLnZhbHVlID0gYWRkVmFsdWVUb1R4dChcbiAgICAgICAgICB0eHRGaWVsZCxcbiAgICAgICAgICAnXFxuJyxcbiAgICAgICAgKTtcbiAgICAgICAgdHh0RmllbGQuc2VsZWN0aW9uU3RhcnQgPSBpbmQ7XG4gICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvbkVuZCA9IGluZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleW5hbWUgPT09ICdCYWNrc3BhY2UnKSB7XG4gICAgICBpZiAodHh0RmllbGQudmFsdWUubGVuZ3RoID4gMCAmJiB0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPiAwKSB7XG4gICAgICAgIGNvbnN0IGluZCA9IHR4dEZpZWxkLnNlbGVjdGlvbkVuZCAtIDE7XG4gICAgICAgIHR4dEZpZWxkLnZhbHVlID0gcm1UeHQodHh0RmllbGQsIHR4dEZpZWxkLnNlbGVjdGlvbkVuZCAtIDEsIHR4dEZpZWxkLnNlbGVjdGlvbkVuZCk7XG4gICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID0gaW5kO1xuICAgICAgICB0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPSBpbmQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXluYW1lID09PSAnRGVsZXRlJykge1xuICAgICAgaWYgKHR4dEZpZWxkLnZhbHVlLmxlbmd0aCA+IDAgJiYgdHh0RmllbGQuc2VsZWN0aW9uRW5kIDwgdHh0RmllbGQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGluZCA9IHR4dEZpZWxkLnNlbGVjdGlvbkVuZDtcbiAgICAgICAgdHh0RmllbGQudmFsdWUgPSBybVR4dCh0eHRGaWVsZCwgaW5kLCBpbmQgKyAxKTtcbiAgICAgICAgdHh0RmllbGQuc2VsZWN0aW9uU3RhcnQgPSBpbmQ7XG4gICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvbkVuZCA9IGluZDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQge1xuICBjaGVja0FjdGl2ZSxcbiAgZ2V0VXBwZXJDYXNlLFxuICB0b2dnbGVMYW5ndWFnZSxcbiAgZ2V0TG93ZXJDYXNlLFxufSBmcm9tICcuL2hlbHBlcic7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBjb25zdCBrZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtleXMnKTtcbiAgY29uc3QgY3RybExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3RybF9sZWZ0Jyk7XG4gIGNvbnN0IGN0cmxSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdHJsX3JpZ2h0Jyk7XG4gIGNvbnN0IGFsdExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWx0X2xlZnQnKTtcbiAgY29uc3QgYWx0UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWx0X3JpZ2h0Jyk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGxldCBrZXluYW1lO1xuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2tleU5hbWUnKSkge1xuICAgICAga2V5bmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgna2V5TmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXluYW1lID0gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKVxuICAgICAgICB8fCBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JylcbiAgICAgICAgfHwgZS5jb2RlID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5bmFtZScpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5JylcbiAgICAgICkge1xuICAgICAgICBrZXlzW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gJ1NoaWZ0JyB8fCBlLmtleSA9PT0gJ0NhcHNMb2NrJykge1xuICAgICAgZ2V0VXBwZXJDYXNlKGtleXMsIGtleW5hbWUpO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdDb250cm9sJyB8fCBlLmtleSA9PT0gJ0FsdCcpIHtcbiAgICAgIGlmIChcbiAgICAgICAgKGNoZWNrQWN0aXZlKGN0cmxMZWZ0KSAmJiBjaGVja0FjdGl2ZShhbHRMZWZ0KSlcbiAgICAgICAgfHwgKGNoZWNrQWN0aXZlKGN0cmxSaWdodCkgJiYgY2hlY2tBY3RpdmUoYWx0UmlnaHQpKVxuICAgICAgKSB7XG4gICAgICAgIHRvZ2dsZUxhbmd1YWdlKGtleXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKVxuICAgICAgICB8fCBlLmNvZGUgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXluYW1lJylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nKVxuICAgICAgICB8fCBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5JylcbiAgICAgICkge1xuICAgICAgICBrZXlzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBrZXlzW2ldLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAga2V5c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmUnKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ1NoaWZ0JyB8fCBlLmtleSA9PT0gJ0NhcHNMb2NrJykge1xuICAgICAgZ2V0TG93ZXJDYXNlKGtleXMpO1xuICAgIH1cbiAgfSk7XG59KTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUVsLFxuICBmaWxsS2V5cyxcbiAgaXNNYWNpbnRvc2gsXG59IGZyb20gJy4vaGVscGVyJztcblxuY29uc3Qga2V5c01hcCA9IG5ldyBNYXAoKTtcbmV4cG9ydCBkZWZhdWx0IGtleXNNYXA7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBmaWxsS2V5cyhrZXlzTWFwKTtcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbCgnZGl2JywgJ2NvbnRhaW5lcicpO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAnd3JhcHBlcicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgY29uc3QgdGV4dEFyZWEgPSBjcmVhdGVFbCgndGV4dGFyZWEnLCAndGV4dC1maWVsZCcpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgdGV4dEFyZWEucGxhY2Vob2xkZXIgPSAnSGVsbG8gdGhlcmUhIFxcbkVudGVyIHlvdXIgdGhvdWdodHMuLi4nO1xuXG4gIGNvbnN0IG5vdGljZUhvd0NoYW5jZ2VMYW5ndWFnZSA9IGNyZWF0ZUVsKCdoMScsICd0aXRsZScpO1xuICBub3RpY2VIb3dDaGFuY2dlTGFuZ3VhZ2UuY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWxhbmd1YWdlX3RpdGxlJyk7XG4gIG5vdGljZUhvd0NoYW5jZ2VMYW5ndWFnZS5pbm5lckhUTUwgPSAnUHJlc3MgQ3RybCArIEFsdCB0byBjaGFuZ2UgbGFuZ3VhZ2UnO1xuXG4gIGNvbnN0IG9jVGl0bGUgPSBjcmVhdGVFbCgnaDInLCAndGl0bGUnKTtcbiAgY29uc3Qgb2MgPSBpc01hY2ludG9zaCgpID8gJ01hYyBPUycgOiAnV2luZG93cyc7XG4gIG9jVGl0bGUuY2xhc3NMaXN0LmFkZCgnb2NUaXRsZV90aXRsZScpO1xuICBvY1RpdGxlLmlubmVySFRNTCA9IGBNYWRlIGZvciAke29jfWA7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZChub3RpY2VIb3dDaGFuY2dlTGFuZ3VhZ2UpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKG9jVGl0bGUpO1xuXG4gIGNvbnN0IGtleUJvYXJkV3JhcCA9IGNyZWF0ZUVsKCdkaXYnLCAna2V5Ym9hcmRfd3JhcHAnKTtcbiAgY29uc3Qga2V5Ym9hcmRLZXlzV3IgPSBjcmVhdGVFbCgnZGl2JywgJ2tleWJvYXJkX2tleXMnKTtcbiAga2V5Qm9hcmRXcmFwLmFwcGVuZENoaWxkKGtleWJvYXJkS2V5c1dyKTtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGtleUJvYXJkV3JhcCk7XG5cbiAgY29uc3Qga2V5Ym9hcmRLZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkX2tleXMnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNNYXAuc2l6ZTsgaSArPSAxKSB7XG4gICAga2V5Ym9hcmRLZXlzLmFwcGVuZENoaWxkKGtleXNNYXAuZ2V0KGByb3cke2kgKyAxfWApKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzW2ldLnNldEF0dHJpYnV0ZSgnb25seS1zaGlmdCcsICd0cnVlJyk7XG4gIH1cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMF0uZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoJ29ubHktc2hpZnQnLCAnZW4nKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxMV0uc2V0QXR0cmlidXRlKCdvbmx5LXNoaWZ0JywgJ2VuJyk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMTJdLnNldEF0dHJpYnV0ZSgnb25seS1zaGlmdCcsICdlbicpO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzEzXS5zZXRBdHRyaWJ1dGUoJ29ubHktc2hpZnQnLCAndHJ1ZScpO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1szXS5jaGlsZE5vZGVzWzFdLnNldEF0dHJpYnV0ZSgnb25seS1zaGlmdCcsICd0cnVlJyk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMTFdLnNldEF0dHJpYnV0ZSgnb25seS1zaGlmdCcsICd0cnVlJyk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbOV0uc2V0QXR0cmlidXRlKCdvbmx5LXNoaWZ0JywgJ2VuJyk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMTBdLnNldEF0dHJpYnV0ZSgnb25seS1zaGlmdCcsICdlbicpO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzEwXS5zZXRBdHRyaWJ1dGUoJ29ubHktc2hpZnQnLCAnZW4nKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxMV0uc2V0QXR0cmlidXRlKCdvbmx5LXNoaWZ0JywgJ2VuJyk7XG5cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMF0ubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2JhY2tzcGFjZV9rZXknKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1sxXS5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ3RhYl9rZXknKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMV0ubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2RlbF9rZXknKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1syXS5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2NhcHNfbG9ja19rZXknKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMl0ubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2VudGVyX2tleScpO1xuXG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzNdLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcbiAgICAnc2hpZnRfa2V5JyxcbiAgICAnbGVmdF9zaGlmdCcsXG4gICk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzNdLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFxuICAgICdzaGlmdF9rZXknLFxuICAgICdyaWdodF9zaGlmdCcsXG4gICk7XG5cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdjdHJsX2tleScsICdjdHJsX2xlZnQnKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzJdLmNsYXNzTGlzdC5hZGQoXG4gICAgJ2FsdF9rZXknLFxuICAgICdhbHRfbGVmdCcsXG4gICk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbNF0uY2xhc3NMaXN0LmFkZChcbiAgICAnYWx0X2tleScsXG4gICAgJ2FsdF9yaWdodCcsXG4gICk7XG5cbiAgY29uc3Qgc3BhY2UgPSBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzNdO1xuICBzcGFjZS5jbGFzc0xpc3QuYWRkKCdzcGFjZV9rZXknKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzVdLmNsYXNzTGlzdC5hZGQoXG4gICAgJ2N0cmxfa2V5JyxcbiAgICAnY3RybF9yaWdodCcsXG4gICk7XG5cbiAgY29uc3QgdXAgPSBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1szXS5sYXN0Q2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICBjb25zdCBkb3duID0ga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1s3XTtcbiAgY29uc3QgbGVmdCA9IGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbNl07XG4gIGNvbnN0IHJpZ2h0ID0ga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1s4XTtcblxuICB1cC5jbGFzc0xpc3QuYWRkKCd1cF9rZXknLCAndXAnKTtcbiAgZG93bi5jbGFzc0xpc3QuYWRkKCdkb3duX2tleScsICdkb3duJyk7XG4gIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdF9rZXknLCAnbGVmdCcpO1xuICByaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodF9rZXknLCAncmlnaHQnKTtcblxuICB1cC5pbm5lckhUTUwgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gIDxzdmcgY2xhc3M9XCJhcnIgdXBcIiB3aWR0aD1cIjM2cHhcIiBoZWlnaHQ9XCIzNnB4XCIgdmlld0JveD1cIjAgLTYuNSAzNiAzNlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gIFxuICAgICAgPHRpdGxlPnVwLWFycm93PC90aXRsZT5cbiAgICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgICAgPGcgaWQ9XCJpY29uc1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgPGcgaWQ9XCJ1cFwiIGNsYXNzPVwiYXJyb3dzIGFyciB1cFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzQyLjAwMDAwMCwgLTE1OS4wMDAwMDApXCIgZmlsbD1cIiMyNTI1MjhcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCI+XG4gICAgICAgICAgICAgIDxnIGlkPVwic3F1YXJlLWZpbGxlZFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MC4wMDAwMDAsIDEyMC4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImFycm93cyBhcnIgdXBcIiBkPVwiTTMxNy4xMDgwMTIsMzkuMjkwMjg1NyBMMzI3LjY0OTgwNCw0OS43NDE3MDQzIEwzMjcuNzA4OTk0LDQ5Ljc5NTkxNjkgQzMyNy44ODkxNDEsNDkuOTc0NTU0MyAzMjcuOTg2MTQzLDUwLjIwNDQxODIgMzI4LDUwLjQzODIyMjcgTDMyOCw1MC41NjE3NzczIEMzMjcuOTg2MTQzLDUwLjc5NTU4MTggMzI3Ljg4OTE0MSw1MS4wMjU0NDU3IDMyNy43MDg5OTQsNTEuMjA0MDgzMSBMMzI3LjY1NzEsNTEuMjQ3OTgwMyBMMzE3LjEwODAxMiw2MS43MDk3MTQzIEMzMTYuNzE3Njk0LDYyLjA5Njc2MTkgMzE2LjA4NDg2NSw2Mi4wOTY3NjE5IDMxNS42OTQ1NDcsNjEuNzA5NzE0MyBDMzE1LjMwNDIzLDYxLjMyMjY2NjggMzE1LjMwNDIzLDYwLjY5NTEzODcgMzE1LjY5NDU0Nyw2MC4zMDgwOTExIEwzMjQuNzAyNjY2LDUxLjM3Mzg0OTYgTDI5Mi45OTk0Nyw1MS4zNzQ2MjkxIEMyOTIuNDQ3NDc4LDUxLjM3NDYyOTEgMjkyLDUwLjkzMDg5OTcgMjkyLDUwLjM4MzUzMTggQzI5Miw0OS44MzYxNjM5IDI5Mi40NDc0NzgsNDkuMzkyNDM0NSAyOTIuOTk5NDcsNDkuMzkyNDM0NSBMMzI0LjQ2Nzc5LDQ5LjM5MTY1NTEgTDMxNS42OTQ1NDcsNDAuNjkxOTA4OSBDMzE1LjMwNDIzLDQwLjMwNDg2MTMgMzE1LjMwNDIzLDM5LjY3NzMzMzIgMzE1LjY5NDU0NywzOS4yOTAyODU3IEMzMTYuMDg0ODY1LDM4LjkwMzIzODEgMzE2LjcxNzY5NCwzOC45MDMyMzgxIDMxNy4xMDgwMTIsMzkuMjkwMjg1NyBaIE0zMjcuMTE1MzU3LDUwLjM4MjY5MyBMMzE2LjQwMTI3OSw2MS4wMDg5MDI3IEwzMjcuMDAyMTUxLDUwLjUwMDIwNDYgTDMyNy4wMDIyNTIsNTAuNDk2MzcxOSBMMzI2Ljk0MzE0Miw1MC40NDI1ODUgTDMyNi44ODI3MzcsNTAuMzgyNjkzIEwzMjcuMTE1MzU3LDUwLjM4MjY5MyBaXCIgaWQ9XCJsZWZ0LWFycm93XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMxMC4wMDAwMDAsIDUwLjUwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMzEwLjAwMDAwMCwgLTUwLjUwMDAwMCkgXCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICA8L3N2Zz5gO1xuICBkb3duLmlubmVySFRNTCA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgPHN2ZyBjbGFzcz1cImFyciBkb3duXCIgd2lkdGg9XCIzNnB4XCIgaGVpZ2h0PVwiMzZweFwiIHZpZXdCb3g9XCIwIC02LjUgMzYgMzZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICBcbiAgICAgIDx0aXRsZT5kb3duLWFycm93PC90aXRsZT5cbiAgICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgICAgPGcgaWQ9XCJpY29uc1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgPGcgaWQ9XCJkb3duXCIgY2xhc3M9XCJhcnJvd3MgYXJyIGRvd25cIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM0Mi4wMDAwMDAsIC0xNTkuMDAwMDAwKVwiIGZpbGw9XCIjMjUyNTI4XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiPlxuICAgICAgICAgICAgICA8ZyBpZD1cInNxdWFyZS1maWxsZWRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTAuMDAwMDAwLCAxMjAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJhcnJvd3MgYXJyIGRvd25cIiBkPVwiTTMxNy4xMDgwMTIsMzkuMjkwMjg1NyBMMzI3LjY0OTgwNCw0OS43NDE3MDQzIEwzMjcuNzA4OTk0LDQ5Ljc5NTkxNjkgQzMyNy44ODkxNDEsNDkuOTc0NTU0MyAzMjcuOTg2MTQzLDUwLjIwNDQxODIgMzI4LDUwLjQzODIyMjcgTDMyOCw1MC41NjE3NzczIEMzMjcuOTg2MTQzLDUwLjc5NTU4MTggMzI3Ljg4OTE0MSw1MS4wMjU0NDU3IDMyNy43MDg5OTQsNTEuMjA0MDgzMSBMMzI3LjY1NzEsNTEuMjQ3OTgwMyBMMzE3LjEwODAxMiw2MS43MDk3MTQzIEMzMTYuNzE3Njk0LDYyLjA5Njc2MTkgMzE2LjA4NDg2NSw2Mi4wOTY3NjE5IDMxNS42OTQ1NDcsNjEuNzA5NzE0MyBDMzE1LjMwNDIzLDYxLjMyMjY2NjggMzE1LjMwNDIzLDYwLjY5NTEzODcgMzE1LjY5NDU0Nyw2MC4zMDgwOTExIEwzMjQuNzAyNjY2LDUxLjM3Mzg0OTYgTDI5Mi45OTk0Nyw1MS4zNzQ2MjkxIEMyOTIuNDQ3NDc4LDUxLjM3NDYyOTEgMjkyLDUwLjkzMDg5OTcgMjkyLDUwLjM4MzUzMTggQzI5Miw0OS44MzYxNjM5IDI5Mi40NDc0NzgsNDkuMzkyNDM0NSAyOTIuOTk5NDcsNDkuMzkyNDM0NSBMMzI0LjQ2Nzc5LDQ5LjM5MTY1NTEgTDMxNS42OTQ1NDcsNDAuNjkxOTA4OSBDMzE1LjMwNDIzLDQwLjMwNDg2MTMgMzE1LjMwNDIzLDM5LjY3NzMzMzIgMzE1LjY5NDU0NywzOS4yOTAyODU3IEMzMTYuMDg0ODY1LDM4LjkwMzIzODEgMzE2LjcxNzY5NCwzOC45MDMyMzgxIDMxNy4xMDgwMTIsMzkuMjkwMjg1NyBaIE0zMjcuMTE1MzU3LDUwLjM4MjY5MyBMMzE2LjQwMTI3OSw2MS4wMDg5MDI3IEwzMjcuMDAyMTUxLDUwLjUwMDIwNDYgTDMyNy4wMDIyNTIsNTAuNDk2MzcxOSBMMzI2Ljk0MzE0Miw1MC40NDI1ODUgTDMyNi44ODI3MzcsNTAuMzgyNjkzIEwzMjcuMTE1MzU3LDUwLjM4MjY5MyBaXCIgaWQ9XCJsZWZ0LWFycm93XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMxMC4wMDAwMDAsIDUwLjUwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMzEwLjAwMDAwMCwgLTUwLjUwMDAwMCkgXCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICA8L3N2Zz5gO1xuICBsZWZ0LmlubmVySFRNTCA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgPHN2ZyBjbGFzcz1cImFyciBsZWZ0XCIgd2lkdGg9XCIzNnB4XCIgaGVpZ2h0PVwiMzZweFwiIHZpZXdCb3g9XCIwIC02LjUgMzYgMzZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICBcbiAgICAgIDx0aXRsZT5sZWZ0LWFycm93PC90aXRsZT5cbiAgICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgICAgPGcgaWQ9XCJpY29uc1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgPGcgaWQ9XCJsZWZ0XCIgY2xhc3M9XCJhcnJvd3MgYXJyIGxlZnRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM0Mi4wMDAwMDAsIC0xNTkuMDAwMDAwKVwiIGZpbGw9XCIjMjUyNTI4XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiPlxuICAgICAgICAgICAgICA8ZyBpZD1cInNxdWFyZS1maWxsZWRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTAuMDAwMDAwLCAxMjAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJhcnJvd3MgYXJyIGxlZnRcIiBkPVwiTTMxNy4xMDgwMTIsMzkuMjkwMjg1NyBMMzI3LjY0OTgwNCw0OS43NDE3MDQzIEwzMjcuNzA4OTk0LDQ5Ljc5NTkxNjkgQzMyNy44ODkxNDEsNDkuOTc0NTU0MyAzMjcuOTg2MTQzLDUwLjIwNDQxODIgMzI4LDUwLjQzODIyMjcgTDMyOCw1MC41NjE3NzczIEMzMjcuOTg2MTQzLDUwLjc5NTU4MTggMzI3Ljg4OTE0MSw1MS4wMjU0NDU3IDMyNy43MDg5OTQsNTEuMjA0MDgzMSBMMzI3LjY1NzEsNTEuMjQ3OTgwMyBMMzE3LjEwODAxMiw2MS43MDk3MTQzIEMzMTYuNzE3Njk0LDYyLjA5Njc2MTkgMzE2LjA4NDg2NSw2Mi4wOTY3NjE5IDMxNS42OTQ1NDcsNjEuNzA5NzE0MyBDMzE1LjMwNDIzLDYxLjMyMjY2NjggMzE1LjMwNDIzLDYwLjY5NTEzODcgMzE1LjY5NDU0Nyw2MC4zMDgwOTExIEwzMjQuNzAyNjY2LDUxLjM3Mzg0OTYgTDI5Mi45OTk0Nyw1MS4zNzQ2MjkxIEMyOTIuNDQ3NDc4LDUxLjM3NDYyOTEgMjkyLDUwLjkzMDg5OTcgMjkyLDUwLjM4MzUzMTggQzI5Miw0OS44MzYxNjM5IDI5Mi40NDc0NzgsNDkuMzkyNDM0NSAyOTIuOTk5NDcsNDkuMzkyNDM0NSBMMzI0LjQ2Nzc5LDQ5LjM5MTY1NTEgTDMxNS42OTQ1NDcsNDAuNjkxOTA4OSBDMzE1LjMwNDIzLDQwLjMwNDg2MTMgMzE1LjMwNDIzLDM5LjY3NzMzMzIgMzE1LjY5NDU0NywzOS4yOTAyODU3IEMzMTYuMDg0ODY1LDM4LjkwMzIzODEgMzE2LjcxNzY5NCwzOC45MDMyMzgxIDMxNy4xMDgwMTIsMzkuMjkwMjg1NyBaIE0zMjcuMTE1MzU3LDUwLjM4MjY5MyBMMzE2LjQwMTI3OSw2MS4wMDg5MDI3IEwzMjcuMDAyMTUxLDUwLjUwMDIwNDYgTDMyNy4wMDIyNTIsNTAuNDk2MzcxOSBMMzI2Ljk0MzE0Miw1MC40NDI1ODUgTDMyNi44ODI3MzcsNTAuMzgyNjkzIEwzMjcuMTE1MzU3LDUwLjM4MjY5MyBaXCIgaWQ9XCJsZWZ0LWFycm93XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMxMC4wMDAwMDAsIDUwLjUwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMzEwLjAwMDAwMCwgLTUwLjUwMDAwMCkgXCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICA8L3N2Zz5gO1xuICByaWdodC5pbm5lckhUTUwgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gIDxzdmcgY2xhc3M9XCJhcnIgcmlnaHRcIiB3aWR0aD1cIjM2cHhcIiBoZWlnaHQ9XCIzNnB4XCIgdmlld0JveD1cIjAgLTYuNSAzNiAzNlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gIFxuICAgICAgPHRpdGxlPnJpZ2h0LWFycm93PC90aXRsZT5cbiAgICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgICAgPGcgaWQ9XCJpY29uc1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgPGcgaWQ9XCJyaWdodFwiIGNsYXNzPVwiYXJyb3dzIGFyciByaWdodFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzQyLjAwMDAwMCwgLTE1OS4wMDAwMDApXCIgZmlsbD1cIiMyNTI1MjhcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCI+XG4gICAgICAgICAgICAgIDxnIGlkPVwic3F1YXJlLWZpbGxlZFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MC4wMDAwMDAsIDEyMC4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImFycm93cyBhcnIgcmlnaHRcIiBkPVwiTTMxNy4xMDgwMTIsMzkuMjkwMjg1NyBMMzI3LjY0OTgwNCw0OS43NDE3MDQzIEwzMjcuNzA4OTk0LDQ5Ljc5NTkxNjkgQzMyNy44ODkxNDEsNDkuOTc0NTU0MyAzMjcuOTg2MTQzLDUwLjIwNDQxODIgMzI4LDUwLjQzODIyMjcgTDMyOCw1MC41NjE3NzczIEMzMjcuOTg2MTQzLDUwLjc5NTU4MTggMzI3Ljg4OTE0MSw1MS4wMjU0NDU3IDMyNy43MDg5OTQsNTEuMjA0MDgzMSBMMzI3LjY1NzEsNTEuMjQ3OTgwMyBMMzE3LjEwODAxMiw2MS43MDk3MTQzIEMzMTYuNzE3Njk0LDYyLjA5Njc2MTkgMzE2LjA4NDg2NSw2Mi4wOTY3NjE5IDMxNS42OTQ1NDcsNjEuNzA5NzE0MyBDMzE1LjMwNDIzLDYxLjMyMjY2NjggMzE1LjMwNDIzLDYwLjY5NTEzODcgMzE1LjY5NDU0Nyw2MC4zMDgwOTExIEwzMjQuNzAyNjY2LDUxLjM3Mzg0OTYgTDI5Mi45OTk0Nyw1MS4zNzQ2MjkxIEMyOTIuNDQ3NDc4LDUxLjM3NDYyOTEgMjkyLDUwLjkzMDg5OTcgMjkyLDUwLjM4MzUzMTggQzI5Miw0OS44MzYxNjM5IDI5Mi40NDc0NzgsNDkuMzkyNDM0NSAyOTIuOTk5NDcsNDkuMzkyNDM0NSBMMzI0LjQ2Nzc5LDQ5LjM5MTY1NTEgTDMxNS42OTQ1NDcsNDAuNjkxOTA4OSBDMzE1LjMwNDIzLDQwLjMwNDg2MTMgMzE1LjMwNDIzLDM5LjY3NzMzMzIgMzE1LjY5NDU0NywzOS4yOTAyODU3IEMzMTYuMDg0ODY1LDM4LjkwMzIzODEgMzE2LjcxNzY5NCwzOC45MDMyMzgxIDMxNy4xMDgwMTIsMzkuMjkwMjg1NyBaIE0zMjcuMTE1MzU3LDUwLjM4MjY5MyBMMzE2LjQwMTI3OSw2MS4wMDg5MDI3IEwzMjcuMDAyMTUxLDUwLjUwMDIwNDYgTDMyNy4wMDIyNTIsNTAuNDk2MzcxOSBMMzI2Ljk0MzE0Miw1MC40NDI1ODUgTDMyNi44ODI3MzcsNTAuMzgyNjkzIEwzMjcuMTE1MzU3LDUwLjM4MjY5MyBaXCIgaWQ9XCJsZWZ0LWFycm93XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMxMC4wMDAwMDAsIDUwLjUwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMzEwLjAwMDAwMCwgLTUwLjUwMDAwMCkgXCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICA8L3N2Zz5gO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4vc2NyaXB0L3JlbmRlcic7XG5pbXBvcnQgJy4vc2NyaXB0L2ludGVyYWN0aW9uJztcbmltcG9ydCAnLi9zY3JpcHQva2V5LWludGVyYWN0aW9uJztcblxucmVxdWlyZSgnbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=