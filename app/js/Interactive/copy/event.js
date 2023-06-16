import isContains from '../../_isContains';
import { copyButtons, statuses } from '../../_queries';
import copy from './_copy';

export default function eventCopyButton() {
  copyButtons.forEach((btn) => {
    const parent = btn.parentElement;
    const email = parent.querySelector('.js-email');

    copy(email.textContent);

    btn.onclick = () => {
      statuses.forEach(status => {
        if (!isContains(status ,'--active')) {
          status.classList.add('--active');
          setTimeout(() => status.classList.remove('--active'), 1300);
        }
      })
      document.execCommand('copy');
    };
  });
}
