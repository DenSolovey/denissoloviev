import { ScrollTrigger } from "gsap/all";
import { menu_navigation_buttons, navigation_effects } from "../_queries";


export default function triggerNavigationButtons() {
  const effects = [...menu_navigation_buttons, ...navigation_effects];

  effects.forEach((effect) => {
    const id = effect.hash;
    const section = document.querySelector(id);

    ScrollTrigger.create({
      trigger: section,
      start: 'top 10px',
      end: 'bottom 10px',
      invalidateOnRefresh: true,
      toggleClass: { targets: effect, className: '--active' },
    });
  });
}