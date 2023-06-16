import isMobile from "./_isMobile";

export default   function setEase() {
  if (isMobile()) return '';

  return 'power2.inOut';
}