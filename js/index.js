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

  setAtrsforKeys(keys);

  const space = document.querySelector('.space_key');
  space.setAttribute('keyname', 'Space');

  const capsLock = document.querySelector('.caps_lock_key');
  capsLock.setAttribute('keyname', 'CapsLock');

  const language = document.querySelector('.language');
  language.setAttribute('active', 'en');

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
      getUpperCase(keys, language);
    }
    if (e.key === 'Control' || e.key === 'Alt') {
      if (
        (checkActive(ctrlLeft) && checkActive(altLeft))
        || (checkActive(ctrlRight) && checkActive(altRight))
      ) {
        toggleLanguage(language, keys);
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
      getLowerCase(keys, language);
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
        getUpperCase(keys, language);
      } else {
        getLowerCase(keys, language);
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

function getUpperCase(keys, language) {
  for (let i = 0; i < keys.length; i++) {
    if (language.getAttribute('active') === 'en') {
      if (keys[i].getAttribute('keyEn') || keys[i].getAttribute('key')) {
        keys[i].innerHTML = keys[i].getAttribute('UpperCaseNameEn');
      }
    } else if (keys[i].getAttribute('keyRu') || keys[i].getAttribute('key')) {
      keys[i].innerHTML = keys[i].getAttribute('UpperCaseNameRu');
    }
  }
}

function getLowerCase(keys, language) {
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].getAttribute('key')) {
      keys[i].innerHTML = keys[i].getAttribute('key');
    }
    if (language.getAttribute('active') === 'en') {
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

function toggleLanguage(language, keys) {
  if (language.getAttribute('active') === 'en') {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].getAttribute('keyEn')) {
        keys[i].innerHTML = keys[i].getAttribute('keyRu');
      }
    }
    language.setAttribute('active', 'ru');
  } else {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].getAttribute('keyEn')) {
        keys[i].innerHTML = keys[i].getAttribute('keyEn');
      }
    }
    language.setAttribute('active', 'en');
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

  const nightModeTitle = createEl('h2', 'itle');
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

  const language = keyboardKeys.childNodes[4].childNodes[1];
  language.classList.add('language');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdFFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ0o7QUFDSzs7QUFFOUIsbUJBQU8sQ0FBQywrRUFBNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc3MvLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzP2ZiNTciLCJ3ZWJwYWNrOi8vcnNzLy4vc3JjL21haW4vc3R5bGVzL2luZGV4LnNjc3M/MzdlNiIsIndlYnBhY2s6Ly9yc3MvLi9zcmMvbWFpbi9zY3JpcHQvaW50ZXJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNzLy4vc3JjL21haW4vc2NyaXB0L3JlbmRlci5qcyIsIndlYnBhY2s6Ly9yc3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jzcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNzLy4vc3JjL21haW4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Iiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgY29uc3Qga2V5Qm9hcmRXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkX3dyYXBwJyk7XG4gIGNvbnN0IHR4dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtZmllbGQnKTtcbiAgY29uc3Qga2V5Qm9hcmRMaWdodHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmRfbGlnaHRzJyk7XG4gIGNvbnN0IGNoYW5nZUxpZ2h0Q29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlX2xpZ2h0X2NvbG9yJyk7XG4gIGNvbnN0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3JzX2lucHV0Jyk7XG4gIGNvbnN0IHRvZ2dsZUNpcmNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGVfY2lyY2xlJyk7XG4gIGNvbnN0IG5pZ2h0TW9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaWdodF9tb2RlJyk7XG5cbiAgY29uc3QgdXBBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cCcpO1xuICBjb25zdCBkb3duQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG93bicpO1xuICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVmdCcpO1xuICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JpZ2h0Jyk7XG4gIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5cycpO1xuICBsZXQgZm9jdXM7XG4gIGxldCBoaWdobGlnaHQgPSAnJztcblxuICBzZXRBdHJzZm9yS2V5cyhrZXlzKTtcblxuICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGFjZV9rZXknKTtcbiAgc3BhY2Uuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ1NwYWNlJyk7XG5cbiAgY29uc3QgY2Fwc0xvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fwc19sb2NrX2tleScpO1xuICBjYXBzTG9jay5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQ2Fwc0xvY2snKTtcblxuICBjb25zdCBsYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5ndWFnZScpO1xuICBsYW5ndWFnZS5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICdlbicpO1xuXG4gIGNvbnN0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJfa2V5Jyk7XG4gIHRhYi5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnVGFiJyk7XG5cbiAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50ZXJfa2V5Jyk7XG4gIGVudGVyLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdFbnRlcicpO1xuXG4gIGNvbnN0IGJhY2tzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrc3BhY2Vfa2V5Jyk7XG4gIGJhY2tzcGFjZS5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQmFja3NwYWNlJyk7XG5cbiAgY29uc3Qgc2hpZnRMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnRfc2hpZnQnKTtcbiAgY29uc3Qgc2hpZnRSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodF9zaGlmdCcpO1xuICBzaGlmdExlZnQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ1NoaWZ0TGVmdCcpO1xuICBzaGlmdFJpZ2h0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdTaGlmdFJpZ2h0Jyk7XG5cbiAgY29uc3QgY3RybExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3RybF9sZWZ0Jyk7XG4gIGNvbnN0IGN0cmxSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdHJsX3JpZ2h0Jyk7XG4gIGN0cmxMZWZ0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdDb250cm9sTGVmdCcpO1xuICBjdHJsUmlnaHQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0NvbnRyb2xSaWdodCcpO1xuXG4gIGNvbnN0IGFsdExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWx0X2xlZnQnKTtcbiAgY29uc3QgYWx0UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWx0X3JpZ2h0Jyk7XG4gIGFsdExlZnQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0FsdExlZnQnKTtcbiAgYWx0UmlnaHQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0FsdFJpZ2h0Jyk7XG5cbiAgY29uc3QgZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbF9rZXknKTtcbiAgZGVsLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdEZWxldGUnKTtcblxuICBjb25zdCB1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cF9rZXknKTtcbiAgY29uc3QgZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3duX2tleScpO1xuICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnRfa2V5Jyk7XG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0X2tleScpO1xuXG4gIHVwLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBcnJvd1VwJyk7XG4gIGRvd24uc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0Fycm93RG93bicpO1xuICBsZWZ0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBcnJvd0xlZnQnKTtcbiAgcmlnaHQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0Fycm93UmlnaHQnKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKVxuICAgICAgICB8fCBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1JylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nKVxuICAgICAgICB8fCBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScpXG4gICAgICAgIHx8IGUuY29kZSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleW5hbWUnKVxuICAgICAgKSB7XG4gICAgICAgIGtleXNbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSAnU2hpZnQnKSB7XG4gICAgICBnZXRVcHBlckNhc2Uoa2V5cywgbGFuZ3VhZ2UpO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdDb250cm9sJyB8fCBlLmtleSA9PT0gJ0FsdCcpIHtcbiAgICAgIGlmIChcbiAgICAgICAgKGNoZWNrQWN0aXZlKGN0cmxMZWZ0KSAmJiBjaGVja0FjdGl2ZShhbHRMZWZ0KSlcbiAgICAgICAgfHwgKGNoZWNrQWN0aXZlKGN0cmxSaWdodCkgJiYgY2hlY2tBY3RpdmUoYWx0UmlnaHQpKVxuICAgICAgKSB7XG4gICAgICAgIHRvZ2dsZUxhbmd1YWdlKGxhbmd1YWdlLCBrZXlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKVxuICAgICAgICB8fCBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1JylcbiAgICAgICAgfHwgZS5jb2RlID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5bmFtZScpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnKVxuICAgICAgKSB7XG4gICAgICAgIGtleXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGtleXNbaV0uY2xhc3NMaXN0LmFkZCgncmVtb3ZlJyk7XG4gICAgICB9XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBrZXlzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZScpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAnU2hpZnQnKSB7XG4gICAgICBnZXRMb3dlckNhc2Uoa2V5cywgbGFuZ3VhZ2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgbmlnaHRNb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZ2dsZUNpcmNsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIG5pZ2h0TW9kZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBrZXlCb2FyZFdyYXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgdHh0RmllbGQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgY2hhbmdlTGlnaHRDb2xvci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5c1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdrZXlzX25pZ2h0Jyk7XG4gICAgfVxuICB9KTtcblxuICBjb2xvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5c1tpXS5zdHlsZS5jb2xvciA9IGNvbG9ySW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgdXBBcnJvdy5zdHlsZS5maWxsID0gY29sb3JJbnB1dC52YWx1ZTtcbiAgICBkb3duQXJyb3cuc3R5bGUuZmlsbCA9IGNvbG9ySW5wdXQudmFsdWU7XG4gICAgbGVmdEFycm93LnN0eWxlLmZpbGwgPSBjb2xvcklucHV0LnZhbHVlO1xuICAgIHJpZ2h0QXJyb3cuc3R5bGUuZmlsbCA9IGNvbG9ySW5wdXQudmFsdWU7XG5cbiAgICBrZXlCb2FyZExpZ2h0cy5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3JJbnB1dC52YWx1ZTtcbiAgfSk7XG5cbiAgdHh0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgaWYgKCFmb2N1cykge1xuICAgICAgZm9jdXMgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgdHh0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBpZiAoZm9jdXMpIHtcbiAgICAgIGZvY3VzID0gZmFsc2U7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImJsdXJcIik7XG4gICAgfVxuICB9KTtcblxuICBrZXlCb2FyZFdyYXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdrZXlzJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdHh0RmllbGQuZm9jdXMoKTtcbiAgICBsZXQga2V5bmFtZTtcblxuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2tleU5hbWUnKSkge1xuICAgICAga2V5bmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgna2V5TmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXluYW1lID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5pbm5lckhUTUw7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcGFjZV9rZXknKSkge1xuICAgICAgdHh0RmllbGQudmFsdWUgKz0gJyAnO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgdHh0RmllbGQudmFsdWUgKz0gdGFyZ2V0O1xuICAgIH0gZWxzZSBpZiAoa2V5bmFtZSA9PT0gJ1NoaWZ0TGVmdCcgfHwga2V5bmFtZSA9PT0gJ1NoaWZ0UmlnaHQnIHx8IGtleW5hbWUgPT09ICdDYXBzTG9jaycpIHtcbiAgICAgIHRvZ2dsZUFjdGl2ZShlLnRhcmdldCk7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBnZXRVcHBlckNhc2Uoa2V5cywgbGFuZ3VhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0TG93ZXJDYXNlKGtleXMsIGxhbmd1YWdlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleW5hbWUgPT09ICdUYWInKSB7XG4gICAgICB0eHRGaWVsZC52YWx1ZSArPSAnICAgICc7XG4gICAgfSBlbHNlIGlmIChrZXluYW1lID09PSAnQmFja3NwYWNlJykge1xuICAgICAgaWYgKHR4dEZpZWxkLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGhpZ2hsaWdodCA9PT0gJycpIHtcbiAgICAgICAgICB0eHRGaWVsZC52YWx1ZSA9IHJtVHh0KHR4dEZpZWxkLnNlbGVjdGlvbkVuZCAtIDEsIHR4dEZpZWxkLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eHRGaWVsZC52YWx1ZSA9IHJtVHh0KGhpZ2hsaWdodCwgdHh0RmllbGQudmFsdWUpO1xuICAgICAgICAgIGhpZ2hsaWdodCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBkb2N1bWVudC5vbnNlbGVjdGlvbmNoYW5nZSA9ICgpID0+IHtcbiAgICAvKmNvbnN0IHtcbiAgICAgIGFuY2hvck5vZGUsIGFuY2hvck9mZnNldCwgZm9jdXNOb2RlLCBmb2N1c09mZnNldCxcbiAgICB9ID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG4gICAgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTsqL1xuICB9O1xufSk7XG5cbmZ1bmN0aW9uIHJtVHh0KHRhcmdldCwgdHh0VmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHR4dFZhbHVlLnNsaWNlKDAsIHRhcmdldCk7XG4gIH1cbiAgY29uc3QgcmVnRXhwID0gL3RhcmdldC9pO1xuICByZXR1cm4gdHh0VmFsdWUucmVwbGFjZShyZWdFeHAsICcnKTtcbn1cblxuZnVuY3Rpb24gZ2V0VXBwZXJDYXNlKGtleXMsIGxhbmd1YWdlKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChsYW5ndWFnZS5nZXRBdHRyaWJ1dGUoJ2FjdGl2ZScpID09PSAnZW4nKSB7XG4gICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykgfHwga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleScpKSB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1JykgfHwga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleScpKSB7XG4gICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TG93ZXJDYXNlKGtleXMsIGxhbmd1YWdlKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5JykpIHtcbiAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleScpO1xuICAgIH1cbiAgICBpZiAobGFuZ3VhZ2UuZ2V0QXR0cmlidXRlKCdhY3RpdmUnKSA9PT0gJ2VuJykge1xuICAgICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpKSB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKSkge1xuICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlQWN0aXZlKGVsKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0gZWxzZSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tBY3RpdmUoZWwpIHtcbiAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUxhbmd1YWdlKGxhbmd1YWdlLCBrZXlzKSB7XG4gIGlmIChsYW5ndWFnZS5nZXRBdHRyaWJ1dGUoJ2FjdGl2ZScpID09PSAnZW4nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykpIHtcbiAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFuZ3VhZ2Uuc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAncnUnKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKSkge1xuICAgICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYW5ndWFnZS5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICdlbicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEF0cnNmb3JLZXlzKGtleXMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpKSB7XG4gICAgICBrZXlzW2ldLnNldEF0dHJpYnV0ZShcbiAgICAgICAgJ1VwcGVyQ2FzZU5hbWVFbicsXG4gICAgICAgIGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpLnRvVXBwZXJDYXNlKCksXG4gICAgICApO1xuICAgICAga2V5c1tpXS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICdVcHBlckNhc2VOYW1lUnUnLFxuICAgICAgICBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBrZXlzWzFdLnNldEF0dHJpYnV0ZSgna2V5JywgJzEnKTtcbiAga2V5c1syXS5zZXRBdHRyaWJ1dGUoJ2tleScsICcyJyk7XG4gIGtleXNbM10uc2V0QXR0cmlidXRlKCdrZXknLCAnMycpO1xuICBrZXlzWzRdLnNldEF0dHJpYnV0ZSgna2V5JywgJzQnKTtcbiAga2V5c1s1XS5zZXRBdHRyaWJ1dGUoJ2tleScsICc1Jyk7XG4gIGtleXNbNl0uc2V0QXR0cmlidXRlKCdrZXknLCAnNicpO1xuICBrZXlzWzddLnNldEF0dHJpYnV0ZSgna2V5JywgJzcnKTtcbiAga2V5c1s4XS5zZXRBdHRyaWJ1dGUoJ2tleScsICc4Jyk7XG4gIGtleXNbOV0uc2V0QXR0cmlidXRlKCdrZXknLCAnOScpO1xuICBrZXlzWzEwXS5zZXRBdHRyaWJ1dGUoJ2tleScsICcwJyk7XG4gIGtleXNbMTFdLnNldEF0dHJpYnV0ZSgna2V5JywgJy0nKTtcbiAga2V5c1sxMl0uc2V0QXR0cmlidXRlKCdrZXknLCAnPScpO1xuXG4gIGtleXNbMF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnficpO1xuICBrZXlzWzFdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJyEnKTtcbiAga2V5c1syXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICdAJyk7XG4gIGtleXNbM10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnIycpO1xuICBrZXlzWzRdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJyQnKTtcbiAga2V5c1s1XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICclJyk7XG4gIGtleXNbNl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnXicpO1xuICBrZXlzWzddLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJyYnKTtcbiAga2V5c1s4XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICcqJyk7XG4gIGtleXNbOV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnKCcpO1xuICBrZXlzWzEwXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICcpJyk7XG4gIGtleXNbMTFdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ18nKTtcbiAga2V5c1sxMl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnKycpO1xuXG4gIGtleXNbMV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnIScpO1xuICBrZXlzWzJdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJ1wiJyk7XG4gIGtleXNbM10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAn4oSWJyk7XG4gIGtleXNbNF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnOycpO1xuICBrZXlzWzVdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJyUnKTtcbiAga2V5c1s2XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICc6Jyk7XG4gIGtleXNbN10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnPycpO1xuICBrZXlzWzhdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJyonKTtcbiAga2V5c1s5XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICcoJyk7XG4gIGtleXNbMTBdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJyknKTtcbiAga2V5c1sxMV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnLScpO1xuICBrZXlzWzEyXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICc9Jyk7XG5cbiAga2V5c1syNV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAneycpO1xuICBrZXlzWzI2XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICd9Jyk7XG5cbiAga2V5c1syN10uc2V0QXR0cmlidXRlKCdrZXknLCAnXFxcXCcpO1xuICBrZXlzWzI3XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICd8Jyk7XG4gIGtleXNbMjddLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJ3wnKTtcblxuICBrZXlzWzM5XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICc6Jyk7XG4gIGtleXNbNDBdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ1wiJyk7XG5cbiAga2V5c1s1MV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnPCcpO1xuICBrZXlzWzUyXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICc+Jyk7XG5cbiAga2V5c1s0M10uc2V0QXR0cmlidXRlKCdrZXknLCAnLycpO1xuICBrZXlzWzQzXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICcvJyk7XG4gIGtleXNbNDNdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJywnKTtcblxuICBrZXlzWzUzXS5zZXRBdHRyaWJ1dGUoJ2tleScsICcvJyk7XG4gIGtleXNbNTNdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJz8nKTtcbiAga2V5c1s1M10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnLicpO1xufVxuIiwiY29uc3Qga2V5c01hcCA9IG5ldyBNYXAoKTtcbmV4cG9ydCBkZWZhdWx0IGtleXNNYXA7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBmaWxsS2V5cyhrZXlzTWFwKTtcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbCgnZGl2JywgJ2NvbnRhaW5lcicpO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAnd3JhcHBlcicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgY29uc3QgdGV4dEFyZWEgPSBjcmVhdGVFbCgndGV4dGFyZWEnLCAndGV4dC1maWVsZCcpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgdGV4dEFyZWEucGxhY2Vob2xkZXIgPSAnSGVsbG8gdGhlcmUhIFxcbkVudGVyIHlvdSB0aG91Z2h0cy4uLic7XG5cbiAgY29uc3QgbmlnaHRNb2RlID0gY3JlYXRlRWwoJ2RpdicsICduaWdodF9tb2RlJyk7XG4gIG5pZ2h0TW9kZS5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9J3RvZ2dsZV9jaXJjbGUnPjwvZGl2PlwiO1xuXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQobmlnaHRNb2RlKTtcblxuICBjb25zdCBjaGFuZ2VMaWdodENvbG9yID0gY3JlYXRlRWwoJ2RpdicsICdjaGFuZ2VfbGlnaHRfY29sb3InKTtcbiAgY2hhbmdlTGlnaHRDb2xvci5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9J2NvbG9ycyc+PGlucHV0IHR5cGU9J2NvbG9yJyBjbGFzcz0nY29sb3JzX2lucHV0JyAvPjwvZGl2PlwiO1xuXG4gIGNvbnN0IG5vdGljZUhvd0NoYW5jZ2VMYW5ndWFnZSA9IGNyZWF0ZUVsKCdoMScsICd0aXRsZScpO1xuICBub3RpY2VIb3dDaGFuY2dlTGFuZ3VhZ2UuY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWxhbmd1YWdlX3RpdGxlJyk7XG4gIG5vdGljZUhvd0NoYW5jZ2VMYW5ndWFnZS5pbm5lckhUTUwgPSAnUHJlc3MgQ3RybCArIEFsdCB0byBjaGFuZ2UgbGFuZ3VhZ2UnO1xuXG4gIGNvbnN0IG5pZ2h0TW9kZVRpdGxlID0gY3JlYXRlRWwoJ2gyJywgJ2l0bGUnKTtcbiAgbmlnaHRNb2RlVGl0bGUuY2xhc3NMaXN0LmFkZCgnbmlnaHRNb2RlVGl0bGVfdGl0bGUnKTtcbiAgbmlnaHRNb2RlVGl0bGUuaW5uZXJIVE1MID0gJ05pZ2h0IG1vZGUnO1xuXG4gIGNvbnN0IGNoYW5nZUNvbG9yVGl0bGUgPSBjcmVhdGVFbCgnaDInLCAndGl0bGUnKTtcbiAgY2hhbmdlQ29sb3JUaXRsZS5jbGFzc0xpc3QuYWRkKCdjaGFuZ2VDb2xvclRpdGxlX3RpdGxlJyk7XG4gIGNoYW5nZUNvbG9yVGl0bGUuaW5uZXJIVE1MID0gJ0NoYW5nZSBrZXlib2FyZCBjb2xvcic7XG5cbiAgY29uc3Qgb2NUaXRsZSA9IGNyZWF0ZUVsKCdoMicsICd0aXRsZScpO1xuICBjb25zdCBvYyA9IGlzTWFjaW50b3NoKCkgPyAnTWFjIE9TJyA6ICdXaW5kb3dzJztcbiAgb2NUaXRsZS5jbGFzc0xpc3QuYWRkKCdvY1RpdGxlX3RpdGxlJyk7XG4gIG9jVGl0bGUuaW5uZXJIVE1MID0gYE1hZGUgZm9yICR7b2N9YDtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKG5pZ2h0TW9kZSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hhbmdlTGlnaHRDb2xvcik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQobm90aWNlSG93Q2hhbmNnZUxhbmd1YWdlKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChuaWdodE1vZGVUaXRsZSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hhbmdlQ29sb3JUaXRsZSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQob2NUaXRsZSk7XG5cbiAgY29uc3Qga2V5Qm9hcmRXcmFwID0gY3JlYXRlRWwoJ2RpdicsICdrZXlib2FyZF93cmFwcCcpO1xuICBjb25zdCBrZXlib2FyZExpZ2h0cyA9IGNyZWF0ZUVsKCdkaXYnLCAna2V5Ym9hcmRfbGlnaHRzJyk7XG4gIGNvbnN0IGtleWJvYXJkS2V5c1dyID0gY3JlYXRlRWwoJ2RpdicsICdrZXlib2FyZF9rZXlzJyk7XG4gIGtleUJvYXJkV3JhcC5hcHBlbmRDaGlsZChrZXlib2FyZExpZ2h0cyk7XG4gIGtleUJvYXJkV3JhcC5hcHBlbmRDaGlsZChrZXlib2FyZEtleXNXcik7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZChrZXlCb2FyZFdyYXApO1xuXG4gIGNvbnN0IGtleWJvYXJkS2V5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZF9rZXlzJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzTWFwLnNpemU7IGkrKykge1xuICAgIGtleWJvYXJkS2V5cy5hcHBlbmRDaGlsZChrZXlzTWFwLmdldChgcm93JHtpICsgMX1gKSk7XG4gIH1cblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1swXS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYmFja3NwYWNlX2tleScpO1xuXG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzFdLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgndGFiX2tleScpO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1sxXS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnZGVsX2tleScpO1xuXG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzJdLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnY2Fwc19sb2NrX2tleScpO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1syXS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnZW50ZXJfa2V5Jyk7XG5cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbM10uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFxuICAgICdzaGlmdF9rZXknLFxuICAgICdsZWZ0X3NoaWZ0JyxcbiAgKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbM10ubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoXG4gICAgJ3NoaWZ0X2tleScsXG4gICAgJ3JpZ2h0X3NoaWZ0JyxcbiAgKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2N0cmxfa2V5JywgJ2N0cmxfbGVmdCcpO1xuXG4gIGNvbnN0IGxhbmd1YWdlID0ga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1sxXTtcbiAgbGFuZ3VhZ2UuY2xhc3NMaXN0LmFkZCgnbGFuZ3VhZ2UnKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzJdLmNsYXNzTGlzdC5hZGQoXG4gICAgJ2FsdF9rZXknLFxuICAgICdhbHRfbGVmdCcsXG4gICk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbNF0uY2xhc3NMaXN0LmFkZChcbiAgICAnYWx0X2tleScsXG4gICAgJ2FsdF9yaWdodCcsXG4gICk7XG5cbiAgY29uc3Qgc3BhY2UgPSBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzNdO1xuICBzcGFjZS5jbGFzc0xpc3QuYWRkKCdzcGFjZV9rZXknKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzVdLmNsYXNzTGlzdC5hZGQoXG4gICAgJ2N0cmxfa2V5JyxcbiAgICAnY3RybF9yaWdodCcsXG4gICk7XG5cbiAgY29uc3QgdXAgPSBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1szXS5sYXN0Q2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICBjb25zdCBkb3duID0ga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1s3XTtcbiAgY29uc3QgbGVmdCA9IGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbNl07XG4gIGNvbnN0IHJpZ2h0ID0ga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1s4XTtcblxuICB1cC5jbGFzc0xpc3QuYWRkKCd1cF9rZXknKTtcbiAgZG93bi5jbGFzc0xpc3QuYWRkKCdkb3duX2tleScpO1xuICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2xlZnRfa2V5Jyk7XG4gIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0X2tleScpO1xuXG4gIHVwLmlubmVySFRNTCA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgPHN2ZyB3aWR0aD1cIjM2cHhcIiBoZWlnaHQ9XCIzNnB4XCIgdmlld0JveD1cIjAgLTYuNSAzNiAzNlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gIFxuICAgICAgPHRpdGxlPnVwLWFycm93PC90aXRsZT5cbiAgICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgICAgPGcgaWQ9XCJpY29uc1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgPGcgaWQ9XCJ1cFwiIGNsYXNzPVwiYXJyb3dzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNDIuMDAwMDAwLCAtMTU5LjAwMDAwMClcIiBmaWxsPVwiIzI1MjUyOFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJzcXVhcmUtZmlsbGVkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwLjAwMDAwMCwgMTIwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzE3LjEwODAxMiwzOS4yOTAyODU3IEwzMjcuNjQ5ODA0LDQ5Ljc0MTcwNDMgTDMyNy43MDg5OTQsNDkuNzk1OTE2OSBDMzI3Ljg4OTE0MSw0OS45NzQ1NTQzIDMyNy45ODYxNDMsNTAuMjA0NDE4MiAzMjgsNTAuNDM4MjIyNyBMMzI4LDUwLjU2MTc3NzMgQzMyNy45ODYxNDMsNTAuNzk1NTgxOCAzMjcuODg5MTQxLDUxLjAyNTQ0NTcgMzI3LjcwODk5NCw1MS4yMDQwODMxIEwzMjcuNjU3MSw1MS4yNDc5ODAzIEwzMTcuMTA4MDEyLDYxLjcwOTcxNDMgQzMxNi43MTc2OTQsNjIuMDk2NzYxOSAzMTYuMDg0ODY1LDYyLjA5Njc2MTkgMzE1LjY5NDU0Nyw2MS43MDk3MTQzIEMzMTUuMzA0MjMsNjEuMzIyNjY2OCAzMTUuMzA0MjMsNjAuNjk1MTM4NyAzMTUuNjk0NTQ3LDYwLjMwODA5MTEgTDMyNC43MDI2NjYsNTEuMzczODQ5NiBMMjkyLjk5OTQ3LDUxLjM3NDYyOTEgQzI5Mi40NDc0NzgsNTEuMzc0NjI5MSAyOTIsNTAuOTMwODk5NyAyOTIsNTAuMzgzNTMxOCBDMjkyLDQ5LjgzNjE2MzkgMjkyLjQ0NzQ3OCw0OS4zOTI0MzQ1IDI5Mi45OTk0Nyw0OS4zOTI0MzQ1IEwzMjQuNDY3NzksNDkuMzkxNjU1MSBMMzE1LjY5NDU0Nyw0MC42OTE5MDg5IEMzMTUuMzA0MjMsNDAuMzA0ODYxMyAzMTUuMzA0MjMsMzkuNjc3MzMzMiAzMTUuNjk0NTQ3LDM5LjI5MDI4NTcgQzMxNi4wODQ4NjUsMzguOTAzMjM4MSAzMTYuNzE3Njk0LDM4LjkwMzIzODEgMzE3LjEwODAxMiwzOS4yOTAyODU3IFogTTMyNy4xMTUzNTcsNTAuMzgyNjkzIEwzMTYuNDAxMjc5LDYxLjAwODkwMjcgTDMyNy4wMDIxNTEsNTAuNTAwMjA0NiBMMzI3LjAwMjI1Miw1MC40OTYzNzE5IEwzMjYuOTQzMTQyLDUwLjQ0MjU4NSBMMzI2Ljg4MjczNyw1MC4zODI2OTMgTDMyNy4xMTUzNTcsNTAuMzgyNjkzIFpcIiBpZD1cImxlZnQtYXJyb3dcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzEwLjAwMDAwMCwgNTAuNTAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zMTAuMDAwMDAwLCAtNTAuNTAwMDAwKSBcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gIDwvc3ZnPmA7XG4gIGRvd24uaW5uZXJIVE1MID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICA8c3ZnIHdpZHRoPVwiMzZweFwiIGhlaWdodD1cIjM2cHhcIiB2aWV3Qm94PVwiMCAtNi41IDM2IDM2XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgXG4gICAgICA8dGl0bGU+ZG93bi1hcnJvdzwvdGl0bGU+XG4gICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICAgIDxnIGlkPVwiaWNvbnNcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgIDxnIGlkPVwiZG93blwiIGNsYXNzPVwiYXJyb3dzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNDIuMDAwMDAwLCAtMTU5LjAwMDAwMClcIiBmaWxsPVwiIzI1MjUyOFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJzcXVhcmUtZmlsbGVkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwLjAwMDAwMCwgMTIwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzE3LjEwODAxMiwzOS4yOTAyODU3IEwzMjcuNjQ5ODA0LDQ5Ljc0MTcwNDMgTDMyNy43MDg5OTQsNDkuNzk1OTE2OSBDMzI3Ljg4OTE0MSw0OS45NzQ1NTQzIDMyNy45ODYxNDMsNTAuMjA0NDE4MiAzMjgsNTAuNDM4MjIyNyBMMzI4LDUwLjU2MTc3NzMgQzMyNy45ODYxNDMsNTAuNzk1NTgxOCAzMjcuODg5MTQxLDUxLjAyNTQ0NTcgMzI3LjcwODk5NCw1MS4yMDQwODMxIEwzMjcuNjU3MSw1MS4yNDc5ODAzIEwzMTcuMTA4MDEyLDYxLjcwOTcxNDMgQzMxNi43MTc2OTQsNjIuMDk2NzYxOSAzMTYuMDg0ODY1LDYyLjA5Njc2MTkgMzE1LjY5NDU0Nyw2MS43MDk3MTQzIEMzMTUuMzA0MjMsNjEuMzIyNjY2OCAzMTUuMzA0MjMsNjAuNjk1MTM4NyAzMTUuNjk0NTQ3LDYwLjMwODA5MTEgTDMyNC43MDI2NjYsNTEuMzczODQ5NiBMMjkyLjk5OTQ3LDUxLjM3NDYyOTEgQzI5Mi40NDc0NzgsNTEuMzc0NjI5MSAyOTIsNTAuOTMwODk5NyAyOTIsNTAuMzgzNTMxOCBDMjkyLDQ5LjgzNjE2MzkgMjkyLjQ0NzQ3OCw0OS4zOTI0MzQ1IDI5Mi45OTk0Nyw0OS4zOTI0MzQ1IEwzMjQuNDY3NzksNDkuMzkxNjU1MSBMMzE1LjY5NDU0Nyw0MC42OTE5MDg5IEMzMTUuMzA0MjMsNDAuMzA0ODYxMyAzMTUuMzA0MjMsMzkuNjc3MzMzMiAzMTUuNjk0NTQ3LDM5LjI5MDI4NTcgQzMxNi4wODQ4NjUsMzguOTAzMjM4MSAzMTYuNzE3Njk0LDM4LjkwMzIzODEgMzE3LjEwODAxMiwzOS4yOTAyODU3IFogTTMyNy4xMTUzNTcsNTAuMzgyNjkzIEwzMTYuNDAxMjc5LDYxLjAwODkwMjcgTDMyNy4wMDIxNTEsNTAuNTAwMjA0NiBMMzI3LjAwMjI1Miw1MC40OTYzNzE5IEwzMjYuOTQzMTQyLDUwLjQ0MjU4NSBMMzI2Ljg4MjczNyw1MC4zODI2OTMgTDMyNy4xMTUzNTcsNTAuMzgyNjkzIFpcIiBpZD1cImxlZnQtYXJyb3dcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzEwLjAwMDAwMCwgNTAuNTAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zMTAuMDAwMDAwLCAtNTAuNTAwMDAwKSBcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gIDwvc3ZnPmA7XG4gIGxlZnQuaW5uZXJIVE1MID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICA8c3ZnIHdpZHRoPVwiMzZweFwiIGhlaWdodD1cIjM2cHhcIiB2aWV3Qm94PVwiMCAtNi41IDM2IDM2XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgXG4gICAgICA8dGl0bGU+bGVmdC1hcnJvdzwvdGl0bGU+XG4gICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICAgIDxnIGlkPVwiaWNvbnNcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgIDxnIGlkPVwibGVmdFwiIGNsYXNzPVwiYXJyb3dzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNDIuMDAwMDAwLCAtMTU5LjAwMDAwMClcIiBmaWxsPVwiIzI1MjUyOFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJzcXVhcmUtZmlsbGVkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwLjAwMDAwMCwgMTIwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzE3LjEwODAxMiwzOS4yOTAyODU3IEwzMjcuNjQ5ODA0LDQ5Ljc0MTcwNDMgTDMyNy43MDg5OTQsNDkuNzk1OTE2OSBDMzI3Ljg4OTE0MSw0OS45NzQ1NTQzIDMyNy45ODYxNDMsNTAuMjA0NDE4MiAzMjgsNTAuNDM4MjIyNyBMMzI4LDUwLjU2MTc3NzMgQzMyNy45ODYxNDMsNTAuNzk1NTgxOCAzMjcuODg5MTQxLDUxLjAyNTQ0NTcgMzI3LjcwODk5NCw1MS4yMDQwODMxIEwzMjcuNjU3MSw1MS4yNDc5ODAzIEwzMTcuMTA4MDEyLDYxLjcwOTcxNDMgQzMxNi43MTc2OTQsNjIuMDk2NzYxOSAzMTYuMDg0ODY1LDYyLjA5Njc2MTkgMzE1LjY5NDU0Nyw2MS43MDk3MTQzIEMzMTUuMzA0MjMsNjEuMzIyNjY2OCAzMTUuMzA0MjMsNjAuNjk1MTM4NyAzMTUuNjk0NTQ3LDYwLjMwODA5MTEgTDMyNC43MDI2NjYsNTEuMzczODQ5NiBMMjkyLjk5OTQ3LDUxLjM3NDYyOTEgQzI5Mi40NDc0NzgsNTEuMzc0NjI5MSAyOTIsNTAuOTMwODk5NyAyOTIsNTAuMzgzNTMxOCBDMjkyLDQ5LjgzNjE2MzkgMjkyLjQ0NzQ3OCw0OS4zOTI0MzQ1IDI5Mi45OTk0Nyw0OS4zOTI0MzQ1IEwzMjQuNDY3NzksNDkuMzkxNjU1MSBMMzE1LjY5NDU0Nyw0MC42OTE5MDg5IEMzMTUuMzA0MjMsNDAuMzA0ODYxMyAzMTUuMzA0MjMsMzkuNjc3MzMzMiAzMTUuNjk0NTQ3LDM5LjI5MDI4NTcgQzMxNi4wODQ4NjUsMzguOTAzMjM4MSAzMTYuNzE3Njk0LDM4LjkwMzIzODEgMzE3LjEwODAxMiwzOS4yOTAyODU3IFogTTMyNy4xMTUzNTcsNTAuMzgyNjkzIEwzMTYuNDAxMjc5LDYxLjAwODkwMjcgTDMyNy4wMDIxNTEsNTAuNTAwMjA0NiBMMzI3LjAwMjI1Miw1MC40OTYzNzE5IEwzMjYuOTQzMTQyLDUwLjQ0MjU4NSBMMzI2Ljg4MjczNyw1MC4zODI2OTMgTDMyNy4xMTUzNTcsNTAuMzgyNjkzIFpcIiBpZD1cImxlZnQtYXJyb3dcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzEwLjAwMDAwMCwgNTAuNTAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zMTAuMDAwMDAwLCAtNTAuNTAwMDAwKSBcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gIDwvc3ZnPmA7XG4gIHJpZ2h0LmlubmVySFRNTCA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgPHN2ZyB3aWR0aD1cIjM2cHhcIiBoZWlnaHQ9XCIzNnB4XCIgdmlld0JveD1cIjAgLTYuNSAzNiAzNlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gIFxuICAgICAgPHRpdGxlPnJpZ2h0LWFycm93PC90aXRsZT5cbiAgICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgICAgPGcgaWQ9XCJpY29uc1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgPGcgaWQ9XCJyaWdodFwiIGNsYXNzPVwiYXJyb3dzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNDIuMDAwMDAwLCAtMTU5LjAwMDAwMClcIiBmaWxsPVwiIzI1MjUyOFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJzcXVhcmUtZmlsbGVkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwLjAwMDAwMCwgMTIwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzE3LjEwODAxMiwzOS4yOTAyODU3IEwzMjcuNjQ5ODA0LDQ5Ljc0MTcwNDMgTDMyNy43MDg5OTQsNDkuNzk1OTE2OSBDMzI3Ljg4OTE0MSw0OS45NzQ1NTQzIDMyNy45ODYxNDMsNTAuMjA0NDE4MiAzMjgsNTAuNDM4MjIyNyBMMzI4LDUwLjU2MTc3NzMgQzMyNy45ODYxNDMsNTAuNzk1NTgxOCAzMjcuODg5MTQxLDUxLjAyNTQ0NTcgMzI3LjcwODk5NCw1MS4yMDQwODMxIEwzMjcuNjU3MSw1MS4yNDc5ODAzIEwzMTcuMTA4MDEyLDYxLjcwOTcxNDMgQzMxNi43MTc2OTQsNjIuMDk2NzYxOSAzMTYuMDg0ODY1LDYyLjA5Njc2MTkgMzE1LjY5NDU0Nyw2MS43MDk3MTQzIEMzMTUuMzA0MjMsNjEuMzIyNjY2OCAzMTUuMzA0MjMsNjAuNjk1MTM4NyAzMTUuNjk0NTQ3LDYwLjMwODA5MTEgTDMyNC43MDI2NjYsNTEuMzczODQ5NiBMMjkyLjk5OTQ3LDUxLjM3NDYyOTEgQzI5Mi40NDc0NzgsNTEuMzc0NjI5MSAyOTIsNTAuOTMwODk5NyAyOTIsNTAuMzgzNTMxOCBDMjkyLDQ5LjgzNjE2MzkgMjkyLjQ0NzQ3OCw0OS4zOTI0MzQ1IDI5Mi45OTk0Nyw0OS4zOTI0MzQ1IEwzMjQuNDY3NzksNDkuMzkxNjU1MSBMMzE1LjY5NDU0Nyw0MC42OTE5MDg5IEMzMTUuMzA0MjMsNDAuMzA0ODYxMyAzMTUuMzA0MjMsMzkuNjc3MzMzMiAzMTUuNjk0NTQ3LDM5LjI5MDI4NTcgQzMxNi4wODQ4NjUsMzguOTAzMjM4MSAzMTYuNzE3Njk0LDM4LjkwMzIzODEgMzE3LjEwODAxMiwzOS4yOTAyODU3IFogTTMyNy4xMTUzNTcsNTAuMzgyNjkzIEwzMTYuNDAxMjc5LDYxLjAwODkwMjcgTDMyNy4wMDIxNTEsNTAuNTAwMjA0NiBMMzI3LjAwMjI1Miw1MC40OTYzNzE5IEwzMjYuOTQzMTQyLDUwLjQ0MjU4NSBMMzI2Ljg4MjczNyw1MC4zODI2OTMgTDMyNy4xMTUzNTcsNTAuMzgyNjkzIFpcIiBpZD1cImxlZnQtYXJyb3dcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzEwLjAwMDAwMCwgNTAuNTAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zMTAuMDAwMDAwLCAtNTAuNTAwMDAwKSBcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gIDwvc3ZnPmA7XG59KTtcblxuY29uc3QgY3JlYXRlS2V5cyA9IChhcnIpID0+IHtcbiAgbGV0IGkgPSAwO1xuXG4gIGNvbnN0IHJvdyA9IGNyZWF0ZUVsKCdkaXYnLCAncm93Jyk7XG5cbiAgd2hpbGUgKGkgPCBhcnIubGVuZ3RoKSB7XG4gICAgY29uc3Qga2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleXMnKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnJbaV0pKSB7XG4gICAgICBrZXkuc2V0QXR0cmlidXRlKCdrZXlFbicsIGFycltpXVswXSk7XG4gICAgICBrZXkuc2V0QXR0cmlidXRlKCdrZXlSdScsIGFycltpXVsxXSk7XG4gICAgICBrZXkuaW5uZXJIVE1MID0ga2V5LmdldEF0dHJpYnV0ZSgna2V5RW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5LmlubmVySFRNTCA9IGFycltpXTtcbiAgICB9XG4gICAgcm93LmFwcGVuZENoaWxkKGtleSk7XG4gICAgaSsrO1xuICB9XG5cbiAgcmV0dXJuIHJvdztcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsKHRhZywgY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gaXNNYWNpbnRvc2goKSB7XG4gIHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm0uaW5kZXhPZignTWFjJykgPiAtMTtcbn1cblxuZnVuY3Rpb24gZmlsbEtleXMobWFwKSB7XG4gIGNvbnN0IG9jID0gaXNNYWNpbnRvc2goKSA/ICdNYWMnIDogJ1dpbic7XG5cbiAgbWFwLnNldCgncm93MScsIGNyZWF0ZUtleXMoW1snYCcsICfRkSddLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAwLCAnLScsICc9JywgJ0JhY2tzcGFjZSddKSk7XG4gIG1hcC5zZXQoXG4gICAgJ3JvdzInLFxuICAgIGNyZWF0ZUtleXMoWydUYWInLFxuICAgICAgWydxJywgJ9C5J10sXG4gICAgICBbJ3cnLCAn0YYnXSxcbiAgICAgIFsnZScsICfRgyddLFxuICAgICAgWydyJywgJ9C6J10sXG4gICAgICBbJ3QnLCAn0LUnXSxcbiAgICAgIFsneScsICfQvSddLFxuICAgICAgWyd1JywgJ9CzJ10sXG4gICAgICBbJ2knLCAn0YgnXSxcbiAgICAgIFsnbycsICfRiSddLFxuICAgICAgWydwJywgJ9C3J10sXG4gICAgICBbJ1snLCAn0YUnXSxcbiAgICAgIFsnXScsICfRiiddLFxuICAgICAgJ1xcXFwnLFxuICAgICAgJ0RFTCcsXG4gICAgXSksXG4gICk7XG4gIG1hcC5zZXQoXG4gICAgJ3JvdzMnLFxuICAgIGNyZWF0ZUtleXMoW1xuICAgICAgJ0NhcHMgTG9jaycsXG4gICAgICBbJ2EnLCAn0YQnXSxcbiAgICAgIFsncycsICfRiyddLFxuICAgICAgWydkJywgJ9CyJ10sXG4gICAgICBbJ2YnLCAn0LAnXSxcbiAgICAgIFsnZycsICfQvyddLFxuICAgICAgWydoJywgJ9GAJ10sXG4gICAgICBbJ2onLCAn0L4nXSxcbiAgICAgIFsnaycsICfQuyddLFxuICAgICAgWydsJywgJ9C0J10sXG4gICAgICBbJzsnLCAn0LYnXSxcbiAgICAgIFtcIidcIiwgJ9GNJ10sXG4gICAgICAnRW50ZXInLFxuICAgIF0pLFxuICApO1xuICBtYXAuc2V0KFxuICAgICdyb3c0JyxcbiAgICBjcmVhdGVLZXlzKFtcbiAgICAgICdTaGlmdCcsXG4gICAgICAnLycsXG4gICAgICBbJ3onLCAn0Y8nXSxcbiAgICAgIFsneCcsICfRhyddLFxuICAgICAgWydjJywgJ9GBJ10sXG4gICAgICBbJ3YnLCAn0LwnXSxcbiAgICAgIFsnYicsICfQuCddLFxuICAgICAgWyduJywgJ9GCJ10sXG4gICAgICBbJ20nLCAn0YwnXSxcbiAgICAgIFsnLicsICfQsSddLFxuICAgICAgWycsJywgJ9GOJ10sXG4gICAgICAnLycsXG4gICAgICAnJyxcbiAgICAgICdTaGlmdCcsXG4gICAgXSksXG4gICk7XG4gIG1hcC5zZXQoXG4gICAgJ3JvdzUnLFxuICAgIGNyZWF0ZUtleXMoWydDdHJsJywgb2MsICdBbHQnLCAnJywgJ0FsdCcsICdDdHJsJywgJycsICcnLCAnJ10pLFxuICApO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4vc2NyaXB0L3JlbmRlcic7XG5pbXBvcnQgJy4vc2NyaXB0L2ludGVyYWN0aW9uJztcblxucmVxdWlyZSgnbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=