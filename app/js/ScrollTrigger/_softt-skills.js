import { gsap } from 'gsap';
import { softSkills, softSkills_image } from '../_queries';

export default function triggerSoftSkills() {
  gsap.set(softSkills_image, {
    y: 100,
  });
  gsap.fromTo(
    softSkills_image,
    {
      y: 100,
    },
    {
      scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: softSkills,
        start: 'top center',
        end: 'bottom center',
        scrub: 0.5,
      },
      ease: 'none',
      y: 0,
    }
  );
}
