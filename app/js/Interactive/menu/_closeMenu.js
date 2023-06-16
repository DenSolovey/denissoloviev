import { body, menu, menu_button } from '../../_queries';

export default function closeMenu(contains) {
  if (contains) {
    menu_button.classList.remove('--close');
    menu.classList.remove('--open');
    setTimeout(() => body.classList.remove('--noScroll'));
  }
}
