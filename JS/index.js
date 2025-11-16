const wordEl = document.getElementById('animated-word');
const fullText = 'changes life.';
const keepLetters = 1; // "c" hərfi qalacaq
let index = fullText.length;

function eraseLife() {
  if (index > 'changes'.length) {
    index--;
    wordEl.textContent = fullText.slice(0, index);
    setTimeout(eraseLife, 100);
  } else {
    setTimeout(eraseChanges, 500);
  }
}

function eraseChanges() {
  if (index > keepLetters) {
    index--;
    wordEl.textContent = fullText.slice(0, index);
    setTimeout(eraseChanges, 150);
  } else {
    setTimeout(typeText, 500);
  }
}

function typeText() {
  if (index < fullText.length) {
    index++;
    wordEl.textContent = fullText.slice(0, index);
    setTimeout(typeText, 150);
  } else {
    setTimeout(eraseLife, 2000);
  }
}

// start animation
typeText();
