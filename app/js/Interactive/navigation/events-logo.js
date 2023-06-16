import { gsap } from "gsap";
import { logo, menu_button } from "../../_queries";
import closeMenu from "../menu/_closeMenu";
import isContains from "../../_isContains";
import {gsapFunctions} from "../_gsapFunctions";

export default function eventsLogo() {
  logo.addEventListener('click', (e) => {
    if (e) e.preventDefault();

    closeMenu(isContains(menu_button, '--close'));
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: 'power2.inOut',
      ...gsapFunctions,
    });
  });

}