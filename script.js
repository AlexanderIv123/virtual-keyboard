const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.setAttribute('autofocus', 'enable');
document.body.append(textarea);

const keyBoard = document.createElement('div');
keyBoard.classList.add('keyboard');
document.body.append(keyBoard);

const keySymbols = [['~', '`'], ['!', '1'], ['@', '2'], ['#', '3'], ['$', '4'], ['%', '5'], ['^', '6'],
  ['&', '7'], ['*', '8'], ['(', '9'], [')', '0'], ['_', '-'], ['+', '='], 'delete', 'tab', 'Q', 'W', 'E',
  'R', 'T', 'Y', 'U', 'I', 'O', 'P', ['{', '['], ['}', ']'], ['|', '\\'], 'caps lock', 'A', 'S', 'D', 'F',
  'G', 'H', 'J', 'K', 'L', [':', ';'], ['"', '\''], 'return', 'shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M',
  ['<', ','], ['>', '.'], ['?', '/'], 'shift', 'fn', 'control', 'option', 'command', 'space', 'command',
  'option', 'left', 'up', 'down', 'right'];

const enterSymbols = [
  ['~', '`'], ['!', '1'], ['@', '2'], ['#', '3'], ['$', '4'], ['%', '5'], ['^', '6'], ['&', '7'],
  ['*', '8'], ['(', '9'], [')', '0'], ['_', '-'], ['+', '='], 'Backspace', 'Tab', ['Q', 'q'],
  ['W', 'w'], ['E', 'e'], ['R', 'r'], ['T', 't'], ['Y', 'y'], ['U', 'u'], ['I', 'i'], ['O', 'o'],
  ['P', 'p'], ['{', '['], ['}', ']'], ['|', '\\'], 'CapsLock', ['A', 'a'], ['S', 's'], ['D', 'd'],
  ['F', 'f'], ['G', 'g'], ['H', 'h'], ['J', 'j'], ['K', 'k'], ['L', 'l'], [':', ';'], ['"', "'"],
  'Enter', 'Shift', ['Z', 'z'], ['X', 'x'], ['C', 'c'], ['V', 'v'], ['B', 'b'], ['N', 'n'],
  ['M', 'm'], ['<', ','], ['>', '.'], ['?', '/'], 'Shift', 'fn', 'Control', 'Alt', 'Meta', ' ', 'Meta', 'Alt', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

textarea.addEventListener('keydown', (event) => {
  if (event.getModifierState('CapsLock')) {
    console.log('2');
  }
});

const enterFunc = (keySymbl, enterSymbl) => {
  for (let i = 0; i < keySymbl.length; i += 1) {
    const button = document.createElement('button');
    button.classList.add('button');
    keyBoard.append(button);
    if (typeof (keySymbl[i]) === 'string') {
      button.innerHTML = keySymbl[i];
    }
    if (Array.isArray(keySymbl[i])) {
      button.innerHTML = (`${keySymbl[i][0]}<br>${keySymbl[i][1]}`);
    }
    button.addEventListener('click', () => {
      this.button = button;
      if (Array.isArray(enterSymbl[i]) && !document.querySelector('.caps_active') && !document.querySelector('.shift_active')) {
        textarea.value += enterSymbl[i][1];
        this.button.classList.add('press_button');
        setTimeout(() => {
          button.classList.remove('press_button');
        }, 200);
      }
      if (Array.isArray(enterSymbl[i]) && document.querySelector('.shift_active')) {
        textarea.value += enterSymbl[i][0];
        this.button.classList.add('press_button');
        setTimeout(() => {
          button.classList.remove('press_button');
        }, 200);
      }
      if (Array.isArray(enterSymbl[i]) && (document.querySelector('.caps_active')) && !document.querySelector('.shift_active')) {
        if (enterSymbl[i][1] === '1' || enterSymbl[i][1] === '2' || enterSymbl[i][1] === '3'
               || enterSymbl[i][1] === '4' || enterSymbl[i][1] === '5' || enterSymbl[i][1] === '6'
               || enterSymbl[i][1] === '6' || enterSymbl[i][1] === '7' || enterSymbl[i][1] === '8'
               || enterSymbl[i][1] === '9' || enterSymbl[i][1] === '0' || enterSymbl[i][1] === '`'
               || enterSymbl[i][1] === '-' || enterSymbl[i][1] === '=' || enterSymbl[i][1] === '['
               || enterSymbl[i][1] === ']' || enterSymbl[i][1] === '\\' || enterSymbl[i][1] === ';'
               || enterSymbl[i][1] === "'" || enterSymbl[i][1] === ',' || enterSymbl[i][1] === '.' || enterSymbl[i][1] === '/'
        ) {
          textarea.value += enterSymbl[i][1];
          this.button.classList.add('press_button');
          setTimeout(() => {
            button.classList.remove('press_button');
          }, 200);
        } else {
          textarea.value += enterSymbl[i][0];
          this.button.classList.add('press_button');
          setTimeout(() => {
            button.classList.remove('press_button');
          }, 200);
        }
      } else {
        if (enterSymbl[i] === ' ') {
          textarea.value += ' ';
          this.button.classList.add('press_button');
          setTimeout(() => {
            button.classList.remove('press_button');
          }, 200);
        }
        if (enterSymbl[i] === 'Tab') {
          textarea.value += '    ';
          this.button.classList.add('press_button');
          setTimeout(() => {
            button.classList.remove('press_button');
          }, 200);
        }
        if (enterSymbl[i] === 'CapsLock') {
          button.classList.toggle('caps_active');
        }
        if (enterSymbl[i] === 'Backspace') {
          textarea.value = textarea.value.slice(0, textarea.value.length - 1);
          this.button.classList.add('press_button');
          setTimeout(() => {
            button.classList.remove('press_button');
          }, 200);
        }
        if (enterSymbl[i] === 'Shift') {
          button.classList.toggle('shift_active');
        }
        if (enterSymbl[i] === 'Enter') {
          textarea.value = `${textarea.value}\n`;
          this.button.classList.add('press_button');
          setTimeout(() => {
            button.classList.remove('press_button');
          }, 200);
        }
        if (enterSymbl[i] === 'ArrowLeft' || enterSymbl[i] === 'ArrowUp' || enterSymbl[i] === 'ArrowDown'
          || enterSymbl[i] === 'ArrowRight' || enterSymbl[i] === 'Meta' || enterSymbl[i] === 'Alt'
          || enterSymbl[i] === 'Control') {
          this.button.classList.add('press_button');
          setTimeout(() => {
            button.classList.remove('press_button');
          }, 200);
        }
      }
      textarea.focus();
    });

    textarea.addEventListener('keydown', (event) => {
      this.button = button;
      if ((event.key === enterSymbl[i][0] && Array.isArray(enterSymbl[i]))
        || (event.key === enterSymbl[i][1] && Array.isArray(enterSymbl[i]))
        || (event.key === enterSymbl[i] && !Array.isArray(enterSymbl[i]))) {
        this.button.classList.add('press_button');
        setTimeout(() => {
          button.classList.remove('press_button');
        }, 200);
      }
    });
  }
};

enterFunc(keySymbols, enterSymbols);
