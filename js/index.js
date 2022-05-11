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
  keys[53].setAttribute('key', '/');
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
        txtField.value = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addValueToTxt)(
          txtField,
          '    ',
        );
        txtField.selectionStart = ind;
        txtField.selectionEnd = ind;
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
  keyboardKeys.childNodes[3].childNodes[11].setAttribute('keyname', 'Slash');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUyxFQUFFLE9BQU87QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTLEVBQUUsV0FBVyxFQUFFLE9BQU87QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFlRTs7Ozs7Ozs7Ozs7OztBQzlQZ0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHVEQUFjOztBQUVoQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNLHFEQUFZO0FBQ2xCO0FBQ0EsUUFBUSxxREFBWTtBQUNwQixRQUFRO0FBQ1IsUUFBUSxxREFBWTtBQUNwQjtBQUNBLE1BQU07QUFDTixNQUFNLHFEQUFZO0FBQ2xCO0FBQ0EsUUFBUSxxREFBWTtBQUNwQixRQUFRO0FBQ1IsUUFBUSxxREFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IseUJBQXlCLHNEQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IseUJBQXlCLHNEQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IseUJBQXlCLHNEQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IseUJBQXlCLHNEQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EseUJBQXlCLDhDQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EseUJBQXlCLDhDQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6TWlCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLHlCQUF5QixzREFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBWTtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9EQUFXLGNBQWMsb0RBQVc7QUFDN0MsWUFBWSxvREFBVyxlQUFlLG9EQUFXO0FBQ2pEO0FBQ0EsUUFBUSx1REFBYztBQUN0QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLHFEQUFZO0FBQ2xCO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR2lCOztBQUVsQjtBQUNBLGlFQUFlLE9BQU8sRUFBQzs7QUFFdkI7QUFDQSxFQUFFLGlEQUFROztBQUVWO0FBQ0Esb0JBQW9CLGlEQUFRO0FBQzVCOztBQUVBLGtCQUFrQixpREFBUTtBQUMxQjs7QUFFQSxtQkFBbUIsaURBQVE7QUFDM0I7QUFDQTs7QUFFQSxtQ0FBbUMsaURBQVE7QUFDM0M7QUFDQTs7QUFFQSxrQkFBa0IsaURBQVE7QUFDMUIsYUFBYSxvREFBVztBQUN4QjtBQUNBLGtDQUFrQyxHQUFHOztBQUVyQztBQUNBOztBQUVBLHVCQUF1QixpREFBUTtBQUMvQix5QkFBeUIsaURBQVE7QUFDakM7O0FBRUE7O0FBRUE7O0FBRUEsa0JBQWtCLGtCQUFrQjtBQUNwQywrQ0FBK0MsTUFBTTtBQUNyRDs7QUFFQSxrQkFBa0Isc0RBQXNEO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7VUNoS0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNKO0FBQ0s7QUFDSTs7QUFFbEMsbUJBQU8sQ0FBQywrRUFBNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc3MvLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzP2ZiNTciLCJ3ZWJwYWNrOi8vcnNzLy4vc3JjL21haW4vc3R5bGVzL2luZGV4LnNjc3M/MzdlNiIsIndlYnBhY2s6Ly9yc3MvLi9zcmMvbWFpbi9zY3JpcHQvaGVscGVyLmpzIiwid2VicGFjazovL3Jzcy8uL3NyYy9tYWluL3NjcmlwdC9pbnRlcmFjdGlvbi5qcyIsIndlYnBhY2s6Ly9yc3MvLi9zcmMvbWFpbi9zY3JpcHQva2V5LWludGVyYWN0aW9uLmpzIiwid2VicGFjazovL3Jzcy8uL3NyYy9tYWluL3NjcmlwdC9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jzcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNzLy4vc3JjL21haW4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZnVuY3Rpb24gc2V0QXRyc2ZvcktleXMoKSB7XG4gIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5cycpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykpIHtcbiAgICAgIGtleXNbaV0uc2V0QXR0cmlidXRlKFxuICAgICAgICAnVXBwZXJDYXNlTmFtZUVuJyxcbiAgICAgICAga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykudG9VcHBlckNhc2UoKSxcbiAgICAgICk7XG4gICAgICBrZXlzW2ldLnNldEF0dHJpYnV0ZShcbiAgICAgICAgJ1VwcGVyQ2FzZU5hbWVSdScsXG4gICAgICAgIGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpLnRvVXBwZXJDYXNlKCksXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBrZXlzWzFdLnNldEF0dHJpYnV0ZSgna2V5JywgJzEnKTtcbiAga2V5c1syXS5zZXRBdHRyaWJ1dGUoJ2tleScsICcyJyk7XG4gIGtleXNbM10uc2V0QXR0cmlidXRlKCdrZXknLCAnMycpO1xuICBrZXlzWzRdLnNldEF0dHJpYnV0ZSgna2V5JywgJzQnKTtcbiAga2V5c1s1XS5zZXRBdHRyaWJ1dGUoJ2tleScsICc1Jyk7XG4gIGtleXNbNl0uc2V0QXR0cmlidXRlKCdrZXknLCAnNicpO1xuICBrZXlzWzddLnNldEF0dHJpYnV0ZSgna2V5JywgJzcnKTtcbiAga2V5c1s4XS5zZXRBdHRyaWJ1dGUoJ2tleScsICc4Jyk7XG4gIGtleXNbOV0uc2V0QXR0cmlidXRlKCdrZXknLCAnOScpO1xuICBrZXlzWzEwXS5zZXRBdHRyaWJ1dGUoJ2tleScsICcwJyk7XG4gIGtleXNbMTFdLnNldEF0dHJpYnV0ZSgna2V5JywgJy0nKTtcbiAga2V5c1sxMl0uc2V0QXR0cmlidXRlKCdrZXknLCAnPScpO1xuICBrZXlzWzBdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ34nKTtcbiAga2V5c1sxXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICchJyk7XG4gIGtleXNbMl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnQCcpO1xuICBrZXlzWzNdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJyMnKTtcbiAga2V5c1s0XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICckJyk7XG4gIGtleXNbNV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnJScpO1xuICBrZXlzWzZdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ14nKTtcbiAga2V5c1s3XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICcmJyk7XG4gIGtleXNbOF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnKicpO1xuICBrZXlzWzldLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJygnKTtcbiAga2V5c1sxMF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnKScpO1xuICBrZXlzWzExXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICdfJyk7XG4gIGtleXNbMTJdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJysnKTtcbiAga2V5c1sxXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICchJyk7XG4gIGtleXNbMl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnXCInKTtcbiAga2V5c1szXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICfihJYnKTtcbiAga2V5c1s0XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICc7Jyk7XG4gIGtleXNbNV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnJScpO1xuICBrZXlzWzZdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJzonKTtcbiAga2V5c1s3XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICc/Jyk7XG4gIGtleXNbOF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnKicpO1xuICBrZXlzWzldLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJygnKTtcbiAga2V5c1sxMF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnKScpO1xuICBrZXlzWzExXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICdfJyk7XG4gIGtleXNbMTJdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJysnKTtcbiAga2V5c1syNV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAneycpO1xuICBrZXlzWzI2XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICd9Jyk7XG4gIGtleXNbMjddLnNldEF0dHJpYnV0ZSgna2V5JywgJ1xcXFwnKTtcbiAga2V5c1syN10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnfCcpO1xuICBrZXlzWzI3XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICd8Jyk7XG4gIGtleXNbMzldLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJzonKTtcbiAga2V5c1s0MF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnXCInKTtcbiAga2V5c1s1MV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnPCcpO1xuICBrZXlzWzUyXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICc+Jyk7XG4gIGtleXNbNTNdLnNldEF0dHJpYnV0ZSgna2V5JywgJy8nKTtcbn1cblxuZnVuY3Rpb24gcm1UeHQodHh0VmFsdWUsIGluZDEsIGluZDIpIHtcbiAgY29uc3Qgc3RhcnRTdHIgPSB0eHRWYWx1ZS52YWx1ZS5zbGljZSgwLCBpbmQxKTtcbiAgY29uc3QgZW5kU3RyID0gdHh0VmFsdWUudmFsdWUuc2xpY2UoaW5kMik7XG4gIHJldHVybiBgJHtzdGFydFN0cn0ke2VuZFN0cn1gO1xufVxuXG5mdW5jdGlvbiBhZGRWYWx1ZVRvVHh0KHR4dFZhbHVlLCBhZGRpdGlvbmFsKSB7XG4gIGNvbnN0IHN0YXJ0U3RyID0gdHh0VmFsdWUudmFsdWUuc2xpY2UoMCwgdHh0VmFsdWUuc2VsZWN0aW9uRW5kKTtcbiAgY29uc3QgZW5kU3RyID0gdHh0VmFsdWUudmFsdWUuc2xpY2UodHh0VmFsdWUuc2VsZWN0aW9uRW5kKTtcbiAgcmV0dXJuIGAke3N0YXJ0U3RyfSR7YWRkaXRpb25hbH0ke2VuZFN0cn1gO1xufVxuXG5mdW5jdGlvbiBnZXRVcHBlckNhc2Uoa2V5KSB7XG4gIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5cycpO1xuICBpZiAoa2V5ID09PSAnU2hpZnRMZWZ0JyB8fCBrZXkgPT09ICdTaGlmdExlZnQnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpID09PSAnZW4nKSB7XG4gICAgICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKSB8fCBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5JykpIHtcbiAgICAgICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKSB8fCBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5JykpIHtcbiAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1Jyk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnKSA9PT0gJ2VuJykge1xuICAgICAgICBpZiAoIWtleXNbaV0uZ2V0QXR0cmlidXRlKCdvbmx5LXNoaWZ0JykpIHtcbiAgICAgICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykgfHwga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleScpKSB7XG4gICAgICAgICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWtleXNbaV0uZ2V0QXR0cmlidXRlKCdvbmx5LXNoaWZ0JykgfHwga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ29ubHktc2hpZnQnKSA9PT0gJ2VuJykge1xuICAgICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1JykgfHwga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleScpKSB7XG4gICAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGdldExvd2VyQ2FzZSgpIHtcbiAgY29uc3Qga2V5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXlzJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5JykpIHtcbiAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleScpO1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpID09PSAnZW4nKSB7XG4gICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykpIHtcbiAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpKSB7XG4gICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gdG9nZ2xlQWN0aXZlKGVsKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0gZWxzZSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNoZWNrQWN0aXZlKGVsKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gdG9nZ2xlTGFuZ3VhZ2UoKSB7XG4gIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5cycpO1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpID09PSAnZW4nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykpIHtcbiAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScsICdydScpO1xuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpKSB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnLCAnZW4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbCh0YWcsIGNsYXNzTmFtZSkge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICByZXR1cm4gZWw7XG59XG5cbmNvbnN0IGNyZWF0ZUtleXMgPSAoYXJyKSA9PiB7XG4gIGxldCBpID0gMDtcblxuICBjb25zdCByb3cgPSBjcmVhdGVFbCgnZGl2JywgJ3JvdycpO1xuXG4gIHdoaWxlIChpIDwgYXJyLmxlbmd0aCkge1xuICAgIGNvbnN0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXlzJyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyW2ldKSkge1xuICAgICAga2V5LnNldEF0dHJpYnV0ZSgna2V5RW4nLCBhcnJbaV1bMF0pO1xuICAgICAga2V5LnNldEF0dHJpYnV0ZSgna2V5UnUnLCBhcnJbaV1bMV0pO1xuICAgICAga2V5LmlubmVySFRNTCA9IGtleS5nZXRBdHRyaWJ1dGUoJ2tleUVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleS5pbm5lckhUTUwgPSBhcnJbaV07XG4gICAgfVxuICAgIHJvdy5hcHBlbmRDaGlsZChrZXkpO1xuICAgIGkgKz0gMTtcbiAgfVxuXG4gIHJldHVybiByb3c7XG59O1xuXG5mdW5jdGlvbiBpc01hY2ludG9zaCgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKCdNYWMnKSA+IC0xO1xufVxuXG5mdW5jdGlvbiBmaWxsS2V5cyhtYXApIHtcbiAgY29uc3Qgb2MgPSBpc01hY2ludG9zaCgpID8gJ01hYycgOiAnV2luJztcblxuICBtYXAuc2V0KCdyb3cxJywgY3JlYXRlS2V5cyhbWydgJywgJ9GRJ10sIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDAsICctJywgJz0nLCAnQmFja3NwYWNlJ10pKTtcbiAgbWFwLnNldChcbiAgICAncm93MicsXG4gICAgY3JlYXRlS2V5cyhbJ1RhYicsXG4gICAgICBbJ3EnLCAn0LknXSxcbiAgICAgIFsndycsICfRhiddLFxuICAgICAgWydlJywgJ9GDJ10sXG4gICAgICBbJ3InLCAn0LonXSxcbiAgICAgIFsndCcsICfQtSddLFxuICAgICAgWyd5JywgJ9C9J10sXG4gICAgICBbJ3UnLCAn0LMnXSxcbiAgICAgIFsnaScsICfRiCddLFxuICAgICAgWydvJywgJ9GJJ10sXG4gICAgICBbJ3AnLCAn0LcnXSxcbiAgICAgIFsnWycsICfRhSddLFxuICAgICAgWyddJywgJ9GKJ10sXG4gICAgICAnXFxcXCcsXG4gICAgICAnREVMJyxcbiAgICBdKSxcbiAgKTtcbiAgbWFwLnNldChcbiAgICAncm93MycsXG4gICAgY3JlYXRlS2V5cyhbXG4gICAgICAnQ2FwcyBMb2NrJyxcbiAgICAgIFsnYScsICfRhCddLFxuICAgICAgWydzJywgJ9GLJ10sXG4gICAgICBbJ2QnLCAn0LInXSxcbiAgICAgIFsnZicsICfQsCddLFxuICAgICAgWydnJywgJ9C/J10sXG4gICAgICBbJ2gnLCAn0YAnXSxcbiAgICAgIFsnaicsICfQviddLFxuICAgICAgWydrJywgJ9C7J10sXG4gICAgICBbJ2wnLCAn0LQnXSxcbiAgICAgIFsnOycsICfQtiddLFxuICAgICAgW1wiJ1wiLCAn0Y0nXSxcbiAgICAgICdFbnRlcicsXG4gICAgXSksXG4gICk7XG4gIG1hcC5zZXQoXG4gICAgJ3JvdzQnLFxuICAgIGNyZWF0ZUtleXMoW1xuICAgICAgJ1NoaWZ0JyxcbiAgICAgICcvJyxcbiAgICAgIFsneicsICfRjyddLFxuICAgICAgWyd4JywgJ9GHJ10sXG4gICAgICBbJ2MnLCAn0YEnXSxcbiAgICAgIFsndicsICfQvCddLFxuICAgICAgWydiJywgJ9C4J10sXG4gICAgICBbJ24nLCAn0YInXSxcbiAgICAgIFsnbScsICfRjCddLFxuICAgICAgWycuJywgJ9CxJ10sXG4gICAgICBbJywnLCAn0Y4nXSxcbiAgICAgICcvJyxcbiAgICAgICcnLFxuICAgICAgJ1NoaWZ0JyxcbiAgICBdKSxcbiAgKTtcbiAgbWFwLnNldChcbiAgICAncm93NScsXG4gICAgY3JlYXRlS2V5cyhbJ0N0cmwnLCBvYywgJ0FsdCcsICcnLCAnQWx0JywgJ0N0cmwnLCAnJywgJycsICcnXSksXG4gICk7XG59XG5cbmV4cG9ydCB7XG4gIHNldEF0cnNmb3JLZXlzLFxuICBybVR4dCxcbiAgdG9nZ2xlTGFuZ3VhZ2UsXG4gIGNoZWNrQWN0aXZlLFxuICB0b2dnbGVBY3RpdmUsXG4gIGdldExvd2VyQ2FzZSxcbiAgZ2V0VXBwZXJDYXNlLFxuICBjcmVhdGVFbCxcbiAgY3JlYXRlS2V5cyxcbiAgZmlsbEtleXMsXG4gIGlzTWFjaW50b3NoLFxuICBhZGRWYWx1ZVRvVHh0LFxufTtcbiIsImltcG9ydCB7XG4gIHNldEF0cnNmb3JLZXlzLFxuICBybVR4dCxcbiAgdG9nZ2xlQWN0aXZlLFxuICBnZXRMb3dlckNhc2UsXG4gIGdldFVwcGVyQ2FzZSxcbiAgYWRkVmFsdWVUb1R4dCxcbn0gZnJvbSAnLi9oZWxwZXInO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgY29uc3Qga2V5Qm9hcmRXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkX3dyYXBwJyk7XG4gIGNvbnN0IHR4dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtZmllbGQnKTtcbiAgY29uc3Qga2V5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXlzJyk7XG4gIGxldCBmb2N1cyA9IGZhbHNlO1xuICBsZXQgbGFuZ3VhZ2UgPSAnZW4nO1xuXG4gIHNldEF0cnNmb3JLZXlzKCk7XG5cbiAgY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BhY2Vfa2V5Jyk7XG4gIHNwYWNlLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdTcGFjZScpO1xuXG4gIGNvbnN0IGNhcHNMb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcHNfbG9ja19rZXknKTtcbiAgY2Fwc0xvY2suc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0NhcHNMb2NrJyk7XG5cbiAgY29uc3QgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYl9rZXknKTtcbiAgdGFiLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdUYWInKTtcblxuICBjb25zdCBlbnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRlcl9rZXknKTtcbiAgZW50ZXIuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0VudGVyJyk7XG5cbiAgY29uc3QgYmFja3NwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tzcGFjZV9rZXknKTtcbiAgYmFja3NwYWNlLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdCYWNrc3BhY2UnKTtcblxuICBjb25zdCBzaGlmdExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdF9zaGlmdCcpO1xuICBjb25zdCBzaGlmdFJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0X3NoaWZ0Jyk7XG4gIHNoaWZ0TGVmdC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnU2hpZnRMZWZ0Jyk7XG4gIHNoaWZ0UmlnaHQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ1NoaWZ0UmlnaHQnKTtcblxuICBjb25zdCBjdHJsTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdHJsX2xlZnQnKTtcbiAgY29uc3QgY3RybFJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN0cmxfcmlnaHQnKTtcbiAgY3RybExlZnQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0NvbnRyb2xMZWZ0Jyk7XG4gIGN0cmxSaWdodC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQ29udHJvbFJpZ2h0Jyk7XG5cbiAgY29uc3QgYWx0TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbHRfbGVmdCcpO1xuICBjb25zdCBhbHRSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbHRfcmlnaHQnKTtcbiAgYWx0TGVmdC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQWx0TGVmdCcpO1xuICBhbHRSaWdodC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQWx0UmlnaHQnKTtcblxuICBjb25zdCBkZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsX2tleScpO1xuICBkZWwuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0RlbGV0ZScpO1xuXG4gIGNvbnN0IHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwX2tleScpO1xuICBjb25zdCBkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvd25fa2V5Jyk7XG4gIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdF9rZXknKTtcbiAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHRfa2V5Jyk7XG5cbiAgdXAuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0Fycm93VXAnKTtcbiAgdXAuY2xhc3NMaXN0LmFkZCgnYXJyJyk7XG4gIGRvd24uc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0Fycm93RG93bicpO1xuICBkb3duLmNsYXNzTGlzdC5hZGQoJ2FycicpO1xuICBsZWZ0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBcnJvd0xlZnQnKTtcbiAgbGVmdC5jbGFzc0xpc3QuYWRkKCdhcnInKTtcbiAgcmlnaHQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0Fycm93UmlnaHQnKTtcbiAgcmlnaHQuY2xhc3NMaXN0LmFkZCgnYXJyJyk7XG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnKSAmJiBsYW5ndWFnZSAhPT0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1JykpIHtcbiAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFuZ3VhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlLWxhbmd1YWdlJyk7XG4gIH1cblxuICB0eHRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICBpZiAoIWZvY3VzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZm9jdXMgPSB0cnVlO1xuICAgICAgfSwgMjAwKTtcbiAgICB9XG4gIH0pO1xuXG4gIHR4dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgaWYgKGZvY3VzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZm9jdXMgPSBmYWxzZTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfVxuICB9KTtcblxuICBrZXlCb2FyZFdyYXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGxldCBrZXluYW1lO1xuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2tleU5hbWUnKSkge1xuICAgICAga2V5bmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgna2V5TmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXluYW1lID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGtleW5hbWUgPT09ICdTaGlmdExlZnQnIHx8IGtleW5hbWUgPT09ICdTaGlmdFJpZ2h0Jykge1xuICAgICAgdG9nZ2xlQWN0aXZlKGUudGFyZ2V0KTtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGdldFVwcGVyQ2FzZShrZXlzLCBrZXluYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdldExvd2VyQ2FzZShrZXlzKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleW5hbWUgPT09ICdDYXBzTG9jaycpIHtcbiAgICAgIHRvZ2dsZUFjdGl2ZShlLnRhcmdldCk7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBnZXRVcHBlckNhc2Uoa2V5cywga2V5bmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRMb3dlckNhc2Uoa2V5cyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmb2N1cykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHR4dEZpZWxkLmZvY3VzKCk7XG4gICAgICB9LCAyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FycicpKSB7XG4gICAgICBpZiAoIWZvY3VzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xlZnQnKSkge1xuICAgICAgICBpZiAodHh0RmllbGQuc2VsZWN0aW9uU3RhcnQgPiAwKSB7XG4gICAgICAgICAgY29uc3QgaW5kID0gdHh0RmllbGQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgdHh0RmllbGQuc2VsZWN0aW9uU3RhcnQgPSBpbmQgLSAxO1xuICAgICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvbkVuZCA9IGluZCAtIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyaWdodCcpKSB7XG4gICAgICAgIGNvbnN0IGluZCA9IHR4dEZpZWxkLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICBpZiAoaW5kIDwgdHh0RmllbGQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgdHh0RmllbGQuc2VsZWN0aW9uU3RhcnQgPSBpbmQgKyAxO1xuICAgICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvbkVuZCA9IGluZCArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2tleXMnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmlubmVySFRNTDtcblxuICAgIGlmICh0YXJnZXQubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBpbmQgPSB0eHRGaWVsZC5zZWxlY3Rpb25FbmQgKyAxO1xuICAgICAgaWYgKHR4dEZpZWxkLnNlbGVjdGlvbkVuZCA+PSB0eHRGaWVsZC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdHh0RmllbGQudmFsdWUgKz0gdGFyZ2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHh0RmllbGQudmFsdWUgPSBhZGRWYWx1ZVRvVHh0KFxuICAgICAgICAgIHR4dEZpZWxkLFxuICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgKTtcbiAgICAgICAgdHh0RmllbGQuc2VsZWN0aW9uU3RhcnQgPSBpbmQ7XG4gICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvbkVuZCA9IGluZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3BhY2Vfa2V5JykpIHtcbiAgICAgIGNvbnN0IGluZCA9IHR4dEZpZWxkLnNlbGVjdGlvbkVuZCArIDE7XG4gICAgICBpZiAodHh0RmllbGQuc2VsZWN0aW9uRW5kID49IHR4dEZpZWxkLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICB0eHRGaWVsZC52YWx1ZSArPSAnICc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eHRGaWVsZC52YWx1ZSA9IGFkZFZhbHVlVG9UeHQoXG4gICAgICAgICAgdHh0RmllbGQsXG4gICAgICAgICAgJyAnLFxuICAgICAgICApO1xuICAgICAgICB0eHRGaWVsZC5zZWxlY3Rpb25TdGFydCA9IGluZDtcbiAgICAgICAgdHh0RmllbGQuc2VsZWN0aW9uRW5kID0gaW5kO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5bmFtZSA9PT0gJ1RhYicpIHtcbiAgICAgIGNvbnN0IGluZCA9IHR4dEZpZWxkLnNlbGVjdGlvbkVuZCArIDQ7XG4gICAgICBpZiAodHh0RmllbGQuc2VsZWN0aW9uRW5kID49IHR4dEZpZWxkLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICB0eHRGaWVsZC52YWx1ZSArPSAnICAgICc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eHRGaWVsZC52YWx1ZSA9IGFkZFZhbHVlVG9UeHQoXG4gICAgICAgICAgdHh0RmllbGQsXG4gICAgICAgICAgJyAgICAnLFxuICAgICAgICApO1xuICAgICAgICB0eHRGaWVsZC5zZWxlY3Rpb25TdGFydCA9IGluZDtcbiAgICAgICAgdHh0RmllbGQuc2VsZWN0aW9uRW5kID0gaW5kO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5bmFtZSA9PT0gJ0VudGVyJykge1xuICAgICAgY29uc3QgaW5kID0gdHh0RmllbGQuc2VsZWN0aW9uRW5kICsgMTtcbiAgICAgIGlmICh0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPj0gdHh0RmllbGQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHR4dEZpZWxkLnZhbHVlICs9ICdcXG4nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHh0RmllbGQudmFsdWUgPSBhZGRWYWx1ZVRvVHh0KFxuICAgICAgICAgIHR4dEZpZWxkLFxuICAgICAgICAgICdcXG4nLFxuICAgICAgICApO1xuICAgICAgICB0eHRGaWVsZC5zZWxlY3Rpb25TdGFydCA9IGluZDtcbiAgICAgICAgdHh0RmllbGQuc2VsZWN0aW9uRW5kID0gaW5kO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5bmFtZSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgIGlmICh0eHRGaWVsZC52YWx1ZS5sZW5ndGggPiAwICYmIHR4dEZpZWxkLnNlbGVjdGlvbkVuZCA+IDApIHtcbiAgICAgICAgY29uc3QgaW5kID0gdHh0RmllbGQuc2VsZWN0aW9uRW5kIC0gMTtcbiAgICAgICAgdHh0RmllbGQudmFsdWUgPSBybVR4dCh0eHRGaWVsZCwgdHh0RmllbGQuc2VsZWN0aW9uRW5kIC0gMSwgdHh0RmllbGQuc2VsZWN0aW9uRW5kKTtcbiAgICAgICAgdHh0RmllbGQuc2VsZWN0aW9uU3RhcnQgPSBpbmQ7XG4gICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvbkVuZCA9IGluZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleW5hbWUgPT09ICdEZWxldGUnKSB7XG4gICAgICBpZiAodHh0RmllbGQudmFsdWUubGVuZ3RoID4gMCAmJiB0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPCB0eHRGaWVsZC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgaW5kID0gdHh0RmllbGQuc2VsZWN0aW9uRW5kO1xuICAgICAgICB0eHRGaWVsZC52YWx1ZSA9IHJtVHh0KHR4dEZpZWxkLCBpbmQsIGluZCArIDEpO1xuICAgICAgICB0eHRGaWVsZC5zZWxlY3Rpb25TdGFydCA9IGluZDtcbiAgICAgICAgdHh0RmllbGQuc2VsZWN0aW9uRW5kID0gaW5kO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTtcbiIsImltcG9ydCB7XG4gIGNoZWNrQWN0aXZlLFxuICBnZXRVcHBlckNhc2UsXG4gIHRvZ2dsZUxhbmd1YWdlLFxuICBnZXRMb3dlckNhc2UsXG4gIGFkZFZhbHVlVG9UeHQsXG59IGZyb20gJy4vaGVscGVyJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5cycpO1xuICBjb25zdCBjdHJsTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdHJsX2xlZnQnKTtcbiAgY29uc3QgY3RybFJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN0cmxfcmlnaHQnKTtcbiAgY29uc3QgYWx0TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbHRfbGVmdCcpO1xuICBjb25zdCBhbHRSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbHRfcmlnaHQnKTtcbiAgY29uc3QgdHh0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dC1maWVsZCcpO1xuICBsZXQgZm9jdXMgPSBmYWxzZTtcblxuICB0eHRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICBpZiAoIWZvY3VzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZm9jdXMgPSB0cnVlO1xuICAgICAgfSwgMjAwKTtcbiAgICB9XG4gIH0pO1xuXG4gIHR4dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgaWYgKGZvY3VzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZm9jdXMgPSBmYWxzZTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgbGV0IGtleW5hbWU7XG4gICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgna2V5TmFtZScpKSB7XG4gICAgICBrZXluYW1lID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdrZXlOYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleW5hbWUgPSBudWxsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKFxuICAgICAgICBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnKVxuICAgICAgICB8fCBlLmNvZGUgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXluYW1lJylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXknKVxuICAgICAgKSB7XG4gICAgICAgIGtleXNbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ1RhYicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICghZm9jdXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaW5kID0gdHh0RmllbGQuc2VsZWN0aW9uRW5kICsgNDtcbiAgICAgIGlmICh0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPj0gdHh0RmllbGQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHR4dEZpZWxkLnZhbHVlICs9ICcgICAgJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR4dEZpZWxkLnZhbHVlID0gYWRkVmFsdWVUb1R4dChcbiAgICAgICAgICB0eHRGaWVsZCxcbiAgICAgICAgICAnICAgICcsXG4gICAgICAgICk7XG4gICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID0gaW5kO1xuICAgICAgICB0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPSBpbmQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ1NoaWZ0JyB8fCBlLmtleSA9PT0gJ0NhcHNMb2NrJykge1xuICAgICAgZ2V0VXBwZXJDYXNlKGtleXMsIGtleW5hbWUpO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdDb250cm9sJyB8fCBlLmtleSA9PT0gJ0FsdCcpIHtcbiAgICAgIGlmIChcbiAgICAgICAgKGNoZWNrQWN0aXZlKGN0cmxMZWZ0KSAmJiBjaGVja0FjdGl2ZShhbHRMZWZ0KSlcbiAgICAgICAgfHwgKGNoZWNrQWN0aXZlKGN0cmxSaWdodCkgJiYgY2hlY2tBY3RpdmUoYWx0UmlnaHQpKVxuICAgICAgKSB7XG4gICAgICAgIHRvZ2dsZUxhbmd1YWdlKGtleXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKVxuICAgICAgICB8fCBlLmNvZGUgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXluYW1lJylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nKVxuICAgICAgICB8fCBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5JylcbiAgICAgICkge1xuICAgICAgICBrZXlzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBrZXlzW2ldLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAga2V5c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmUnKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ1NoaWZ0JyB8fCBlLmtleSA9PT0gJ0NhcHNMb2NrJykge1xuICAgICAgZ2V0TG93ZXJDYXNlKGtleXMpO1xuICAgIH1cbiAgfSk7XG59KTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUVsLFxuICBmaWxsS2V5cyxcbiAgaXNNYWNpbnRvc2gsXG59IGZyb20gJy4vaGVscGVyJztcblxuY29uc3Qga2V5c01hcCA9IG5ldyBNYXAoKTtcbmV4cG9ydCBkZWZhdWx0IGtleXNNYXA7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBmaWxsS2V5cyhrZXlzTWFwKTtcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbCgnZGl2JywgJ2NvbnRhaW5lcicpO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAnd3JhcHBlcicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgY29uc3QgdGV4dEFyZWEgPSBjcmVhdGVFbCgndGV4dGFyZWEnLCAndGV4dC1maWVsZCcpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgdGV4dEFyZWEucGxhY2Vob2xkZXIgPSAnSGVsbG8gdGhlcmUhIFxcbkVudGVyIHlvdXIgdGhvdWdodHMuLi4nO1xuXG4gIGNvbnN0IG5vdGljZUhvd0NoYW5jZ2VMYW5ndWFnZSA9IGNyZWF0ZUVsKCdoMScsICd0aXRsZScpO1xuICBub3RpY2VIb3dDaGFuY2dlTGFuZ3VhZ2UuY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWxhbmd1YWdlX3RpdGxlJyk7XG4gIG5vdGljZUhvd0NoYW5jZ2VMYW5ndWFnZS5pbm5lckhUTUwgPSAnUHJlc3MgQ3RybCArIEFsdCB0byBjaGFuZ2UgbGFuZ3VhZ2UnO1xuXG4gIGNvbnN0IG9jVGl0bGUgPSBjcmVhdGVFbCgnaDInLCAndGl0bGUnKTtcbiAgY29uc3Qgb2MgPSBpc01hY2ludG9zaCgpID8gJ01hYyBPUycgOiAnV2luZG93cyc7XG4gIG9jVGl0bGUuY2xhc3NMaXN0LmFkZCgnb2NUaXRsZV90aXRsZScpO1xuICBvY1RpdGxlLmlubmVySFRNTCA9IGBNYWRlIGZvciAke29jfWA7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZChub3RpY2VIb3dDaGFuY2dlTGFuZ3VhZ2UpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKG9jVGl0bGUpO1xuXG4gIGNvbnN0IGtleUJvYXJkV3JhcCA9IGNyZWF0ZUVsKCdkaXYnLCAna2V5Ym9hcmRfd3JhcHAnKTtcbiAgY29uc3Qga2V5Ym9hcmRLZXlzV3IgPSBjcmVhdGVFbCgnZGl2JywgJ2tleWJvYXJkX2tleXMnKTtcbiAga2V5Qm9hcmRXcmFwLmFwcGVuZENoaWxkKGtleWJvYXJkS2V5c1dyKTtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGtleUJvYXJkV3JhcCk7XG5cbiAgY29uc3Qga2V5Ym9hcmRLZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkX2tleXMnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNNYXAuc2l6ZTsgaSArPSAxKSB7XG4gICAga2V5Ym9hcmRLZXlzLmFwcGVuZENoaWxkKGtleXNNYXAuZ2V0KGByb3cke2kgKyAxfWApKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzW2ldLnNldEF0dHJpYnV0ZSgnb25seS1zaGlmdCcsICd0cnVlJyk7XG4gIH1cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMF0uZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoJ29ubHktc2hpZnQnLCAnZW4nKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxMV0uc2V0QXR0cmlidXRlKCdvbmx5LXNoaWZ0JywgJ2VuJyk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMTJdLnNldEF0dHJpYnV0ZSgnb25seS1zaGlmdCcsICdlbicpO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzEzXS5zZXRBdHRyaWJ1dGUoJ29ubHktc2hpZnQnLCAndHJ1ZScpO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1szXS5jaGlsZE5vZGVzWzFdLnNldEF0dHJpYnV0ZSgnb25seS1zaGlmdCcsICd0cnVlJyk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMTFdLnNldEF0dHJpYnV0ZSgnb25seS1zaGlmdCcsICd0cnVlJyk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbOV0uc2V0QXR0cmlidXRlKCdvbmx5LXNoaWZ0JywgJ2VuJyk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMTBdLnNldEF0dHJpYnV0ZSgnb25seS1zaGlmdCcsICdlbicpO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzEwXS5zZXRBdHRyaWJ1dGUoJ29ubHktc2hpZnQnLCAnZW4nKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxMV0uc2V0QXR0cmlidXRlKCdvbmx5LXNoaWZ0JywgJ2VuJyk7XG5cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMF0ubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2JhY2tzcGFjZV9rZXknKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1sxXS5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ3RhYl9rZXknKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMV0ubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2RlbF9rZXknKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1syXS5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2NhcHNfbG9ja19rZXknKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMl0ubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2VudGVyX2tleScpO1xuXG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzNdLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcbiAgICAnc2hpZnRfa2V5JyxcbiAgICAnbGVmdF9zaGlmdCcsXG4gICk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzNdLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFxuICAgICdzaGlmdF9rZXknLFxuICAgICdyaWdodF9zaGlmdCcsXG4gICk7XG5cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdjdHJsX2tleScsICdjdHJsX2xlZnQnKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzJdLmNsYXNzTGlzdC5hZGQoXG4gICAgJ2FsdF9rZXknLFxuICAgICdhbHRfbGVmdCcsXG4gICk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbNF0uY2xhc3NMaXN0LmFkZChcbiAgICAnYWx0X2tleScsXG4gICAgJ2FsdF9yaWdodCcsXG4gICk7XG5cbiAgY29uc3Qgc3BhY2UgPSBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzNdO1xuICBzcGFjZS5jbGFzc0xpc3QuYWRkKCdzcGFjZV9rZXknKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzVdLmNsYXNzTGlzdC5hZGQoXG4gICAgJ2N0cmxfa2V5JyxcbiAgICAnY3RybF9yaWdodCcsXG4gICk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMTFdLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdTbGFzaCcpO1xuXG4gIGNvbnN0IHVwID0ga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbM10ubGFzdENoaWxkLnByZXZpb3VzU2libGluZztcbiAgY29uc3QgZG93biA9IGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbN107XG4gIGNvbnN0IGxlZnQgPSBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzZdO1xuICBjb25zdCByaWdodCA9IGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbOF07XG5cbiAgdXAuY2xhc3NMaXN0LmFkZCgndXBfa2V5JywgJ3VwJyk7XG4gIGRvd24uY2xhc3NMaXN0LmFkZCgnZG93bl9rZXknLCAnZG93bicpO1xuICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2xlZnRfa2V5JywgJ2xlZnQnKTtcbiAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHRfa2V5JywgJ3JpZ2h0Jyk7XG5cbiAgdXAuaW5uZXJIVE1MID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICA8c3ZnIGNsYXNzPVwiYXJyIHVwXCIgd2lkdGg9XCIzNnB4XCIgaGVpZ2h0PVwiMzZweFwiIHZpZXdCb3g9XCIwIC02LjUgMzYgMzZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICBcbiAgICAgIDx0aXRsZT51cC1hcnJvdzwvdGl0bGU+XG4gICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICAgIDxnIGlkPVwiaWNvbnNcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgIDxnIGlkPVwidXBcIiBjbGFzcz1cImFycm93cyBhcnIgdXBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM0Mi4wMDAwMDAsIC0xNTkuMDAwMDAwKVwiIGZpbGw9XCIjMjUyNTI4XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiPlxuICAgICAgICAgICAgICA8ZyBpZD1cInNxdWFyZS1maWxsZWRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTAuMDAwMDAwLCAxMjAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJhcnJvd3MgYXJyIHVwXCIgZD1cIk0zMTcuMTA4MDEyLDM5LjI5MDI4NTcgTDMyNy42NDk4MDQsNDkuNzQxNzA0MyBMMzI3LjcwODk5NCw0OS43OTU5MTY5IEMzMjcuODg5MTQxLDQ5Ljk3NDU1NDMgMzI3Ljk4NjE0Myw1MC4yMDQ0MTgyIDMyOCw1MC40MzgyMjI3IEwzMjgsNTAuNTYxNzc3MyBDMzI3Ljk4NjE0Myw1MC43OTU1ODE4IDMyNy44ODkxNDEsNTEuMDI1NDQ1NyAzMjcuNzA4OTk0LDUxLjIwNDA4MzEgTDMyNy42NTcxLDUxLjI0Nzk4MDMgTDMxNy4xMDgwMTIsNjEuNzA5NzE0MyBDMzE2LjcxNzY5NCw2Mi4wOTY3NjE5IDMxNi4wODQ4NjUsNjIuMDk2NzYxOSAzMTUuNjk0NTQ3LDYxLjcwOTcxNDMgQzMxNS4zMDQyMyw2MS4zMjI2NjY4IDMxNS4zMDQyMyw2MC42OTUxMzg3IDMxNS42OTQ1NDcsNjAuMzA4MDkxMSBMMzI0LjcwMjY2Niw1MS4zNzM4NDk2IEwyOTIuOTk5NDcsNTEuMzc0NjI5MSBDMjkyLjQ0NzQ3OCw1MS4zNzQ2MjkxIDI5Miw1MC45MzA4OTk3IDI5Miw1MC4zODM1MzE4IEMyOTIsNDkuODM2MTYzOSAyOTIuNDQ3NDc4LDQ5LjM5MjQzNDUgMjkyLjk5OTQ3LDQ5LjM5MjQzNDUgTDMyNC40Njc3OSw0OS4zOTE2NTUxIEwzMTUuNjk0NTQ3LDQwLjY5MTkwODkgQzMxNS4zMDQyMyw0MC4zMDQ4NjEzIDMxNS4zMDQyMywzOS42NzczMzMyIDMxNS42OTQ1NDcsMzkuMjkwMjg1NyBDMzE2LjA4NDg2NSwzOC45MDMyMzgxIDMxNi43MTc2OTQsMzguOTAzMjM4MSAzMTcuMTA4MDEyLDM5LjI5MDI4NTcgWiBNMzI3LjExNTM1Nyw1MC4zODI2OTMgTDMxNi40MDEyNzksNjEuMDA4OTAyNyBMMzI3LjAwMjE1MSw1MC41MDAyMDQ2IEwzMjcuMDAyMjUyLDUwLjQ5NjM3MTkgTDMyNi45NDMxNDIsNTAuNDQyNTg1IEwzMjYuODgyNzM3LDUwLjM4MjY5MyBMMzI3LjExNTM1Nyw1MC4zODI2OTMgWlwiIGlkPVwibGVmdC1hcnJvd1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTAuMDAwMDAwLCA1MC41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMxMC4wMDAwMDAsIC01MC41MDAwMDApIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgPC9zdmc+YDtcbiAgZG93bi5pbm5lckhUTUwgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gIDxzdmcgY2xhc3M9XCJhcnIgZG93blwiIHdpZHRoPVwiMzZweFwiIGhlaWdodD1cIjM2cHhcIiB2aWV3Qm94PVwiMCAtNi41IDM2IDM2XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgXG4gICAgICA8dGl0bGU+ZG93bi1hcnJvdzwvdGl0bGU+XG4gICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICAgIDxnIGlkPVwiaWNvbnNcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgIDxnIGlkPVwiZG93blwiIGNsYXNzPVwiYXJyb3dzIGFyciBkb3duXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNDIuMDAwMDAwLCAtMTU5LjAwMDAwMClcIiBmaWxsPVwiIzI1MjUyOFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJzcXVhcmUtZmlsbGVkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwLjAwMDAwMCwgMTIwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiYXJyb3dzIGFyciBkb3duXCIgZD1cIk0zMTcuMTA4MDEyLDM5LjI5MDI4NTcgTDMyNy42NDk4MDQsNDkuNzQxNzA0MyBMMzI3LjcwODk5NCw0OS43OTU5MTY5IEMzMjcuODg5MTQxLDQ5Ljk3NDU1NDMgMzI3Ljk4NjE0Myw1MC4yMDQ0MTgyIDMyOCw1MC40MzgyMjI3IEwzMjgsNTAuNTYxNzc3MyBDMzI3Ljk4NjE0Myw1MC43OTU1ODE4IDMyNy44ODkxNDEsNTEuMDI1NDQ1NyAzMjcuNzA4OTk0LDUxLjIwNDA4MzEgTDMyNy42NTcxLDUxLjI0Nzk4MDMgTDMxNy4xMDgwMTIsNjEuNzA5NzE0MyBDMzE2LjcxNzY5NCw2Mi4wOTY3NjE5IDMxNi4wODQ4NjUsNjIuMDk2NzYxOSAzMTUuNjk0NTQ3LDYxLjcwOTcxNDMgQzMxNS4zMDQyMyw2MS4zMjI2NjY4IDMxNS4zMDQyMyw2MC42OTUxMzg3IDMxNS42OTQ1NDcsNjAuMzA4MDkxMSBMMzI0LjcwMjY2Niw1MS4zNzM4NDk2IEwyOTIuOTk5NDcsNTEuMzc0NjI5MSBDMjkyLjQ0NzQ3OCw1MS4zNzQ2MjkxIDI5Miw1MC45MzA4OTk3IDI5Miw1MC4zODM1MzE4IEMyOTIsNDkuODM2MTYzOSAyOTIuNDQ3NDc4LDQ5LjM5MjQzNDUgMjkyLjk5OTQ3LDQ5LjM5MjQzNDUgTDMyNC40Njc3OSw0OS4zOTE2NTUxIEwzMTUuNjk0NTQ3LDQwLjY5MTkwODkgQzMxNS4zMDQyMyw0MC4zMDQ4NjEzIDMxNS4zMDQyMywzOS42NzczMzMyIDMxNS42OTQ1NDcsMzkuMjkwMjg1NyBDMzE2LjA4NDg2NSwzOC45MDMyMzgxIDMxNi43MTc2OTQsMzguOTAzMjM4MSAzMTcuMTA4MDEyLDM5LjI5MDI4NTcgWiBNMzI3LjExNTM1Nyw1MC4zODI2OTMgTDMxNi40MDEyNzksNjEuMDA4OTAyNyBMMzI3LjAwMjE1MSw1MC41MDAyMDQ2IEwzMjcuMDAyMjUyLDUwLjQ5NjM3MTkgTDMyNi45NDMxNDIsNTAuNDQyNTg1IEwzMjYuODgyNzM3LDUwLjM4MjY5MyBMMzI3LjExNTM1Nyw1MC4zODI2OTMgWlwiIGlkPVwibGVmdC1hcnJvd1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTAuMDAwMDAwLCA1MC41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMxMC4wMDAwMDAsIC01MC41MDAwMDApIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgPC9zdmc+YDtcbiAgbGVmdC5pbm5lckhUTUwgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gIDxzdmcgY2xhc3M9XCJhcnIgbGVmdFwiIHdpZHRoPVwiMzZweFwiIGhlaWdodD1cIjM2cHhcIiB2aWV3Qm94PVwiMCAtNi41IDM2IDM2XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgXG4gICAgICA8dGl0bGU+bGVmdC1hcnJvdzwvdGl0bGU+XG4gICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICAgIDxnIGlkPVwiaWNvbnNcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgIDxnIGlkPVwibGVmdFwiIGNsYXNzPVwiYXJyb3dzIGFyciBsZWZ0XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNDIuMDAwMDAwLCAtMTU5LjAwMDAwMClcIiBmaWxsPVwiIzI1MjUyOFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJzcXVhcmUtZmlsbGVkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwLjAwMDAwMCwgMTIwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiYXJyb3dzIGFyciBsZWZ0XCIgZD1cIk0zMTcuMTA4MDEyLDM5LjI5MDI4NTcgTDMyNy42NDk4MDQsNDkuNzQxNzA0MyBMMzI3LjcwODk5NCw0OS43OTU5MTY5IEMzMjcuODg5MTQxLDQ5Ljk3NDU1NDMgMzI3Ljk4NjE0Myw1MC4yMDQ0MTgyIDMyOCw1MC40MzgyMjI3IEwzMjgsNTAuNTYxNzc3MyBDMzI3Ljk4NjE0Myw1MC43OTU1ODE4IDMyNy44ODkxNDEsNTEuMDI1NDQ1NyAzMjcuNzA4OTk0LDUxLjIwNDA4MzEgTDMyNy42NTcxLDUxLjI0Nzk4MDMgTDMxNy4xMDgwMTIsNjEuNzA5NzE0MyBDMzE2LjcxNzY5NCw2Mi4wOTY3NjE5IDMxNi4wODQ4NjUsNjIuMDk2NzYxOSAzMTUuNjk0NTQ3LDYxLjcwOTcxNDMgQzMxNS4zMDQyMyw2MS4zMjI2NjY4IDMxNS4zMDQyMyw2MC42OTUxMzg3IDMxNS42OTQ1NDcsNjAuMzA4MDkxMSBMMzI0LjcwMjY2Niw1MS4zNzM4NDk2IEwyOTIuOTk5NDcsNTEuMzc0NjI5MSBDMjkyLjQ0NzQ3OCw1MS4zNzQ2MjkxIDI5Miw1MC45MzA4OTk3IDI5Miw1MC4zODM1MzE4IEMyOTIsNDkuODM2MTYzOSAyOTIuNDQ3NDc4LDQ5LjM5MjQzNDUgMjkyLjk5OTQ3LDQ5LjM5MjQzNDUgTDMyNC40Njc3OSw0OS4zOTE2NTUxIEwzMTUuNjk0NTQ3LDQwLjY5MTkwODkgQzMxNS4zMDQyMyw0MC4zMDQ4NjEzIDMxNS4zMDQyMywzOS42NzczMzMyIDMxNS42OTQ1NDcsMzkuMjkwMjg1NyBDMzE2LjA4NDg2NSwzOC45MDMyMzgxIDMxNi43MTc2OTQsMzguOTAzMjM4MSAzMTcuMTA4MDEyLDM5LjI5MDI4NTcgWiBNMzI3LjExNTM1Nyw1MC4zODI2OTMgTDMxNi40MDEyNzksNjEuMDA4OTAyNyBMMzI3LjAwMjE1MSw1MC41MDAyMDQ2IEwzMjcuMDAyMjUyLDUwLjQ5NjM3MTkgTDMyNi45NDMxNDIsNTAuNDQyNTg1IEwzMjYuODgyNzM3LDUwLjM4MjY5MyBMMzI3LjExNTM1Nyw1MC4zODI2OTMgWlwiIGlkPVwibGVmdC1hcnJvd1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTAuMDAwMDAwLCA1MC41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMxMC4wMDAwMDAsIC01MC41MDAwMDApIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgPC9zdmc+YDtcbiAgcmlnaHQuaW5uZXJIVE1MID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICA8c3ZnIGNsYXNzPVwiYXJyIHJpZ2h0XCIgd2lkdGg9XCIzNnB4XCIgaGVpZ2h0PVwiMzZweFwiIHZpZXdCb3g9XCIwIC02LjUgMzYgMzZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICBcbiAgICAgIDx0aXRsZT5yaWdodC1hcnJvdzwvdGl0bGU+XG4gICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICAgIDxnIGlkPVwiaWNvbnNcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgIDxnIGlkPVwicmlnaHRcIiBjbGFzcz1cImFycm93cyBhcnIgcmlnaHRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM0Mi4wMDAwMDAsIC0xNTkuMDAwMDAwKVwiIGZpbGw9XCIjMjUyNTI4XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiPlxuICAgICAgICAgICAgICA8ZyBpZD1cInNxdWFyZS1maWxsZWRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTAuMDAwMDAwLCAxMjAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJhcnJvd3MgYXJyIHJpZ2h0XCIgZD1cIk0zMTcuMTA4MDEyLDM5LjI5MDI4NTcgTDMyNy42NDk4MDQsNDkuNzQxNzA0MyBMMzI3LjcwODk5NCw0OS43OTU5MTY5IEMzMjcuODg5MTQxLDQ5Ljk3NDU1NDMgMzI3Ljk4NjE0Myw1MC4yMDQ0MTgyIDMyOCw1MC40MzgyMjI3IEwzMjgsNTAuNTYxNzc3MyBDMzI3Ljk4NjE0Myw1MC43OTU1ODE4IDMyNy44ODkxNDEsNTEuMDI1NDQ1NyAzMjcuNzA4OTk0LDUxLjIwNDA4MzEgTDMyNy42NTcxLDUxLjI0Nzk4MDMgTDMxNy4xMDgwMTIsNjEuNzA5NzE0MyBDMzE2LjcxNzY5NCw2Mi4wOTY3NjE5IDMxNi4wODQ4NjUsNjIuMDk2NzYxOSAzMTUuNjk0NTQ3LDYxLjcwOTcxNDMgQzMxNS4zMDQyMyw2MS4zMjI2NjY4IDMxNS4zMDQyMyw2MC42OTUxMzg3IDMxNS42OTQ1NDcsNjAuMzA4MDkxMSBMMzI0LjcwMjY2Niw1MS4zNzM4NDk2IEwyOTIuOTk5NDcsNTEuMzc0NjI5MSBDMjkyLjQ0NzQ3OCw1MS4zNzQ2MjkxIDI5Miw1MC45MzA4OTk3IDI5Miw1MC4zODM1MzE4IEMyOTIsNDkuODM2MTYzOSAyOTIuNDQ3NDc4LDQ5LjM5MjQzNDUgMjkyLjk5OTQ3LDQ5LjM5MjQzNDUgTDMyNC40Njc3OSw0OS4zOTE2NTUxIEwzMTUuNjk0NTQ3LDQwLjY5MTkwODkgQzMxNS4zMDQyMyw0MC4zMDQ4NjEzIDMxNS4zMDQyMywzOS42NzczMzMyIDMxNS42OTQ1NDcsMzkuMjkwMjg1NyBDMzE2LjA4NDg2NSwzOC45MDMyMzgxIDMxNi43MTc2OTQsMzguOTAzMjM4MSAzMTcuMTA4MDEyLDM5LjI5MDI4NTcgWiBNMzI3LjExNTM1Nyw1MC4zODI2OTMgTDMxNi40MDEyNzksNjEuMDA4OTAyNyBMMzI3LjAwMjE1MSw1MC41MDAyMDQ2IEwzMjcuMDAyMjUyLDUwLjQ5NjM3MTkgTDMyNi45NDMxNDIsNTAuNDQyNTg1IEwzMjYuODgyNzM3LDUwLjM4MjY5MyBMMzI3LjExNTM1Nyw1MC4zODI2OTMgWlwiIGlkPVwibGVmdC1hcnJvd1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTAuMDAwMDAwLCA1MC41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMxMC4wMDAwMDAsIC01MC41MDAwMDApIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgPC9zdmc+YDtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3NjcmlwdC9yZW5kZXInO1xuaW1wb3J0ICcuL3NjcmlwdC9pbnRlcmFjdGlvbic7XG5pbXBvcnQgJy4vc2NyaXB0L2tleS1pbnRlcmFjdGlvbic7XG5cbnJlcXVpcmUoJ25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcycpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9