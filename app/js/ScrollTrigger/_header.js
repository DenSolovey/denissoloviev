import { ScrollTrigger } from "gsap/all";
import { about, body, header_bg } from "../_queries";

export default function triggerHeader() {
  ScrollTrigger.create({
    invalidateOnRefresh: true,
    trigger: about,
    start: 'top top',
    end: () => body.offsetHeight + 100 + 'px top',
    toggleClass: { targets: header_bg, className: '--onScroll' },
  });
}