import isContains from "../../_isContains";
import { menu_blackout, menu_button } from "../../_queries";
import closeMenu from "./_closeMenu";
import openMenu from "./_openMenu";

export default function eventsMenu() {
  menu_blackout.addEventListener('click', () => closeMenu(isContains(menu_button, '--close')));

  menu_button.addEventListener('click', () => {
    const contains = isContains(menu_button, '--close');

    openMenu(contains);
    closeMenu(contains);
  });
}