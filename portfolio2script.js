const textElement = document.querySelector('.typing-effect');
const texts = ['Devanjan Chatterjee...!!!'];
const backspaceDelay = 1000; // Adjust the delay (in milliseconds) for backspacing

let index = 0;
let currentText = '';
let letterIndex = 0;
let direction = 1;

function type() {
  if (direction === 1) {
    currentText = texts[index].slice(0, letterIndex + 1);
    letterIndex++;
  } else {
    currentText = texts[index].slice(0, letterIndex);
    letterIndex--;
  }

  if (letterIndex === texts[index].length + 1) {
    direction = -1;
    setTimeout(type, backspaceDelay);
    return;
  } else if (letterIndex === 0) {
    direction = 1;
    index++;
    if (index === texts.length) {
      index = 0;
    }
  }

  setTimeout(type, 100);
  textElement.textContent = currentText;
}

type();
