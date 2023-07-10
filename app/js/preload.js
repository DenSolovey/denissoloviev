//// ================================ Imports ======================================
import '../scss/preload.scss';
let ProgressBar = require('progressbar.js');

//// ================================ Code ======================================
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

let bar = new ProgressBar.Line('.b-progressbar');
bar.animate(1);