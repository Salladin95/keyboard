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
