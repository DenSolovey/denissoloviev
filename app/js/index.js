//// ================================ Imports ======================================
//scss
import '../scss/index.scss';

//js
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { body, contacts, hello_screen, menu, onload } from './_queries';
import triggerHeader from './ScrollTrigger/_header';
import triggerFooter from './ScrollTrigger/_footer';
import triggerNavigationButtons from './ScrollTrigger/_navigation-buttons';
import triggerHelloScreen from './ScrollTrigger/_hello';
import triggerAbout from './ScrollTrigger/_about';
// import triggerOthersSkills from './ScrollTrigger/_others-skills';
import triggerContacts from './ScrollTrigger/_contacts';
// import triggerHardSkills from './ScrollTrigger/_hard-skills';
import eventsLogo from './Interactive/navigation/events-logo';
import eventsNavButtons from './Interactive/navigation/events-buttons';
import eventsMenu from './Interactive/menu/events';
// import triggerSoftSkills from './ScrollTrigger/_softt-skills';
import navScrollbar from './Interactive/navigation/navScrollBar';
import eventCopyButton from './Interactive/copy/event';
import followCursor from './Interactive/status/_followCursor';
import isMobile from './_isMobile';

let ProgressBar = require('progressbar.js');

//// ================================ Code ======================================
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.onload = () => {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);

  resizeOnMobile();
  dynamycResizeOnMobile();

  onload.classList.add('--done');
  
  setTimeout(() => {
    onload.style.transition = 'none';
    body.classList.remove('--noScroll');
  }, 2500);

  let bar = new ProgressBar.Line('.b-progressbar');
  bar.animate(1);

  triggerHeader();
  triggerFooter();
  triggerNavigationButtons();
  triggerHelloScreen();
  triggerAbout();
  // triggerSoftSkills();
  // triggerOthersSkills();
  triggerContacts();
  // triggerHardSkills();

  eventsLogo();
  eventsNavButtons();
  eventsMenu();
  eventCopyButton();

  navScrollbar();

  followCursor();

  window.onresize = () => {
    ScrollTrigger.refresh();
    dynamycResizeOnMobile();
  };

  function dynamycResizeOnMobile() {
    if (isMobile()) {
      contacts.style.height = window.innerHeight + 'px';
      menu.style.height = window.innerHeight + 'px';
    }
  }

  function resizeOnMobile() {
    if (isMobile()) {
      const diff = window.screen.height - window.innerHeight;
      // const hello_screen_title_container = document.querySelector('.js-hello-title-container');

      hello_screen.style.height = window.screen.height - diff + 'px';
      // hello_screen_title_container.style.height = window.screen.height - diff + 'px';
      // about.style.height = window.screen.height + 'px';
    }
  }
};
