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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDblFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ0o7QUFDSzs7QUFFOUIsbUJBQU8sQ0FBQywrRUFBNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc3MvLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzP2ZiNTciLCJ3ZWJwYWNrOi8vcnNzLy4vc3JjL21haW4vc3R5bGVzL2luZGV4LnNjc3M/MzdlNiIsIndlYnBhY2s6Ly9yc3MvLi9zcmMvbWFpbi9zY3JpcHQvaW50ZXJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnNzLy4vc3JjL21haW4vc2NyaXB0L3JlbmRlci5qcyIsIndlYnBhY2s6Ly9yc3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jzcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNzLy4vc3JjL21haW4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Iiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgY29uc3Qga2V5Qm9hcmRXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkX3dyYXBwJyk7XG4gIGNvbnN0IHR4dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtZmllbGQnKTtcbiAgY29uc3Qga2V5Qm9hcmRMaWdodHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmRfbGlnaHRzJyk7XG4gIGNvbnN0IGNoYW5nZUxpZ2h0Q29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlX2xpZ2h0X2NvbG9yJyk7XG4gIGNvbnN0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3JzX2lucHV0Jyk7XG4gIGNvbnN0IHRvZ2dsZUNpcmNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGVfY2lyY2xlJyk7XG4gIGNvbnN0IG5pZ2h0TW9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaWdodF9tb2RlJyk7XG5cbiAgY29uc3QgdXBBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cCcpO1xuICBjb25zdCBkb3duQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG93bicpO1xuICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVmdCcpO1xuICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JpZ2h0Jyk7XG4gIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5cycpO1xuICBsZXQgZm9jdXMgPSBmYWxzZTtcbiAgbGV0IGhpZ2hsaWdodCA9ICcnO1xuICBsZXQgbGFuZ3VhZ2UgPSAnZW4nO1xuXG4gIHNldEF0cnNmb3JLZXlzKGtleXMpO1xuXG4gIGNvbnN0IHNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwYWNlX2tleScpO1xuICBzcGFjZS5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnU3BhY2UnKTtcblxuICBjb25zdCBjYXBzTG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXBzX2xvY2tfa2V5Jyk7XG4gIGNhcHNMb2NrLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdDYXBzTG9jaycpO1xuXG4gIGNvbnN0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJfa2V5Jyk7XG4gIHRhYi5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnVGFiJyk7XG5cbiAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50ZXJfa2V5Jyk7XG4gIGVudGVyLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdFbnRlcicpO1xuXG4gIGNvbnN0IGJhY2tzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrc3BhY2Vfa2V5Jyk7XG4gIGJhY2tzcGFjZS5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQmFja3NwYWNlJyk7XG5cbiAgY29uc3Qgc2hpZnRMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnRfc2hpZnQnKTtcbiAgY29uc3Qgc2hpZnRSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodF9zaGlmdCcpO1xuICBzaGlmdExlZnQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ1NoaWZ0TGVmdCcpO1xuICBzaGlmdFJpZ2h0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdTaGlmdFJpZ2h0Jyk7XG5cbiAgY29uc3QgY3RybExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3RybF9sZWZ0Jyk7XG4gIGNvbnN0IGN0cmxSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdHJsX3JpZ2h0Jyk7XG4gIGN0cmxMZWZ0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdDb250cm9sTGVmdCcpO1xuICBjdHJsUmlnaHQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0NvbnRyb2xSaWdodCcpO1xuXG4gIGNvbnN0IGFsdExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWx0X2xlZnQnKTtcbiAgY29uc3QgYWx0UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWx0X3JpZ2h0Jyk7XG4gIGFsdExlZnQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0FsdExlZnQnKTtcbiAgYWx0UmlnaHQuc2V0QXR0cmlidXRlKCdrZXluYW1lJywgJ0FsdFJpZ2h0Jyk7XG5cbiAgY29uc3QgZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbF9rZXknKTtcbiAgZGVsLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdEZWxldGUnKTtcblxuICBjb25zdCB1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cF9rZXknKTtcbiAgY29uc3QgZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3duX2tleScpO1xuICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnRfa2V5Jyk7XG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0X2tleScpO1xuXG4gIHVwLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBcnJvd1VwJyk7XG4gIHVwLmNsYXNzTGlzdC5hZGQoJ2FycicpO1xuICBkb3duLnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBcnJvd0Rvd24nKTtcbiAgZG93bi5jbGFzc0xpc3QuYWRkKCdhcnInKTtcbiAgbGVmdC5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCAnQXJyb3dMZWZ0Jyk7XG4gIGxlZnQuY2xhc3NMaXN0LmFkZCgnYXJyJyk7XG4gIHJpZ2h0LnNldEF0dHJpYnV0ZSgna2V5bmFtZScsICdBcnJvd1JpZ2h0Jyk7XG4gIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2FycicpO1xuXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlLWxhbmd1YWdlJykgJiYgbGFuZ3VhZ2UgIT09IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnKSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpKSB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhbmd1YWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnKVxuICAgICAgICB8fCBlLmNvZGUgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXluYW1lJylcbiAgICAgICkge1xuICAgICAgICBrZXlzW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gJ1NoaWZ0Jykge1xuICAgICAgZ2V0VXBwZXJDYXNlKGtleXMpO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdDb250cm9sJyB8fCBlLmtleSA9PT0gJ0FsdCcpIHtcbiAgICAgIGlmIChcbiAgICAgICAgKGNoZWNrQWN0aXZlKGN0cmxMZWZ0KSAmJiBjaGVja0FjdGl2ZShhbHRMZWZ0KSlcbiAgICAgICAgfHwgKGNoZWNrQWN0aXZlKGN0cmxSaWdodCkgJiYgY2hlY2tBY3RpdmUoYWx0UmlnaHQpKVxuICAgICAgKSB7XG4gICAgICAgIHRvZ2dsZUxhbmd1YWdlKGtleXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpXG4gICAgICAgIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKVxuICAgICAgICB8fCBlLmNvZGUgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXluYW1lJylcbiAgICAgICAgfHwgZS5rZXkgPT09IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nKVxuICAgICAgICB8fCBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScpXG4gICAgICApIHtcbiAgICAgICAga2V5c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAga2V5c1tpXS5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGtleXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlJyk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdTaGlmdCcpIHtcbiAgICAgIGdldExvd2VyQ2FzZShrZXlzKTtcbiAgICB9XG4gIH0pO1xuXG4gIG5pZ2h0TW9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVDaXJjbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBuaWdodE1vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAga2V5Qm9hcmRXcmFwLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIHR4dEZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGNoYW5nZUxpZ2h0Q29sb3IuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleXNbaV0uY2xhc3NMaXN0LnRvZ2dsZSgna2V5c19uaWdodCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29sb3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleXNbaV0uc3R5bGUuY29sb3IgPSBjb2xvcklucHV0LnZhbHVlO1xuICAgIH1cblxuICAgIHVwQXJyb3cuc3R5bGUuZmlsbCA9IGNvbG9ySW5wdXQudmFsdWU7XG4gICAgZG93bkFycm93LnN0eWxlLmZpbGwgPSBjb2xvcklucHV0LnZhbHVlO1xuICAgIGxlZnRBcnJvdy5zdHlsZS5maWxsID0gY29sb3JJbnB1dC52YWx1ZTtcbiAgICByaWdodEFycm93LnN0eWxlLmZpbGwgPSBjb2xvcklucHV0LnZhbHVlO1xuXG4gICAga2V5Qm9hcmRMaWdodHMuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9ySW5wdXQudmFsdWU7XG4gIH0pO1xuXG4gIHR4dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgIGlmICghZm9jdXMpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmb2N1cyA9IHRydWU7XG4gICAgICB9LCAyMDApO1xuICAgIH1cbiAgfSk7XG5cbiAgdHh0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBpZiAoZm9jdXMpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmb2N1cyA9IGZhbHNlO1xuICAgICAgfSwgMjAwKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmx1clwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIGtleUJvYXJkV3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGZvY3VzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdHh0RmllbGQuZm9jdXMoKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYXJyJykpIHtcbiAgICAgIGlmICghZm9jdXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuY2xhc3NMaXN0O1xuICAgICAgaWYgKHRhcmdldC5jb250YWlucygnbGVmdCcpKSB7XG4gICAgICAgIGlmICh0eHRGaWVsZC5zZWxlY3Rpb25TdGFydCA+IDApIHtcbiAgICAgICAgICBjb25zdCBpbmQgPSB0eHRGaWVsZC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICB0eHRGaWVsZC5zZWxlY3Rpb25TdGFydCA9IHR4dEZpZWxkLnNlbGVjdGlvbkVuZCA9IGluZCAtIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNvbnRhaW5zKCdyaWdodCcpKSB7XG4gICAgICAgIGNvbnN0IGluZCA9IHR4dEZpZWxkLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICBpZiAoaW5kIDwgdHh0RmllbGQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgdHh0RmllbGQuc2VsZWN0aW9uU3RhcnQgPSB0eHRGaWVsZC5zZWxlY3Rpb25FbmQgPSBpbmQgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdrZXlzJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdHh0RmllbGQuZm9jdXMoKTtcbiAgICBsZXQga2V5bmFtZTtcblxuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2tleU5hbWUnKSkge1xuICAgICAga2V5bmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgna2V5TmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXluYW1lID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5pbm5lckhUTUw7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcGFjZV9rZXknKSkge1xuICAgICAgdHh0RmllbGQudmFsdWUgKz0gJyAnO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgdHh0RmllbGQudmFsdWUgKz0gdGFyZ2V0O1xuICAgIH0gZWxzZSBpZiAoa2V5bmFtZSA9PT0gJ1NoaWZ0TGVmdCcgfHwga2V5bmFtZSA9PT0gJ1NoaWZ0UmlnaHQnIHx8IGtleW5hbWUgPT09ICdDYXBzTG9jaycpIHtcbiAgICAgIHRvZ2dsZUFjdGl2ZShlLnRhcmdldCk7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBnZXRVcHBlckNhc2Uoa2V5cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRMb3dlckNhc2Uoa2V5cyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXluYW1lID09PSAnVGFiJykge1xuICAgICAgdHh0RmllbGQudmFsdWUgKz0gJyAgICAnO1xuICAgIH0gZWxzZSBpZiAoa2V5bmFtZSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgIGlmICh0eHRGaWVsZC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChoaWdobGlnaHQgPT09ICcnKSB7XG4gICAgICAgICAgdHh0RmllbGQudmFsdWUgPSBybVR4dCh0eHRGaWVsZC5zZWxlY3Rpb25FbmQgLSAxLCB0eHRGaWVsZC52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHh0RmllbGQudmFsdWUgPSBybVR4dChoaWdobGlnaHQsIHR4dEZpZWxkLnZhbHVlKTtcbiAgICAgICAgICBoaWdobGlnaHQgPSAnJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5bmFtZSA9PT0gJ0VudGVyJykge1xuICAgICAgdHh0RmllbGQudmFsdWUgKz0gJ1xcbic7XG4gICAgfSBlbHNlIGlmIChrZXluYW1lID09PSAnRGVsZXRlJykge1xuICAgICAgaWYgKHR4dEZpZWxkLnZhbHVlLmxlbmd0aCA+IDAgJiYgdHh0RmllbGQuc2VsZWN0aW9uRW5kIDwgdHh0RmllbGQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHR4dEZpZWxkLnZhbHVlID0gcm1UeHQodHh0RmllbGQuc2VsZWN0aW9uRW5kLCB0eHRGaWVsZC52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBkb2N1bWVudC5vbnNlbGVjdGlvbmNoYW5nZSA9ICgpID0+IHtcbiAgICAvKmNvbnN0IHtcbiAgICAgIGFuY2hvck5vZGUsIGFuY2hvck9mZnNldCwgZm9jdXNOb2RlLCBmb2N1c09mZnNldCxcbiAgICB9ID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG4gICAgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTsqL1xuICB9O1xufSk7XG5cbmZ1bmN0aW9uIHJtVHh0KHRhcmdldCwgdHh0VmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHR4dFZhbHVlLnNsaWNlKDAsIHRhcmdldCk7XG4gIH1cbiAgY29uc3QgcmVnRXhwID0gL3RhcmdldC9pO1xuICByZXR1cm4gdHh0VmFsdWUucmVwbGFjZShyZWdFeHAsICcnKTtcbn1cblxuZnVuY3Rpb24gZ2V0VXBwZXJDYXNlKGtleXMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnKSA9PT0gJ2VuJykge1xuICAgICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpIHx8IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXknKSkge1xuICAgICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpIHx8IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXknKSkge1xuICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1Jyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldExvd2VyQ2FzZShrZXlzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5JykpIHtcbiAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleScpO1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpID09PSAnZW4nKSB7XG4gICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykpIHtcbiAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpKSB7XG4gICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlSdScpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVBY3RpdmUoZWwpIHtcbiAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSBlbHNlIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0FjdGl2ZShlbCkge1xuICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTGFuZ3VhZ2Uoa2V5cykge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScpID09PSAnZW4nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoa2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJykpIHtcbiAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5UnUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZS1sYW5ndWFnZScsICdydScpO1xuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGtleXNbaV0uZ2V0QXR0cmlidXRlKCdrZXlFbicpKSB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleUVuJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmUtbGFuZ3VhZ2UnLCAnZW4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRBdHJzZm9yS2V5cyhrZXlzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKSkge1xuICAgICAga2V5c1tpXS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICdVcHBlckNhc2VOYW1lRW4nLFxuICAgICAgICBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5RW4nKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgKTtcbiAgICAgIGtleXNbaV0uc2V0QXR0cmlidXRlKFxuICAgICAgICAnVXBwZXJDYXNlTmFtZVJ1JyxcbiAgICAgICAga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleVJ1JykudG9VcHBlckNhc2UoKSxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAga2V5c1sxXS5zZXRBdHRyaWJ1dGUoJ2tleScsICcxJyk7XG4gIGtleXNbMl0uc2V0QXR0cmlidXRlKCdrZXknLCAnMicpO1xuICBrZXlzWzNdLnNldEF0dHJpYnV0ZSgna2V5JywgJzMnKTtcbiAga2V5c1s0XS5zZXRBdHRyaWJ1dGUoJ2tleScsICc0Jyk7XG4gIGtleXNbNV0uc2V0QXR0cmlidXRlKCdrZXknLCAnNScpO1xuICBrZXlzWzZdLnNldEF0dHJpYnV0ZSgna2V5JywgJzYnKTtcbiAga2V5c1s3XS5zZXRBdHRyaWJ1dGUoJ2tleScsICc3Jyk7XG4gIGtleXNbOF0uc2V0QXR0cmlidXRlKCdrZXknLCAnOCcpO1xuICBrZXlzWzldLnNldEF0dHJpYnV0ZSgna2V5JywgJzknKTtcbiAga2V5c1sxMF0uc2V0QXR0cmlidXRlKCdrZXknLCAnMCcpO1xuICBrZXlzWzExXS5zZXRBdHRyaWJ1dGUoJ2tleScsICctJyk7XG4gIGtleXNbMTJdLnNldEF0dHJpYnV0ZSgna2V5JywgJz0nKTtcblxuICBrZXlzWzBdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ34nKTtcbiAga2V5c1sxXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICchJyk7XG4gIGtleXNbMl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnQCcpO1xuICBrZXlzWzNdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJyMnKTtcbiAga2V5c1s0XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICckJyk7XG4gIGtleXNbNV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnJScpO1xuICBrZXlzWzZdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ14nKTtcbiAga2V5c1s3XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICcmJyk7XG4gIGtleXNbOF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnKicpO1xuICBrZXlzWzldLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJygnKTtcbiAga2V5c1sxMF0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnKScpO1xuICBrZXlzWzExXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICdfJyk7XG4gIGtleXNbMTJdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJysnKTtcblxuICBrZXlzWzFdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJyEnKTtcbiAga2V5c1syXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICdcIicpO1xuICBrZXlzWzNdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJ+KElicpO1xuICBrZXlzWzRdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJzsnKTtcbiAga2V5c1s1XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICclJyk7XG4gIGtleXNbNl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnOicpO1xuICBrZXlzWzddLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJz8nKTtcbiAga2V5c1s4XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICcqJyk7XG4gIGtleXNbOV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnKCcpO1xuICBrZXlzWzEwXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICcpJyk7XG4gIGtleXNbMTFdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJy0nKTtcbiAga2V5c1sxMl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lUnUnLCAnPScpO1xuXG4gIGtleXNbMjVdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJ3snKTtcbiAga2V5c1syNl0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnfScpO1xuXG4gIGtleXNbMjddLnNldEF0dHJpYnV0ZSgna2V5JywgJ1xcXFwnKTtcbiAga2V5c1syN10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnfCcpO1xuICBrZXlzWzI3XS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICd8Jyk7XG5cbiAga2V5c1szOV0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnOicpO1xuICBrZXlzWzQwXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICdcIicpO1xuXG4gIGtleXNbNTFdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZUVuJywgJzwnKTtcbiAga2V5c1s1Ml0uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnPicpO1xuXG4gIGtleXNbNDNdLnNldEF0dHJpYnV0ZSgna2V5JywgJy8nKTtcbiAga2V5c1s0M10uc2V0QXR0cmlidXRlKCdVcHBlckNhc2VOYW1lRW4nLCAnLycpO1xuICBrZXlzWzQzXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVSdScsICcsJyk7XG5cbiAga2V5c1s1M10uc2V0QXR0cmlidXRlKCdrZXknLCAnLycpO1xuICBrZXlzWzUzXS5zZXRBdHRyaWJ1dGUoJ1VwcGVyQ2FzZU5hbWVFbicsICc/Jyk7XG4gIGtleXNbNTNdLnNldEF0dHJpYnV0ZSgnVXBwZXJDYXNlTmFtZVJ1JywgJy4nKTtcbn1cbiIsImNvbnN0IGtleXNNYXAgPSBuZXcgTWFwKCk7XG5leHBvcnQgZGVmYXVsdCBrZXlzTWFwO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgZmlsbEtleXMoa2V5c01hcCk7XG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsICdjb250YWluZXInKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVFbCgnZGl2JywgJ3dyYXBwZXInKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gIGNvbnN0IHRleHRBcmVhID0gY3JlYXRlRWwoJ3RleHRhcmVhJywgJ3RleHQtZmllbGQnKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gIHRleHRBcmVhLnBsYWNlaG9sZGVyID0gJ0hlbGxvIHRoZXJlISBcXG5FbnRlciB5b3UgdGhvdWdodHMuLi4nO1xuXG4gIGNvbnN0IG5pZ2h0TW9kZSA9IGNyZWF0ZUVsKCdkaXYnLCAnbmlnaHRfbW9kZScpO1xuICBuaWdodE1vZGUuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPSd0b2dnbGVfY2lyY2xlJz48L2Rpdj5cIjtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKG5pZ2h0TW9kZSk7XG5cbiAgY29uc3QgY2hhbmdlTGlnaHRDb2xvciA9IGNyZWF0ZUVsKCdkaXYnLCAnY2hhbmdlX2xpZ2h0X2NvbG9yJyk7XG4gIGNoYW5nZUxpZ2h0Q29sb3IuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPSdjb2xvcnMnPjxpbnB1dCB0eXBlPSdjb2xvcicgY2xhc3M9J2NvbG9yc19pbnB1dCcgLz48L2Rpdj5cIjtcblxuICBjb25zdCBub3RpY2VIb3dDaGFuY2dlTGFuZ3VhZ2UgPSBjcmVhdGVFbCgnaDEnLCAndGl0bGUnKTtcbiAgbm90aWNlSG93Q2hhbmNnZUxhbmd1YWdlLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZS1sYW5ndWFnZV90aXRsZScpO1xuICBub3RpY2VIb3dDaGFuY2dlTGFuZ3VhZ2UuaW5uZXJIVE1MID0gJ1ByZXNzIEN0cmwgKyBBbHQgdG8gY2hhbmdlIGxhbmd1YWdlJztcblxuICBjb25zdCBuaWdodE1vZGVUaXRsZSA9IGNyZWF0ZUVsKCdoMicsICd0aXRsZScpO1xuICBuaWdodE1vZGVUaXRsZS5jbGFzc0xpc3QuYWRkKCduaWdodE1vZGVUaXRsZV90aXRsZScpO1xuICBuaWdodE1vZGVUaXRsZS5pbm5lckhUTUwgPSAnTmlnaHQgbW9kZSc7XG5cbiAgY29uc3QgY2hhbmdlQ29sb3JUaXRsZSA9IGNyZWF0ZUVsKCdoMicsICd0aXRsZScpO1xuICBjaGFuZ2VDb2xvclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZUNvbG9yVGl0bGVfdGl0bGUnKTtcbiAgY2hhbmdlQ29sb3JUaXRsZS5pbm5lckhUTUwgPSAnQ2hhbmdlIGtleWJvYXJkIGNvbG9yJztcblxuICBjb25zdCBvY1RpdGxlID0gY3JlYXRlRWwoJ2gyJywgJ3RpdGxlJyk7XG4gIGNvbnN0IG9jID0gaXNNYWNpbnRvc2goKSA/ICdNYWMgT1MnIDogJ1dpbmRvd3MnO1xuICBvY1RpdGxlLmNsYXNzTGlzdC5hZGQoJ29jVGl0bGVfdGl0bGUnKTtcbiAgb2NUaXRsZS5pbm5lckhUTUwgPSBgTWFkZSBmb3IgJHtvY31gO1xuXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQobmlnaHRNb2RlKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChjaGFuZ2VMaWdodENvbG9yKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChub3RpY2VIb3dDaGFuY2dlTGFuZ3VhZ2UpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKG5pZ2h0TW9kZVRpdGxlKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChjaGFuZ2VDb2xvclRpdGxlKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChvY1RpdGxlKTtcblxuICBjb25zdCBrZXlCb2FyZFdyYXAgPSBjcmVhdGVFbCgnZGl2JywgJ2tleWJvYXJkX3dyYXBwJyk7XG4gIGNvbnN0IGtleWJvYXJkTGlnaHRzID0gY3JlYXRlRWwoJ2RpdicsICdrZXlib2FyZF9saWdodHMnKTtcbiAgY29uc3Qga2V5Ym9hcmRLZXlzV3IgPSBjcmVhdGVFbCgnZGl2JywgJ2tleWJvYXJkX2tleXMnKTtcbiAga2V5Qm9hcmRXcmFwLmFwcGVuZENoaWxkKGtleWJvYXJkTGlnaHRzKTtcbiAga2V5Qm9hcmRXcmFwLmFwcGVuZENoaWxkKGtleWJvYXJkS2V5c1dyKTtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGtleUJvYXJkV3JhcCk7XG5cbiAgY29uc3Qga2V5Ym9hcmRLZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkX2tleXMnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNNYXAuc2l6ZTsgaSsrKSB7XG4gICAga2V5Ym9hcmRLZXlzLmFwcGVuZENoaWxkKGtleXNNYXAuZ2V0KGByb3cke2kgKyAxfWApKTtcbiAgfVxuXG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzBdLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdiYWNrc3BhY2Vfa2V5Jyk7XG5cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMV0uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCd0YWJfa2V5Jyk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzFdLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdkZWxfa2V5Jyk7XG5cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbMl0uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdjYXBzX2xvY2tfa2V5Jyk7XG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzJdLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdlbnRlcl9rZXknKTtcblxuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1szXS5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoXG4gICAgJ3NoaWZ0X2tleScsXG4gICAgJ2xlZnRfc2hpZnQnLFxuICApO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1szXS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcbiAgICAnc2hpZnRfa2V5JyxcbiAgICAncmlnaHRfc2hpZnQnLFxuICApO1xuXG4gIGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnY3RybF9rZXknLCAnY3RybF9sZWZ0Jyk7XG5cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QuYWRkKFxuICAgICdhbHRfa2V5JyxcbiAgICAnYWx0X2xlZnQnLFxuICApO1xuICBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzRdLmNsYXNzTGlzdC5hZGQoXG4gICAgJ2FsdF9rZXknLFxuICAgICdhbHRfcmlnaHQnLFxuICApO1xuXG4gIGNvbnN0IHNwYWNlID0ga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1szXTtcbiAgc3BhY2UuY2xhc3NMaXN0LmFkZCgnc3BhY2Vfa2V5Jyk7XG5cbiAga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1s1XS5jbGFzc0xpc3QuYWRkKFxuICAgICdjdHJsX2tleScsXG4gICAgJ2N0cmxfcmlnaHQnLFxuICApO1xuXG4gIGNvbnN0IHVwID0ga2V5Ym9hcmRLZXlzLmNoaWxkTm9kZXNbM10ubGFzdENoaWxkLnByZXZpb3VzU2libGluZztcbiAgY29uc3QgZG93biA9IGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbN107XG4gIGNvbnN0IGxlZnQgPSBrZXlib2FyZEtleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzZdO1xuICBjb25zdCByaWdodCA9IGtleWJvYXJkS2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbOF07XG5cbiAgdXAuY2xhc3NMaXN0LmFkZCgndXBfa2V5JywgJ3VwJyk7XG4gIGRvd24uY2xhc3NMaXN0LmFkZCgnZG93bl9rZXknLCAnZG93bicpO1xuICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2xlZnRfa2V5JywgJ2xlZnQnKTtcbiAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHRfa2V5JywgJ3JpZ2h0Jyk7XG5cbiAgdXAuaW5uZXJIVE1MID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICA8c3ZnIGNsYXNzPVwiYXJyIHVwXCIgd2lkdGg9XCIzNnB4XCIgaGVpZ2h0PVwiMzZweFwiIHZpZXdCb3g9XCIwIC02LjUgMzYgMzZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICBcbiAgICAgIDx0aXRsZT51cC1hcnJvdzwvdGl0bGU+XG4gICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICAgIDxnIGlkPVwiaWNvbnNcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgIDxnIGlkPVwidXBcIiBjbGFzcz1cImFycm93cyBhcnIgdXBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM0Mi4wMDAwMDAsIC0xNTkuMDAwMDAwKVwiIGZpbGw9XCIjMjUyNTI4XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiPlxuICAgICAgICAgICAgICA8ZyBpZD1cInNxdWFyZS1maWxsZWRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTAuMDAwMDAwLCAxMjAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJhcnJvd3MgYXJyIHVwXCIgZD1cIk0zMTcuMTA4MDEyLDM5LjI5MDI4NTcgTDMyNy42NDk4MDQsNDkuNzQxNzA0MyBMMzI3LjcwODk5NCw0OS43OTU5MTY5IEMzMjcuODg5MTQxLDQ5Ljk3NDU1NDMgMzI3Ljk4NjE0Myw1MC4yMDQ0MTgyIDMyOCw1MC40MzgyMjI3IEwzMjgsNTAuNTYxNzc3MyBDMzI3Ljk4NjE0Myw1MC43OTU1ODE4IDMyNy44ODkxNDEsNTEuMDI1NDQ1NyAzMjcuNzA4OTk0LDUxLjIwNDA4MzEgTDMyNy42NTcxLDUxLjI0Nzk4MDMgTDMxNy4xMDgwMTIsNjEuNzA5NzE0MyBDMzE2LjcxNzY5NCw2Mi4wOTY3NjE5IDMxNi4wODQ4NjUsNjIuMDk2NzYxOSAzMTUuNjk0NTQ3LDYxLjcwOTcxNDMgQzMxNS4zMDQyMyw2MS4zMjI2NjY4IDMxNS4zMDQyMyw2MC42OTUxMzg3IDMxNS42OTQ1NDcsNjAuMzA4MDkxMSBMMzI0LjcwMjY2Niw1MS4zNzM4NDk2IEwyOTIuOTk5NDcsNTEuMzc0NjI5MSBDMjkyLjQ0NzQ3OCw1MS4zNzQ2MjkxIDI5Miw1MC45MzA4OTk3IDI5Miw1MC4zODM1MzE4IEMyOTIsNDkuODM2MTYzOSAyOTIuNDQ3NDc4LDQ5LjM5MjQzNDUgMjkyLjk5OTQ3LDQ5LjM5MjQzNDUgTDMyNC40Njc3OSw0OS4zOTE2NTUxIEwzMTUuNjk0NTQ3LDQwLjY5MTkwODkgQzMxNS4zMDQyMyw0MC4zMDQ4NjEzIDMxNS4zMDQyMywzOS42NzczMzMyIDMxNS42OTQ1NDcsMzkuMjkwMjg1NyBDMzE2LjA4NDg2NSwzOC45MDMyMzgxIDMxNi43MTc2OTQsMzguOTAzMjM4MSAzMTcuMTA4MDEyLDM5LjI5MDI4NTcgWiBNMzI3LjExNTM1Nyw1MC4zODI2OTMgTDMxNi40MDEyNzksNjEuMDA4OTAyNyBMMzI3LjAwMjE1MSw1MC41MDAyMDQ2IEwzMjcuMDAyMjUyLDUwLjQ5NjM3MTkgTDMyNi45NDMxNDIsNTAuNDQyNTg1IEwzMjYuODgyNzM3LDUwLjM4MjY5MyBMMzI3LjExNTM1Nyw1MC4zODI2OTMgWlwiIGlkPVwibGVmdC1hcnJvd1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTAuMDAwMDAwLCA1MC41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMxMC4wMDAwMDAsIC01MC41MDAwMDApIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgPC9zdmc+YDtcbiAgZG93bi5pbm5lckhUTUwgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gIDxzdmcgY2xhc3M9XCJhcnIgZG93blwiIHdpZHRoPVwiMzZweFwiIGhlaWdodD1cIjM2cHhcIiB2aWV3Qm94PVwiMCAtNi41IDM2IDM2XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgXG4gICAgICA8dGl0bGU+ZG93bi1hcnJvdzwvdGl0bGU+XG4gICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICAgIDxnIGlkPVwiaWNvbnNcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgIDxnIGlkPVwiZG93blwiIGNsYXNzPVwiYXJyb3dzIGFyciBkb3duXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNDIuMDAwMDAwLCAtMTU5LjAwMDAwMClcIiBmaWxsPVwiIzI1MjUyOFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJzcXVhcmUtZmlsbGVkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwLjAwMDAwMCwgMTIwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiYXJyb3dzIGFyciBkb3duXCIgZD1cIk0zMTcuMTA4MDEyLDM5LjI5MDI4NTcgTDMyNy42NDk4MDQsNDkuNzQxNzA0MyBMMzI3LjcwODk5NCw0OS43OTU5MTY5IEMzMjcuODg5MTQxLDQ5Ljk3NDU1NDMgMzI3Ljk4NjE0Myw1MC4yMDQ0MTgyIDMyOCw1MC40MzgyMjI3IEwzMjgsNTAuNTYxNzc3MyBDMzI3Ljk4NjE0Myw1MC43OTU1ODE4IDMyNy44ODkxNDEsNTEuMDI1NDQ1NyAzMjcuNzA4OTk0LDUxLjIwNDA4MzEgTDMyNy42NTcxLDUxLjI0Nzk4MDMgTDMxNy4xMDgwMTIsNjEuNzA5NzE0MyBDMzE2LjcxNzY5NCw2Mi4wOTY3NjE5IDMxNi4wODQ4NjUsNjIuMDk2NzYxOSAzMTUuNjk0NTQ3LDYxLjcwOTcxNDMgQzMxNS4zMDQyMyw2MS4zMjI2NjY4IDMxNS4zMDQyMyw2MC42OTUxMzg3IDMxNS42OTQ1NDcsNjAuMzA4MDkxMSBMMzI0LjcwMjY2Niw1MS4zNzM4NDk2IEwyOTIuOTk5NDcsNTEuMzc0NjI5MSBDMjkyLjQ0NzQ3OCw1MS4zNzQ2MjkxIDI5Miw1MC45MzA4OTk3IDI5Miw1MC4zODM1MzE4IEMyOTIsNDkuODM2MTYzOSAyOTIuNDQ3NDc4LDQ5LjM5MjQzNDUgMjkyLjk5OTQ3LDQ5LjM5MjQzNDUgTDMyNC40Njc3OSw0OS4zOTE2NTUxIEwzMTUuNjk0NTQ3LDQwLjY5MTkwODkgQzMxNS4zMDQyMyw0MC4zMDQ4NjEzIDMxNS4zMDQyMywzOS42NzczMzMyIDMxNS42OTQ1NDcsMzkuMjkwMjg1NyBDMzE2LjA4NDg2NSwzOC45MDMyMzgxIDMxNi43MTc2OTQsMzguOTAzMjM4MSAzMTcuMTA4MDEyLDM5LjI5MDI4NTcgWiBNMzI3LjExNTM1Nyw1MC4zODI2OTMgTDMxNi40MDEyNzksNjEuMDA4OTAyNyBMMzI3LjAwMjE1MSw1MC41MDAyMDQ2IEwzMjcuMDAyMjUyLDUwLjQ5NjM3MTkgTDMyNi45NDMxNDIsNTAuNDQyNTg1IEwzMjYuODgyNzM3LDUwLjM4MjY5MyBMMzI3LjExNTM1Nyw1MC4zODI2OTMgWlwiIGlkPVwibGVmdC1hcnJvd1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTAuMDAwMDAwLCA1MC41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMxMC4wMDAwMDAsIC01MC41MDAwMDApIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgPC9zdmc+YDtcbiAgbGVmdC5pbm5lckhUTUwgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gIDxzdmcgY2xhc3M9XCJhcnIgbGVmdFwiIHdpZHRoPVwiMzZweFwiIGhlaWdodD1cIjM2cHhcIiB2aWV3Qm94PVwiMCAtNi41IDM2IDM2XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgXG4gICAgICA8dGl0bGU+bGVmdC1hcnJvdzwvdGl0bGU+XG4gICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICAgIDxnIGlkPVwiaWNvbnNcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgIDxnIGlkPVwibGVmdFwiIGNsYXNzPVwiYXJyb3dzIGFyciBsZWZ0XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNDIuMDAwMDAwLCAtMTU5LjAwMDAwMClcIiBmaWxsPVwiIzI1MjUyOFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJzcXVhcmUtZmlsbGVkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwLjAwMDAwMCwgMTIwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiYXJyb3dzIGFyciBsZWZ0XCIgZD1cIk0zMTcuMTA4MDEyLDM5LjI5MDI4NTcgTDMyNy42NDk4MDQsNDkuNzQxNzA0MyBMMzI3LjcwODk5NCw0OS43OTU5MTY5IEMzMjcuODg5MTQxLDQ5Ljk3NDU1NDMgMzI3Ljk4NjE0Myw1MC4yMDQ0MTgyIDMyOCw1MC40MzgyMjI3IEwzMjgsNTAuNTYxNzc3MyBDMzI3Ljk4NjE0Myw1MC43OTU1ODE4IDMyNy44ODkxNDEsNTEuMDI1NDQ1NyAzMjcuNzA4OTk0LDUxLjIwNDA4MzEgTDMyNy42NTcxLDUxLjI0Nzk4MDMgTDMxNy4xMDgwMTIsNjEuNzA5NzE0MyBDMzE2LjcxNzY5NCw2Mi4wOTY3NjE5IDMxNi4wODQ4NjUsNjIuMDk2NzYxOSAzMTUuNjk0NTQ3LDYxLjcwOTcxNDMgQzMxNS4zMDQyMyw2MS4zMjI2NjY4IDMxNS4zMDQyMyw2MC42OTUxMzg3IDMxNS42OTQ1NDcsNjAuMzA4MDkxMSBMMzI0LjcwMjY2Niw1MS4zNzM4NDk2IEwyOTIuOTk5NDcsNTEuMzc0NjI5MSBDMjkyLjQ0NzQ3OCw1MS4zNzQ2MjkxIDI5Miw1MC45MzA4OTk3IDI5Miw1MC4zODM1MzE4IEMyOTIsNDkuODM2MTYzOSAyOTIuNDQ3NDc4LDQ5LjM5MjQzNDUgMjkyLjk5OTQ3LDQ5LjM5MjQzNDUgTDMyNC40Njc3OSw0OS4zOTE2NTUxIEwzMTUuNjk0NTQ3LDQwLjY5MTkwODkgQzMxNS4zMDQyMyw0MC4zMDQ4NjEzIDMxNS4zMDQyMywzOS42NzczMzMyIDMxNS42OTQ1NDcsMzkuMjkwMjg1NyBDMzE2LjA4NDg2NSwzOC45MDMyMzgxIDMxNi43MTc2OTQsMzguOTAzMjM4MSAzMTcuMTA4MDEyLDM5LjI5MDI4NTcgWiBNMzI3LjExNTM1Nyw1MC4zODI2OTMgTDMxNi40MDEyNzksNjEuMDA4OTAyNyBMMzI3LjAwMjE1MSw1MC41MDAyMDQ2IEwzMjcuMDAyMjUyLDUwLjQ5NjM3MTkgTDMyNi45NDMxNDIsNTAuNDQyNTg1IEwzMjYuODgyNzM3LDUwLjM4MjY5MyBMMzI3LjExNTM1Nyw1MC4zODI2OTMgWlwiIGlkPVwibGVmdC1hcnJvd1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTAuMDAwMDAwLCA1MC41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMxMC4wMDAwMDAsIC01MC41MDAwMDApIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgPC9zdmc+YDtcbiAgcmlnaHQuaW5uZXJIVE1MID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICA8c3ZnIGNsYXNzPVwiYXJyIHJpZ2h0XCIgd2lkdGg9XCIzNnB4XCIgaGVpZ2h0PVwiMzZweFwiIHZpZXdCb3g9XCIwIC02LjUgMzYgMzZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICBcbiAgICAgIDx0aXRsZT5yaWdodC1hcnJvdzwvdGl0bGU+XG4gICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICAgIDxnIGlkPVwiaWNvbnNcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgIDxnIGlkPVwicmlnaHRcIiBjbGFzcz1cImFycm93cyBhcnIgcmlnaHRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM0Mi4wMDAwMDAsIC0xNTkuMDAwMDAwKVwiIGZpbGw9XCIjMjUyNTI4XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiPlxuICAgICAgICAgICAgICA8ZyBpZD1cInNxdWFyZS1maWxsZWRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTAuMDAwMDAwLCAxMjAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJhcnJvd3MgYXJyIHJpZ2h0XCIgZD1cIk0zMTcuMTA4MDEyLDM5LjI5MDI4NTcgTDMyNy42NDk4MDQsNDkuNzQxNzA0MyBMMzI3LjcwODk5NCw0OS43OTU5MTY5IEMzMjcuODg5MTQxLDQ5Ljk3NDU1NDMgMzI3Ljk4NjE0Myw1MC4yMDQ0MTgyIDMyOCw1MC40MzgyMjI3IEwzMjgsNTAuNTYxNzc3MyBDMzI3Ljk4NjE0Myw1MC43OTU1ODE4IDMyNy44ODkxNDEsNTEuMDI1NDQ1NyAzMjcuNzA4OTk0LDUxLjIwNDA4MzEgTDMyNy42NTcxLDUxLjI0Nzk4MDMgTDMxNy4xMDgwMTIsNjEuNzA5NzE0MyBDMzE2LjcxNzY5NCw2Mi4wOTY3NjE5IDMxNi4wODQ4NjUsNjIuMDk2NzYxOSAzMTUuNjk0NTQ3LDYxLjcwOTcxNDMgQzMxNS4zMDQyMyw2MS4zMjI2NjY4IDMxNS4zMDQyMyw2MC42OTUxMzg3IDMxNS42OTQ1NDcsNjAuMzA4MDkxMSBMMzI0LjcwMjY2Niw1MS4zNzM4NDk2IEwyOTIuOTk5NDcsNTEuMzc0NjI5MSBDMjkyLjQ0NzQ3OCw1MS4zNzQ2MjkxIDI5Miw1MC45MzA4OTk3IDI5Miw1MC4zODM1MzE4IEMyOTIsNDkuODM2MTYzOSAyOTIuNDQ3NDc4LDQ5LjM5MjQzNDUgMjkyLjk5OTQ3LDQ5LjM5MjQzNDUgTDMyNC40Njc3OSw0OS4zOTE2NTUxIEwzMTUuNjk0NTQ3LDQwLjY5MTkwODkgQzMxNS4zMDQyMyw0MC4zMDQ4NjEzIDMxNS4zMDQyMywzOS42NzczMzMyIDMxNS42OTQ1NDcsMzkuMjkwMjg1NyBDMzE2LjA4NDg2NSwzOC45MDMyMzgxIDMxNi43MTc2OTQsMzguOTAzMjM4MSAzMTcuMTA4MDEyLDM5LjI5MDI4NTcgWiBNMzI3LjExNTM1Nyw1MC4zODI2OTMgTDMxNi40MDEyNzksNjEuMDA4OTAyNyBMMzI3LjAwMjE1MSw1MC41MDAyMDQ2IEwzMjcuMDAyMjUyLDUwLjQ5NjM3MTkgTDMyNi45NDMxNDIsNTAuNDQyNTg1IEwzMjYuODgyNzM3LDUwLjM4MjY5MyBMMzI3LjExNTM1Nyw1MC4zODI2OTMgWlwiIGlkPVwibGVmdC1hcnJvd1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTAuMDAwMDAwLCA1MC41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMxMC4wMDAwMDAsIC01MC41MDAwMDApIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgPC9zdmc+YDtcbn0pO1xuXG5jb25zdCBjcmVhdGVLZXlzID0gKGFycikgPT4ge1xuICBsZXQgaSA9IDA7XG5cbiAgY29uc3Qgcm93ID0gY3JlYXRlRWwoJ2RpdicsICdyb3cnKTtcblxuICB3aGlsZSAoaSA8IGFyci5sZW5ndGgpIHtcbiAgICBjb25zdCBrZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5cycpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycltpXSkpIHtcbiAgICAgIGtleS5zZXRBdHRyaWJ1dGUoJ2tleUVuJywgYXJyW2ldWzBdKTtcbiAgICAgIGtleS5zZXRBdHRyaWJ1dGUoJ2tleVJ1JywgYXJyW2ldWzFdKTtcbiAgICAgIGtleS5pbm5lckhUTUwgPSBrZXkuZ2V0QXR0cmlidXRlKCdrZXlFbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXkuaW5uZXJIVE1MID0gYXJyW2ldO1xuICAgIH1cbiAgICByb3cuYXBwZW5kQ2hpbGQoa2V5KTtcbiAgICBpKys7XG4gIH1cblxuICByZXR1cm4gcm93O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRWwodGFnLCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBpc01hY2ludG9zaCgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKCdNYWMnKSA+IC0xO1xufVxuXG5mdW5jdGlvbiBmaWxsS2V5cyhtYXApIHtcbiAgY29uc3Qgb2MgPSBpc01hY2ludG9zaCgpID8gJ01hYycgOiAnV2luJztcblxuICBtYXAuc2V0KCdyb3cxJywgY3JlYXRlS2V5cyhbWydgJywgJ9GRJ10sIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDAsICctJywgJz0nLCAnQmFja3NwYWNlJ10pKTtcbiAgbWFwLnNldChcbiAgICAncm93MicsXG4gICAgY3JlYXRlS2V5cyhbJ1RhYicsXG4gICAgICBbJ3EnLCAn0LknXSxcbiAgICAgIFsndycsICfRhiddLFxuICAgICAgWydlJywgJ9GDJ10sXG4gICAgICBbJ3InLCAn0LonXSxcbiAgICAgIFsndCcsICfQtSddLFxuICAgICAgWyd5JywgJ9C9J10sXG4gICAgICBbJ3UnLCAn0LMnXSxcbiAgICAgIFsnaScsICfRiCddLFxuICAgICAgWydvJywgJ9GJJ10sXG4gICAgICBbJ3AnLCAn0LcnXSxcbiAgICAgIFsnWycsICfRhSddLFxuICAgICAgWyddJywgJ9GKJ10sXG4gICAgICAnXFxcXCcsXG4gICAgICAnREVMJyxcbiAgICBdKSxcbiAgKTtcbiAgbWFwLnNldChcbiAgICAncm93MycsXG4gICAgY3JlYXRlS2V5cyhbXG4gICAgICAnQ2FwcyBMb2NrJyxcbiAgICAgIFsnYScsICfRhCddLFxuICAgICAgWydzJywgJ9GLJ10sXG4gICAgICBbJ2QnLCAn0LInXSxcbiAgICAgIFsnZicsICfQsCddLFxuICAgICAgWydnJywgJ9C/J10sXG4gICAgICBbJ2gnLCAn0YAnXSxcbiAgICAgIFsnaicsICfQviddLFxuICAgICAgWydrJywgJ9C7J10sXG4gICAgICBbJ2wnLCAn0LQnXSxcbiAgICAgIFsnOycsICfQtiddLFxuICAgICAgW1wiJ1wiLCAn0Y0nXSxcbiAgICAgICdFbnRlcicsXG4gICAgXSksXG4gICk7XG4gIG1hcC5zZXQoXG4gICAgJ3JvdzQnLFxuICAgIGNyZWF0ZUtleXMoW1xuICAgICAgJ1NoaWZ0JyxcbiAgICAgICcvJyxcbiAgICAgIFsneicsICfRjyddLFxuICAgICAgWyd4JywgJ9GHJ10sXG4gICAgICBbJ2MnLCAn0YEnXSxcbiAgICAgIFsndicsICfQvCddLFxuICAgICAgWydiJywgJ9C4J10sXG4gICAgICBbJ24nLCAn0YInXSxcbiAgICAgIFsnbScsICfRjCddLFxuICAgICAgWycuJywgJ9CxJ10sXG4gICAgICBbJywnLCAn0Y4nXSxcbiAgICAgICcvJyxcbiAgICAgICcnLFxuICAgICAgJ1NoaWZ0JyxcbiAgICBdKSxcbiAgKTtcbiAgbWFwLnNldChcbiAgICAncm93NScsXG4gICAgY3JlYXRlS2V5cyhbJ0N0cmwnLCBvYywgJ0FsdCcsICcnLCAnQWx0JywgJ0N0cmwnLCAnJywgJycsICcnXSksXG4gICk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zY3JpcHQvcmVuZGVyJztcbmltcG9ydCAnLi9zY3JpcHQvaW50ZXJhY3Rpb24nO1xuXG5yZXF1aXJlKCdub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==