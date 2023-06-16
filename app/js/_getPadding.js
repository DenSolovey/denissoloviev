export default function getPadding(elem, str) {
  return parseInt(window.getComputedStyle(elem, null).getPropertyValue(str));
}
