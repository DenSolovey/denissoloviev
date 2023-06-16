import getHash from "../../_getHash";
import isContains from "../../_isContains";
import { all_navigation_buttons, menu_button } from "../../_queries";
import closeMenu from "../menu/_closeMenu";
import scrollToHash from "./_scrollToHash";

export default function eventsNavButtons() {
  all_navigation_buttons.forEach((a) => {
    a.addEventListener('click', (e) => {
      closeMenu(isContains(menu_button, '--close'));
      scrollToHash(getHash(a), e);
    });
  });
}