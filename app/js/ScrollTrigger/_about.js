import { gsap } from "gsap";
import { about, about_text, about_title } from "../_queries";

export default function triggerAbout() {
  gsap.set(about_title, {
    opacity: 0,
    y: 20,
  });
  gsap.fromTo(
    about_title,
    {
      opacity: 0,
      y: 20,
    },
    {
      scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: about,
        start: () => about.offsetHeight * 0.8 + 'px bottom',
        end: () => about.offsetHeight * 0.9 + 'px bottom',
        scrub: true,
      },
      opacity: 1,
      y: 0,
    }
  );
  gsap.set(about_text, {
    opacity: 0,
    y: 20,
  });
  gsap.fromTo(
    about_text,
    {
      opacity: 0,
      y: 20,
    },
    {
      scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: about,
        start: () => about.offsetHeight * 0.9 + 'px bottom',
        end: 'bottom bottom',
        scrub: true,
      },

      duration: 1,
      ease: 'none',
      opacity: 1,
      y: 0,
    }
  );
}