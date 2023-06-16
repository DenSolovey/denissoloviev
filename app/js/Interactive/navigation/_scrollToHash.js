import { gsap } from "gsap";
import {gsapFunctions} from "../_gsapFunctions";

export default function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if (elem) {
    if (e) e.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: elem.offsetTop },
      ease: 'power2.inOut',
      ...gsapFunctions,
    });
  }
}
