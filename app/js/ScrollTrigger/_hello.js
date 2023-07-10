import { ScrollTrigger } from "gsap/all";
import { disableScroll, enableScroll } from "../_enable-disable-scroll";
import isContains from "../_isContains";
import isMobile from "../_isMobile";
import { about, body, hello_screen } from "../_queries";
import { gsap } from "gsap";
import setEase from "../_setEase";

export default function triggerHelloScreen() {
  const gsapFunctionsForSlides = {
    onStart: () => {
      if (!isContains(body, '--animation')) {
        if (isMobile()) body.style.overflowY = 'hidden';
        body.classList.add('--animation');
        disableScroll();
      }
    },
    onComplete: () => {
      if (isContains(body, '--animation')) {
        if (isMobile()) body.style.overflowY = 'auto';
        body.classList.remove('--animation');
        enableScroll();
      }
    },
  };

  ScrollTrigger.create({
    invalidateOnRefresh: true,
    trigger: hello_screen,
    start: '1px top',
    end: 'bottom top',
    onEnter: () => {
      if (!isContains(body, '--animation'))
        gsap.to(window, {
          duration: 1,
          scrollTo: about,
          ...gsapFunctionsForSlides,
          ease: setEase(),
          immediateRender: true,
        });
    },
  });

  ScrollTrigger.create({
    invalidateOnRefresh: true,
    trigger: hello_screen,
    start: () => hello_screen.offsetHeight - 10 + 'px top',
    end: 'top top',
    onEnterBack: () => {
      if (!isContains(body, '--animation'))
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: 0 },
          ...gsapFunctionsForSlides,
          ease: setEase(),
          immediateRender: true,
        });
    },
  });
}