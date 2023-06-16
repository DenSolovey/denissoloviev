import { body, menu, menu_button } from '../../_queries';

export default function openMenu(contains) {
  if (!contains) {
    body.classList.add('--noScroll');
    menu_button.classList.add('--close');
    menu.classList.add('--open');
  }
}
