import { ScrollTrigger } from 'gsap/all';
import { about, contacts, footer, footer_bg, footer_messengers, footer_socials } from '../_queries';
import { gsap } from 'gsap';
import getPadding from '../_getPadding';

export default function triggerFooter() {
  ScrollTrigger.create({
    invalidateOnRefresh: true,
    trigger: about,
    start: () => footer.clientHeight + 100 + 'px bottom',
    end: () => contacts.offsetTop - 500 + 'px bottom',
    toggleClass: { targets: footer_bg, className: '--onScroll' },
  });

  gsap.to(footer_socials, {
    scrollTrigger: {
      trigger: contacts,
      start: 'top 80%',
      end: 'top top',
      scrub: true,
      invalidateOnRefresh: true,
    },
    x: () => footer_messengers.offsetLeft - getPadding(footer, 'padding-left') - footer_socials.clientWidth + footer_messengers.clientWidth,
    y: () => -footer_messengers.clientHeight,
    ease: 'none',
    duration: 3,
  });

  gsap.to(footer, {
    scrollTrigger: {
      trigger: contacts,
      start: 'top 80%',
      end: 'top top',
      scrub: true,
      invalidateOnRefresh: true,
      onEnter: () => (footer.style.pointerEvents = 'none'),
    },
    y: () => -getPadding(contacts, 'padding-bottom') - 6,
    ease: 'none',
    duration: 3,
  });
}
