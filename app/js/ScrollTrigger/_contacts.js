import { gsap } from 'gsap';
import { contacts, contacts_title, footer } from '../_queries';

export default function triggerContacts() {
  if (footer.style.display != 'none'){
  gsap.set(contacts_title, {
    opacity: 0,
    y: 40,
  });
  gsap.fromTo(
    contacts_title,
    {
      opacity: 0,
      y: 40,
    },
    {
      scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: contacts,
        start: () => contacts.offsetHeight * 0.8 + 'px bottom',
        end: () => contacts.offsetHeight * 0.9 + 'px bottom',
        scrub: 1.2,
      },
      ease: 'none',
      opacity: 1,
      y: 0,
    }
  );
}
  // gsap.fromTo(
  //   contacts_number,
  //   {
  //     opacity: 0,
  //     y: 20,
  //   },
  //   {
  //     scrollTrigger: {
  //       invalidateOnRefresh: true,
  //       trigger: contacts,
  //       start: contacts.offsetHeight * 0.7 + 'px bottom',
  //       end: 'bottom bottom',
  //       scrub: true,
  //     },

  //     opacity: 1,
  //     y: 0,
  //   }
  // );

  // gsap.fromTo(
  //   contacts_email,
  //   {
  //     opacity: 0,
  //     y: 30,
  //   },
  //   {
  //     scrollTrigger: {
  //       invalidateOnRefresh: true,
  //       trigger: contacts,
  //       start: contacts.offsetHeight * 0.9 + 'px bottom',
  //       end: 'bottom bottom',
  //       scrub: true,
  //     },

  //     opacity: 1,
  //     y: 0,
  //   }
  // );
}
