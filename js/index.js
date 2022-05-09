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

window.addEventListener("load", function (e) {
  const body = document.querySelector("body");

  const keyBoardWrap = document.querySelector(".keyboard_wrapp");
  const txtField = document.querySelector(".text-field");
  const keyBoardLights = document.querySelector(".keyboard_lights");
  const changeLightColor = document.querySelector(".change_light_color");
  const colorInput = document.querySelector(".colors_input");
  const toggleCircle = document.querySelector(".toggle_circle");
  const nightMode = document.querySelector(".night_mode");

  const upArrow = document.querySelector("#up");
  const downArrow = document.querySelector("#down");
  const leftArrow = document.querySelector("#left");
  const rightArrow = document.querySelector("#right");
  const keys = document.querySelectorAll(".keys");
  let focus;
  let highlight = "";

  setAtrsforKeys(keys);

  const space = document.querySelector(".space_key");
  space.setAttribute("keyname", "Space");

  const capsLock = document.querySelector(".caps_lock_key");
  capsLock.setAttribute("keyname", "CapsLock");

  const language = document.querySelector(".language");
  language.setAttribute("active", "en");

  const tab = document.querySelector(".tab_key");
  tab.setAttribute("keyname", "Tab");

  const enter = document.querySelector(".enter_key");
  enter.setAttribute("keyname", "Enter");

  const backspace = document.querySelector(".backspace_key");
  backspace.setAttribute("keyname", "Backspace");

  const shiftLeft = document.querySelector(".left_shift");
  const shiftRight = document.querySelector(".right_shift");
  shiftLeft.setAttribute("keyname", "ShiftLeft");
  shiftRight.setAttribute("keyname", "ShiftRight");

  const ctrlLeft = document.querySelector(".ctrl_left");
  const ctrlRight = document.querySelector(".ctrl_right");
  ctrlLeft.setAttribute("keyname", "ControlLeft");
  ctrlRight.setAttribute("keyname", "ControlRight");

  const altLeft = document.querySelector(".alt_left");
  const altRight = document.querySelector(".alt_right");
  altLeft.setAttribute("keyname", "AltLeft");
  altRight.setAttribute("keyname", "AltRight");

  const del = document.querySelector(".del_key");
  del.setAttribute("keyname", "Delete");

  const up = document.querySelector(".up_key");
  const down = document.querySelector(".down_key");
  const left = document.querySelector(".left_key");
  const right = document.querySelector(".right_key");

  up.setAttribute("keyname", "ArrowUp");
  down.setAttribute("keyname", "ArrowDown");
  left.setAttribute("keyname", "ArrowLeft");
  right.setAttribute("keyname", "ArrowRight");

  window.addEventListener("keydown", function (e) {
    for (let key of keys) {
      if (
        e.key == key.getAttribute("keyEn") ||
        e.key == key.getAttribute("keyRu") ||
        e.key == key.getAttribute("UpperCaseNameEn") ||
        e.key == key.getAttribute("UpperCaseNameRu") ||
        e.code == key.getAttribute("keyname")
      ) {
        key.classList.add("active");
      }
    }

    if (e.key === "Shift") {
      getUpperCase(keys, language);
    }
    if (e.key === "Control" || e.key === "Alt") {
      if (
        (checkActive(ctrlLeft) && checkActive(altLeft)) ||
        (checkActive(ctrlRight) && checkActive(altRight))
      ) {
        toggleLanguage(language, keys);
      }
    }
  });

  window.addEventListener("keyup", function (e) {
    for (let key of keys) {
      if (
        e.key == key.getAttribute("keyEn") ||
        e.key == key.getAttribute("keyRu") ||
        e.code == key.getAttribute("keyname") ||
        e.key == key.getAttribute("UpperCaseNameEn") ||
        e.key == key.getAttribute("UpperCaseNameRu")
      ) {
        key.classList.remove("active");
        key.classList.add("remove");
      }

      this.setTimeout(() => {
        key.classList.remove("remove");
      }, 100);
    }
    if (e.key === "Shift") {
      getLowerCase(keys, language);
    }
  });

  nightMode.addEventListener("click", function (e) {
    toggleCircle.classList.toggle("active");
    body.classList.toggle("active");
    nightMode.classList.toggle("active");
    keyBoardWrap.classList.toggle("active");
    txtField.classList.toggle("active");
    changeLightColor.classList.toggle("active");

    for (key of keys) {
      key.classList.toggle("keys_night");
    }
  });

  colorInput.addEventListener("input", function (e) {
    for (key of keys) {
      key.style.color = colorInput.value;
    }

    upArrow.style.fill = colorInput.value;
    downArrow.style.fill = colorInput.value;
    leftArrow.style.fill = colorInput.value;
    rightArrow.style.fill = colorInput.value;

    keyBoardLights.style.background = colorInput.value;
  });

  txtField.addEventListener("focus", function (e) {
    if (!focus) {
      focus = true;
    }
  });

  txtField.addEventListener("blur", function (e) {
    if (focus) {
      focus = false;
      //console.log("blur");
    }
  });

  keyBoardWrap.addEventListener("click", function (e) {
    if (!e.target.classList.contains("keys")) {
      return;
    }
    //txtField.focus();

    const keyname = e.target.getAttribute("keyName") ?? null;

    const target = e.target.innerHTML;

    if (e.target.classList.contains("space_key")) {
      txtField.value += " ";
    } else if (target.length === 1) {
      txtField.value += target;
    } else if (keyname === "ShiftLeft" || keyname === "ShiftRight" || keyname === "CapsLock") {
      toggleActive(e.target);
      if (e.target.classList.contains("active")) {
        getUpperCase(keys, language);
      }else {
        getLowerCase(keys, language);
      }
    }else if(keyname === "Tab") {
      txtField.value += "    ";
    }else if(keyname === "Backspace") {
      if (txtField.value.length > 0) {
        if (highlight === "") {
          console.log(highlight === "")
          console.log(highlight)
          txtField.value = rmTxt(txtField.selectionEnd-1, txtField.value);
        } else {
          txtField.value = rmTxt(highlight, txtField.value);
          highlight = "";
        }
      }
    }
  });

  document.onselectionchange = function(e) {
    let {anchorNode, anchorOffset, focusNode, focusOffset} = document.getSelection();
    highlight = document.getSelection().toString()
  };
});

function rmTxt(target, txtValue) {
  if(typeof target === "number") {
    return txtValue.slice(0, target);
  }else {
    const regExp = /target/i;
    return txtValue.replace(regExp, "");
  }
}

function getUpperCase(keys, language) {
  for (key of keys) {
    if (language.getAttribute("active") === "en") {
      if (key.getAttribute("keyEn") || key.getAttribute("key")) {
        key.innerHTML = key.getAttribute("UpperCaseNameEn");
      }
    } else {
      if (key.getAttribute("keyRu") || key.getAttribute("key")) {
        key.innerHTML = key.getAttribute("UpperCaseNameRu");
      }
    }
  }
}

function getLowerCase(keys, language) {
  for (key of keys) {
    if (key.getAttribute("key")) {
      key.innerHTML = key.getAttribute("key");
    }
    if (language.getAttribute("active") === "en") {
      if (key.getAttribute("keyEn")) {
        key.innerHTML = key.getAttribute("keyEn");
      }
    } else {
      if (key.getAttribute("keyRu")) {
        key.innerHTML = key.getAttribute("keyRu");
      }
    }
  }
}

function toggleActive(el) {
  if (el.classList.contains("active")) {
    el.classList.remove("active");
  } else {
    el.classList.add("active");
  }
}

function checkActive(el) {
  if (el.classList.contains("active")) {
    return true;
  } else {
    return false;
  }
}

function toggleLanguage(language, keys) {
  if (language.getAttribute("active") === "en") {
    for (key of keys) {
      if (key.getAttribute("keyEn")) {
        key.innerHTML = key.getAttribute("keyRu");
      }
    }
    language.setAttribute("active", "ru");
  } else {
    for (key of keys) {
      if (key.getAttribute("keyEn")) {
        key.innerHTML = key.getAttribute("keyEn");
      }
    }
    language.setAttribute("active", "en");
  }
}

function setAtrsforKeys(keys) {
  for (let key of keys) {
    if (key.getAttribute("keyEn")) {
      key.setAttribute(
        "UpperCaseNameEn",
        key.getAttribute("keyEn").toUpperCase()
      );
      key.setAttribute(
        "UpperCaseNameRu",
        key.getAttribute("keyRu").toUpperCase()
      );
    }
  }

  keys[1].setAttribute("key", "1");
  keys[2].setAttribute("key", "2");
  keys[3].setAttribute("key", "3");
  keys[4].setAttribute("key", "4");
  keys[5].setAttribute("key", "5");
  keys[6].setAttribute("key", "6");
  keys[7].setAttribute("key", "7");
  keys[8].setAttribute("key", "8");
  keys[9].setAttribute("key", "9");
  keys[10].setAttribute("key", "0");
  keys[11].setAttribute("key", "-");
  keys[12].setAttribute("key", "=");

  keys[0].setAttribute("UpperCaseNameEn", "~");
  keys[1].setAttribute("UpperCaseNameEn", "!");
  keys[2].setAttribute("UpperCaseNameEn", "@");
  keys[3].setAttribute("UpperCaseNameEn", "#");
  keys[4].setAttribute("UpperCaseNameEn", "$");
  keys[5].setAttribute("UpperCaseNameEn", "%");
  keys[6].setAttribute("UpperCaseNameEn", "^");
  keys[7].setAttribute("UpperCaseNameEn", "&");
  keys[8].setAttribute("UpperCaseNameEn", "*");
  keys[9].setAttribute("UpperCaseNameEn", "(");
  keys[10].setAttribute("UpperCaseNameEn", ")");
  keys[11].setAttribute("UpperCaseNameEn", "_");
  keys[12].setAttribute("UpperCaseNameEn", "+");

  keys[1].setAttribute("UpperCaseNameRu", "!");
  keys[2].setAttribute("UpperCaseNameRu", '"');
  keys[3].setAttribute("UpperCaseNameRu", "№");
  keys[4].setAttribute("UpperCaseNameRu", ";");
  keys[5].setAttribute("UpperCaseNameRu", "%");
  keys[6].setAttribute("UpperCaseNameRu", ":");
  keys[7].setAttribute("UpperCaseNameRu", "?");
  keys[8].setAttribute("UpperCaseNameRu", "*");
  keys[9].setAttribute("UpperCaseNameRu", "(");
  keys[10].setAttribute("UpperCaseNameRu", ")");
  keys[11].setAttribute("UpperCaseNameRu", "-");
  keys[12].setAttribute("UpperCaseNameRu", "=");

  keys[25].setAttribute("UpperCaseNameEn", "{");
  keys[26].setAttribute("UpperCaseNameEn", "}");

  keys[27].setAttribute("key", "\\");
  keys[27].setAttribute("UpperCaseNameEn", "|");
  keys[27].setAttribute("UpperCaseNameRu", "|");

  keys[39].setAttribute("UpperCaseNameEn", ":");
  keys[40].setAttribute("UpperCaseNameEn", '"');

  keys[51].setAttribute("UpperCaseNameEn", "<");
  keys[52].setAttribute("UpperCaseNameEn", ">");

  keys[43].setAttribute("key", "/");
  keys[43].setAttribute("UpperCaseNameEn", "/");
  keys[43].setAttribute("UpperCaseNameRu", ",");

  keys[53].setAttribute("key", "/");
  keys[53].setAttribute("UpperCaseNameEn", "?");
  keys[53].setAttribute("UpperCaseNameRu", ".");
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
/* harmony export */   "keysMap": () => (/* binding */ keysMap)
/* harmony export */ });
const keysMap = new Map();
window.addEventListener("load", function (e) {
  fillKeys(keysMap);

  const body = this.document.querySelector("body");
  let container = createEl("div", "container");
  body.appendChild(container);

  let wrapper = createEl("div", "wrapper");
  container.appendChild(wrapper);

  const textArea = createEl("textarea", "text-field");
  wrapper.appendChild(textArea);
  textArea.placeholder = "Hello there! \nEnter you thoughts...";

  const nightMode = createEl("div", "night_mode");
  nightMode.innerHTML = `<div class="toggle_circle"></div>`;

  wrapper.appendChild(nightMode);

  const changeLightColor = createEl("div", "change_light_color");
  changeLightColor.innerHTML = `<div class="colors"><input type="color" class="colors_input" /></div>`;

  const noticeHowChancgeLanguage = createEl("h1", "title");
  noticeHowChancgeLanguage.classList.add("change-language_title")
  noticeHowChancgeLanguage.innerHTML = `Press Ctrl + Alt to change language`;


  const nightModeTitle = createEl("h2", "title");
  nightModeTitle.classList.add("nightModeTitle_title")
  nightModeTitle.innerHTML = `Night mode`;

  const changeColorTitle = createEl("h2", "title");
  changeColorTitle.classList.add("changeColorTitle_title")
  changeColorTitle.innerHTML = `Change keyboard color`;

  const ocTitle = createEl("h2", "title");
  let oc = isMacintosh() ? "Mac OS" : "Windows";
  ocTitle.classList.add("ocTitle_title")
  ocTitle.innerHTML = `Made for ${oc}`;

  wrapper.appendChild(nightMode);
  wrapper.appendChild(changeLightColor);
  wrapper.appendChild(noticeHowChancgeLanguage);
  wrapper.appendChild(nightModeTitle);
  wrapper.appendChild(changeColorTitle);
  wrapper.appendChild(ocTitle);

  const keyBoardWrap = createEl("div", "keyboard_wrapp");
  const keyboardLights = createEl("div", "keyboard_lights");
  const keyboardKeys = createEl("div", "keyboard_keys");
  keyBoardWrap.appendChild(keyboardLights);
  keyBoardWrap.appendChild(keyboardKeys);

  wrapper.appendChild(keyBoardWrap);

  const keyboard_keys = this.document.querySelector(".keyboard_keys");

  for (let row of keysMap.values()) {
    keyboard_keys.appendChild(row);
  }

  keyboard_keys.childNodes[0].lastChild.classList.add("backspace_key");

  keyboard_keys.childNodes[1].firstChild.classList.add("tab_key");
  keyboard_keys.childNodes[1].lastChild.classList.add("del_key");

  keyboard_keys.childNodes[2].firstChild.classList.add("caps_lock_key");
  keyboard_keys.childNodes[2].lastChild.classList.add("enter_key");

  keyboard_keys.childNodes[3].firstChild.classList.add(
    "shift_key",
    "left_shift"
  );
  keyboard_keys.childNodes[3].lastChild.classList.add(
    "shift_key",
    "right_shift"
  );

  keyboard_keys.childNodes[4].firstChild.classList.add("ctrl_key", "ctrl_left");

  const language = keyboard_keys.childNodes[4].childNodes[1];
  language.classList.add("language");

  keyboard_keys.childNodes[4].childNodes[2].classList.add(
    "alt_key",
    "alt_left"
  );
  keyboard_keys.childNodes[4].childNodes[4].classList.add(
    "alt_key",
    "alt_right"
  );

  const space = keyboard_keys.childNodes[4].childNodes[3];
  space.classList.add("space_key");

  keyboard_keys.childNodes[4].childNodes[5].classList.add(
    "ctrl_key",
    "ctrl_right"
  );

  const up = keyboard_keys.childNodes[3].lastChild.previousSibling;
  const down = keyboard_keys.childNodes[4].childNodes[7];
  const left = keyboard_keys.childNodes[4].childNodes[6];
  const right = keyboard_keys.childNodes[4].childNodes[8];

  up.classList.add("up_key");
  down.classList.add("down_key");
  left.classList.add("left_key");
  right.classList.add("right_key");

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

  const row = createEl("div", "row");

  while (i < arr.length) {
    let key = document.createElement("div");
    key.classList.add("keys");
    if (Array.isArray(arr[i])) {
      key.setAttribute("keyEn", arr[i][0]);
      key.setAttribute("keyRu", arr[i][1]);
      key.innerHTML = key.getAttribute("keyEn");
    }else {
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
  return navigator.platform.indexOf("Mac") > -1;
}

function fillKeys(map) {
  const oc = isMacintosh() ? "Mac" : "Win";

  map.set(
    "row1",
    createKeys([
      ["`", "ё"], 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=", "Backspace",
    ])
  );
  map.set(
    "row2",
    createKeys([
      "Tab",
      ["q", "й"],
      ["w", "ц"],
      ["e", "у"],
      ["r", "к"],
      ["t", "е"],
      ["y", "н"],
      ["u", "г"],
      ["i", "ш"],
      ["o", "щ"],
      ["p", "з"],
      ["[", "х"],
      ["]", "ъ"],
      "\\",
      "DEL",
    ])
  );
  map.set(
    "row3",
    createKeys([
      "Caps Lock",
      ["a", "ф"],
      ["s", "ы"],
      ["d", "в"],
      ["f", "а"],
      ["g", "п"],
      ["h", "р"],
      ["j", "о"],
      ["k", "л"],
      ["l", "д"],
      [";", "ж"],
      ["'", "э"],
      "Enter",
    ])
  );
  map.set(
    "row4",
    createKeys([
      "Shift",
      "/",
      ["z", "я"],
      ["x", "ч"],
      ["c", "с"],
      ["v", "м"],
      ["b", "и"],
      ["n", "т"],
      ["m", "ь"],
      [".", "б"],
      [",", "ю"],
      "/",
      "",
      "Shift",
    ])
  );

  map.set(
    "row5",
    createKeys(["Ctrl", oc, "Alt", "", "Alt", "Ctrl", "", "", ""])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsU0FBUyxrREFBa0Q7QUFDM0Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkM7QUFDN0MsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pWQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLEdBQUc7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21COzs7Ozs7O1VDN1FuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLG1CQUFPLENBQUMsK0VBQTZCO0FBQ1Q7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jzcy8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3M/ZmI1NyIsIndlYnBhY2s6Ly9yc3MvLi9zcmMvbWFpbi9zdHlsZXMvaW5kZXguc2Nzcz8zN2U2Iiwid2VicGFjazovL3Jzcy8uL3NyYy9tYWluL3NjcmlwdC9pbnRlcmFjdGlvbi5qcyIsIndlYnBhY2s6Ly9yc3MvLi9zcmMvbWFpbi9zY3JpcHQvcmVuZGVyLmpzIiwid2VicGFjazovL3Jzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcnNzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yc3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc3MvLi9zcmMvbWFpbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIGNvbnN0IGtleUJvYXJkV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua2V5Ym9hcmRfd3JhcHBcIik7XG4gIGNvbnN0IHR4dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXh0LWZpZWxkXCIpO1xuICBjb25zdCBrZXlCb2FyZExpZ2h0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua2V5Ym9hcmRfbGlnaHRzXCIpO1xuICBjb25zdCBjaGFuZ2VMaWdodENvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFuZ2VfbGlnaHRfY29sb3JcIik7XG4gIGNvbnN0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbG9yc19pbnB1dFwiKTtcbiAgY29uc3QgdG9nZ2xlQ2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGVfY2lyY2xlXCIpO1xuICBjb25zdCBuaWdodE1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5pZ2h0X21vZGVcIik7XG5cbiAgY29uc3QgdXBBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXBcIik7XG4gIGNvbnN0IGRvd25BcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG93blwiKTtcbiAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZWZ0XCIpO1xuICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWdodFwiKTtcbiAgY29uc3Qga2V5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIua2V5c1wiKTtcbiAgbGV0IGZvY3VzO1xuICBsZXQgaGlnaGxpZ2h0ID0gXCJcIjtcblxuICBzZXRBdHJzZm9yS2V5cyhrZXlzKTtcblxuICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BhY2Vfa2V5XCIpO1xuICBzcGFjZS5zZXRBdHRyaWJ1dGUoXCJrZXluYW1lXCIsIFwiU3BhY2VcIik7XG5cbiAgY29uc3QgY2Fwc0xvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcHNfbG9ja19rZXlcIik7XG4gIGNhcHNMb2NrLnNldEF0dHJpYnV0ZShcImtleW5hbWVcIiwgXCJDYXBzTG9ja1wiKTtcblxuICBjb25zdCBsYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFuZ3VhZ2VcIik7XG4gIGxhbmd1YWdlLnNldEF0dHJpYnV0ZShcImFjdGl2ZVwiLCBcImVuXCIpO1xuXG4gIGNvbnN0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFiX2tleVwiKTtcbiAgdGFiLnNldEF0dHJpYnV0ZShcImtleW5hbWVcIiwgXCJUYWJcIik7XG5cbiAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVudGVyX2tleVwiKTtcbiAgZW50ZXIuc2V0QXR0cmlidXRlKFwia2V5bmFtZVwiLCBcIkVudGVyXCIpO1xuXG4gIGNvbnN0IGJhY2tzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja3NwYWNlX2tleVwiKTtcbiAgYmFja3NwYWNlLnNldEF0dHJpYnV0ZShcImtleW5hbWVcIiwgXCJCYWNrc3BhY2VcIik7XG5cbiAgY29uc3Qgc2hpZnRMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0X3NoaWZ0XCIpO1xuICBjb25zdCBzaGlmdFJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodF9zaGlmdFwiKTtcbiAgc2hpZnRMZWZ0LnNldEF0dHJpYnV0ZShcImtleW5hbWVcIiwgXCJTaGlmdExlZnRcIik7XG4gIHNoaWZ0UmlnaHQuc2V0QXR0cmlidXRlKFwia2V5bmFtZVwiLCBcIlNoaWZ0UmlnaHRcIik7XG5cbiAgY29uc3QgY3RybExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN0cmxfbGVmdFwiKTtcbiAgY29uc3QgY3RybFJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdHJsX3JpZ2h0XCIpO1xuICBjdHJsTGVmdC5zZXRBdHRyaWJ1dGUoXCJrZXluYW1lXCIsIFwiQ29udHJvbExlZnRcIik7XG4gIGN0cmxSaWdodC5zZXRBdHRyaWJ1dGUoXCJrZXluYW1lXCIsIFwiQ29udHJvbFJpZ2h0XCIpO1xuXG4gIGNvbnN0IGFsdExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsdF9sZWZ0XCIpO1xuICBjb25zdCBhbHRSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWx0X3JpZ2h0XCIpO1xuICBhbHRMZWZ0LnNldEF0dHJpYnV0ZShcImtleW5hbWVcIiwgXCJBbHRMZWZ0XCIpO1xuICBhbHRSaWdodC5zZXRBdHRyaWJ1dGUoXCJrZXluYW1lXCIsIFwiQWx0UmlnaHRcIik7XG5cbiAgY29uc3QgZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxfa2V5XCIpO1xuICBkZWwuc2V0QXR0cmlidXRlKFwia2V5bmFtZVwiLCBcIkRlbGV0ZVwiKTtcblxuICBjb25zdCB1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBfa2V5XCIpO1xuICBjb25zdCBkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kb3duX2tleVwiKTtcbiAgY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdF9rZXlcIik7XG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodF9rZXlcIik7XG5cbiAgdXAuc2V0QXR0cmlidXRlKFwia2V5bmFtZVwiLCBcIkFycm93VXBcIik7XG4gIGRvd24uc2V0QXR0cmlidXRlKFwia2V5bmFtZVwiLCBcIkFycm93RG93blwiKTtcbiAgbGVmdC5zZXRBdHRyaWJ1dGUoXCJrZXluYW1lXCIsIFwiQXJyb3dMZWZ0XCIpO1xuICByaWdodC5zZXRBdHRyaWJ1dGUoXCJrZXluYW1lXCIsIFwiQXJyb3dSaWdodFwiKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xuICAgICAgaWYgKFxuICAgICAgICBlLmtleSA9PSBrZXkuZ2V0QXR0cmlidXRlKFwia2V5RW5cIikgfHxcbiAgICAgICAgZS5rZXkgPT0ga2V5LmdldEF0dHJpYnV0ZShcImtleVJ1XCIpIHx8XG4gICAgICAgIGUua2V5ID09IGtleS5nZXRBdHRyaWJ1dGUoXCJVcHBlckNhc2VOYW1lRW5cIikgfHxcbiAgICAgICAgZS5rZXkgPT0ga2V5LmdldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVSdVwiKSB8fFxuICAgICAgICBlLmNvZGUgPT0ga2V5LmdldEF0dHJpYnV0ZShcImtleW5hbWVcIilcbiAgICAgICkge1xuICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZS5rZXkgPT09IFwiU2hpZnRcIikge1xuICAgICAgZ2V0VXBwZXJDYXNlKGtleXMsIGxhbmd1YWdlKTtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSBcIkNvbnRyb2xcIiB8fCBlLmtleSA9PT0gXCJBbHRcIikge1xuICAgICAgaWYgKFxuICAgICAgICAoY2hlY2tBY3RpdmUoY3RybExlZnQpICYmIGNoZWNrQWN0aXZlKGFsdExlZnQpKSB8fFxuICAgICAgICAoY2hlY2tBY3RpdmUoY3RybFJpZ2h0KSAmJiBjaGVja0FjdGl2ZShhbHRSaWdodCkpXG4gICAgICApIHtcbiAgICAgICAgdG9nZ2xlTGFuZ3VhZ2UobGFuZ3VhZ2UsIGtleXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGUua2V5ID09IGtleS5nZXRBdHRyaWJ1dGUoXCJrZXlFblwiKSB8fFxuICAgICAgICBlLmtleSA9PSBrZXkuZ2V0QXR0cmlidXRlKFwia2V5UnVcIikgfHxcbiAgICAgICAgZS5jb2RlID09IGtleS5nZXRBdHRyaWJ1dGUoXCJrZXluYW1lXCIpIHx8XG4gICAgICAgIGUua2V5ID09IGtleS5nZXRBdHRyaWJ1dGUoXCJVcHBlckNhc2VOYW1lRW5cIikgfHxcbiAgICAgICAgZS5rZXkgPT0ga2V5LmdldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVSdVwiKVxuICAgICAgKSB7XG4gICAgICAgIGtleS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZChcInJlbW92ZVwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAga2V5LmNsYXNzTGlzdC5yZW1vdmUoXCJyZW1vdmVcIik7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09IFwiU2hpZnRcIikge1xuICAgICAgZ2V0TG93ZXJDYXNlKGtleXMsIGxhbmd1YWdlKTtcbiAgICB9XG4gIH0pO1xuXG4gIG5pZ2h0TW9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICB0b2dnbGVDaXJjbGUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgbmlnaHRNb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAga2V5Qm9hcmRXcmFwLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgdHh0RmllbGQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBjaGFuZ2VMaWdodENvbG9yLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgICBmb3IgKGtleSBvZiBrZXlzKSB7XG4gICAgICBrZXkuY2xhc3NMaXN0LnRvZ2dsZShcImtleXNfbmlnaHRcIik7XG4gICAgfVxuICB9KTtcblxuICBjb2xvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGZvciAoa2V5IG9mIGtleXMpIHtcbiAgICAgIGtleS5zdHlsZS5jb2xvciA9IGNvbG9ySW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgdXBBcnJvdy5zdHlsZS5maWxsID0gY29sb3JJbnB1dC52YWx1ZTtcbiAgICBkb3duQXJyb3cuc3R5bGUuZmlsbCA9IGNvbG9ySW5wdXQudmFsdWU7XG4gICAgbGVmdEFycm93LnN0eWxlLmZpbGwgPSBjb2xvcklucHV0LnZhbHVlO1xuICAgIHJpZ2h0QXJyb3cuc3R5bGUuZmlsbCA9IGNvbG9ySW5wdXQudmFsdWU7XG5cbiAgICBrZXlCb2FyZExpZ2h0cy5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3JJbnB1dC52YWx1ZTtcbiAgfSk7XG5cbiAgdHh0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCFmb2N1cykge1xuICAgICAgZm9jdXMgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgdHh0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZm9jdXMpIHtcbiAgICAgIGZvY3VzID0gZmFsc2U7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiYmx1clwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIGtleUJvYXJkV3JhcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImtleXNcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy90eHRGaWVsZC5mb2N1cygpO1xuXG4gICAgY29uc3Qga2V5bmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImtleU5hbWVcIikgPz8gbnVsbDtcblxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmlubmVySFRNTDtcblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzcGFjZV9rZXlcIikpIHtcbiAgICAgIHR4dEZpZWxkLnZhbHVlICs9IFwiIFwiO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgdHh0RmllbGQudmFsdWUgKz0gdGFyZ2V0O1xuICAgIH0gZWxzZSBpZiAoa2V5bmFtZSA9PT0gXCJTaGlmdExlZnRcIiB8fCBrZXluYW1lID09PSBcIlNoaWZ0UmlnaHRcIiB8fCBrZXluYW1lID09PSBcIkNhcHNMb2NrXCIpIHtcbiAgICAgIHRvZ2dsZUFjdGl2ZShlLnRhcmdldCk7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIGdldFVwcGVyQ2FzZShrZXlzLCBsYW5ndWFnZSk7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIGdldExvd2VyQ2FzZShrZXlzLCBsYW5ndWFnZSk7XG4gICAgICB9XG4gICAgfWVsc2UgaWYoa2V5bmFtZSA9PT0gXCJUYWJcIikge1xuICAgICAgdHh0RmllbGQudmFsdWUgKz0gXCIgICAgXCI7XG4gICAgfWVsc2UgaWYoa2V5bmFtZSA9PT0gXCJCYWNrc3BhY2VcIikge1xuICAgICAgaWYgKHR4dEZpZWxkLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGhpZ2hsaWdodCA9PT0gXCJcIikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGhpZ2hsaWdodCA9PT0gXCJcIilcbiAgICAgICAgICBjb25zb2xlLmxvZyhoaWdobGlnaHQpXG4gICAgICAgICAgdHh0RmllbGQudmFsdWUgPSBybVR4dCh0eHRGaWVsZC5zZWxlY3Rpb25FbmQtMSwgdHh0RmllbGQudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR4dEZpZWxkLnZhbHVlID0gcm1UeHQoaGlnaGxpZ2h0LCB0eHRGaWVsZC52YWx1ZSk7XG4gICAgICAgICAgaGlnaGxpZ2h0ID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQub25zZWxlY3Rpb25jaGFuZ2UgPSBmdW5jdGlvbihlKSB7XG4gICAgbGV0IHthbmNob3JOb2RlLCBhbmNob3JPZmZzZXQsIGZvY3VzTm9kZSwgZm9jdXNPZmZzZXR9ID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG4gICAgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKVxuICB9O1xufSk7XG5cbmZ1bmN0aW9uIHJtVHh0KHRhcmdldCwgdHh0VmFsdWUpIHtcbiAgaWYodHlwZW9mIHRhcmdldCA9PT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiB0eHRWYWx1ZS5zbGljZSgwLCB0YXJnZXQpO1xuICB9ZWxzZSB7XG4gICAgY29uc3QgcmVnRXhwID0gL3RhcmdldC9pO1xuICAgIHJldHVybiB0eHRWYWx1ZS5yZXBsYWNlKHJlZ0V4cCwgXCJcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VXBwZXJDYXNlKGtleXMsIGxhbmd1YWdlKSB7XG4gIGZvciAoa2V5IG9mIGtleXMpIHtcbiAgICBpZiAobGFuZ3VhZ2UuZ2V0QXR0cmlidXRlKFwiYWN0aXZlXCIpID09PSBcImVuXCIpIHtcbiAgICAgIGlmIChrZXkuZ2V0QXR0cmlidXRlKFwia2V5RW5cIikgfHwga2V5LmdldEF0dHJpYnV0ZShcImtleVwiKSkge1xuICAgICAgICBrZXkuaW5uZXJIVE1MID0ga2V5LmdldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVFblwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGtleS5nZXRBdHRyaWJ1dGUoXCJrZXlSdVwiKSB8fCBrZXkuZ2V0QXR0cmlidXRlKFwia2V5XCIpKSB7XG4gICAgICAgIGtleS5pbm5lckhUTUwgPSBrZXkuZ2V0QXR0cmlidXRlKFwiVXBwZXJDYXNlTmFtZVJ1XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRMb3dlckNhc2Uoa2V5cywgbGFuZ3VhZ2UpIHtcbiAgZm9yIChrZXkgb2Yga2V5cykge1xuICAgIGlmIChrZXkuZ2V0QXR0cmlidXRlKFwia2V5XCIpKSB7XG4gICAgICBrZXkuaW5uZXJIVE1MID0ga2V5LmdldEF0dHJpYnV0ZShcImtleVwiKTtcbiAgICB9XG4gICAgaWYgKGxhbmd1YWdlLmdldEF0dHJpYnV0ZShcImFjdGl2ZVwiKSA9PT0gXCJlblwiKSB7XG4gICAgICBpZiAoa2V5LmdldEF0dHJpYnV0ZShcImtleUVuXCIpKSB7XG4gICAgICAgIGtleS5pbm5lckhUTUwgPSBrZXkuZ2V0QXR0cmlidXRlKFwia2V5RW5cIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChrZXkuZ2V0QXR0cmlidXRlKFwia2V5UnVcIikpIHtcbiAgICAgICAga2V5LmlubmVySFRNTCA9IGtleS5nZXRBdHRyaWJ1dGUoXCJrZXlSdVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlQWN0aXZlKGVsKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9IGVsc2Uge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tBY3RpdmUoZWwpIHtcbiAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVMYW5ndWFnZShsYW5ndWFnZSwga2V5cykge1xuICBpZiAobGFuZ3VhZ2UuZ2V0QXR0cmlidXRlKFwiYWN0aXZlXCIpID09PSBcImVuXCIpIHtcbiAgICBmb3IgKGtleSBvZiBrZXlzKSB7XG4gICAgICBpZiAoa2V5LmdldEF0dHJpYnV0ZShcImtleUVuXCIpKSB7XG4gICAgICAgIGtleS5pbm5lckhUTUwgPSBrZXkuZ2V0QXR0cmlidXRlKFwia2V5UnVcIik7XG4gICAgICB9XG4gICAgfVxuICAgIGxhbmd1YWdlLnNldEF0dHJpYnV0ZShcImFjdGl2ZVwiLCBcInJ1XCIpO1xuICB9IGVsc2Uge1xuICAgIGZvciAoa2V5IG9mIGtleXMpIHtcbiAgICAgIGlmIChrZXkuZ2V0QXR0cmlidXRlKFwia2V5RW5cIikpIHtcbiAgICAgICAga2V5LmlubmVySFRNTCA9IGtleS5nZXRBdHRyaWJ1dGUoXCJrZXlFblwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFuZ3VhZ2Uuc2V0QXR0cmlidXRlKFwiYWN0aXZlXCIsIFwiZW5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0QXRyc2ZvcktleXMoa2V5cykge1xuICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xuICAgIGlmIChrZXkuZ2V0QXR0cmlidXRlKFwia2V5RW5cIikpIHtcbiAgICAgIGtleS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwiVXBwZXJDYXNlTmFtZUVuXCIsXG4gICAgICAgIGtleS5nZXRBdHRyaWJ1dGUoXCJrZXlFblwiKS50b1VwcGVyQ2FzZSgpXG4gICAgICApO1xuICAgICAga2V5LnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJVcHBlckNhc2VOYW1lUnVcIixcbiAgICAgICAga2V5LmdldEF0dHJpYnV0ZShcImtleVJ1XCIpLnRvVXBwZXJDYXNlKClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAga2V5c1sxXS5zZXRBdHRyaWJ1dGUoXCJrZXlcIiwgXCIxXCIpO1xuICBrZXlzWzJdLnNldEF0dHJpYnV0ZShcImtleVwiLCBcIjJcIik7XG4gIGtleXNbM10uc2V0QXR0cmlidXRlKFwia2V5XCIsIFwiM1wiKTtcbiAga2V5c1s0XS5zZXRBdHRyaWJ1dGUoXCJrZXlcIiwgXCI0XCIpO1xuICBrZXlzWzVdLnNldEF0dHJpYnV0ZShcImtleVwiLCBcIjVcIik7XG4gIGtleXNbNl0uc2V0QXR0cmlidXRlKFwia2V5XCIsIFwiNlwiKTtcbiAga2V5c1s3XS5zZXRBdHRyaWJ1dGUoXCJrZXlcIiwgXCI3XCIpO1xuICBrZXlzWzhdLnNldEF0dHJpYnV0ZShcImtleVwiLCBcIjhcIik7XG4gIGtleXNbOV0uc2V0QXR0cmlidXRlKFwia2V5XCIsIFwiOVwiKTtcbiAga2V5c1sxMF0uc2V0QXR0cmlidXRlKFwia2V5XCIsIFwiMFwiKTtcbiAga2V5c1sxMV0uc2V0QXR0cmlidXRlKFwia2V5XCIsIFwiLVwiKTtcbiAga2V5c1sxMl0uc2V0QXR0cmlidXRlKFwia2V5XCIsIFwiPVwiKTtcblxuICBrZXlzWzBdLnNldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVFblwiLCBcIn5cIik7XG4gIGtleXNbMV0uc2V0QXR0cmlidXRlKFwiVXBwZXJDYXNlTmFtZUVuXCIsIFwiIVwiKTtcbiAga2V5c1syXS5zZXRBdHRyaWJ1dGUoXCJVcHBlckNhc2VOYW1lRW5cIiwgXCJAXCIpO1xuICBrZXlzWzNdLnNldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVFblwiLCBcIiNcIik7XG4gIGtleXNbNF0uc2V0QXR0cmlidXRlKFwiVXBwZXJDYXNlTmFtZUVuXCIsIFwiJFwiKTtcbiAga2V5c1s1XS5zZXRBdHRyaWJ1dGUoXCJVcHBlckNhc2VOYW1lRW5cIiwgXCIlXCIpO1xuICBrZXlzWzZdLnNldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVFblwiLCBcIl5cIik7XG4gIGtleXNbN10uc2V0QXR0cmlidXRlKFwiVXBwZXJDYXNlTmFtZUVuXCIsIFwiJlwiKTtcbiAga2V5c1s4XS5zZXRBdHRyaWJ1dGUoXCJVcHBlckNhc2VOYW1lRW5cIiwgXCIqXCIpO1xuICBrZXlzWzldLnNldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVFblwiLCBcIihcIik7XG4gIGtleXNbMTBdLnNldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVFblwiLCBcIilcIik7XG4gIGtleXNbMTFdLnNldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVFblwiLCBcIl9cIik7XG4gIGtleXNbMTJdLnNldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVFblwiLCBcIitcIik7XG5cbiAga2V5c1sxXS5zZXRBdHRyaWJ1dGUoXCJVcHBlckNhc2VOYW1lUnVcIiwgXCIhXCIpO1xuICBrZXlzWzJdLnNldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVSdVwiLCAnXCInKTtcbiAga2V5c1szXS5zZXRBdHRyaWJ1dGUoXCJVcHBlckNhc2VOYW1lUnVcIiwgXCLihJZcIik7XG4gIGtleXNbNF0uc2V0QXR0cmlidXRlKFwiVXBwZXJDYXNlTmFtZVJ1XCIsIFwiO1wiKTtcbiAga2V5c1s1XS5zZXRBdHRyaWJ1dGUoXCJVcHBlckNhc2VOYW1lUnVcIiwgXCIlXCIpO1xuICBrZXlzWzZdLnNldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVSdVwiLCBcIjpcIik7XG4gIGtleXNbN10uc2V0QXR0cmlidXRlKFwiVXBwZXJDYXNlTmFtZVJ1XCIsIFwiP1wiKTtcbiAga2V5c1s4XS5zZXRBdHRyaWJ1dGUoXCJVcHBlckNhc2VOYW1lUnVcIiwgXCIqXCIpO1xuICBrZXlzWzldLnNldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVSdVwiLCBcIihcIik7XG4gIGtleXNbMTBdLnNldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVSdVwiLCBcIilcIik7XG4gIGtleXNbMTFdLnNldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVSdVwiLCBcIi1cIik7XG4gIGtleXNbMTJdLnNldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVSdVwiLCBcIj1cIik7XG5cbiAga2V5c1syNV0uc2V0QXR0cmlidXRlKFwiVXBwZXJDYXNlTmFtZUVuXCIsIFwie1wiKTtcbiAga2V5c1syNl0uc2V0QXR0cmlidXRlKFwiVXBwZXJDYXNlTmFtZUVuXCIsIFwifVwiKTtcblxuICBrZXlzWzI3XS5zZXRBdHRyaWJ1dGUoXCJrZXlcIiwgXCJcXFxcXCIpO1xuICBrZXlzWzI3XS5zZXRBdHRyaWJ1dGUoXCJVcHBlckNhc2VOYW1lRW5cIiwgXCJ8XCIpO1xuICBrZXlzWzI3XS5zZXRBdHRyaWJ1dGUoXCJVcHBlckNhc2VOYW1lUnVcIiwgXCJ8XCIpO1xuXG4gIGtleXNbMzldLnNldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVFblwiLCBcIjpcIik7XG4gIGtleXNbNDBdLnNldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVFblwiLCAnXCInKTtcblxuICBrZXlzWzUxXS5zZXRBdHRyaWJ1dGUoXCJVcHBlckNhc2VOYW1lRW5cIiwgXCI8XCIpO1xuICBrZXlzWzUyXS5zZXRBdHRyaWJ1dGUoXCJVcHBlckNhc2VOYW1lRW5cIiwgXCI+XCIpO1xuXG4gIGtleXNbNDNdLnNldEF0dHJpYnV0ZShcImtleVwiLCBcIi9cIik7XG4gIGtleXNbNDNdLnNldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVFblwiLCBcIi9cIik7XG4gIGtleXNbNDNdLnNldEF0dHJpYnV0ZShcIlVwcGVyQ2FzZU5hbWVSdVwiLCBcIixcIik7XG5cbiAga2V5c1s1M10uc2V0QXR0cmlidXRlKFwia2V5XCIsIFwiL1wiKTtcbiAga2V5c1s1M10uc2V0QXR0cmlidXRlKFwiVXBwZXJDYXNlTmFtZUVuXCIsIFwiP1wiKTtcbiAga2V5c1s1M10uc2V0QXR0cmlidXRlKFwiVXBwZXJDYXNlTmFtZVJ1XCIsIFwiLlwiKTtcbn1cbiIsImNvbnN0IGtleXNNYXAgPSBuZXcgTWFwKCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgZmlsbEtleXMoa2V5c01hcCk7XG5cbiAgY29uc3QgYm9keSA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGxldCBjb250YWluZXIgPSBjcmVhdGVFbChcImRpdlwiLCBcImNvbnRhaW5lclwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGxldCB3cmFwcGVyID0gY3JlYXRlRWwoXCJkaXZcIiwgXCJ3cmFwcGVyXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgY29uc3QgdGV4dEFyZWEgPSBjcmVhdGVFbChcInRleHRhcmVhXCIsIFwidGV4dC1maWVsZFwiKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gIHRleHRBcmVhLnBsYWNlaG9sZGVyID0gXCJIZWxsbyB0aGVyZSEgXFxuRW50ZXIgeW91IHRob3VnaHRzLi4uXCI7XG5cbiAgY29uc3QgbmlnaHRNb2RlID0gY3JlYXRlRWwoXCJkaXZcIiwgXCJuaWdodF9tb2RlXCIpO1xuICBuaWdodE1vZGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ0b2dnbGVfY2lyY2xlXCI+PC9kaXY+YDtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKG5pZ2h0TW9kZSk7XG5cbiAgY29uc3QgY2hhbmdlTGlnaHRDb2xvciA9IGNyZWF0ZUVsKFwiZGl2XCIsIFwiY2hhbmdlX2xpZ2h0X2NvbG9yXCIpO1xuICBjaGFuZ2VMaWdodENvbG9yLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiY29sb3JzXCI+PGlucHV0IHR5cGU9XCJjb2xvclwiIGNsYXNzPVwiY29sb3JzX2lucHV0XCIgLz48L2Rpdj5gO1xuXG4gIGNvbnN0IG5vdGljZUhvd0NoYW5jZ2VMYW5ndWFnZSA9IGNyZWF0ZUVsKFwiaDFcIiwgXCJ0aXRsZVwiKTtcbiAgbm90aWNlSG93Q2hhbmNnZUxhbmd1YWdlLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2UtbGFuZ3VhZ2VfdGl0bGVcIilcbiAgbm90aWNlSG93Q2hhbmNnZUxhbmd1YWdlLmlubmVySFRNTCA9IGBQcmVzcyBDdHJsICsgQWx0IHRvIGNoYW5nZSBsYW5ndWFnZWA7XG5cblxuICBjb25zdCBuaWdodE1vZGVUaXRsZSA9IGNyZWF0ZUVsKFwiaDJcIiwgXCJ0aXRsZVwiKTtcbiAgbmlnaHRNb2RlVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5pZ2h0TW9kZVRpdGxlX3RpdGxlXCIpXG4gIG5pZ2h0TW9kZVRpdGxlLmlubmVySFRNTCA9IGBOaWdodCBtb2RlYDtcblxuICBjb25zdCBjaGFuZ2VDb2xvclRpdGxlID0gY3JlYXRlRWwoXCJoMlwiLCBcInRpdGxlXCIpO1xuICBjaGFuZ2VDb2xvclRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2VDb2xvclRpdGxlX3RpdGxlXCIpXG4gIGNoYW5nZUNvbG9yVGl0bGUuaW5uZXJIVE1MID0gYENoYW5nZSBrZXlib2FyZCBjb2xvcmA7XG5cbiAgY29uc3Qgb2NUaXRsZSA9IGNyZWF0ZUVsKFwiaDJcIiwgXCJ0aXRsZVwiKTtcbiAgbGV0IG9jID0gaXNNYWNpbnRvc2goKSA/IFwiTWFjIE9TXCIgOiBcIldpbmRvd3NcIjtcbiAgb2NUaXRsZS5jbGFzc0xpc3QuYWRkKFwib2NUaXRsZV90aXRsZVwiKVxuICBvY1RpdGxlLmlubmVySFRNTCA9IGBNYWRlIGZvciAke29jfWA7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZChuaWdodE1vZGUpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGNoYW5nZUxpZ2h0Q29sb3IpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKG5vdGljZUhvd0NoYW5jZ2VMYW5ndWFnZSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQobmlnaHRNb2RlVGl0bGUpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGNoYW5nZUNvbG9yVGl0bGUpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKG9jVGl0bGUpO1xuXG4gIGNvbnN0IGtleUJvYXJkV3JhcCA9IGNyZWF0ZUVsKFwiZGl2XCIsIFwia2V5Ym9hcmRfd3JhcHBcIik7XG4gIGNvbnN0IGtleWJvYXJkTGlnaHRzID0gY3JlYXRlRWwoXCJkaXZcIiwgXCJrZXlib2FyZF9saWdodHNcIik7XG4gIGNvbnN0IGtleWJvYXJkS2V5cyA9IGNyZWF0ZUVsKFwiZGl2XCIsIFwia2V5Ym9hcmRfa2V5c1wiKTtcbiAga2V5Qm9hcmRXcmFwLmFwcGVuZENoaWxkKGtleWJvYXJkTGlnaHRzKTtcbiAga2V5Qm9hcmRXcmFwLmFwcGVuZENoaWxkKGtleWJvYXJkS2V5cyk7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZChrZXlCb2FyZFdyYXApO1xuXG4gIGNvbnN0IGtleWJvYXJkX2tleXMgPSB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua2V5Ym9hcmRfa2V5c1wiKTtcblxuICBmb3IgKGxldCByb3cgb2Yga2V5c01hcC52YWx1ZXMoKSkge1xuICAgIGtleWJvYXJkX2tleXMuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxuXG4gIGtleWJvYXJkX2tleXMuY2hpbGROb2Rlc1swXS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImJhY2tzcGFjZV9rZXlcIik7XG5cbiAga2V5Ym9hcmRfa2V5cy5jaGlsZE5vZGVzWzFdLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcInRhYl9rZXlcIik7XG4gIGtleWJvYXJkX2tleXMuY2hpbGROb2Rlc1sxXS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImRlbF9rZXlcIik7XG5cbiAga2V5Ym9hcmRfa2V5cy5jaGlsZE5vZGVzWzJdLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImNhcHNfbG9ja19rZXlcIik7XG4gIGtleWJvYXJkX2tleXMuY2hpbGROb2Rlc1syXS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImVudGVyX2tleVwiKTtcblxuICBrZXlib2FyZF9rZXlzLmNoaWxkTm9kZXNbM10uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFxuICAgIFwic2hpZnRfa2V5XCIsXG4gICAgXCJsZWZ0X3NoaWZ0XCJcbiAgKTtcbiAga2V5Ym9hcmRfa2V5cy5jaGlsZE5vZGVzWzNdLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFxuICAgIFwic2hpZnRfa2V5XCIsXG4gICAgXCJyaWdodF9zaGlmdFwiXG4gICk7XG5cbiAga2V5Ym9hcmRfa2V5cy5jaGlsZE5vZGVzWzRdLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImN0cmxfa2V5XCIsIFwiY3RybF9sZWZ0XCIpO1xuXG4gIGNvbnN0IGxhbmd1YWdlID0ga2V5Ym9hcmRfa2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbMV07XG4gIGxhbmd1YWdlLmNsYXNzTGlzdC5hZGQoXCJsYW5ndWFnZVwiKTtcblxuICBrZXlib2FyZF9rZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QuYWRkKFxuICAgIFwiYWx0X2tleVwiLFxuICAgIFwiYWx0X2xlZnRcIlxuICApO1xuICBrZXlib2FyZF9rZXlzLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1s0XS5jbGFzc0xpc3QuYWRkKFxuICAgIFwiYWx0X2tleVwiLFxuICAgIFwiYWx0X3JpZ2h0XCJcbiAgKTtcblxuICBjb25zdCBzcGFjZSA9IGtleWJvYXJkX2tleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzNdO1xuICBzcGFjZS5jbGFzc0xpc3QuYWRkKFwic3BhY2Vfa2V5XCIpO1xuXG4gIGtleWJvYXJkX2tleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzVdLmNsYXNzTGlzdC5hZGQoXG4gICAgXCJjdHJsX2tleVwiLFxuICAgIFwiY3RybF9yaWdodFwiXG4gICk7XG5cbiAgY29uc3QgdXAgPSBrZXlib2FyZF9rZXlzLmNoaWxkTm9kZXNbM10ubGFzdENoaWxkLnByZXZpb3VzU2libGluZztcbiAgY29uc3QgZG93biA9IGtleWJvYXJkX2tleXMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzddO1xuICBjb25zdCBsZWZ0ID0ga2V5Ym9hcmRfa2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbNl07XG4gIGNvbnN0IHJpZ2h0ID0ga2V5Ym9hcmRfa2V5cy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbOF07XG5cbiAgdXAuY2xhc3NMaXN0LmFkZChcInVwX2tleVwiKTtcbiAgZG93bi5jbGFzc0xpc3QuYWRkKFwiZG93bl9rZXlcIik7XG4gIGxlZnQuY2xhc3NMaXN0LmFkZChcImxlZnRfa2V5XCIpO1xuICByaWdodC5jbGFzc0xpc3QuYWRkKFwicmlnaHRfa2V5XCIpO1xuXG4gIHVwLmlubmVySFRNTCA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgPHN2ZyB3aWR0aD1cIjM2cHhcIiBoZWlnaHQ9XCIzNnB4XCIgdmlld0JveD1cIjAgLTYuNSAzNiAzNlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gIFxuICAgICAgPHRpdGxlPnVwLWFycm93PC90aXRsZT5cbiAgICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgICAgPGcgaWQ9XCJpY29uc1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgPGcgaWQ9XCJ1cFwiIGNsYXNzPVwiYXJyb3dzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNDIuMDAwMDAwLCAtMTU5LjAwMDAwMClcIiBmaWxsPVwiIzI1MjUyOFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJzcXVhcmUtZmlsbGVkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwLjAwMDAwMCwgMTIwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzE3LjEwODAxMiwzOS4yOTAyODU3IEwzMjcuNjQ5ODA0LDQ5Ljc0MTcwNDMgTDMyNy43MDg5OTQsNDkuNzk1OTE2OSBDMzI3Ljg4OTE0MSw0OS45NzQ1NTQzIDMyNy45ODYxNDMsNTAuMjA0NDE4MiAzMjgsNTAuNDM4MjIyNyBMMzI4LDUwLjU2MTc3NzMgQzMyNy45ODYxNDMsNTAuNzk1NTgxOCAzMjcuODg5MTQxLDUxLjAyNTQ0NTcgMzI3LjcwODk5NCw1MS4yMDQwODMxIEwzMjcuNjU3MSw1MS4yNDc5ODAzIEwzMTcuMTA4MDEyLDYxLjcwOTcxNDMgQzMxNi43MTc2OTQsNjIuMDk2NzYxOSAzMTYuMDg0ODY1LDYyLjA5Njc2MTkgMzE1LjY5NDU0Nyw2MS43MDk3MTQzIEMzMTUuMzA0MjMsNjEuMzIyNjY2OCAzMTUuMzA0MjMsNjAuNjk1MTM4NyAzMTUuNjk0NTQ3LDYwLjMwODA5MTEgTDMyNC43MDI2NjYsNTEuMzczODQ5NiBMMjkyLjk5OTQ3LDUxLjM3NDYyOTEgQzI5Mi40NDc0NzgsNTEuMzc0NjI5MSAyOTIsNTAuOTMwODk5NyAyOTIsNTAuMzgzNTMxOCBDMjkyLDQ5LjgzNjE2MzkgMjkyLjQ0NzQ3OCw0OS4zOTI0MzQ1IDI5Mi45OTk0Nyw0OS4zOTI0MzQ1IEwzMjQuNDY3NzksNDkuMzkxNjU1MSBMMzE1LjY5NDU0Nyw0MC42OTE5MDg5IEMzMTUuMzA0MjMsNDAuMzA0ODYxMyAzMTUuMzA0MjMsMzkuNjc3MzMzMiAzMTUuNjk0NTQ3LDM5LjI5MDI4NTcgQzMxNi4wODQ4NjUsMzguOTAzMjM4MSAzMTYuNzE3Njk0LDM4LjkwMzIzODEgMzE3LjEwODAxMiwzOS4yOTAyODU3IFogTTMyNy4xMTUzNTcsNTAuMzgyNjkzIEwzMTYuNDAxMjc5LDYxLjAwODkwMjcgTDMyNy4wMDIxNTEsNTAuNTAwMjA0NiBMMzI3LjAwMjI1Miw1MC40OTYzNzE5IEwzMjYuOTQzMTQyLDUwLjQ0MjU4NSBMMzI2Ljg4MjczNyw1MC4zODI2OTMgTDMyNy4xMTUzNTcsNTAuMzgyNjkzIFpcIiBpZD1cImxlZnQtYXJyb3dcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzEwLjAwMDAwMCwgNTAuNTAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zMTAuMDAwMDAwLCAtNTAuNTAwMDAwKSBcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gIDwvc3ZnPmA7XG4gIGRvd24uaW5uZXJIVE1MID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICA8c3ZnIHdpZHRoPVwiMzZweFwiIGhlaWdodD1cIjM2cHhcIiB2aWV3Qm94PVwiMCAtNi41IDM2IDM2XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgXG4gICAgICA8dGl0bGU+ZG93bi1hcnJvdzwvdGl0bGU+XG4gICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICAgIDxnIGlkPVwiaWNvbnNcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgIDxnIGlkPVwiZG93blwiIGNsYXNzPVwiYXJyb3dzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNDIuMDAwMDAwLCAtMTU5LjAwMDAwMClcIiBmaWxsPVwiIzI1MjUyOFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJzcXVhcmUtZmlsbGVkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwLjAwMDAwMCwgMTIwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzE3LjEwODAxMiwzOS4yOTAyODU3IEwzMjcuNjQ5ODA0LDQ5Ljc0MTcwNDMgTDMyNy43MDg5OTQsNDkuNzk1OTE2OSBDMzI3Ljg4OTE0MSw0OS45NzQ1NTQzIDMyNy45ODYxNDMsNTAuMjA0NDE4MiAzMjgsNTAuNDM4MjIyNyBMMzI4LDUwLjU2MTc3NzMgQzMyNy45ODYxNDMsNTAuNzk1NTgxOCAzMjcuODg5MTQxLDUxLjAyNTQ0NTcgMzI3LjcwODk5NCw1MS4yMDQwODMxIEwzMjcuNjU3MSw1MS4yNDc5ODAzIEwzMTcuMTA4MDEyLDYxLjcwOTcxNDMgQzMxNi43MTc2OTQsNjIuMDk2NzYxOSAzMTYuMDg0ODY1LDYyLjA5Njc2MTkgMzE1LjY5NDU0Nyw2MS43MDk3MTQzIEMzMTUuMzA0MjMsNjEuMzIyNjY2OCAzMTUuMzA0MjMsNjAuNjk1MTM4NyAzMTUuNjk0NTQ3LDYwLjMwODA5MTEgTDMyNC43MDI2NjYsNTEuMzczODQ5NiBMMjkyLjk5OTQ3LDUxLjM3NDYyOTEgQzI5Mi40NDc0NzgsNTEuMzc0NjI5MSAyOTIsNTAuOTMwODk5NyAyOTIsNTAuMzgzNTMxOCBDMjkyLDQ5LjgzNjE2MzkgMjkyLjQ0NzQ3OCw0OS4zOTI0MzQ1IDI5Mi45OTk0Nyw0OS4zOTI0MzQ1IEwzMjQuNDY3NzksNDkuMzkxNjU1MSBMMzE1LjY5NDU0Nyw0MC42OTE5MDg5IEMzMTUuMzA0MjMsNDAuMzA0ODYxMyAzMTUuMzA0MjMsMzkuNjc3MzMzMiAzMTUuNjk0NTQ3LDM5LjI5MDI4NTcgQzMxNi4wODQ4NjUsMzguOTAzMjM4MSAzMTYuNzE3Njk0LDM4LjkwMzIzODEgMzE3LjEwODAxMiwzOS4yOTAyODU3IFogTTMyNy4xMTUzNTcsNTAuMzgyNjkzIEwzMTYuNDAxMjc5LDYxLjAwODkwMjcgTDMyNy4wMDIxNTEsNTAuNTAwMjA0NiBMMzI3LjAwMjI1Miw1MC40OTYzNzE5IEwzMjYuOTQzMTQyLDUwLjQ0MjU4NSBMMzI2Ljg4MjczNyw1MC4zODI2OTMgTDMyNy4xMTUzNTcsNTAuMzgyNjkzIFpcIiBpZD1cImxlZnQtYXJyb3dcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzEwLjAwMDAwMCwgNTAuNTAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zMTAuMDAwMDAwLCAtNTAuNTAwMDAwKSBcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gIDwvc3ZnPmA7XG4gIGxlZnQuaW5uZXJIVE1MID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICA8c3ZnIHdpZHRoPVwiMzZweFwiIGhlaWdodD1cIjM2cHhcIiB2aWV3Qm94PVwiMCAtNi41IDM2IDM2XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgXG4gICAgICA8dGl0bGU+bGVmdC1hcnJvdzwvdGl0bGU+XG4gICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICAgIDxnIGlkPVwiaWNvbnNcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgIDxnIGlkPVwibGVmdFwiIGNsYXNzPVwiYXJyb3dzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNDIuMDAwMDAwLCAtMTU5LjAwMDAwMClcIiBmaWxsPVwiIzI1MjUyOFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJzcXVhcmUtZmlsbGVkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwLjAwMDAwMCwgMTIwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzE3LjEwODAxMiwzOS4yOTAyODU3IEwzMjcuNjQ5ODA0LDQ5Ljc0MTcwNDMgTDMyNy43MDg5OTQsNDkuNzk1OTE2OSBDMzI3Ljg4OTE0MSw0OS45NzQ1NTQzIDMyNy45ODYxNDMsNTAuMjA0NDE4MiAzMjgsNTAuNDM4MjIyNyBMMzI4LDUwLjU2MTc3NzMgQzMyNy45ODYxNDMsNTAuNzk1NTgxOCAzMjcuODg5MTQxLDUxLjAyNTQ0NTcgMzI3LjcwODk5NCw1MS4yMDQwODMxIEwzMjcuNjU3MSw1MS4yNDc5ODAzIEwzMTcuMTA4MDEyLDYxLjcwOTcxNDMgQzMxNi43MTc2OTQsNjIuMDk2NzYxOSAzMTYuMDg0ODY1LDYyLjA5Njc2MTkgMzE1LjY5NDU0Nyw2MS43MDk3MTQzIEMzMTUuMzA0MjMsNjEuMzIyNjY2OCAzMTUuMzA0MjMsNjAuNjk1MTM4NyAzMTUuNjk0NTQ3LDYwLjMwODA5MTEgTDMyNC43MDI2NjYsNTEuMzczODQ5NiBMMjkyLjk5OTQ3LDUxLjM3NDYyOTEgQzI5Mi40NDc0NzgsNTEuMzc0NjI5MSAyOTIsNTAuOTMwODk5NyAyOTIsNTAuMzgzNTMxOCBDMjkyLDQ5LjgzNjE2MzkgMjkyLjQ0NzQ3OCw0OS4zOTI0MzQ1IDI5Mi45OTk0Nyw0OS4zOTI0MzQ1IEwzMjQuNDY3NzksNDkuMzkxNjU1MSBMMzE1LjY5NDU0Nyw0MC42OTE5MDg5IEMzMTUuMzA0MjMsNDAuMzA0ODYxMyAzMTUuMzA0MjMsMzkuNjc3MzMzMiAzMTUuNjk0NTQ3LDM5LjI5MDI4NTcgQzMxNi4wODQ4NjUsMzguOTAzMjM4MSAzMTYuNzE3Njk0LDM4LjkwMzIzODEgMzE3LjEwODAxMiwzOS4yOTAyODU3IFogTTMyNy4xMTUzNTcsNTAuMzgyNjkzIEwzMTYuNDAxMjc5LDYxLjAwODkwMjcgTDMyNy4wMDIxNTEsNTAuNTAwMjA0NiBMMzI3LjAwMjI1Miw1MC40OTYzNzE5IEwzMjYuOTQzMTQyLDUwLjQ0MjU4NSBMMzI2Ljg4MjczNyw1MC4zODI2OTMgTDMyNy4xMTUzNTcsNTAuMzgyNjkzIFpcIiBpZD1cImxlZnQtYXJyb3dcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzEwLjAwMDAwMCwgNTAuNTAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zMTAuMDAwMDAwLCAtNTAuNTAwMDAwKSBcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gIDwvc3ZnPmA7XG4gIHJpZ2h0LmlubmVySFRNTCA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgPHN2ZyB3aWR0aD1cIjM2cHhcIiBoZWlnaHQ9XCIzNnB4XCIgdmlld0JveD1cIjAgLTYuNSAzNiAzNlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gIFxuICAgICAgPHRpdGxlPnJpZ2h0LWFycm93PC90aXRsZT5cbiAgICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgICAgPGcgaWQ9XCJpY29uc1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgPGcgaWQ9XCJyaWdodFwiIGNsYXNzPVwiYXJyb3dzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNDIuMDAwMDAwLCAtMTU5LjAwMDAwMClcIiBmaWxsPVwiIzI1MjUyOFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJzcXVhcmUtZmlsbGVkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwLjAwMDAwMCwgMTIwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzE3LjEwODAxMiwzOS4yOTAyODU3IEwzMjcuNjQ5ODA0LDQ5Ljc0MTcwNDMgTDMyNy43MDg5OTQsNDkuNzk1OTE2OSBDMzI3Ljg4OTE0MSw0OS45NzQ1NTQzIDMyNy45ODYxNDMsNTAuMjA0NDE4MiAzMjgsNTAuNDM4MjIyNyBMMzI4LDUwLjU2MTc3NzMgQzMyNy45ODYxNDMsNTAuNzk1NTgxOCAzMjcuODg5MTQxLDUxLjAyNTQ0NTcgMzI3LjcwODk5NCw1MS4yMDQwODMxIEwzMjcuNjU3MSw1MS4yNDc5ODAzIEwzMTcuMTA4MDEyLDYxLjcwOTcxNDMgQzMxNi43MTc2OTQsNjIuMDk2NzYxOSAzMTYuMDg0ODY1LDYyLjA5Njc2MTkgMzE1LjY5NDU0Nyw2MS43MDk3MTQzIEMzMTUuMzA0MjMsNjEuMzIyNjY2OCAzMTUuMzA0MjMsNjAuNjk1MTM4NyAzMTUuNjk0NTQ3LDYwLjMwODA5MTEgTDMyNC43MDI2NjYsNTEuMzczODQ5NiBMMjkyLjk5OTQ3LDUxLjM3NDYyOTEgQzI5Mi40NDc0NzgsNTEuMzc0NjI5MSAyOTIsNTAuOTMwODk5NyAyOTIsNTAuMzgzNTMxOCBDMjkyLDQ5LjgzNjE2MzkgMjkyLjQ0NzQ3OCw0OS4zOTI0MzQ1IDI5Mi45OTk0Nyw0OS4zOTI0MzQ1IEwzMjQuNDY3NzksNDkuMzkxNjU1MSBMMzE1LjY5NDU0Nyw0MC42OTE5MDg5IEMzMTUuMzA0MjMsNDAuMzA0ODYxMyAzMTUuMzA0MjMsMzkuNjc3MzMzMiAzMTUuNjk0NTQ3LDM5LjI5MDI4NTcgQzMxNi4wODQ4NjUsMzguOTAzMjM4MSAzMTYuNzE3Njk0LDM4LjkwMzIzODEgMzE3LjEwODAxMiwzOS4yOTAyODU3IFogTTMyNy4xMTUzNTcsNTAuMzgyNjkzIEwzMTYuNDAxMjc5LDYxLjAwODkwMjcgTDMyNy4wMDIxNTEsNTAuNTAwMjA0NiBMMzI3LjAwMjI1Miw1MC40OTYzNzE5IEwzMjYuOTQzMTQyLDUwLjQ0MjU4NSBMMzI2Ljg4MjczNyw1MC4zODI2OTMgTDMyNy4xMTUzNTcsNTAuMzgyNjkzIFpcIiBpZD1cImxlZnQtYXJyb3dcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzEwLjAwMDAwMCwgNTAuNTAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zMTAuMDAwMDAwLCAtNTAuNTAwMDAwKSBcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gIDwvc3ZnPmA7XG59KTtcblxuY29uc3QgY3JlYXRlS2V5cyA9IChhcnIpID0+IHtcbiAgbGV0IGkgPSAwO1xuXG4gIGNvbnN0IHJvdyA9IGNyZWF0ZUVsKFwiZGl2XCIsIFwicm93XCIpO1xuXG4gIHdoaWxlIChpIDwgYXJyLmxlbmd0aCkge1xuICAgIGxldCBrZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGtleS5jbGFzc0xpc3QuYWRkKFwia2V5c1wiKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnJbaV0pKSB7XG4gICAgICBrZXkuc2V0QXR0cmlidXRlKFwia2V5RW5cIiwgYXJyW2ldWzBdKTtcbiAgICAgIGtleS5zZXRBdHRyaWJ1dGUoXCJrZXlSdVwiLCBhcnJbaV1bMV0pO1xuICAgICAga2V5LmlubmVySFRNTCA9IGtleS5nZXRBdHRyaWJ1dGUoXCJrZXlFblwiKTtcbiAgICB9ZWxzZSB7XG4gICAgICBrZXkuaW5uZXJIVE1MID0gYXJyW2ldO1xuICAgIH1cbiAgICByb3cuYXBwZW5kQ2hpbGQoa2V5KTtcbiAgICBpKys7XG4gIH1cblxuICByZXR1cm4gcm93O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRWwodGFnLCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBpc01hY2ludG9zaCgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKFwiTWFjXCIpID4gLTE7XG59XG5cbmZ1bmN0aW9uIGZpbGxLZXlzKG1hcCkge1xuICBjb25zdCBvYyA9IGlzTWFjaW50b3NoKCkgPyBcIk1hY1wiIDogXCJXaW5cIjtcblxuICBtYXAuc2V0KFxuICAgIFwicm93MVwiLFxuICAgIGNyZWF0ZUtleXMoW1xuICAgICAgW1wiYFwiLCBcItGRXCJdLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAwLCBcIi1cIiwgXCI9XCIsIFwiQmFja3NwYWNlXCIsXG4gICAgXSlcbiAgKTtcbiAgbWFwLnNldChcbiAgICBcInJvdzJcIixcbiAgICBjcmVhdGVLZXlzKFtcbiAgICAgIFwiVGFiXCIsXG4gICAgICBbXCJxXCIsIFwi0LlcIl0sXG4gICAgICBbXCJ3XCIsIFwi0YZcIl0sXG4gICAgICBbXCJlXCIsIFwi0YNcIl0sXG4gICAgICBbXCJyXCIsIFwi0LpcIl0sXG4gICAgICBbXCJ0XCIsIFwi0LVcIl0sXG4gICAgICBbXCJ5XCIsIFwi0L1cIl0sXG4gICAgICBbXCJ1XCIsIFwi0LNcIl0sXG4gICAgICBbXCJpXCIsIFwi0YhcIl0sXG4gICAgICBbXCJvXCIsIFwi0YlcIl0sXG4gICAgICBbXCJwXCIsIFwi0LdcIl0sXG4gICAgICBbXCJbXCIsIFwi0YVcIl0sXG4gICAgICBbXCJdXCIsIFwi0YpcIl0sXG4gICAgICBcIlxcXFxcIixcbiAgICAgIFwiREVMXCIsXG4gICAgXSlcbiAgKTtcbiAgbWFwLnNldChcbiAgICBcInJvdzNcIixcbiAgICBjcmVhdGVLZXlzKFtcbiAgICAgIFwiQ2FwcyBMb2NrXCIsXG4gICAgICBbXCJhXCIsIFwi0YRcIl0sXG4gICAgICBbXCJzXCIsIFwi0YtcIl0sXG4gICAgICBbXCJkXCIsIFwi0LJcIl0sXG4gICAgICBbXCJmXCIsIFwi0LBcIl0sXG4gICAgICBbXCJnXCIsIFwi0L9cIl0sXG4gICAgICBbXCJoXCIsIFwi0YBcIl0sXG4gICAgICBbXCJqXCIsIFwi0L5cIl0sXG4gICAgICBbXCJrXCIsIFwi0LtcIl0sXG4gICAgICBbXCJsXCIsIFwi0LRcIl0sXG4gICAgICBbXCI7XCIsIFwi0LZcIl0sXG4gICAgICBbXCInXCIsIFwi0Y1cIl0sXG4gICAgICBcIkVudGVyXCIsXG4gICAgXSlcbiAgKTtcbiAgbWFwLnNldChcbiAgICBcInJvdzRcIixcbiAgICBjcmVhdGVLZXlzKFtcbiAgICAgIFwiU2hpZnRcIixcbiAgICAgIFwiL1wiLFxuICAgICAgW1wielwiLCBcItGPXCJdLFxuICAgICAgW1wieFwiLCBcItGHXCJdLFxuICAgICAgW1wiY1wiLCBcItGBXCJdLFxuICAgICAgW1widlwiLCBcItC8XCJdLFxuICAgICAgW1wiYlwiLCBcItC4XCJdLFxuICAgICAgW1wiblwiLCBcItGCXCJdLFxuICAgICAgW1wibVwiLCBcItGMXCJdLFxuICAgICAgW1wiLlwiLCBcItCxXCJdLFxuICAgICAgW1wiLFwiLCBcItGOXCJdLFxuICAgICAgXCIvXCIsXG4gICAgICBcIlwiLFxuICAgICAgXCJTaGlmdFwiLFxuICAgIF0pXG4gICk7XG5cbiAgbWFwLnNldChcbiAgICBcInJvdzVcIixcbiAgICBjcmVhdGVLZXlzKFtcIkN0cmxcIiwgb2MsIFwiQWx0XCIsIFwiXCIsIFwiQWx0XCIsIFwiQ3RybFwiLCBcIlwiLCBcIlwiLCBcIlwiXSlcbiAgKTtcbn1cbmV4cG9ydCB7IGtleXNNYXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJyZXF1aXJlKCdub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MnKTtcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2NzcydcbmltcG9ydCAnLi9zY3JpcHQvcmVuZGVyJ1xuaW1wb3J0ICcuL3NjcmlwdC9pbnRlcmFjdGlvbiciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=