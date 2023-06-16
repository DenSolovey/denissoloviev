import { gsap } from "gsap";

export default function animateItems(items, trigger) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const number = i + 1;

    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          invalidateOnRefresh: true,
          trigger: trigger,
          start: 20 + item.offsetHeight * number + 'px center',
          end: 20 + item.offsetHeight + item.offsetHeight * number + 'px center',
          scrub: true,
          markers: true,
        },
        opacity: 1,
        y: 0,
      }
    );
  }
}
