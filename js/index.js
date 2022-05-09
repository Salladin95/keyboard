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
  const body = document.querySelector('body');

  const keyBoardWrap = document.querySelector('.keyboard_wrapp');
  const txtField = document.querySelector('.text-field');
  const keyBoardLights = document.querySelector('.keyboard_lights');
  const changeLightColor = document.querySelector('.change_light_color');
  const colorInput = document.querySelector('.colors_input');
  const toggleCircle = document.querySelector('.toggle_circle');
  const nightMode = document.querySelector('.night_mode');

  const upArrow = document.querySelector('#up');
  const downArrow = document.querySelector('#down');
  const leftArrow = document.querySelector('#left');
  const rightArrow = document.querySelector('#right');
  const keys = document.querySelectorAll('.keys');
  let focus;
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
  down.setAttribute('keyname', 'ArrowDown');
  left.setAttribute('keyname', 'ArrowLeft');
  right.setAttribute('keyname', 'ArrowRight');

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

  nightMode.addEventListener('click', () => {
    toggleCircle.classList.toggle('active');
    body.classList.toggle('active');
    nightMode.classList.toggle('active');
    keyBoardWrap.classList.toggle('active');
    txtField.classList.toggle('active');
    changeLightColor.classList.toggle('active');

    for (let i = 0; i < keys.length; i++) {
      keys[i].classList.toggle('keys_night');
    }
  });

  colorInput.addEventListener('input', () => {
    for (let i = 0; i < keys.length; i++) {
      keys[i].style.color = colorInput.value;
    }

    upArrow.style.fill = colorInput.value;
    downArrow.style.fill = colorInput.value;
    leftArrow.style.fill = colorInput.value;
    rightArrow.style.fill = colorInput.value;

    keyBoardLights.style.background = colorInput.value;
  });

  txtField.addEventListener('focus', () => {
    if (!focus) {
      focus = true;
    }
  });

  txtField.addEventListener('blur', () => {
    if (focus) {
      focus = false;
      // console.log("blur");
    }
  });

  keyBoardWrap.addEventListener('click', (e) => {
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
    }
  });

  document.onselectionchange = () => {
    /*const {
      anchorNode, anchorOffset, focusNode, focusOffset,
    } = document.getSelection();
    highlight = document.getSelection().toString();*/
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
  textArea.placeholder = 'Hello there! \nEnter you thoughts...';

  const nightMode = createEl('div', 'night_mode');
  nightMode.innerHTML = "<div class='toggle_circle'></div>";

  wrapper.appendChild(nightMode);

  const changeLightColor = createEl('div', 'change_light_color');
  changeLightColor.innerHTML = "<div class='colors'><input type='color' class='colors_input' /></div>";

  const noticeHowChancgeLanguage = createEl('h1', 'title');
  noticeHowChancgeLanguage.classList.add('change-language_title');
  noticeHowChancgeLanguage.innerHTML = 'Press Ctrl + Alt to change language';

  const nightModeTitle = createEl('h2', 'title');
  nightModeTitle.classList.add('nightModeTitle_title');
  nightModeTitle.innerHTML = 'Night mode';

  const changeColorTitle = createEl('h2', 'title');
  changeColorTitle.classList.add('changeColorTitle_title');
  changeColorTitle.innerHTML = 'Change keyboard color';

  const ocTitle = createEl('h2', 'title');
  const oc = isMacintosh() ? 'Mac OS' : 'Windows';
  ocTitle.classList.add('ocTitle_title');
  ocTitle.innerHTML = `Made for ${oc}`;

  wrapper.appendChild(nightMode);
  wrapper.appendChild(changeLightColor);
  wrapper.appendChild(noticeHowChancgeLanguage);
  wrapper.appendChild(nightModeTitle);
  wrapper.appendChild(changeColorTitle);
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

  up.classList.add('up_key');
  down.classList.add('down_key');
  left.classList.add('left_key');
  right.classList.add('right_key');

  up.innerHTML = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="36px" height="36px" viewBox="0 -6.5 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  
      <title>up-arrow</title>
      <desc>Created with Sketch.</desc>
      <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="up" class="arrows" transform="translate(-342.000000, -159.000000)" fill="#252528" fill-rule="nonzero">
              <g id="square-filled" transform="translate(50.000000, 120.000000)">
                  <path d="M317.108012,39.2902857 L327.649804,49.7417043 L327.708994,49.7959169 C327.889141,49.9745543 327.986143,50.2044182 328,50.4382227 L328,50.5617773 C327.986143,50.7955818 327.889141,51.0254457 327.708994,51.2040831 L327.6571,51.2479803 L317.108012,61.7097143 C316.717694,62.0967619 316.084865,62.0967619 315.694547,61.7097143 C315.30423,61.3226668 315.30423,60.6951387 315.694547,60.3080911 L324.702666,51.3738496 L292.99947,51.3746291 C292.447478,51.3746291 292,50.9308997 292,50.3835318 C292,49.8361639 292.447478,49.3924345 292.99947,49.3924345 L324.46779,49.3916551 L315.694547,40.6919089 C315.30423,40.3048613 315.30423,39.6773332 315.694547,39.2902857 C316.084865,38.9032381 316.717694,38.9032381 317.108012,39.2902857 Z M327.115357,50.382693 L316.401279,61.0089027 L327.002151,50.5002046 L327.002252,50.4963719 L326.943142,50.442585 L326.882737,50.382693 L327.115357,50.382693 Z" id="left-arrow" transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "></path>
              </g>
          </g>
      </g>
  </svg>`;
  down.innerHTML = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="36px" height="36px" viewBox="0 -6.5 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  
      <title>down-arrow</title>
      <desc>Created with Sketch.</desc>
      <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="down" class="arrows" transform="translate(-342.000000, -159.000000)" fill="#252528" fill-rule="nonzero">
              <g id="square-filled" transform="translate(50.000000, 120.000000)">
                  <path d="M317.108012,39.2902857 L327.649804,49.7417043 L327.708994,49.7959169 C327.889141,49.9745543 327.986143,50.2044182 328,50.4382227 L328,50.5617773 C327.986143,50.7955818 327.889141,51.0254457 327.708994,51.2040831 L327.6571,51.2479803 L317.108012,61.7097143 C316.717694,62.0967619 316.084865,62.0967619 315.694547,61.7097143 C315.30423,61.3226668 315.30423,60.6951387 315.694547,60.3080911 L324.702666,51.3738496 L292.99947,51.3746291 C292.447478,51.3746291 292,50.9308997 292,50.3835318 C292,49.8361639 292.447478,49.3924345 292.99947,49.3924345 L324.46779,49.3916551 L315.694547,40.6919089 C315.30423,40.3048613 315.30423,39.6773332 315.694547,39.2902857 C316.084865,38.9032381 316.717694,38.9032381 317.108012,39.2902857 Z M327.115357,50.382693 L316.401279,61.0089027 L327.002151,50.5002046 L327.002252,50.4963719 L326.943142,50.442585 L326.882737,50.382693 L327.115357,50.382693 Z" id="left-arrow" transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "></path>
              </g>
          </g>
      </g>
  </svg>`;
  left.innerHTML = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="36px" height="36px" viewBox="0 -6.5 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  
      <title>left-arrow</title>
      <desc>Created with Sketch.</desc>
      <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="left" class="arrows" transform="translate(-342.000000, -159.000000)" fill="#252528" fill-rule="nonzero">
              <g id="square-filled" transform="translate(50.000000, 120.000000)">
                  <path d="M317.108012,39.2902857 L327.649804,49.7417043 L327.708994,49.7959169 C327.889141,49.9745543 327.986143,50.2044182 328,50.4382227 L328,50.5617773 C327.986143,50.7955818 327.889141,51.0254457 327.708994,51.2040831 L327.6571,51.2479803 L317.108012,61.7097143 C316.717694,62.0967619 316.084865,62.0967619 315.694547,61.7097143 C315.30423,61.3226668 315.30423,60.6951387 315.694547,60.3080911 L324.702666,51.3738496 L292.99947,51.3746291 C292.447478,51.3746291 292,50.9308997 292,50.3835318 C292,49.8361639 292.447478,49.3924345 292.99947,49.3924345 L324.46779,49.3916551 L315.694547,40.6919089 C315.30423,40.3048613 315.30423,39.6773332 315.694547,39.2902857 C316.084865,38.9032381 316.717694,38.9032381 317.108012,39.2902857 Z M327.115357,50.382693 L316.401279,61.0089027 L327.002151,50.5002046 L327.002252,50.4963719 L326.943142,50.442585 L326.882737,50.382693 L327.115357,50.382693 Z" id="left-arrow" transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "></path>
              </g>
          </g>
      </g>
  </svg>`;
  right.innerHTML = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="36px" height="36px" viewBox="0 -6.5 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  
      <title>right-arrow</title>
      <desc>Created with Sketch.</desc>
      <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="right" class="arrows" transform="translate(-342.000000, -159.000000)" fill="#252528" fill-rule="nonzero">
              <g id="square-filled" transform="translate(50.000000, 120.000000)">
                  <path d="M317.108012,39.2902857 L327.649804,49.7417043 L327.708994,49.7959169 C327.889141,49.9745543 327.986143,50.2044182 328,50.4382227 L328,50.5617773 C327.986143,50.7955818 327.889141,51.0254457 327.708994,51.2040831 L327.6571,51.2479803 L317.108012,61.7097143 C316.717694,62.0967619 316.084865,62.0967619 315.694547,61.7097143 C315.30423,61.3226668 315.30423,60.6951387 315.694547,60.3080911 L324.702666,51.3738496 L292.99947,51.3746291 C292.447478,51.3746291 292,50.9308997 292,50.3835318 C292,49.8361639 292.447478,49.3924345 292.99947,49.3924345 L324.46779,49.3916551 L315.694547,40.6919089 C315.30423,40.3048613 315.30423,39.6773332 315.694547,39.2902857 C316.084865,38.9032381 316.717694,38.9032381 317.108012,39.2902857 Z M327.115357,50.382693 L316.401279,61.0089027 L327.002151,50.5002046 L327.002252,50.4963719 L326.943142,50.442585 L326.882737,50.382693 L327.115357,50.382693 Z" id="left-arrow" transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "></path>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sbURBQW1EO0FBQ25EO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDO0FBQzdDLDZDQUE2Qzs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvVkE7QUFDQSxpRUFBZSxPQUFPLEVBQUM7O0FBRXZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsR0FBRzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsa0JBQWtCLGtCQUFrQjtBQUNwQywrQ0FBK0MsTUFBTTtBQUNyRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDblFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ0o7QUFDSzs7QUFFOUIsbUJBQU8sQ0FBQywrRUFBNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc3MvLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzP2ZiNTciLCJ3ZWJwYWNrOi8vcnNzLy4vc3JjL21haW4vc3R5bGVzL2luZGV4LnNjc3M/MzdlNiIsIndlYnBhY2s6Ly9yc3MvLi9zcmMvbWFpbi9zY3JpcHQvaW50ZXJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNzLy4vc3JjL21haW4vc2NyaXB0L3JlbmRlci5qcyIsIndlYnBhY2s6Ly9yc3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jzcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNzLy4vc3JjL21haW4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Iiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgY29uc3Qga2V5Qm9hcmRXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkX3dyYXBwJyk7XG4gIGNvbnN0IHR4dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtZmllbGQnKTtcbiAgY29uc3Qga2V5Qm9hcmRMaWdodHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmRfbGlnaHRzJyk7XG4gIGNvbnN0IGNoYW5nZUxpZ2h0Q29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlX2xpZ2h0X2NvbG9yJyk7XG4gIGNvbnN0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3JzX2lucHV0Jyk7XG4gIGNvbnN0IHRvZ2dsZUNpcmNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGVfY2lyY2xlJyk7XG4gIGNvbnN0IG5pZ2h0TW9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaWdodF9tb2RlJyk7XG5cbiAgY29uc3QgdXBBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cCcpO1xuICBjb25zdCBkb3duQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG93bicpO1xuICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVmdCcpO1xuICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JpZ2h0Jyk7XG4gIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5cycpO1xuICBsZXQgZm9jdXM7XG4gIGxldCBoaWdobGlnaHQgPSAnJztcbiAgbGV0IGxhbmd1YWdlID0gJ2VuJztcblxuICBzZXRBdHJzZm9yS2V5cyhrZXlzKTtcblxuICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGFjZV9rZXknKTtcbiAgc3BhY2Uuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ1NwYWNlJyk7XG5cbiAgY29uc3QgY2Fwc0xvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fwc19sb2NrX2tleScpO1xuICBjYXBzTG9jay5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQ2Fwc0xvY2snKTtcblxuICBjb25zdCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiX2tleScpO1xuICB0YWIuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ1RhYicpO1xuXG4gIGNvbnN0IGVudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVudGVyX2tleScpO1xuICBlbnRlci5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnRW50ZXInKTtcblxuICBjb25zdCBiYWNrc3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja3NwYWNlX2tleScpO1xuICBiYWNrc3BhY2Uuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0JhY2tzcGFjZScpO1xuXG4gIGNvbnN0IHNoaWZ0TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0X3NoaWZ0Jyk7XG4gIGNvbnN0IHNoaWZ0UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHRfc2hpZnQnKTtcbiAgc2hpZnRMZWZ0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdTaGlmdExlZnQnKTtcbiAgc2hpZnRSaWdodC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnU2hpZnRSaWdodCcpO1xuXG4gIGNvbnN0IGN0cmxMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN0cmxfbGVmdCcpO1xuICBjb25zdCBjdHJsUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3RybF9yaWdodCcpO1xuICBjdHJsTGVmdC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQ29udHJvbExlZnQnKTtcbiAgY3RybFJpZ2h0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdDb250cm9sUmlnaHQnKTtcblxuICBjb25zdCBhbHRMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsdF9sZWZ0Jyk7XG4gIGNvbnN0IGFsdFJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsdF9yaWdodCcpO1xuICBhbHRMZWZ0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBbHRMZWZ0Jyk7XG4gIGFsdFJpZ2h0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBbHRSaWdodCcpO1xuXG4gIGNvbnN0IGRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxfa2V5Jyk7XG4gIGRlbC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnRGVsZXRlJyk7XG5cbiAgY29uc3QgdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBfa2V5Jyk7XG4gIGNvbnN0IGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93bl9rZXknKTtcbiAgY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0X2tleScpO1xuICBjb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodF9rZXknKTtcblxuICB1cC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQXJyb3dVcCcpO1xuICBkb3duLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBcnJvd0Rvd24nKTtcbiAgbGVmdC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQXJyb3dMZWZ0Jyk7XG4gIHJpZ2h0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBcnJvd1JpZ2h0Jyk7XG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnKSAmJiBsYW5ndWFnZSAhPT0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1JykpIHtcbiAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFuZ3VhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlLWxhbmd1YWdlJyk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKVxuICAgICAgICB8fCBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1JylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nKVxuICAgICAgICB8fCBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScpXG4gICAgICAgIHx8IGUuY29kZSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleW5hbWUnKVxuICAgICAgKSB7XG4gICAgICAgIGtleXNbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSAnU2hpZnQnKSB7XG4gICAgICBnZXRVcHBlckNhc2Uoa2V5cyk7XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ0NvbnRyb2wnIHx8IGUua2V5ID09PSAnQWx0Jykge1xuICAgICAgaWYgKFxuICAgICAgICAoY2hlY2tBY3RpdmUoY3RybExlZnQpICYmIGNoZWNrQWN0aXZlKGFsdExlZnQpKVxuICAgICAgICB8fCAoY2hlY2tBY3RpdmUoY3RybFJpZ2h0KSAmJiBjaGVja0FjdGl2ZShhbHRSaWdodCkpXG4gICAgICApIHtcbiAgICAgICAgdG9nZ2xlTGFuZ3VhZ2Uoa2V5cyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpXG4gICAgICAgIHx8IGUuY29kZSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleW5hbWUnKVxuICAgICAgICB8fCBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JylcbiAgICAgICkge1xuICAgICAgICBrZXlzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBrZXlzW2ldLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAga2V5c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmUnKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ1NoaWZ0Jykge1xuICAgICAgZ2V0TG93ZXJDYXNlKGtleXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgbmlnaHRNb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZ2dsZUNpcmNsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIG5pZ2h0TW9kZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBrZXlCb2FyZFdyYXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgdHh0RmllbGQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgY2hhbmdlTGlnaHRDb2xvci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5c1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdrZXlzX25pZ2h0Jyk7XG4gICAgfVxuICB9KTtcblxuICBjb2xvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5c1tpXS5zdHlsZS5jb2xvciA9IGNvbG9ySW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgdXBBcnJvdy5zdHlsZS5maWxsID0gY29sb3JJbnB1dC52YWx1ZTtcbiAgICBkb3duQXJyb3cuc3R5bGUuZmlsbCA9IGNvbG9ySW5wdXQudmFsdWU7XG4gICAgbGVmdEFycm93LnN0eWxlLmZpbGwgPSBjb2xvcklucHV0LnZhbHVlO1xuICAgIHJpZ2h0QXJyb3cuc3R5bGUuZmlsbCA9IGNvbG9ySW5wdXQudmFsdWU7XG5cbiAgICBrZXlCb2FyZExpZ2h0cy5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3JJbnB1dC52YWx1ZTtcbiAgfSk7XG5cbiAgdHh0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgaWYgKCFmb2N1cykge1xuICAgICAgZm9jdXMgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgdHh0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBpZiAoZm9jdXMpIHtcbiAgICAgIGZvY3VzID0gZmFsc2U7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImJsdXJcIik7XG4gICAgfVxuICB9KTtcblxuICBrZXlCb2FyZFdyYXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdrZXlzJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdHh0RmllbGQuZm9jdXMoKTtcbiAgICBsZXQga2V5bmFtZTtcblxuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2tleU5hbWUnKSkge1xuICAgICAga2V5bmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgna2V5TmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXluYW1lID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5pbm5lckhUTUw7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcGFjZV9rZXknKSkge1xuICAgICAgdHh0RmllbGQudmFsdWUgKz0gJyAnO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgdHh0RmllbGQudmFsdWUgKz0gdGFyZ2V0O1xuICAgIH0gZWxzZSBpZiAoa2V5bmFtZSA9PT0gJ1NoaWZ0TGVmdCcgfHwga2V5bmFtZSA9PT0gJ1NoaWZ0UmlnaHQnIHx8IGtleW5hbWUgPT09ICdDYXBzTG9jaycpIHtcbiAgICAgIHRvZ2dsZUFjdGl2ZShlLnRhcmdldCk7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBnZXRVcHBlckNhc2Uoa2V5cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRMb3dlckNhc2Uoa2V5cyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXluYW1lID09PSAnVGFiJykge1xuICAgICAgdHh0RmllbGQudmFsdWUgKz0gJyAgICAnO1xuICAgIH0gZWxzZSBpZiAoa2V5bmFtZSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgIGlmICh0eHRGaWVsZC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChoaWdobGlnaHQgPT09ICcnKSB7XG4gICAgICAgICAgdHh0RmllbGQudmFsdWUgPSBybVR4dCh0eHRGaWVsZC5zZWxlY3Rpb25FbmQgLSAxLCB0eHRGaWVsZC52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHh0RmllbGQudmFsdWUgPSBybVR4dChoaWdobGlnaHQsIHR4dEZpZWxkLnZhbHVlKTtcbiAgICAgICAgICBoaWdobGlnaHQgPSAnJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQub25zZWxlY3Rpb25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgLypjb25zdCB7XG4gICAgICBhbmNob3JOb2RlLCBhbmNob3JPZmZzZXQsIGZvY3VzTm9kZSwgZm9jdXNPZmZzZXQsXG4gICAgfSA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuICAgIGhpZ2hsaWdodCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7Ki9cbiAgfTtcbn0pO1xuXG5mdW5jdGlvbiBybVR4dCh0YXJnZXQsIHR4dFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB0eHRWYWx1ZS5zbGljZSgwLCB0YXJnZXQpO1xuICB9XG4gIGNvbnN0IHJlZ0V4cCA9IC90YXJnZXQvaTtcbiAgcmV0dXJuIHR4dFZhbHVlLnJlcGxhY2UocmVnRXhwLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGdldFVwcGVyQ2FzZShrZXlzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlLWxhbmd1YWdlJykgPT09ICdlbicpIHtcbiAgICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKSB8fCBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5JykpIHtcbiAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKSB8fCBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5JykpIHtcbiAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRMb3dlckNhc2Uoa2V5cykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleScpKSB7XG4gICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXknKTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnKSA9PT0gJ2VuJykge1xuICAgICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpKSB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKSkge1xuICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlQWN0aXZlKGVsKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0gZWxzZSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tBY3RpdmUoZWwpIHtcbiAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUxhbmd1YWdlKGtleXMpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnKSA9PT0gJ2VuJykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpKSB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnLCAncnUnKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKSkge1xuICAgICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpO1xuICAgICAgfVxuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlLWxhbmd1YWdlJywgJ2VuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0QXRyc2ZvcktleXMoa2V5cykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykpIHtcbiAgICAgIGtleXNbaV0uc2V0QXR0cmlidXRlKFxuICAgICAgICAnVXBwZXJDYXNlTmFtZUVuJyxcbiAgICAgICAga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykudG9VcHBlckNhc2UoKSxcbiAgICAgICk7XG4gICAgICBrZXlzW2ldLnNldEF0dHJpYnV0ZShcbiAgICAgICAgJ1VwcGVyQ2FzZU5hbWVSdScsXG4gICAgICAgIGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpLnRvVXBwZXJDYXNlKCksXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGtleXNbMV0uc2V0QXR0cmlidXRlKCdrZXknLCAnMScpO1xuICBrZXlzWzJdLnNldEF0dHJpYnV0ZSgna2V5JywgJzInKTtcbiAga2V5c1szXS5zZXRBdHRyaWJ1dGUoJ2tleScsICczJyk7XG4gIGtleXNbNF0uc2V0QXR0cmlidXRlKCdrZXknLCAnNCcpO1xuICBrZXlzWzVdLnNldEF0dHJpYnV0ZSgna2V5JywgJzUnKTtcbiAga2V5c1s2XS5zZXRBdHRyaWJ1dGUoJ2tleScsICc2Jyk7XG4gIGtleXNbN10uc2V0QXR0cmlidXRlKCdrZXknLCAnNycpO1xuICBrZXlzWzhdLnNldEF0dHJpYnV0ZSgna2V5JywgJzgnKTtcbiAga2V5c1s5XS5zZXRBdHRyaWJ1dGUoJ2tleScsICc5Jyk7XG4gIGtleXNbMTBdLnNldEF0dHJpYnV0ZSgna2V5JywgJzAnKTtcbiAga2V5c1sxMV0uc2V0QXR0cmlidXRlKCdrZXknLCAnLScpO1xuICBrZXlzWzEyXS5zZXRBdHRyaWJ1dGUoJ2tleScsICc9Jyk7XG5cbiAga2V5c1swXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICd+Jyk7XG4gIGtleXNbMV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnIScpO1xuICBrZXlzWzJdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ0AnKTtcbiAga2V5c1szXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICcjJyk7XG4gIGtleXNbNF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnJCcpO1xuICBrZXlzWzVdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJyUnKTtcbiAga2V5c1s2XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICdeJyk7XG4gIGtleXNbN10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnJicpO1xuICBrZXlzWzhdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJyonKTtcbiAga2V5c1s5XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICcoJyk7XG4gIGtleXNbMTBdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJyknKTtcbiAga2V5c1sxMV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnXycpO1xuICBrZXlzWzEyXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICcrJyk7XG5cbiAga2V5c1sxXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICchJyk7XG4gIGtleXNbMl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnXCInKTtcbiAga2V5c1szXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICfihJYnKTtcbiAga2V5c1s0XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICc7Jyk7XG4gIGtleXNbNV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnJScpO1xuICBrZXlzWzZdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJzonKTtcbiAga2V5c1s3XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICc/Jyk7XG4gIGtleXNbOF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnKicpO1xuICBrZXlzWzldLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJygnKTtcbiAga2V5c1sxMF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnKScpO1xuICBrZXlzWzExXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICctJyk7XG4gIGtleXNbMTJdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJz0nKTtcblxuICBrZXlzWzI1XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICd7Jyk7XG4gIGtleXNbMjZdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ30nKTtcblxuICBrZXlzWzI3XS5zZXRBdHRyaWJ1dGUoJ2tleScsICdcXFxcJyk7XG4gIGtleXNbMjddLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ3wnKTtcbiAga2V5c1syN10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnfCcpO1xuXG4gIGtleXNbMzldLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJzonKTtcbiAga2V5c1s0MF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnXCInKTtcblxuICBrZXlzWzUxXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICc8Jyk7XG4gIGtleXNbNTJdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJz4nKTtcblxuICBrZXlzWzQzXS5zZXRBdHRyaWJ1dGUoJ2tleScsICcvJyk7XG4gIGtleXNbNDNdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJy8nKTtcbiAga2V5c1s0M10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnLCcpO1xuXG4gIGtleXNbNTNdLnNldEF0dHJpYnV0ZSgna2V5JywgJy8nKTtcbiAga2V5c1s1M10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnPycpO1xuICBrZXlzWzUzXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICcuJyk7XG59XG4iLCJjb25zdCBrZXlzTWFwID0gbmV3IE1hcCgpO1xuZXhwb3J0IGRlZmF1bHQga2V5c01hcDtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGZpbGxLZXlzKGtleXNNYXApO1xuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCAnY29udGFpbmVyJyk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCB3cmFwcGVyID0gY3JlYXRlRWwoJ2RpdicsICd3cmFwcGVyJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcblxuICBjb25zdCB0ZXh0QXJlYSA9IGNyZWF0ZUVsKCd0ZXh0YXJlYScsICd0ZXh0LWZpZWxkJyk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xuICB0ZXh0QXJlYS5wbGFjZWhvbGRlciA9ICdIZWxsbyB0aGVyZSEgXFxuRW50ZXIgeW91IHRob3VnaHRzLi4uJztcblxuICBjb25zdCBuaWdodE1vZGUgPSBjcmVhdGVFbCgnZGl2JywgJ25pZ2h0X21vZGUnKTtcbiAgbmlnaHRNb2RlLmlubmVySFRNTCA9IFwiPGRpdiBjbGFzcz0ndG9nZ2xlX2NpcmNsZSc+PC9kaXY+XCI7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZChuaWdodE1vZGUpO1xuXG4gIGNvbnN0IGNoYW5nZUxpZ2h0Q29sb3IgPSBjcmVhdGVFbCgnZGl2JywgJ2NoYW5nZV9saWdodF9jb2xvcicpO1xuICBjaGFuZ2VMaWdodENvbG9yLmlubmVySFRNTCA9IFwiPGRpdiBjbGFzcz0nY29sb3JzJz48aW5wdXQgdHlwZT0nY29sb3InIGNsYXNzPSdjb2xvcnNfaW5wdXQnIC8+PC9kaXY+XCI7XG5cbiAgY29uc3Qgbm90aWNlSG93Q2hhbmNnZUxhbmd1YWdlID0gY3JlYXRlRWwoJ2gxJywgJ3RpdGxlJyk7XG4gIG5vdGljZUhvd0NoYW5jZ2VMYW5ndWFnZS5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UtbGFuZ3VhZ2VfdGl0bGUnKTtcbiAgbm90aWNlSG93Q2hhbmNnZUxhbmd1YWdlLmlubmVySFRNTCA9ICdQcmVzcyBDdHJsICsgQWx0IHRvIGNoYW5nZSBsYW5ndWFnZSc7XG5cbiAgY29uc3QgbmlnaHRNb2RlVGl0bGUgPSBjcmVhdGVFbCgnaDInLCAndGl0bGUnKTtcbiAgbmlnaHRNb2RlVGl0bGUuY2xhc3NMaXN0LmFkZCgnbmlnaHRNb2RlVGl0bGVfdGl0bGUnKTtcbiAgbmlnaHRNb2RlVGl0bGUuaW5uZXJIVE1MID0gJ05pZ2h0IG1vZGUnO1xuXG4gIGNvbnN0IGNoYW5nZUNvbG9yVGl0bGUgPSBjcmVhdGVFbCgnaDInLCAndGl0bGUnKTtcbiAgY2hhbmdlQ29sb3JUaXRsZS5jbGFzc0xpc3QuYWRkKCdjaGFuZ2VDb2xvclRpdGxlX3RpdGxlJyk7XG4gIGNoYW5nZUNvbG9yVGl0bGUuaW5uZXJIVE1MID0gJ0NoYW5nZSBrZXlib2FyZCBjb2xvcic7XG5cbiAgY29uc3Qgb2NUaXRsZSA9IGNyZWF0ZUVsKCdoMicsICd0aXRsZScpO1xuICBjb25zdCBvYyA9IGlzTWFjaW50b3NoKCkgPyAnTWFjIE9TJyA6ICdXaW5kb3dzJztcbiAgb2NUaXRsZS5jbGFzc0xpc3QuYWRkKCdvY1RpdGxlX3RpdGxlJyk7XG4gIG9jVGl0bGUuaW5uZXJIVE1MID0gYE1hZGUgZm9yICR7b2N9YDtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKG5pZ2h0TW9kZSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hhbmdlTGlnaHRDb2xvcik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQobm90aWNlSG93Q2hhbmNnZUxhbmd1YWdlKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChuaWdodE1vZGVUaXRsZSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hhbmdlQ29sb3JUaXRsZSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQob2NUaXRsZSk7XG5cbiAgY29uc3Qga2V5Qm9hcmRXcmFwID0gY3JlYXRlRWwoJ2RpdicsICdrZXlib2FyZF93cmFwcCcpO1xuICBjb25zdCBrZXlib2FyZExpZ2h0cyA9IGNyZWF0ZUVsKCdkaXYnLCAna2V5Ym9hcmRfbGlnaHRzJyk7XG4gIGNvbnN0IGtleWJvYXJkS2V5c1dyID0gY3JlYXRlRWwoJ2RpdicsICdrZXlib2FyZF9rZXlzJyk7XG4gIGtleUJvYXJkV3JhcC5hcHBlbmRDaGlsZChrZXlib2FyZExpZ2h0cyk7XG4gIGtleUJvYXJkV3JhcC5hcHBlbmRDaGlsZChrZXlib2FyZEtleXNXcik7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZChrZXlCb2FyZFdyYXApO1xuXG4gIGNvbnN0IGtleWJvYXJkS2V5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZF9rZXlzJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzTWFwLnNpemU7IGkrKykge1xuICAgIGtleWJvYXJkS2V5cy5hcHBlbmRDaGlsZChrZXlzTWFwLmdldChgcm93JHtpICsgMX1gKSk7XG4gIH1cblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1swXS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYmFja3NwYWNlX2tleScpO1xuXG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzFdLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgndGFiX2tleScpO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1sxXS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnZGVsX2tleScpO1xuXG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzJdLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnY2Fwc19sb2NrX2tleScpO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1syXS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnZW50ZXJfa2V5Jyk7XG5cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbM10uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFxuICAgICdzaGlmdF9rZXknLFxuICAgICdsZWZ0X3NoaWZ0JyxcbiAgKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbM10ubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoXG4gICAgJ3NoaWZ0X2tleScsXG4gICAgJ3JpZ2h0X3NoaWZ0JyxcbiAgKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2N0cmxfa2V5JywgJ2N0cmxfbGVmdCcpO1xuXG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbMl0uY2xhc3NMaXN0LmFkZChcbiAgICAnYWx0X2tleScsXG4gICAgJ2FsdF9sZWZ0JyxcbiAgKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1s0XS5jbGFzc0xpc3QuYWRkKFxuICAgICdhbHRfa2V5JyxcbiAgICAnYWx0X3JpZ2h0JyxcbiAgKTtcblxuICBjb25zdCBzcGFjZSA9IGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbM107XG4gIHNwYWNlLmNsYXNzTGlzdC5hZGQoJ3NwYWNlX2tleScpO1xuXG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbNV0uY2xhc3NMaXN0LmFkZChcbiAgICAnY3RybF9rZXknLFxuICAgICdjdHJsX3JpZ2h0JyxcbiAgKTtcblxuICBjb25zdCB1cCA9IGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzNdLmxhc3RDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gIGNvbnN0IGRvd24gPSBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzddO1xuICBjb25zdCBsZWZ0ID0ga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1s2XTtcbiAgY29uc3QgcmlnaHQgPSBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzhdO1xuXG4gIHVwLmNsYXNzTGlzdC5hZGQoJ3VwX2tleScpO1xuICBkb3duLmNsYXNzTGlzdC5hZGQoJ2Rvd25fa2V5Jyk7XG4gIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdF9rZXknKTtcbiAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHRfa2V5Jyk7XG5cbiAgdXAuaW5uZXJIVE1MID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICA8c3ZnIHdpZHRoPVwiMzZweFwiIGhlaWdodD1cIjM2cHhcIiB2aWV3Qm94PVwiMCAtNi41IDM2IDM2XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgXG4gICAgICA8dGl0bGU+dXAtYXJyb3c8L3RpdGxlPlxuICAgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG4gICAgICA8ZyBpZD1cImljb25zXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICA8ZyBpZD1cInVwXCIgY2xhc3M9XCJhcnJvd3NcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM0Mi4wMDAwMDAsIC0xNTkuMDAwMDAwKVwiIGZpbGw9XCIjMjUyNTI4XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiPlxuICAgICAgICAgICAgICA8ZyBpZD1cInNxdWFyZS1maWxsZWRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTAuMDAwMDAwLCAxMjAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMTcuMTA4MDEyLDM5LjI5MDI4NTcgTDMyNy42NDk4MDQsNDkuNzQxNzA0MyBMMzI3LjcwODk5NCw0OS43OTU5MTY5IEMzMjcuODg5MTQxLDQ5Ljk3NDU1NDMgMzI3Ljk4NjE0Myw1MC4yMDQ0MTgyIDMyOCw1MC40MzgyMjI3IEwzMjgsNTAuNTYxNzc3MyBDMzI3Ljk4NjE0Myw1MC43OTU1ODE4IDMyNy44ODkxNDEsNTEuMDI1NDQ1NyAzMjcuNzA4OTk0LDUxLjIwNDA4MzEgTDMyNy42NTcxLDUxLjI0Nzk4MDMgTDMxNy4xMDgwMTIsNjEuNzA5NzE0MyBDMzE2LjcxNzY5NCw2Mi4wOTY3NjE5IDMxNi4wODQ4NjUsNjIuMDk2NzYxOSAzMTUuNjk0NTQ3LDYxLjcwOTcxNDMgQzMxNS4zMDQyMyw2MS4zMjI2NjY4IDMxNS4zMDQyMyw2MC42OTUxMzg3IDMxNS42OTQ1NDcsNjAuMzA4MDkxMSBMMzI0LjcwMjY2Niw1MS4zNzM4NDk2IEwyOTIuOTk5NDcsNTEuMzc0NjI5MSBDMjkyLjQ0NzQ3OCw1MS4zNzQ2MjkxIDI5Miw1MC45MzA4OTk3IDI5Miw1MC4zODM1MzE4IEMyOTIsNDkuODM2MTYzOSAyOTIuNDQ3NDc4LDQ5LjM5MjQzNDUgMjkyLjk5OTQ3LDQ5LjM5MjQzNDUgTDMyNC40Njc3OSw0OS4zOTE2NTUxIEwzMTUuNjk0NTQ3LDQwLjY5MTkwODkgQzMxNS4zMDQyMyw0MC4zMDQ4NjEzIDMxNS4zMDQyMywzOS42NzczMzMyIDMxNS42OTQ1NDcsMzkuMjkwMjg1NyBDMzE2LjA4NDg2NSwzOC45MDMyMzgxIDMxNi43MTc2OTQsMzguOTAzMjM4MSAzMTcuMTA4MDEyLDM5LjI5MDI4NTcgWiBNMzI3LjExNTM1Nyw1MC4zODI2OTMgTDMxNi40MDEyNzksNjEuMDA4OTAyNyBMMzI3LjAwMjE1MSw1MC41MDAyMDQ2IEwzMjcuMDAyMjUyLDUwLjQ5NjM3MTkgTDMyNi45NDMxNDIsNTAuNDQyNTg1IEwzMjYuODgyNzM3LDUwLjM4MjY5MyBMMzI3LjExNTM1Nyw1MC4zODI2OTMgWlwiIGlkPVwibGVmdC1hcnJvd1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTAuMDAwMDAwLCA1MC41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMxMC4wMDAwMDAsIC01MC41MDAwMDApIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgPC9zdmc+YDtcbiAgZG93bi5pbm5lckhUTUwgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gIDxzdmcgd2lkdGg9XCIzNnB4XCIgaGVpZ2h0PVwiMzZweFwiIHZpZXdCb3g9XCIwIC02LjUgMzYgMzZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICBcbiAgICAgIDx0aXRsZT5kb3duLWFycm93PC90aXRsZT5cbiAgICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgICAgPGcgaWQ9XCJpY29uc1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgPGcgaWQ9XCJkb3duXCIgY2xhc3M9XCJhcnJvd3NcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM0Mi4wMDAwMDAsIC0xNTkuMDAwMDAwKVwiIGZpbGw9XCIjMjUyNTI4XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiPlxuICAgICAgICAgICAgICA8ZyBpZD1cInNxdWFyZS1maWxsZWRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTAuMDAwMDAwLCAxMjAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMTcuMTA4MDEyLDM5LjI5MDI4NTcgTDMyNy42NDk4MDQsNDkuNzQxNzA0MyBMMzI3LjcwODk5NCw0OS43OTU5MTY5IEMzMjcuODg5MTQxLDQ5Ljk3NDU1NDMgMzI3Ljk4NjE0Myw1MC4yMDQ0MTgyIDMyOCw1MC40MzgyMjI3IEwzMjgsNTAuNTYxNzc3MyBDMzI3Ljk4NjE0Myw1MC43OTU1ODE4IDMyNy44ODkxNDEsNTEuMDI1NDQ1NyAzMjcuNzA4OTk0LDUxLjIwNDA4MzEgTDMyNy42NTcxLDUxLjI0Nzk4MDMgTDMxNy4xMDgwMTIsNjEuNzA5NzE0MyBDMzE2LjcxNzY5NCw2Mi4wOTY3NjE5IDMxNi4wODQ4NjUsNjIuMDk2NzYxOSAzMTUuNjk0NTQ3LDYxLjcwOTcxNDMgQzMxNS4zMDQyMyw2MS4zMjI2NjY4IDMxNS4zMDQyMyw2MC42OTUxMzg3IDMxNS42OTQ1NDcsNjAuMzA4MDkxMSBMMzI0LjcwMjY2Niw1MS4zNzM4NDk2IEwyOTIuOTk5NDcsNTEuMzc0NjI5MSBDMjkyLjQ0NzQ3OCw1MS4zNzQ2MjkxIDI5Miw1MC45MzA4OTk3IDI5Miw1MC4zODM1MzE4IEMyOTIsNDkuODM2MTYzOSAyOTIuNDQ3NDc4LDQ5LjM5MjQzNDUgMjkyLjk5OTQ3LDQ5LjM5MjQzNDUgTDMyNC40Njc3OSw0OS4zOTE2NTUxIEwzMTUuNjk0NTQ3LDQwLjY5MTkwODkgQzMxNS4zMDQyMyw0MC4zMDQ4NjEzIDMxNS4zMDQyMywzOS42NzczMzMyIDMxNS42OTQ1NDcsMzkuMjkwMjg1NyBDMzE2LjA4NDg2NSwzOC45MDMyMzgxIDMxNi43MTc2OTQsMzguOTAzMjM4MSAzMTcuMTA4MDEyLDM5LjI5MDI4NTcgWiBNMzI3LjExNTM1Nyw1MC4zODI2OTMgTDMxNi40MDEyNzksNjEuMDA4OTAyNyBMMzI3LjAwMjE1MSw1MC41MDAyMDQ2IEwzMjcuMDAyMjUyLDUwLjQ5NjM3MTkgTDMyNi45NDMxNDIsNTAuNDQyNTg1IEwzMjYuODgyNzM3LDUwLjM4MjY5MyBMMzI3LjExNTM1Nyw1MC4zODI2OTMgWlwiIGlkPVwibGVmdC1hcnJvd1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTAuMDAwMDAwLCA1MC41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMxMC4wMDAwMDAsIC01MC41MDAwMDApIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgPC9zdmc+YDtcbiAgbGVmdC5pbm5lckhUTUwgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gIDxzdmcgd2lkdGg9XCIzNnB4XCIgaGVpZ2h0PVwiMzZweFwiIHZpZXdCb3g9XCIwIC02LjUgMzYgMzZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICBcbiAgICAgIDx0aXRsZT5sZWZ0LWFycm93PC90aXRsZT5cbiAgICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgICAgPGcgaWQ9XCJpY29uc1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgPGcgaWQ9XCJsZWZ0XCIgY2xhc3M9XCJhcnJvd3NcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM0Mi4wMDAwMDAsIC0xNTkuMDAwMDAwKVwiIGZpbGw9XCIjMjUyNTI4XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiPlxuICAgICAgICAgICAgICA8ZyBpZD1cInNxdWFyZS1maWxsZWRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTAuMDAwMDAwLCAxMjAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMTcuMTA4MDEyLDM5LjI5MDI4NTcgTDMyNy42NDk4MDQsNDkuNzQxNzA0MyBMMzI3LjcwODk5NCw0OS43OTU5MTY5IEMzMjcuODg5MTQxLDQ5Ljk3NDU1NDMgMzI3Ljk4NjE0Myw1MC4yMDQ0MTgyIDMyOCw1MC40MzgyMjI3IEwzMjgsNTAuNTYxNzc3MyBDMzI3Ljk4NjE0Myw1MC43OTU1ODE4IDMyNy44ODkxNDEsNTEuMDI1NDQ1NyAzMjcuNzA4OTk0LDUxLjIwNDA4MzEgTDMyNy42NTcxLDUxLjI0Nzk4MDMgTDMxNy4xMDgwMTIsNjEuNzA5NzE0MyBDMzE2LjcxNzY5NCw2Mi4wOTY3NjE5IDMxNi4wODQ4NjUsNjIuMDk2NzYxOSAzMTUuNjk0NTQ3LDYxLjcwOTcxNDMgQzMxNS4zMDQyMyw2MS4zMjI2NjY4IDMxNS4zMDQyMyw2MC42OTUxMzg3IDMxNS42OTQ1NDcsNjAuMzA4MDkxMSBMMzI0LjcwMjY2Niw1MS4zNzM4NDk2IEwyOTIuOTk5NDcsNTEuMzc0NjI5MSBDMjkyLjQ0NzQ3OCw1MS4zNzQ2MjkxIDI5Miw1MC45MzA4OTk3IDI5Miw1MC4zODM1MzE4IEMyOTIsNDkuODM2MTYzOSAyOTIuNDQ3NDc4LDQ5LjM5MjQzNDUgMjkyLjk5OTQ3LDQ5LjM5MjQzNDUgTDMyNC40Njc3OSw0OS4zOTE2NTUxIEwzMTUuNjk0NTQ3LDQwLjY5MTkwODkgQzMxNS4zMDQyMyw0MC4zMDQ4NjEzIDMxNS4zMDQyMywzOS42NzczMzMyIDMxNS42OTQ1NDcsMzkuMjkwMjg1NyBDMzE2LjA4NDg2NSwzOC45MDMyMzgxIDMxNi43MTc2OTQsMzguOTAzMjM4MSAzMTcuMTA4MDEyLDM5LjI5MDI4NTcgWiBNMzI3LjExNTM1Nyw1MC4zODI2OTMgTDMxNi40MDEyNzksNjEuMDA4OTAyNyBMMzI3LjAwMjE1MSw1MC41MDAyMDQ2IEwzMjcuMDAyMjUyLDUwLjQ5NjM3MTkgTDMyNi45NDMxNDIsNTAuNDQyNTg1IEwzMjYuODgyNzM3LDUwLjM4MjY5MyBMMzI3LjExNTM1Nyw1MC4zODI2OTMgWlwiIGlkPVwibGVmdC1hcnJvd1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTAuMDAwMDAwLCA1MC41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMxMC4wMDAwMDAsIC01MC41MDAwMDApIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgPC9zdmc+YDtcbiAgcmlnaHQuaW5uZXJIVE1MID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICA8c3ZnIHdpZHRoPVwiMzZweFwiIGhlaWdodD1cIjM2cHhcIiB2aWV3Qm94PVwiMCAtNi41IDM2IDM2XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgXG4gICAgICA8dGl0bGU+cmlnaHQtYXJyb3c8L3RpdGxlPlxuICAgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG4gICAgICA8ZyBpZD1cImljb25zXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICA8ZyBpZD1cInJpZ2h0XCIgY2xhc3M9XCJhcnJvd3NcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM0Mi4wMDAwMDAsIC0xNTkuMDAwMDAwKVwiIGZpbGw9XCIjMjUyNTI4XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiPlxuICAgICAgICAgICAgICA8ZyBpZD1cInNxdWFyZS1maWxsZWRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTAuMDAwMDAwLCAxMjAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMTcuMTA4MDEyLDM5LjI5MDI4NTcgTDMyNy42NDk4MDQsNDkuNzQxNzA0MyBMMzI3LjcwODk5NCw0OS43OTU5MTY5IEMzMjcuODg5MTQxLDQ5Ljk3NDU1NDMgMzI3Ljk4NjE0Myw1MC4yMDQ0MTgyIDMyOCw1MC40MzgyMjI3IEwzMjgsNTAuNTYxNzc3MyBDMzI3Ljk4NjE0Myw1MC43OTU1ODE4IDMyNy44ODkxNDEsNTEuMDI1NDQ1NyAzMjcuNzA4OTk0LDUxLjIwNDA4MzEgTDMyNy42NTcxLDUxLjI0Nzk4MDMgTDMxNy4xMDgwMTIsNjEuNzA5NzE0MyBDMzE2LjcxNzY5NCw2Mi4wOTY3NjE5IDMxNi4wODQ4NjUsNjIuMDk2NzYxOSAzMTUuNjk0NTQ3LDYxLjcwOTcxNDMgQzMxNS4zMDQyMyw2MS4zMjI2NjY4IDMxNS4zMDQyMyw2MC42OTUxMzg3IDMxNS42OTQ1NDcsNjAuMzA4MDkxMSBMMzI0LjcwMjY2Niw1MS4zNzM4NDk2IEwyOTIuOTk5NDcsNTEuMzc0NjI5MSBDMjkyLjQ0NzQ3OCw1MS4zNzQ2MjkxIDI5Miw1MC45MzA4OTk3IDI5Miw1MC4zODM1MzE4IEMyOTIsNDkuODM2MTYzOSAyOTIuNDQ3NDc4LDQ5LjM5MjQzNDUgMjkyLjk5OTQ3LDQ5LjM5MjQzNDUgTDMyNC40Njc3OSw0OS4zOTE2NTUxIEwzMTUuNjk0NTQ3LDQwLjY5MTkwODkgQzMxNS4zMDQyMyw0MC4zMDQ4NjEzIDMxNS4zMDQyMywzOS42NzczMzMyIDMxNS42OTQ1NDcsMzkuMjkwMjg1NyBDMzE2LjA4NDg2NSwzOC45MDMyMzgxIDMxNi43MTc2OTQsMzguOTAzMjM4MSAzMTcuMTA4MDEyLDM5LjI5MDI4NTcgWiBNMzI3LjExNTM1Nyw1MC4zODI2OTMgTDMxNi40MDEyNzksNjEuMDA4OTAyNyBMMzI3LjAwMjE1MSw1MC41MDAyMDQ2IEwzMjcuMDAyMjUyLDUwLjQ5NjM3MTkgTDMyNi45NDMxNDIsNTAuNDQyNTg1IEwzMjYuODgyNzM3LDUwLjM4MjY5MyBMMzI3LjExNTM1Nyw1MC4zODI2OTMgWlwiIGlkPVwibGVmdC1hcnJvd1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTAuMDAwMDAwLCA1MC41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMxMC4wMDAwMDAsIC01MC41MDAwMDApIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgPC9zdmc+YDtcbn0pO1xuXG5jb25zdCBjcmVhdGVLZXlzID0gKGFycikgPT4ge1xuICBsZXQgaSA9IDA7XG5cbiAgY29uc3Qgcm93ID0gY3JlYXRlRWwoJ2RpdicsICdyb3cnKTtcblxuICB3aGlsZSAoaSA8IGFyci5sZW5ndGgpIHtcbiAgICBjb25zdCBrZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5cycpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycltpXSkpIHtcbiAgICAgIGtleS5zZXRBdHRyaWJ1dGUoJ2tleUVuJywgYXJyW2ldWzBdKTtcbiAgICAgIGtleS5zZXRBdHRyaWJ1dGUoJ2tleVJ1JywgYXJyW2ldWzFdKTtcbiAgICAgIGtleS5pbm5lckhUTUwgPSBrZXkuZ2V0QXR0cmlidXRlKCdrZXlFbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXkuaW5uZXJIVE1MID0gYXJyW2ldO1xuICAgIH1cbiAgICByb3cuYXBwZW5kQ2hpbGQoa2V5KTtcbiAgICBpKys7XG4gIH1cblxuICByZXR1cm4gcm93O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRWwodGFnLCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBpc01hY2ludG9zaCgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKCdNYWMnKSA+IC0xO1xufVxuXG5mdW5jdGlvbiBmaWxsS2V5cyhtYXApIHtcbiAgY29uc3Qgb2MgPSBpc01hY2ludG9zaCgpID8gJ01hYycgOiAnV2luJztcblxuICBtYXAuc2V0KCdyb3cxJywgY3JlYXRlS2V5cyhbWydgJywgJ9GRJ10sIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDAsICctJywgJz0nLCAnQmFja3NwYWNlJ10pKTtcbiAgbWFwLnNldChcbiAgICAncm93MicsXG4gICAgY3JlYXRlS2V5cyhbJ1RhYicsXG4gICAgICBbJ3EnLCAn0LknXSxcbiAgICAgIFsndycsICfRhiddLFxuICAgICAgWydlJywgJ9GDJ10sXG4gICAgICBbJ3InLCAn0LonXSxcbiAgICAgIFsndCcsICfQtSddLFxuICAgICAgWyd5JywgJ9C9J10sXG4gICAgICBbJ3UnLCAn0LMnXSxcbiAgICAgIFsnaScsICfRiCddLFxuICAgICAgWydvJywgJ9GJJ10sXG4gICAgICBbJ3AnLCAn0LcnXSxcbiAgICAgIFsnWycsICfRhSddLFxuICAgICAgWyddJywgJ9GKJ10sXG4gICAgICAnXFxcXCcsXG4gICAgICAnREVMJyxcbiAgICBdKSxcbiAgKTtcbiAgbWFwLnNldChcbiAgICAncm93MycsXG4gICAgY3JlYXRlS2V5cyhbXG4gICAgICAnQ2FwcyBMb2NrJyxcbiAgICAgIFsnYScsICfRhCddLFxuICAgICAgWydzJywgJ9GLJ10sXG4gICAgICBbJ2QnLCAn0LInXSxcbiAgICAgIFsnZicsICfQsCddLFxuICAgICAgWydnJywgJ9C/J10sXG4gICAgICBbJ2gnLCAn0YAnXSxcbiAgICAgIFsnaicsICfQviddLFxuICAgICAgWydrJywgJ9C7J10sXG4gICAgICBbJ2wnLCAn0LQnXSxcbiAgICAgIFsnOycsICfQtiddLFxuICAgICAgW1wiJ1wiLCAn0Y0nXSxcbiAgICAgICdFbnRlcicsXG4gICAgXSksXG4gICk7XG4gIG1hcC5zZXQoXG4gICAgJ3JvdzQnLFxuICAgIGNyZWF0ZUtleXMoW1xuICAgICAgJ1NoaWZ0JyxcbiAgICAgICcvJyxcbiAgICAgIFsneicsICfRjyddLFxuICAgICAgWyd4JywgJ9GHJ10sXG4gICAgICBbJ2MnLCAn0YEnXSxcbiAgICAgIFsndicsICfQvCddLFxuICAgICAgWydiJywgJ9C4J10sXG4gICAgICBbJ24nLCAn0YInXSxcbiAgICAgIFsnbScsICfRjCddLFxuICAgICAgWycuJywgJ9CxJ10sXG4gICAgICBbJywnLCAn0Y4nXSxcbiAgICAgICcvJyxcbiAgICAgICcnLFxuICAgICAgJ1NoaWZ0JyxcbiAgICBdKSxcbiAgKTtcbiAgbWFwLnNldChcbiAgICAncm93NScsXG4gICAgY3JlYXRlS2V5cyhbJ0N0cmwnLCBvYywgJ0FsdCcsICcnLCAnQWx0JywgJ0N0cmwnLCAnJywgJycsICcnXSksXG4gICk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zY3JpcHQvcmVuZGVyJztcbmltcG9ydCAnLi9zY3JpcHQvaW50ZXJhY3Rpb24nO1xuXG5yZXF1aXJlKCdub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==