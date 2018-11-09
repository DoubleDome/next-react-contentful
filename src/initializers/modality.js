import { document, window } from '../utils/browser';

// https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2

function handleFirstTab(e) {
  // TAB key
  if (e.keyCode === 9) {
    document.body.classList.add('modality-keyboard');
    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
}

function handleMouseDownOnce() {
  document.body.classList.remove('modality-keyboard');
  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
}

window.addEventListener('keydown', handleFirstTab);
