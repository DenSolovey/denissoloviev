import { gsap } from "gsap";
import { othersSkills, othersSkills_list, othersSkills_title } from "../_queries";
import animateItems from "./_animateItems";

export default function triggerOthersSkills() {
  const othersSkills_list_items = othersSkills_list.children;

  gsap.fromTo(
    othersSkills_title,
    {
      opacity: 0,
      y: 40,
    },
    {
      scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: othersSkills,
        start: '2vh center',
        end: '100px center',
        scrub: true,
        markers: true
      },
      opacity: 1,
      y: 0,
    }
  );
  
  animateItems(othersSkills_list_items, othersSkills);
}