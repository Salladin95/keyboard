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

export {
  setAtrsforKeys,
  rmTxt,
  toggleLanguage,
  checkActive,
  toggleActive,
  getLowerCase,
  getUpperCase,
  createEl,
  createKeys,
  fillKeys,
  isMacintosh,
};
