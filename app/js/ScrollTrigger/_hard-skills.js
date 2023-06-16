import { gsap } from "gsap";
import animateItems from "./_animateItems";
import { hardSkills } from "../_queries";

export default function triggerHardSkills() {
  for (const section of hardSkills) {
    const hardSkills_title = section.querySelector('.js-hard-skills-title');
    const hardSkills_list = section.querySelector('.js-hard-skills-list');
    const hardSkills_items = hardSkills_list.children;

    gsap.fromTo(
      hardSkills_title,
      {
        opacity: 0,
        y: 40,
      },
      {
        scrollTrigger: {
          invalidateOnRefresh: true,
          trigger: section,
          start: '2vh center',
          end: '100px center',
          scrub: true,
          markers: true
        },
        opacity: 1,
        y: 0,
      }
    );
    
    animateItems(hardSkills_items, section);
  }
}