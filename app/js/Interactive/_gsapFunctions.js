import { disableScroll, enableScroll } from '../_enable-disable-scroll';
import isContains from '../_isContains';
import { body } from '../_queries';

export const gsapFunctions = {
  onStart: () => {
    if (!isContains(body, '--animation')) {
      body.classList.add('--animation');
      disableScroll();
    }
  },
  onComplete: () => {
    if (isContains(body, '--animation')) {
      body.classList.remove('--animation');
      enableScroll();
    }
  },
};
