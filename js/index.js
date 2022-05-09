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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixtREFBbUQ7QUFDbkQ7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkM7QUFDN0MsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdYQTtBQUNBLGlFQUFlLE9BQU8sRUFBQzs7QUFFdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxHQUFHOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxrQkFBa0Isa0JBQWtCO0FBQ3BDLCtDQUErQyxNQUFNO0FBQ3JEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNuUUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFDSjtBQUNLOztBQUU5QixtQkFBTyxDQUFDLCtFQUE2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jzcy8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3M/ZmI1NyIsIndlYnBhY2s6Ly9yc3MvLi9zcmMvbWFpbi9zdHlsZXMvaW5kZXguc2Nzcz8zN2U2Iiwid2VicGFjazovL3Jzcy8uL3NyYy9tYWluL3NjcmlwdC9pbnRlcmFjdGlvbi5qcyIsIndlYnBhY2s6Ly9yc3MvLi9zcmMvbWFpbi9zY3JpcHQvcmVuZGVyLmpzIiwid2VicGFjazovL3Jzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yc3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc3MvLi9zcmMvbWFpbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICBjb25zdCBrZXlCb2FyZFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmRfd3JhcHAnKTtcbiAgY29uc3QgdHh0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dC1maWVsZCcpO1xuICBjb25zdCBrZXlCb2FyZExpZ2h0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZF9saWdodHMnKTtcbiAgY29uc3QgY2hhbmdlTGlnaHRDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2VfbGlnaHRfY29sb3InKTtcbiAgY29uc3QgY29sb3JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvcnNfaW5wdXQnKTtcbiAgY29uc3QgdG9nZ2xlQ2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZV9jaXJjbGUnKTtcbiAgY29uc3QgbmlnaHRNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5pZ2h0X21vZGUnKTtcblxuICBjb25zdCB1cEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwJyk7XG4gIGNvbnN0IGRvd25BcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb3duJyk7XG4gIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0Jyk7XG4gIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQnKTtcbiAgY29uc3Qga2V5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXlzJyk7XG4gIGxldCBmb2N1cztcbiAgbGV0IGhpZ2hsaWdodCA9ICcnO1xuICBsZXQgbGFuZ3VhZ2UgPSAnZW4nO1xuXG4gIHNldEF0cnNmb3JLZXlzKGtleXMpO1xuXG4gIGNvbnN0IHNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwYWNlX2tleScpO1xuICBzcGFjZS5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnU3BhY2UnKTtcblxuICBjb25zdCBjYXBzTG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXBzX2xvY2tfa2V5Jyk7XG4gIGNhcHNMb2NrLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdDYXBzTG9jaycpO1xuXG4gIGNvbnN0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJfa2V5Jyk7XG4gIHRhYi5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnVGFiJyk7XG5cbiAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50ZXJfa2V5Jyk7XG4gIGVudGVyLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdFbnRlcicpO1xuXG4gIGNvbnN0IGJhY2tzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrc3BhY2Vfa2V5Jyk7XG4gIGJhY2tzcGFjZS5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQmFja3NwYWNlJyk7XG5cbiAgY29uc3Qgc2hpZnRMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnRfc2hpZnQnKTtcbiAgY29uc3Qgc2hpZnRSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodF9zaGlmdCcpO1xuICBzaGlmdExlZnQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ1NoaWZ0TGVmdCcpO1xuICBzaGlmdFJpZ2h0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdTaGlmdFJpZ2h0Jyk7XG5cbiAgY29uc3QgY3RybExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3RybF9sZWZ0Jyk7XG4gIGNvbnN0IGN0cmxSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdHJsX3JpZ2h0Jyk7XG4gIGN0cmxMZWZ0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdDb250cm9sTGVmdCcpO1xuICBjdHJsUmlnaHQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0NvbnRyb2xSaWdodCcpO1xuXG4gIGNvbnN0IGFsdExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWx0X2xlZnQnKTtcbiAgY29uc3QgYWx0UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWx0X3JpZ2h0Jyk7XG4gIGFsdExlZnQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0FsdExlZnQnKTtcbiAgYWx0UmlnaHQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0FsdFJpZ2h0Jyk7XG5cbiAgY29uc3QgZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbF9rZXknKTtcbiAgZGVsLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdEZWxldGUnKTtcblxuICBjb25zdCB1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cF9rZXknKTtcbiAgY29uc3QgZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3duX2tleScpO1xuICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnRfa2V5Jyk7XG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0X2tleScpO1xuXG4gIHVwLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBcnJvd1VwJyk7XG4gIHVwLmNsYXNzTGlzdC5hZGQoJ2FycicpO1xuICBkb3duLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBcnJvd0Rvd24nKTtcbiAgZG93bi5jbGFzc0xpc3QuYWRkKCdhcnInKTtcbiAgbGVmdC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQXJyb3dMZWZ0Jyk7XG4gIGxlZnQuY2xhc3NMaXN0LmFkZCgnYXJyJyk7XG4gIHJpZ2h0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBcnJvd1JpZ2h0Jyk7XG4gIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2FycicpO1xuXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlLWxhbmd1YWdlJykgJiYgbGFuZ3VhZ2UgIT09IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnKSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpKSB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhbmd1YWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnKVxuICAgICAgICB8fCBlLmNvZGUgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXluYW1lJylcbiAgICAgICkge1xuICAgICAgICBrZXlzW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gJ1NoaWZ0Jykge1xuICAgICAgZ2V0VXBwZXJDYXNlKGtleXMpO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdDb250cm9sJyB8fCBlLmtleSA9PT0gJ0FsdCcpIHtcbiAgICAgIGlmIChcbiAgICAgICAgKGNoZWNrQWN0aXZlKGN0cmxMZWZ0KSAmJiBjaGVja0FjdGl2ZShhbHRMZWZ0KSlcbiAgICAgICAgfHwgKGNoZWNrQWN0aXZlKGN0cmxSaWdodCkgJiYgY2hlY2tBY3RpdmUoYWx0UmlnaHQpKVxuICAgICAgKSB7XG4gICAgICAgIHRvZ2dsZUxhbmd1YWdlKGtleXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKVxuICAgICAgICB8fCBlLmNvZGUgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXluYW1lJylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nKVxuICAgICAgICB8fCBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScpXG4gICAgICApIHtcbiAgICAgICAga2V5c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAga2V5c1tpXS5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGtleXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlJyk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdTaGlmdCcpIHtcbiAgICAgIGdldExvd2VyQ2FzZShrZXlzKTtcbiAgICB9XG4gIH0pO1xuXG4gIG5pZ2h0TW9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVDaXJjbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBuaWdodE1vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAga2V5Qm9hcmRXcmFwLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIHR4dEZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGNoYW5nZUxpZ2h0Q29sb3IuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleXNbaV0uY2xhc3NMaXN0LnRvZ2dsZSgna2V5c19uaWdodCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29sb3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleXNbaV0uc3R5bGUuY29sb3IgPSBjb2xvcklucHV0LnZhbHVlO1xuICAgIH1cblxuICAgIHVwQXJyb3cuc3R5bGUuZmlsbCA9IGNvbG9ySW5wdXQudmFsdWU7XG4gICAgZG93bkFycm93LnN0eWxlLmZpbGwgPSBjb2xvcklucHV0LnZhbHVlO1xuICAgIGxlZnRBcnJvdy5zdHlsZS5maWxsID0gY29sb3JJbnB1dC52YWx1ZTtcbiAgICByaWdodEFycm93LnN0eWxlLmZpbGwgPSBjb2xvcklucHV0LnZhbHVlO1xuXG4gICAga2V5Qm9hcmRMaWdodHMuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9ySW5wdXQudmFsdWU7XG4gIH0pO1xuXG4gIHR4dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgIGlmICghZm9jdXMpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmb2N1cyA9IHRydWU7XG4gICAgICB9LCAyMDApO1xuICAgIH1cbiAgfSk7XG5cbiAgdHh0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBpZiAoZm9jdXMpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmb2N1cyA9IGZhbHNlO1xuICAgICAgfSwgMjAwKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmx1clwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIGtleUJvYXJkV3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGZvY3VzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdHh0RmllbGQuZm9jdXMoKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FycicpKSB7XG4gICAgICBpZiAoIWZvY3VzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmNsYXNzTGlzdDtcbiAgICAgIGlmICh0YXJnZXQuY29udGFpbnMoJ2xlZnQnKSkge1xuICAgICAgICBpZiAodHh0RmllbGQuc2VsZWN0aW9uU3RhcnQgPiAwKSB7XG4gICAgICAgICAgY29uc3QgaW5kID0gdHh0RmllbGQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgdHh0RmllbGQuc2VsZWN0aW9uU3RhcnQgPSB0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPSBpbmQgLSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldC5jb250YWlucygncmlnaHQnKSkge1xuICAgICAgICBjb25zdCBpbmQgPSB0eHRGaWVsZC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgaWYgKGluZCA8IHR4dEZpZWxkLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIHR4dEZpZWxkLnNlbGVjdGlvblN0YXJ0ID0gdHh0RmllbGQuc2VsZWN0aW9uRW5kID0gaW5kICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygna2V5cycpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHR4dEZpZWxkLmZvY3VzKCk7XG4gICAgbGV0IGtleW5hbWU7XG5cbiAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdrZXlOYW1lJykpIHtcbiAgICAgIGtleW5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2tleU5hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5bmFtZSA9IG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuaW5uZXJIVE1MO1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3BhY2Vfa2V5JykpIHtcbiAgICAgIHR4dEZpZWxkLnZhbHVlICs9ICcgJztcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHR4dEZpZWxkLnZhbHVlICs9IHRhcmdldDtcbiAgICB9IGVsc2UgaWYgKGtleW5hbWUgPT09ICdTaGlmdExlZnQnIHx8IGtleW5hbWUgPT09ICdTaGlmdFJpZ2h0JyB8fCBrZXluYW1lID09PSAnQ2Fwc0xvY2snKSB7XG4gICAgICB0b2dnbGVBY3RpdmUoZS50YXJnZXQpO1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgZ2V0VXBwZXJDYXNlKGtleXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0TG93ZXJDYXNlKGtleXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5bmFtZSA9PT0gJ1RhYicpIHtcbiAgICAgIHR4dEZpZWxkLnZhbHVlICs9ICcgICAgJztcbiAgICB9IGVsc2UgaWYgKGtleW5hbWUgPT09ICdCYWNrc3BhY2UnKSB7XG4gICAgICBpZiAodHh0RmllbGQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoaGlnaGxpZ2h0ID09PSAnJykge1xuICAgICAgICAgIHR4dEZpZWxkLnZhbHVlID0gcm1UeHQodHh0RmllbGQuc2VsZWN0aW9uRW5kIC0gMSwgdHh0RmllbGQudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR4dEZpZWxkLnZhbHVlID0gcm1UeHQoaGlnaGxpZ2h0LCB0eHRGaWVsZC52YWx1ZSk7XG4gICAgICAgICAgaGlnaGxpZ2h0ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50Lm9uc2VsZWN0aW9uY2hhbmdlID0gKCkgPT4ge1xuICAgIC8qY29uc3Qge1xuICAgICAgYW5jaG9yTm9kZSwgYW5jaG9yT2Zmc2V0LCBmb2N1c05vZGUsIGZvY3VzT2Zmc2V0LFxuICAgIH0gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcbiAgICBoaWdobGlnaHQgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpOyovXG4gIH07XG59KTtcblxuZnVuY3Rpb24gcm1UeHQodGFyZ2V0LCB0eHRWYWx1ZSkge1xuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdHh0VmFsdWUuc2xpY2UoMCwgdGFyZ2V0KTtcbiAgfVxuICBjb25zdCByZWdFeHAgPSAvdGFyZ2V0L2k7XG4gIHJldHVybiB0eHRWYWx1ZS5yZXBsYWNlKHJlZ0V4cCwgJycpO1xufVxuXG5mdW5jdGlvbiBnZXRVcHBlckNhc2Uoa2V5cykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpID09PSAnZW4nKSB7XG4gICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykgfHwga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleScpKSB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1JykgfHwga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleScpKSB7XG4gICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TG93ZXJDYXNlKGtleXMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXknKSkge1xuICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5Jyk7XG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlLWxhbmd1YWdlJykgPT09ICdlbicpIHtcbiAgICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKSkge1xuICAgICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1JykpIHtcbiAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1Jyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZShlbCkge1xuICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9IGVsc2Uge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrQWN0aXZlKGVsKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVMYW5ndWFnZShrZXlzKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlLWxhbmd1YWdlJykgPT09ICdlbicpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKSkge1xuICAgICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpO1xuICAgICAgfVxuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlLWxhbmd1YWdlJywgJ3J1Jyk7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykpIHtcbiAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScsICdlbicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEF0cnNmb3JLZXlzKGtleXMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpKSB7XG4gICAgICBrZXlzW2ldLnNldEF0dHJpYnV0ZShcbiAgICAgICAgJ1VwcGVyQ2FzZU5hbWVFbicsXG4gICAgICAgIGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpLnRvVXBwZXJDYXNlKCksXG4gICAgICApO1xuICAgICAga2V5c1tpXS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICdVcHBlckNhc2VOYW1lUnUnLFxuICAgICAgICBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBrZXlzWzFdLnNldEF0dHJpYnV0ZSgna2V5JywgJzEnKTtcbiAga2V5c1syXS5zZXRBdHRyaWJ1dGUoJ2tleScsICcyJyk7XG4gIGtleXNbM10uc2V0QXR0cmlidXRlKCdrZXknLCAnMycpO1xuICBrZXlzWzRdLnNldEF0dHJpYnV0ZSgna2V5JywgJzQnKTtcbiAga2V5c1s1XS5zZXRBdHRyaWJ1dGUoJ2tleScsICc1Jyk7XG4gIGtleXNbNl0uc2V0QXR0cmlidXRlKCdrZXknLCAnNicpO1xuICBrZXlzWzddLnNldEF0dHJpYnV0ZSgna2V5JywgJzcnKTtcbiAga2V5c1s4XS5zZXRBdHRyaWJ1dGUoJ2tleScsICc4Jyk7XG4gIGtleXNbOV0uc2V0QXR0cmlidXRlKCdrZXknLCAnOScpO1xuICBrZXlzWzEwXS5zZXRBdHRyaWJ1dGUoJ2tleScsICcwJyk7XG4gIGtleXNbMTFdLnNldEF0dHJpYnV0ZSgna2V5JywgJy0nKTtcbiAga2V5c1sxMl0uc2V0QXR0cmlidXRlKCdrZXknLCAnPScpO1xuXG4gIGtleXNbMF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnficpO1xuICBrZXlzWzFdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJyEnKTtcbiAga2V5c1syXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICdAJyk7XG4gIGtleXNbM10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnIycpO1xuICBrZXlzWzRdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJyQnKTtcbiAga2V5c1s1XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICclJyk7XG4gIGtleXNbNl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnXicpO1xuICBrZXlzWzddLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJyYnKTtcbiAga2V5c1s4XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICcqJyk7XG4gIGtleXNbOV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnKCcpO1xuICBrZXlzWzEwXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICcpJyk7XG4gIGtleXNbMTFdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ18nKTtcbiAga2V5c1sxMl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnKycpO1xuXG4gIGtleXNbMV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnIScpO1xuICBrZXlzWzJdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJ1wiJyk7XG4gIGtleXNbM10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAn4oSWJyk7XG4gIGtleXNbNF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnOycpO1xuICBrZXlzWzVdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJyUnKTtcbiAga2V5c1s2XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICc6Jyk7XG4gIGtleXNbN10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnPycpO1xuICBrZXlzWzhdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJyonKTtcbiAga2V5c1s5XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICcoJyk7XG4gIGtleXNbMTBdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJyknKTtcbiAga2V5c1sxMV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnLScpO1xuICBrZXlzWzEyXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICc9Jyk7XG5cbiAga2V5c1syNV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAneycpO1xuICBrZXlzWzI2XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICd9Jyk7XG5cbiAga2V5c1syN10uc2V0QXR0cmlidXRlKCdrZXknLCAnXFxcXCcpO1xuICBrZXlzWzI3XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICd8Jyk7XG4gIGtleXNbMjddLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJ3wnKTtcblxuICBrZXlzWzM5XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICc6Jyk7XG4gIGtleXNbNDBdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ1wiJyk7XG5cbiAga2V5c1s1MV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnPCcpO1xuICBrZXlzWzUyXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICc+Jyk7XG5cbiAga2V5c1s0M10uc2V0QXR0cmlidXRlKCdrZXknLCAnLycpO1xuICBrZXlzWzQzXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICcvJyk7XG4gIGtleXNbNDNdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJywnKTtcblxuICBrZXlzWzUzXS5zZXRBdHRyaWJ1dGUoJ2tleScsICcvJyk7XG4gIGtleXNbNTNdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJz8nKTtcbiAga2V5c1s1M10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnLicpO1xufVxuIiwiY29uc3Qga2V5c01hcCA9IG5ldyBNYXAoKTtcbmV4cG9ydCBkZWZhdWx0IGtleXNNYXA7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBmaWxsS2V5cyhrZXlzTWFwKTtcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbCgnZGl2JywgJ2NvbnRhaW5lcicpO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAnd3JhcHBlcicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgY29uc3QgdGV4dEFyZWEgPSBjcmVhdGVFbCgndGV4dGFyZWEnLCAndGV4dC1maWVsZCcpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgdGV4dEFyZWEucGxhY2Vob2xkZXIgPSAnSGVsbG8gdGhlcmUhIFxcbkVudGVyIHlvdSB0aG91Z2h0cy4uLic7XG5cbiAgY29uc3QgbmlnaHRNb2RlID0gY3JlYXRlRWwoJ2RpdicsICduaWdodF9tb2RlJyk7XG4gIG5pZ2h0TW9kZS5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9J3RvZ2dsZV9jaXJjbGUnPjwvZGl2PlwiO1xuXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQobmlnaHRNb2RlKTtcblxuICBjb25zdCBjaGFuZ2VMaWdodENvbG9yID0gY3JlYXRlRWwoJ2RpdicsICdjaGFuZ2VfbGlnaHRfY29sb3InKTtcbiAgY2hhbmdlTGlnaHRDb2xvci5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9J2NvbG9ycyc+PGlucHV0IHR5cGU9J2NvbG9yJyBjbGFzcz0nY29sb3JzX2lucHV0JyAvPjwvZGl2PlwiO1xuXG4gIGNvbnN0IG5vdGljZUhvd0NoYW5jZ2VMYW5ndWFnZSA9IGNyZWF0ZUVsKCdoMScsICd0aXRsZScpO1xuICBub3RpY2VIb3dDaGFuY2dlTGFuZ3VhZ2UuY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWxhbmd1YWdlX3RpdGxlJyk7XG4gIG5vdGljZUhvd0NoYW5jZ2VMYW5ndWFnZS5pbm5lckhUTUwgPSAnUHJlc3MgQ3RybCArIEFsdCB0byBjaGFuZ2UgbGFuZ3VhZ2UnO1xuXG4gIGNvbnN0IG5pZ2h0TW9kZVRpdGxlID0gY3JlYXRlRWwoJ2gyJywgJ3RpdGxlJyk7XG4gIG5pZ2h0TW9kZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ25pZ2h0TW9kZVRpdGxlX3RpdGxlJyk7XG4gIG5pZ2h0TW9kZVRpdGxlLmlubmVySFRNTCA9ICdOaWdodCBtb2RlJztcblxuICBjb25zdCBjaGFuZ2VDb2xvclRpdGxlID0gY3JlYXRlRWwoJ2gyJywgJ3RpdGxlJyk7XG4gIGNoYW5nZUNvbG9yVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2hhbmdlQ29sb3JUaXRsZV90aXRsZScpO1xuICBjaGFuZ2VDb2xvclRpdGxlLmlubmVySFRNTCA9ICdDaGFuZ2Uga2V5Ym9hcmQgY29sb3InO1xuXG4gIGNvbnN0IG9jVGl0bGUgPSBjcmVhdGVFbCgnaDInLCAndGl0bGUnKTtcbiAgY29uc3Qgb2MgPSBpc01hY2ludG9zaCgpID8gJ01hYyBPUycgOiAnV2luZG93cyc7XG4gIG9jVGl0bGUuY2xhc3NMaXN0LmFkZCgnb2NUaXRsZV90aXRsZScpO1xuICBvY1RpdGxlLmlubmVySFRNTCA9IGBNYWRlIGZvciAke29jfWA7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZChuaWdodE1vZGUpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGNoYW5nZUxpZ2h0Q29sb3IpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKG5vdGljZUhvd0NoYW5jZ2VMYW5ndWFnZSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQobmlnaHRNb2RlVGl0bGUpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGNoYW5nZUNvbG9yVGl0bGUpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKG9jVGl0bGUpO1xuXG4gIGNvbnN0IGtleUJvYXJkV3JhcCA9IGNyZWF0ZUVsKCdkaXYnLCAna2V5Ym9hcmRfd3JhcHAnKTtcbiAgY29uc3Qga2V5Ym9hcmRMaWdodHMgPSBjcmVhdGVFbCgnZGl2JywgJ2tleWJvYXJkX2xpZ2h0cycpO1xuICBjb25zdCBrZXlib2FyZEtleXNXciA9IGNyZWF0ZUVsKCdkaXYnLCAna2V5Ym9hcmRfa2V5cycpO1xuICBrZXlCb2FyZFdyYXAuYXBwZW5kQ2hpbGQoa2V5Ym9hcmRMaWdodHMpO1xuICBrZXlCb2FyZFdyYXAuYXBwZW5kQ2hpbGQoa2V5Ym9hcmRLZXlzV3IpO1xuXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoa2V5Qm9hcmRXcmFwKTtcblxuICBjb25zdCBrZXlib2FyZEtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmRfa2V5cycpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5c01hcC5zaXplOyBpKyspIHtcbiAgICBrZXlib2FyZEtleXMuYXBwZW5kQ2hpbGQoa2V5c01hcC5nZXQoYHJvdyR7aSArIDF9YCkpO1xuICB9XG5cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMF0ubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2JhY2tzcGFjZV9rZXknKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1sxXS5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ3RhYl9rZXknKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMV0ubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2RlbF9rZXknKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1syXS5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2NhcHNfbG9ja19rZXknKTtcbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMl0ubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2VudGVyX2tleScpO1xuXG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzNdLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcbiAgICAnc2hpZnRfa2V5JyxcbiAgICAnbGVmdF9zaGlmdCcsXG4gICk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzNdLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFxuICAgICdzaGlmdF9rZXknLFxuICAgICdyaWdodF9zaGlmdCcsXG4gICk7XG5cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdjdHJsX2tleScsICdjdHJsX2xlZnQnKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzJdLmNsYXNzTGlzdC5hZGQoXG4gICAgJ2FsdF9rZXknLFxuICAgICdhbHRfbGVmdCcsXG4gICk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbNF0uY2xhc3NMaXN0LmFkZChcbiAgICAnYWx0X2tleScsXG4gICAgJ2FsdF9yaWdodCcsXG4gICk7XG5cbiAgY29uc3Qgc3BhY2UgPSBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzNdO1xuICBzcGFjZS5jbGFzc0xpc3QuYWRkKCdzcGFjZV9rZXknKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzVdLmNsYXNzTGlzdC5hZGQoXG4gICAgJ2N0cmxfa2V5JyxcbiAgICAnY3RybF9yaWdodCcsXG4gICk7XG5cbiAgY29uc3QgdXAgPSBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1szXS5sYXN0Q2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICBjb25zdCBkb3duID0ga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1s3XTtcbiAgY29uc3QgbGVmdCA9IGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbNl07XG4gIGNvbnN0IHJpZ2h0ID0ga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1s4XTtcblxuICB1cC5jbGFzc0xpc3QuYWRkKCd1cF9rZXknLCAndXAnKTtcbiAgZG93bi5jbGFzc0xpc3QuYWRkKCdkb3duX2tleScsICdkb3duJyk7XG4gIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdF9rZXknLCAnbGVmdCcpO1xuICByaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodF9rZXknLCAncmlnaHQnKTtcblxuICB1cC5pbm5lckhUTUwgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gIDxzdmcgY2xhc3M9XCJhcnIgdXBcIiB3aWR0aD1cIjM2cHhcIiBoZWlnaHQ9XCIzNnB4XCIgdmlld0JveD1cIjAgLTYuNSAzNiAzNlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gIFxuICAgICAgPHRpdGxlPnVwLWFycm93PC90aXRsZT5cbiAgICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgICAgPGcgaWQ9XCJpY29uc1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgPGcgaWQ9XCJ1cFwiIGNsYXNzPVwiYXJyb3dzIGFyciB1cFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzQyLjAwMDAwMCwgLTE1OS4wMDAwMDApXCIgZmlsbD1cIiMyNTI1MjhcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCI+XG4gICAgICAgICAgICAgIDxnIGlkPVwic3F1YXJlLWZpbGxlZFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MC4wMDAwMDAsIDEyMC4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImFycm93cyBhcnIgdXBcIiBkPVwiTTMxNy4xMDgwMTIsMzkuMjkwMjg1NyBMMzI3LjY0OTgwNCw0OS43NDE3MDQzIEwzMjcuNzA4OTk0LDQ5Ljc5NTkxNjkgQzMyNy44ODkxNDEsNDkuOTc0NTU0MyAzMjcuOTg2MTQzLDUwLjIwNDQxODIgMzI4LDUwLjQzODIyMjcgTDMyOCw1MC41NjE3NzczIEMzMjcuOTg2MTQzLDUwLjc5NTU4MTggMzI3Ljg4OTE0MSw1MS4wMjU0NDU3IDMyNy43MDg5OTQsNTEuMjA0MDgzMSBMMzI3LjY1NzEsNTEuMjQ3OTgwMyBMMzE3LjEwODAxMiw2MS43MDk3MTQzIEMzMTYuNzE3Njk0LDYyLjA5Njc2MTkgMzE2LjA4NDg2NSw2Mi4wOTY3NjE5IDMxNS42OTQ1NDcsNjEuNzA5NzE0MyBDMzE1LjMwNDIzLDYxLjMyMjY2NjggMzE1LjMwNDIzLDYwLjY5NTEzODcgMzE1LjY5NDU0Nyw2MC4zMDgwOTExIEwzMjQuNzAyNjY2LDUxLjM3Mzg0OTYgTDI5Mi45OTk0Nyw1MS4zNzQ2MjkxIEMyOTIuNDQ3NDc4LDUxLjM3NDYyOTEgMjkyLDUwLjkzMDg5OTcgMjkyLDUwLjM4MzUzMTggQzI5Miw0OS44MzYxNjM5IDI5Mi40NDc0NzgsNDkuMzkyNDM0NSAyOTIuOTk5NDcsNDkuMzkyNDM0NSBMMzI0LjQ2Nzc5LDQ5LjM5MTY1NTEgTDMxNS42OTQ1NDcsNDAuNjkxOTA4OSBDMzE1LjMwNDIzLDQwLjMwNDg2MTMgMzE1LjMwNDIzLDM5LjY3NzMzMzIgMzE1LjY5NDU0NywzOS4yOTAyODU3IEMzMTYuMDg0ODY1LDM4LjkwMzIzODEgMzE2LjcxNzY5NCwzOC45MDMyMzgxIDMxNy4xMDgwMTIsMzkuMjkwMjg1NyBaIE0zMjcuMTE1MzU3LDUwLjM4MjY5MyBMMzE2LjQwMTI3OSw2MS4wMDg5MDI3IEwzMjcuMDAyMTUxLDUwLjUwMDIwNDYgTDMyNy4wMDIyNTIsNTAuNDk2MzcxOSBMMzI2Ljk0MzE0Miw1MC40NDI1ODUgTDMyNi44ODI3MzcsNTAuMzgyNjkzIEwzMjcuMTE1MzU3LDUwLjM4MjY5MyBaXCIgaWQ9XCJsZWZ0LWFycm93XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMxMC4wMDAwMDAsIDUwLjUwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMzEwLjAwMDAwMCwgLTUwLjUwMDAwMCkgXCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICA8L3N2Zz5gO1xuICBkb3duLmlubmVySFRNTCA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgPHN2ZyBjbGFzcz1cImFyciBkb3duXCIgd2lkdGg9XCIzNnB4XCIgaGVpZ2h0PVwiMzZweFwiIHZpZXdCb3g9XCIwIC02LjUgMzYgMzZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICBcbiAgICAgIDx0aXRsZT5kb3duLWFycm93PC90aXRsZT5cbiAgICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgICAgPGcgaWQ9XCJpY29uc1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgPGcgaWQ9XCJkb3duXCIgY2xhc3M9XCJhcnJvd3MgYXJyIGRvd25cIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM0Mi4wMDAwMDAsIC0xNTkuMDAwMDAwKVwiIGZpbGw9XCIjMjUyNTI4XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiPlxuICAgICAgICAgICAgICA8ZyBpZD1cInNxdWFyZS1maWxsZWRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTAuMDAwMDAwLCAxMjAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJhcnJvd3MgYXJyIGRvd25cIiBkPVwiTTMxNy4xMDgwMTIsMzkuMjkwMjg1NyBMMzI3LjY0OTgwNCw0OS43NDE3MDQzIEwzMjcuNzA4OTk0LDQ5Ljc5NTkxNjkgQzMyNy44ODkxNDEsNDkuOTc0NTU0MyAzMjcuOTg2MTQzLDUwLjIwNDQxODIgMzI4LDUwLjQzODIyMjcgTDMyOCw1MC41NjE3NzczIEMzMjcuOTg2MTQzLDUwLjc5NTU4MTggMzI3Ljg4OTE0MSw1MS4wMjU0NDU3IDMyNy43MDg5OTQsNTEuMjA0MDgzMSBMMzI3LjY1NzEsNTEuMjQ3OTgwMyBMMzE3LjEwODAxMiw2MS43MDk3MTQzIEMzMTYuNzE3Njk0LDYyLjA5Njc2MTkgMzE2LjA4NDg2NSw2Mi4wOTY3NjE5IDMxNS42OTQ1NDcsNjEuNzA5NzE0MyBDMzE1LjMwNDIzLDYxLjMyMjY2NjggMzE1LjMwNDIzLDYwLjY5NTEzODcgMzE1LjY5NDU0Nyw2MC4zMDgwOTExIEwzMjQuNzAyNjY2LDUxLjM3Mzg0OTYgTDI5Mi45OTk0Nyw1MS4zNzQ2MjkxIEMyOTIuNDQ3NDc4LDUxLjM3NDYyOTEgMjkyLDUwLjkzMDg5OTcgMjkyLDUwLjM4MzUzMTggQzI5Miw0OS44MzYxNjM5IDI5Mi40NDc0NzgsNDkuMzkyNDM0NSAyOTIuOTk5NDcsNDkuMzkyNDM0NSBMMzI0LjQ2Nzc5LDQ5LjM5MTY1NTEgTDMxNS42OTQ1NDcsNDAuNjkxOTA4OSBDMzE1LjMwNDIzLDQwLjMwNDg2MTMgMzE1LjMwNDIzLDM5LjY3NzMzMzIgMzE1LjY5NDU0NywzOS4yOTAyODU3IEMzMTYuMDg0ODY1LDM4LjkwMzIzODEgMzE2LjcxNzY5NCwzOC45MDMyMzgxIDMxNy4xMDgwMTIsMzkuMjkwMjg1NyBaIE0zMjcuMTE1MzU3LDUwLjM4MjY5MyBMMzE2LjQwMTI3OSw2MS4wMDg5MDI3IEwzMjcuMDAyMTUxLDUwLjUwMDIwNDYgTDMyNy4wMDIyNTIsNTAuNDk2MzcxOSBMMzI2Ljk0MzE0Miw1MC40NDI1ODUgTDMyNi44ODI3MzcsNTAuMzgyNjkzIEwzMjcuMTE1MzU3LDUwLjM4MjY5MyBaXCIgaWQ9XCJsZWZ0LWFycm93XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMxMC4wMDAwMDAsIDUwLjUwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMzEwLjAwMDAwMCwgLTUwLjUwMDAwMCkgXCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICA8L3N2Zz5gO1xuICBsZWZ0LmlubmVySFRNTCA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgPHN2ZyBjbGFzcz1cImFyciBsZWZ0XCIgd2lkdGg9XCIzNnB4XCIgaGVpZ2h0PVwiMzZweFwiIHZpZXdCb3g9XCIwIC02LjUgMzYgMzZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICBcbiAgICAgIDx0aXRsZT5sZWZ0LWFycm93PC90aXRsZT5cbiAgICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgICAgPGcgaWQ9XCJpY29uc1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgPGcgaWQ9XCJsZWZ0XCIgY2xhc3M9XCJhcnJvd3MgYXJyIGxlZnRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM0Mi4wMDAwMDAsIC0xNTkuMDAwMDAwKVwiIGZpbGw9XCIjMjUyNTI4XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiPlxuICAgICAgICAgICAgICA8ZyBpZD1cInNxdWFyZS1maWxsZWRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTAuMDAwMDAwLCAxMjAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJhcnJvd3MgYXJyIGxlZnRcIiBkPVwiTTMxNy4xMDgwMTIsMzkuMjkwMjg1NyBMMzI3LjY0OTgwNCw0OS43NDE3MDQzIEwzMjcuNzA4OTk0LDQ5Ljc5NTkxNjkgQzMyNy44ODkxNDEsNDkuOTc0NTU0MyAzMjcuOTg2MTQzLDUwLjIwNDQxODIgMzI4LDUwLjQzODIyMjcgTDMyOCw1MC41NjE3NzczIEMzMjcuOTg2MTQzLDUwLjc5NTU4MTggMzI3Ljg4OTE0MSw1MS4wMjU0NDU3IDMyNy43MDg5OTQsNTEuMjA0MDgzMSBMMzI3LjY1NzEsNTEuMjQ3OTgwMyBMMzE3LjEwODAxMiw2MS43MDk3MTQzIEMzMTYuNzE3Njk0LDYyLjA5Njc2MTkgMzE2LjA4NDg2NSw2Mi4wOTY3NjE5IDMxNS42OTQ1NDcsNjEuNzA5NzE0MyBDMzE1LjMwNDIzLDYxLjMyMjY2NjggMzE1LjMwNDIzLDYwLjY5NTEzODcgMzE1LjY5NDU0Nyw2MC4zMDgwOTExIEwzMjQuNzAyNjY2LDUxLjM3Mzg0OTYgTDI5Mi45OTk0Nyw1MS4zNzQ2MjkxIEMyOTIuNDQ3NDc4LDUxLjM3NDYyOTEgMjkyLDUwLjkzMDg5OTcgMjkyLDUwLjM4MzUzMTggQzI5Miw0OS44MzYxNjM5IDI5Mi40NDc0NzgsNDkuMzkyNDM0NSAyOTIuOTk5NDcsNDkuMzkyNDM0NSBMMzI0LjQ2Nzc5LDQ5LjM5MTY1NTEgTDMxNS42OTQ1NDcsNDAuNjkxOTA4OSBDMzE1LjMwNDIzLDQwLjMwNDg2MTMgMzE1LjMwNDIzLDM5LjY3NzMzMzIgMzE1LjY5NDU0NywzOS4yOTAyODU3IEMzMTYuMDg0ODY1LDM4LjkwMzIzODEgMzE2LjcxNzY5NCwzOC45MDMyMzgxIDMxNy4xMDgwMTIsMzkuMjkwMjg1NyBaIE0zMjcuMTE1MzU3LDUwLjM4MjY5MyBMMzE2LjQwMTI3OSw2MS4wMDg5MDI3IEwzMjcuMDAyMTUxLDUwLjUwMDIwNDYgTDMyNy4wMDIyNTIsNTAuNDk2MzcxOSBMMzI2Ljk0MzE0Miw1MC40NDI1ODUgTDMyNi44ODI3MzcsNTAuMzgyNjkzIEwzMjcuMTE1MzU3LDUwLjM4MjY5MyBaXCIgaWQ9XCJsZWZ0LWFycm93XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMxMC4wMDAwMDAsIDUwLjUwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMzEwLjAwMDAwMCwgLTUwLjUwMDAwMCkgXCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICA8L3N2Zz5gO1xuICByaWdodC5pbm5lckhUTUwgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gIDxzdmcgY2xhc3M9XCJhcnIgcmlnaHRcIiB3aWR0aD1cIjM2cHhcIiBoZWlnaHQ9XCIzNnB4XCIgdmlld0JveD1cIjAgLTYuNSAzNiAzNlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gIFxuICAgICAgPHRpdGxlPnJpZ2h0LWFycm93PC90aXRsZT5cbiAgICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgICAgPGcgaWQ9XCJpY29uc1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgPGcgaWQ9XCJyaWdodFwiIGNsYXNzPVwiYXJyb3dzIGFyciByaWdodFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzQyLjAwMDAwMCwgLTE1OS4wMDAwMDApXCIgZmlsbD1cIiMyNTI1MjhcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCI+XG4gICAgICAgICAgICAgIDxnIGlkPVwic3F1YXJlLWZpbGxlZFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MC4wMDAwMDAsIDEyMC4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImFycm93cyBhcnIgcmlnaHRcIiBkPVwiTTMxNy4xMDgwMTIsMzkuMjkwMjg1NyBMMzI3LjY0OTgwNCw0OS43NDE3MDQzIEwzMjcuNzA4OTk0LDQ5Ljc5NTkxNjkgQzMyNy44ODkxNDEsNDkuOTc0NTU0MyAzMjcuOTg2MTQzLDUwLjIwNDQxODIgMzI4LDUwLjQzODIyMjcgTDMyOCw1MC41NjE3NzczIEMzMjcuOTg2MTQzLDUwLjc5NTU4MTggMzI3Ljg4OTE0MSw1MS4wMjU0NDU3IDMyNy43MDg5OTQsNTEuMjA0MDgzMSBMMzI3LjY1NzEsNTEuMjQ3OTgwMyBMMzE3LjEwODAxMiw2MS43MDk3MTQzIEMzMTYuNzE3Njk0LDYyLjA5Njc2MTkgMzE2LjA4NDg2NSw2Mi4wOTY3NjE5IDMxNS42OTQ1NDcsNjEuNzA5NzE0MyBDMzE1LjMwNDIzLDYxLjMyMjY2NjggMzE1LjMwNDIzLDYwLjY5NTEzODcgMzE1LjY5NDU0Nyw2MC4zMDgwOTExIEwzMjQuNzAyNjY2LDUxLjM3Mzg0OTYgTDI5Mi45OTk0Nyw1MS4zNzQ2MjkxIEMyOTIuNDQ3NDc4LDUxLjM3NDYyOTEgMjkyLDUwLjkzMDg5OTcgMjkyLDUwLjM4MzUzMTggQzI5Miw0OS44MzYxNjM5IDI5Mi40NDc0NzgsNDkuMzkyNDM0NSAyOTIuOTk5NDcsNDkuMzkyNDM0NSBMMzI0LjQ2Nzc5LDQ5LjM5MTY1NTEgTDMxNS42OTQ1NDcsNDAuNjkxOTA4OSBDMzE1LjMwNDIzLDQwLjMwNDg2MTMgMzE1LjMwNDIzLDM5LjY3NzMzMzIgMzE1LjY5NDU0NywzOS4yOTAyODU3IEMzMTYuMDg0ODY1LDM4LjkwMzIzODEgMzE2LjcxNzY5NCwzOC45MDMyMzgxIDMxNy4xMDgwMTIsMzkuMjkwMjg1NyBaIE0zMjcuMTE1MzU3LDUwLjM4MjY5MyBMMzE2LjQwMTI3OSw2MS4wMDg5MDI3IEwzMjcuMDAyMTUxLDUwLjUwMDIwNDYgTDMyNy4wMDIyNTIsNTAuNDk2MzcxOSBMMzI2Ljk0MzE0Miw1MC40NDI1ODUgTDMyNi44ODI3MzcsNTAuMzgyNjkzIEwzMjcuMTE1MzU3LDUwLjM4MjY5MyBaXCIgaWQ9XCJsZWZ0LWFycm93XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMxMC4wMDAwMDAsIDUwLjUwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMzEwLjAwMDAwMCwgLTUwLjUwMDAwMCkgXCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICA8L3N2Zz5gO1xufSk7XG5cbmNvbnN0IGNyZWF0ZUtleXMgPSAoYXJyKSA9PiB7XG4gIGxldCBpID0gMDtcblxuICBjb25zdCByb3cgPSBjcmVhdGVFbCgnZGl2JywgJ3JvdycpO1xuXG4gIHdoaWxlIChpIDwgYXJyLmxlbmd0aCkge1xuICAgIGNvbnN0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXlzJyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyW2ldKSkge1xuICAgICAga2V5LnNldEF0dHJpYnV0ZSgna2V5RW4nLCBhcnJbaV1bMF0pO1xuICAgICAga2V5LnNldEF0dHJpYnV0ZSgna2V5UnUnLCBhcnJbaV1bMV0pO1xuICAgICAga2V5LmlubmVySFRNTCA9IGtleS5nZXRBdHRyaWJ1dGUoJ2tleUVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleS5pbm5lckhUTUwgPSBhcnJbaV07XG4gICAgfVxuICAgIHJvdy5hcHBlbmRDaGlsZChrZXkpO1xuICAgIGkrKztcbiAgfVxuXG4gIHJldHVybiByb3c7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVFbCh0YWcsIGNsYXNzTmFtZSkge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICByZXR1cm4gZWw7XG59XG5cbmZ1bmN0aW9uIGlzTWFjaW50b3NoKCkge1xuICByZXR1cm4gbmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoJ01hYycpID4gLTE7XG59XG5cbmZ1bmN0aW9uIGZpbGxLZXlzKG1hcCkge1xuICBjb25zdCBvYyA9IGlzTWFjaW50b3NoKCkgPyAnTWFjJyA6ICdXaW4nO1xuXG4gIG1hcC5zZXQoJ3JvdzEnLCBjcmVhdGVLZXlzKFtbJ2AnLCAn0ZEnXSwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMCwgJy0nLCAnPScsICdCYWNrc3BhY2UnXSkpO1xuICBtYXAuc2V0KFxuICAgICdyb3cyJyxcbiAgICBjcmVhdGVLZXlzKFsnVGFiJyxcbiAgICAgIFsncScsICfQuSddLFxuICAgICAgWyd3JywgJ9GGJ10sXG4gICAgICBbJ2UnLCAn0YMnXSxcbiAgICAgIFsncicsICfQuiddLFxuICAgICAgWyd0JywgJ9C1J10sXG4gICAgICBbJ3knLCAn0L0nXSxcbiAgICAgIFsndScsICfQsyddLFxuICAgICAgWydpJywgJ9GIJ10sXG4gICAgICBbJ28nLCAn0YknXSxcbiAgICAgIFsncCcsICfQtyddLFxuICAgICAgWydbJywgJ9GFJ10sXG4gICAgICBbJ10nLCAn0YonXSxcbiAgICAgICdcXFxcJyxcbiAgICAgICdERUwnLFxuICAgIF0pLFxuICApO1xuICBtYXAuc2V0KFxuICAgICdyb3czJyxcbiAgICBjcmVhdGVLZXlzKFtcbiAgICAgICdDYXBzIExvY2snLFxuICAgICAgWydhJywgJ9GEJ10sXG4gICAgICBbJ3MnLCAn0YsnXSxcbiAgICAgIFsnZCcsICfQsiddLFxuICAgICAgWydmJywgJ9CwJ10sXG4gICAgICBbJ2cnLCAn0L8nXSxcbiAgICAgIFsnaCcsICfRgCddLFxuICAgICAgWydqJywgJ9C+J10sXG4gICAgICBbJ2snLCAn0LsnXSxcbiAgICAgIFsnbCcsICfQtCddLFxuICAgICAgWyc7JywgJ9C2J10sXG4gICAgICBbXCInXCIsICfRjSddLFxuICAgICAgJ0VudGVyJyxcbiAgICBdKSxcbiAgKTtcbiAgbWFwLnNldChcbiAgICAncm93NCcsXG4gICAgY3JlYXRlS2V5cyhbXG4gICAgICAnU2hpZnQnLFxuICAgICAgJy8nLFxuICAgICAgWyd6JywgJ9GPJ10sXG4gICAgICBbJ3gnLCAn0YcnXSxcbiAgICAgIFsnYycsICfRgSddLFxuICAgICAgWyd2JywgJ9C8J10sXG4gICAgICBbJ2InLCAn0LgnXSxcbiAgICAgIFsnbicsICfRgiddLFxuICAgICAgWydtJywgJ9GMJ10sXG4gICAgICBbJy4nLCAn0LEnXSxcbiAgICAgIFsnLCcsICfRjiddLFxuICAgICAgJy8nLFxuICAgICAgJycsXG4gICAgICAnU2hpZnQnLFxuICAgIF0pLFxuICApO1xuICBtYXAuc2V0KFxuICAgICdyb3c1JyxcbiAgICBjcmVhdGVLZXlzKFsnQ3RybCcsIG9jLCAnQWx0JywgJycsICdBbHQnLCAnQ3RybCcsICcnLCAnJywgJyddKSxcbiAgKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3NjcmlwdC9yZW5kZXInO1xuaW1wb3J0ICcuL3NjcmlwdC9pbnRlcmFjdGlvbic7XG5cbnJlcXVpcmUoJ25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcycpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9